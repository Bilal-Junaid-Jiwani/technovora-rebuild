"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Copy, Pencil } from "lucide-react";
import { packages as copy } from "@/lib/i18n/en/packages";
import { cn } from "@/lib/utils";

const SALES_EMAIL = "sales@technovora.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ServiceKey = "ai" | "web" | "mobile" | "cloud" | "design" | "smm";

interface QuestionDef {
  id: string;
  titleKey: string;
  optionKeys: string[];
}

/** Build a service's question list from per-question option counts. */
function makeQuestions(
  prefix: string,
  optionCounts: number[],
): QuestionDef[] {
  return optionCounts.map((count, i) => ({
    id: `${prefix}-q${i + 1}`,
    titleKey: `packages.quiz.${prefix}.q${i + 1}.title`,
    optionKeys: Array.from(
      { length: count },
      (_, j) => `packages.quiz.${prefix}.q${i + 1}.o${j + 1}`,
    ),
  }));
}

const SERVICE_ORDER: { key: ServiceKey; labelKey: string }[] = [
  { key: "ai", labelKey: "packages.quiz.service.ai" },
  { key: "web", labelKey: "packages.quiz.service.web" },
  { key: "mobile", labelKey: "packages.quiz.service.mobile" },
  { key: "cloud", labelKey: "packages.quiz.service.cloud" },
  { key: "design", labelKey: "packages.quiz.service.design" },
  { key: "smm", labelKey: "packages.quiz.service.smm" },
];

const SERVICE_QUESTION: QuestionDef = {
  id: "service",
  titleKey: "packages.quiz.service.title",
  optionKeys: SERVICE_ORDER.map((s) => s.labelKey),
};

const TIMELINE_QUESTION: QuestionDef = {
  id: "timeline",
  titleKey: "packages.quiz.timeline.title",
  optionKeys: [
    "packages.quiz.timeline.o1",
    "packages.quiz.timeline.o2",
    "packages.quiz.timeline.o3",
  ],
};

/**
 * Per-service question banks: 6–9 targeted questions each.
 * ai: 7 · web: 9 · mobile: 7 · cloud: 7 · design: 6 · smm: 6
 */
const SERVICE_QUESTIONS: Record<ServiceKey, QuestionDef[]> = {
  ai: makeQuestions("ai", [6, 6, 5, 4, 5, 4, 5]),
  web: makeQuestions("web", [5, 6, 4, 3, 4, 3, 3, 6, 3]),
  mobile: makeQuestions("mobile", [3, 6, 7, 3, 3, 3, 3]),
  cloud: makeQuestions("cloud", [6, 6, 4, 3, 3, 5, 4]),
  design: makeQuestions("design", [5, 5, 3, 5, 3, 4]),
  smm: makeQuestions("smm", [6, 5, 4, 3, 3, 3]),
};

type Stage =
  | { kind: "question"; question: QuestionDef }
  | { kind: "contact" }
  | { kind: "review" };

type Phase = "quiz" | "confirm" | "done";

/**
 * EstimationQuiz — deep service-specific estimation questionnaire.
 *
 * Step 1 offers all six services; the quiz then branches into 6–9
 * service-specific questions, followed by common timeline, contact-details,
 * and review stages. Submitting opens the visitor's mail app with a
 * prefilled mailto to sales@technovora.com AND shows a copy-to-clipboard
 * fallback carrying the full request text before the success state.
 * No prices anywhere: the scoped estimation is delivered by email.
 */
