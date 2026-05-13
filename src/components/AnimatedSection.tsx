"use client";

import { useEffect, useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
  threshold?: number;
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.08,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const transforms: Record<string, string> = {
    up: "translateY(28px)",
    left: "translateX(-28px)",
    right: "translateX(28px)",
    fade: "scale(0.97)",
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = transforms[direction];
    // Faster, crisper transition — 0.5s feels snappy vs 0.7s sluggish
    el.style.transition = `opacity 0.5s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = direction === "fade" ? "scale(1)" : "none";
          observer.disconnect();
        }
      },
      // Removed the -60px rootMargin so elements animate as soon as they enter view
      { threshold, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, direction, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
