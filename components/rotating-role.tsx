"use client";

import { useEffect, useState } from "react";

const roles = [
  "Product Engineer",
  "Fullstack Engineer",
  "Mobile Developer",
  "Software Engineer",
] as const;

export function RotatingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState<string>(roles[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      return;
    }

    const activeRole = roles[roleIndex];
    let delay = isDeleting ? 45 : 85;

    if (!isDeleting && displayedRole === activeRole) {
      delay = 1600;
    } else if (isDeleting && displayedRole === "") {
      delay = 240;
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting && displayedRole === activeRole) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && displayedRole === "") {
        setIsDeleting(false);
        setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
        return;
      }

      const nextLength = displayedRole.length + (isDeleting ? -1 : 1);
      setDisplayedRole(activeRole.slice(0, nextLength));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  const [firstLine = "", ...remainingWords] = displayedRole.split(" ");
  const secondLine = remainingWords.join(" ");
  const isTypingSecondLine = displayedRole.includes(" ");

  return (
    <>
      <span className="sr-only">Product Engineer, Fullstack Engineer, Mobile Developer, Software Engineer</span>
      <span className="rotating-role" aria-hidden="true">
        <span className="role-line role-line-primary">
          {firstLine || "\u00a0"}
          {!isTypingSecondLine && <span className="typing-cursor" />}
        </span>
        <span className="role-line role-line-accent">
          {secondLine || "\u00a0"}
          {isTypingSecondLine && <span className="typing-cursor" />}
        </span>
      </span>
    </>
  );
}