export function EstimationQuiz() {
  const [service, setService] = useState<ServiceKey | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [stageIndex, setStageIndex] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [phase, setPhase] = useState<Phase>("quiz");
  const [copied, setCopied] = useState(false);

  const stages: Stage[] = useMemo(() => {
    const questions = service
      ? [SERVICE_QUESTION, ...SERVICE_QUESTIONS[service], TIMELINE_QUESTION]
      : [SERVICE_QUESTION];
    return [
      ...questions.map(
        (question): Stage => ({ kind: "question", question }),
      ),
      { kind: "contact" } as Stage,
      { kind: "review" } as Stage,
    ];
  }, [service]);

  // Keep the stage index valid when the branch changes the stage count.
  useEffect(() => {
    setStageIndex((i) => Math.min(i, stages.length - 1));
  }, [stages.length]);

  const stage = stages[stageIndex];
  const totalStages = stages.length;
  const questionStages = stages.filter(
    (s): s is { kind: "question"; question: QuestionDef } =>
      s.kind === "question",
  );
  const contactStageIndex = stages.findIndex((s) => s.kind === "contact");

  const headingRef = useRef<HTMLHeadingElement>(null);
  const mountedRef = useRef(false);
  // Move focus to the step heading on step changes (screen readers +
  // keyboard) — but never on the initial mount, so no focus-ring box
  // renders around the question on page load.
  useEffect(() => {
    if (mountedRef.current) {
      headingRef.current?.focus();
    } else {
      mountedRef.current = true;
    }
  }, [stageIndex, phase]);

  const selectOption = (questionId: string, optionKey: string) => {
    if (questionId === SERVICE_QUESTION.id) {
      const next =
        SERVICE_ORDER.find((s) => s.labelKey === optionKey)?.key ?? null;
      if (next !== service) {
        setService(next);
        // Branch changed: drop answers that belong to the old branch.
        setAnswers((prev) => {
          const keep = new Set<string>([
            SERVICE_QUESTION.id,
            TIMELINE_QUESTION.id,
          ]);
          if (next) {
            for (const q of SERVICE_QUESTIONS[next]) keep.add(q.id);
          }
          return Object.fromEntries(
            Object.entries(prev).filter(([k]) => keep.has(k)),
          );
        });
      }
    }
    setAnswers((prev) => ({ ...prev, [questionId]: optionKey }));
  };

  const goNext = () => {
    if (stage.kind === "contact") {
      const nameOk = name.trim().length > 0;
      const emailOk = EMAIL_RE.test(email.trim());
      setNameError(nameOk ? null : copy["packages.quiz.form.nameInvalid"]);
      setEmailError(
        emailOk ? null : copy["packages.quiz.form.emailInvalid"],
      );
      if (!nameOk || !emailOk) return;
    }
    if (stageIndex < stages.length - 1) setStageIndex(stageIndex + 1);
  };

  const goBack = () => {
    if (stageIndex > 0) setStageIndex(stageIndex - 1);
  };

  const requestText = useMemo(() => {
    const lines = questionStages.map((s) => {
      const answerKey = answers[s.question.id];
      return `${copy[s.question.titleKey]}\n${answerKey ? copy[answerKey] : "—"}`;
    });
    return (
      `${copy["packages.quiz.mailto.name"]}: ${name.trim()}\n` +
      `${copy["packages.quiz.mailto.email"]}: ${email.trim()}\n\n` +
      lines.join("\n\n")
    );
  }, [questionStages, answers, name, email]);

  const handleSubmit = () => {
    const subject = encodeURIComponent(copy["packages.quiz.mailto.subject"]);
    const body = encodeURIComponent(requestText);
    // Open the visitor's mail app with the request prefilled…
    window.location.href = `mailto:${SALES_EMAIL}?subject=${subject}&body=${body}`;
    // …and offer a copy-to-clipboard fallback before the success state.
    setPhase("confirm");
  };

  const progress = ((stageIndex + 1) / totalStages) * 100;
  const progressLabel = `${copy["packages.quiz.progress.step"]} ${stageIndex + 1} ${copy["packages.quiz.progress.of"]} ${totalStages}`;

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-4">{copy["packages.hero.eyebrow"]}</p>
        <h1 className="h2 text-4xl text-foreground md:text-5xl">
          {copy["packages.hero.title"]}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {copy["packages.hero.sub"]}
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-2xl">
        <div className="rounded-3xl border border-hairline bg-surface p-6 shadow-sm md:p-10">
          {phase === "done" ? (
            <SuccessState />
          ) : phase === "confirm" ? (
            <ConfirmSendState
              requestText={requestText}
              copied={copied}
              onCopy={async () => {
                try {
                  await navigator.clipboard.writeText(requestText);
                } catch {
                  /* clipboard unavailable — user can select the text manually */
                }
                setCopied(true);
              }}
              onDone={() => setPhase("done")}
              headingRef={headingRef}
            />
          ) : (
            <>
              {/* Progress — one unified "Step X of Y" scheme */}
              <div className="mb-8">
                <div className="mb-3 flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">
                    {stage.kind === "review"
                      ? `${copy["packages.quiz.progress.review"]} · ${progressLabel}`
                      : progressLabel}
                  </span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={stageIndex + 1}
                  aria-valuemin={1}
                  aria-valuemax={totalStages}
                  aria-label={progressLabel}
                  className="h-1 overflow-hidden rounded-full bg-hairline"
                >
                  <div
                    className="h-full rounded-full bg-accent transition-[width] duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {stage.kind === "question" && (
                <StepQuestion
                  question={stage.question}
                  stepNumber={stageIndex + 1}
                  headingRef={headingRef}
                  selected={answers[stage.question.id] ?? null}
                  onSelect={(optionKey) =>
                    selectOption(stage.question.id, optionKey)
                  }
                />
              )}

              {stage.kind === "contact" && (
                <ContactStep
                  headingRef={headingRef}
                  name={name}
                  email={email}
                  nameError={nameError}
                  emailError={emailError}
                  onNameChange={(v) => {
                    setName(v);
                    if (nameError) setNameError(null);
                  }}
                  onEmailChange={(v) => {
                    setEmail(v);
                    if (emailError) setEmailError(null);
                  }}
                />
              )}

              {stage.kind === "review" && (
                <ReviewScreen
                  questionStages={questionStages}
                  answers={answers}
                  name={name.trim()}
                  email={email.trim()}
                  headingRef={headingRef}
                  onEditQuestion={(questionId) => {
                    const i = stages.findIndex(
                      (s) =>
                        s.kind === "question" && s.question.id === questionId,
                    );
                    if (i >= 0) setStageIndex(i);
                  }}
                  onEditContact={() => setStageIndex(contactStageIndex)}
                />
              )}

              {/* Navigation */}
              <div className="mt-8 flex items-center justify-between gap-4">
                {stageIndex > 0 ? (
                  <button
                    type="button"
                    onClick={goBack}
                    className="btn-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden />
                    {copy["packages.quiz.back"]}
                  </button>
                ) : (
                  <span aria-hidden />
                )}
                {stage.kind === "review" ? (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {copy["packages.quiz.form.submit"]}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={goNext}
                    disabled={
                      stage.kind === "question" &&
                      answers[stage.question.id] == null
                    }
                    className="btn-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {copy["packages.quiz.continue"]}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function StepQuestion({
  question,
  stepNumber,
  headingRef,
  selected,
  onSelect,
}: {
  question: QuestionDef;
  stepNumber: number;
  headingRef: React.Ref<HTMLHeadingElement>;
  selected: string | null;
  onSelect: (optionKey: string) => void;
}) {
  const groupName = `quiz-${question.id}`;

  return (
    <fieldset>
      <legend className="sr-only">
        {copy[question.titleKey]} ({stepNumber})
      </legend>
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="text-2xl font-semibold text-foreground focus:outline-none"
      >
        {copy[question.titleKey]}
      </h2>
      <div className="mt-6 grid gap-3">
        {question.optionKeys.map((optionKey) => {
          const checked = selected === optionKey;
          return (
            <label
              key={optionKey}
              className={cn(
                "group flex cursor-pointer items-center gap-4 rounded-2xl border px-5 py-4 transition-colors",
                checked
                  ? "border-accent bg-accent-soft"
                  : "border-hairline bg-background hover:border-muted",
              )}
            >
              <input
                type="radio"
                name={groupName}
                value={optionKey}
                checked={checked}
                onChange={() => onSelect(optionKey)}
                className="peer sr-only"
              />
              <span
                aria-hidden
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background",
                  checked
                    ? "border-accent bg-accent text-white"
                    : "border-muted text-transparent",
                )}
              >
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span
                className={cn(
                  "text-base",
                  checked
                    ? "font-medium text-foreground"
                    : "text-muted group-hover:text-foreground",
                )}
              >
                {copy[optionKey]}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

function ContactStep({
  headingRef,
  name,
  email,
  nameError,
  emailError,
  onNameChange,
  onEmailChange,
}: {
  headingRef: React.Ref<HTMLHeadingElement>;
  name: string;
  email: string;
  nameError: string | null;
  emailError: string | null;
  onNameChange: (v: string) => void;
  onEmailChange: (v: string) => void;
}) {
  return (
    <div>
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="text-2xl font-semibold text-foreground focus:outline-none"
      >
        {copy["packages.quiz.form.title"]}
      </h2>
      <div className="mt-6 grid gap-4">
        <div>
          <label
            htmlFor="quiz-name"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            {copy["packages.quiz.form.name"]}
          </label>
          <input
            id="quiz-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            placeholder={copy["packages.quiz.form.namePlaceholder"]}
            aria-invalid={nameError ? true : undefined}
            aria-describedby={nameError ? "quiz-name-error" : undefined}
            className="w-full rounded-xl border border-hairline bg-background px-4 py-3 text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
          />
          {nameError && (
            <p id="quiz-name-error" role="alert" className="mt-2 text-sm text-accent">
              {nameError}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="quiz-email"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            {copy["packages.quiz.form.email"]}
          </label>
          <input
            id="quiz-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            placeholder={copy["packages.quiz.form.emailPlaceholder"]}
            aria-invalid={emailError ? true : undefined}
            aria-describedby={emailError ? "quiz-email-error" : undefined}
            className="w-full rounded-xl border border-hairline bg-background px-4 py-3 text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
          />
          {emailError && (
            <p
              id="quiz-email-error"
              role="alert"
              className="mt-2 text-sm text-accent"
            >
              {emailError}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function ReviewScreen({
  questionStages,
  answers,
  name,
  email,
  headingRef,
  onEditQuestion,
  onEditContact,
}: {
  questionStages: { kind: "question"; question: QuestionDef }[];
  answers: Record<string, string>;
  name: string;
  email: string;
  headingRef: React.Ref<HTMLHeadingElement>;
  onEditQuestion: (questionId: string) => void;
  onEditContact: () => void;
}) {
  return (
    <div>
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="text-2xl font-semibold text-foreground focus:outline-none"
      >
        {copy["packages.quiz.review.title"]}
      </h2>
      <p className="mt-2 text-muted">{copy["packages.quiz.review.sub"]}</p>
      <ul className="mt-6 space-y-3">
        {questionStages.map(({ question }) => {
          const answerKey = answers[question.id];
          return (
            <li key={question.id}>
              <button
                type="button"
                onClick={() => onEditQuestion(question.id)}
                aria-label={`${copy["packages.quiz.review.edit"]}: ${copy[question.titleKey]}`}
                className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-hairline bg-background px-5 py-4 text-left transition-colors hover:border-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span>
                  <span className="block text-sm text-muted">
                    {copy[question.titleKey]}
                  </span>
                  <span className="mt-0.5 block font-medium text-foreground">
                    {answerKey ? copy[answerKey] : "—"}
                  </span>
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline text-muted transition-colors group-hover:border-accent group-hover:text-accent">
                  <Pencil className="h-4 w-4" aria-hidden />
                </span>
              </button>
            </li>
          );
        })}
        <li>
          <button
            type="button"
            onClick={onEditContact}
            aria-label={`${copy["packages.quiz.review.edit"]}: ${copy["packages.quiz.review.contactName"]}`}
            className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-hairline bg-background px-5 py-4 text-left transition-colors hover:border-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span>
              <span className="block text-sm text-muted">
                {copy["packages.quiz.review.contactName"]}
              </span>
              <span className="mt-0.5 block font-medium text-foreground">
                {name || "—"}
              </span>
            </span>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline text-muted transition-colors group-hover:border-accent group-hover:text-accent">
              <Pencil className="h-4 w-4" aria-hidden />
            </span>
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={onEditContact}
            aria-label={`${copy["packages.quiz.review.edit"]}: ${copy["packages.quiz.review.contactEmail"]}`}
            className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-hairline bg-background px-5 py-4 text-left transition-colors hover:border-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span>
              <span className="block text-sm text-muted">
                {copy["packages.quiz.review.contactEmail"]}
              </span>
              <span className="mt-0.5 block font-medium text-foreground">
                {email || "—"}
              </span>
            </span>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline text-muted transition-colors group-hover:border-accent group-hover:text-accent">
              <Pencil className="h-4 w-4" aria-hidden />
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
}

function ConfirmSendState({
  requestText,
  copied,
  onCopy,
  onDone,
  headingRef,
}: {
  requestText: string;
  copied: boolean;
  onCopy: () => void;
  onDone: () => void;
  headingRef: React.Ref<HTMLHeadingElement>;
}) {
  return (
    <div>
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="text-2xl font-semibold text-foreground focus:outline-none"
      >
        {copy["packages.quiz.confirm.title"]}
      </h2>
      <p className="mt-2 leading-relaxed text-muted">
        {copy["packages.quiz.confirm.desc"]}
      </p>
      <label
        htmlFor="quiz-request-text"
        className="mt-6 mb-2 block text-sm font-medium text-foreground"
      >
        {copy["packages.quiz.mailto.subject"]}
      </label>
      <textarea
        id="quiz-request-text"
        readOnly
        value={requestText}
        rows={10}
        className="w-full rounded-xl border border-hairline bg-background px-4 py-3 font-mono text-sm leading-relaxed text-foreground focus:border-accent focus:outline-none"
      />
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={onCopy}
          className="btn-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <Copy className="h-4 w-4" aria-hidden />
          {copied
            ? copy["packages.quiz.confirm.copied"]
            : copy["packages.quiz.confirm.copy"]}
        </button>
        <button
          type="button"
          onClick={onDone}
          className="btn-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {copy["packages.quiz.confirm.done"]}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}

function SuccessState() {
  return (
    <div className="py-6 text-center">
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft">
        <Check className="h-6 w-6 text-accent" aria-hidden />
      </span>
      <h2 className="mt-5 text-2xl font-semibold text-foreground">
        {copy["packages.quiz.success.title"]}
      </h2>
      <p className="mx-auto mt-3 max-w-md text-muted">
        {copy["packages.quiz.success.message"]}
      </p>
      <p className="mt-6 text-sm text-muted">
        {copy["packages.quiz.success.fallback"]}{" "}
        <a
          href={`mailto:${SALES_EMAIL}`}
          className="font-medium text-accent underline-offset-4 hover:underline"
        >
          {SALES_EMAIL}
        </a>
      </p>
      <p className="mx-auto mt-4 max-w-md text-sm font-medium text-foreground">
        {copy["packages.quiz.success.promise"]}
      </p>
    </div>
  );
}
