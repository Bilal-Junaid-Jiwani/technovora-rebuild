"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Globe, { type GlobeMethods } from "react-globe.gl";
import * as THREE from "three";
import { useTheme } from "@/components/layout/ThemeProvider";

export interface RealGlobeProps {
  size?: number;
  markers?: { lat: number; lng: number; name: string }[];
}

interface GeoFeature {
  type: string;
  properties: Record<string, unknown>;
  geometry: { type: string; coordinates: unknown };
}

const DEFAULT_MARKERS = [
  { lat: 1.3521, lng: 103.8198, name: "Singapore" },
  { lat: -6.2088, lng: 106.8456, name: "Indonesia" },
  { lat: 37.0902, lng: -95.7129, name: "USA" },
];

const PALETTE = {
  dark: {
    globeColor: "#0a0a0a",
    globeOpacity: 0.55,
    hexColor: "#f5f3f7",
    gridColor: "#ffffff",
    gridOpacity: 0.14,
    hexMargin: 0.7,
    atmosphereColor: "#a02077",
    ringColor: "160, 32, 119",
  },
  light: {
    globeColor: "#f6f3f8",
    globeOpacity: 0.92,
    hexColor: "#2d1040",
    gridColor: "#2d1040",
    gridOpacity: 0.24,
    hexMargin: 0.7,
    atmosphereColor: "#a02077",
    ringColor: "242, 134, 39",
  },
} as const;

export default function RealGlobe({ size = 580, markers = DEFAULT_MARKERS }: RealGlobeProps) {
  const globeEl = useRef<GlobeMethods | undefined>(undefined);
  const { theme } = useTheme();
  const [countries, setCountries] = useState<GeoFeature[]>([]);
  const colors = theme === "dark" ? PALETTE.dark : PALETTE.light;

  // three-globe draws its lat/long graticule as LineSegments with a hard-coded pale grey at 10%
  // opacity, which disappears on a light globe. Restyle it to match the theme.
  const styleGraticule = useCallback(() => {
    const scene = globeEl.current?.scene();
    if (!scene) return;
    scene.traverse((obj) => {
      const line = obj as THREE.LineSegments;
      const mat = line.material as THREE.LineBasicMaterial | undefined;
      if (line.isLineSegments && mat?.isLineBasicMaterial) {
        mat.color.set(colors.gridColor);
        mat.opacity = colors.gridOpacity;
        mat.needsUpdate = true;
      }
    });
  }, [colors.gridColor, colors.gridOpacity]);

  useEffect(() => {
    styleGraticule();
  }, [styleGraticule, countries]);

  useEffect(() => {
    fetch("/data/world.geojson")
      .then((res) => res.json())
      .then((data) => setCountries(data.features ?? []))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.6;
      globeEl.current.controls().enableZoom = false;
      globeEl.current.pointOfView({ altitude: 2.05 }, 0);
    }
  }, []);

  const globeMaterial = useMemo(
    () =>
      new THREE.MeshPhongMaterial({
        color: colors.globeColor,
        transparent: true,
        opacity: colors.globeOpacity,
        shininess: 3,
      }),
    [colors.globeColor, colors.globeOpacity]
  );

  return (
    <div style={{ width: size, height: size }} className="relative flex items-center justify-center cursor-move">
      <Globe
        ref={globeEl}
        width={size}
        height={size}
        backgroundColor="rgba(0,0,0,0)"
        globeMaterial={globeMaterial}
        showAtmosphere
        atmosphereColor={colors.atmosphereColor}
        atmosphereAltitude={0.24}
        showGraticules
        onGlobeReady={styleGraticule}
        hexPolygonsData={countries}
        hexPolygonResolution={3}
        hexPolygonMargin={colors.hexMargin}
        hexPolygonUseDots={true}
        hexPolygonColor={() => colors.hexColor}
        hexPolygonAltitude={0.006}
        pointsData={markers}
        pointLat={(d: object) => (d as { lat: number }).lat}
        pointLng={(d: object) => (d as { lng: number }).lng}
        pointColor={() => `rgb(${colors.ringColor})`}
        pointRadius={0.35}
        pointAltitude={0.01}
        pointLabel={(d: object) => (d as { name: string }).name}
        ringsData={markers}
        ringLat={(d: object) => (d as { lat: number }).lat}
        ringLng={(d: object) => (d as { lng: number }).lng}
        ringColor={() => (t: number) => `rgba(${colors.ringColor}, ${1 - t})`}
        ringMaxRadius={4.5}
        ringPropagationSpeed={2}
        ringRepeatPeriod={1800}
      />
    </div>
  );
}
