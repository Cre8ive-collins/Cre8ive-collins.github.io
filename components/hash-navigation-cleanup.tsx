"use client";

import { useEffect } from "react";

export function HashNavigationCleanup() {
  useEffect(() => {
    if (!window.location.hash) return;

    const sectionId = decodeURIComponent(window.location.hash.slice(1));
    const target = document.getElementById(sectionId);
    if (!target) return;

    const frame = window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "auto", block: "start" });
      window.history.replaceState(
        window.history.state,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return null;
}
