"use client";

import { type ReactNode } from "react";
import clsx from "clsx";

type BrowserFrameProps = {
  children: ReactNode;
  url?: string;
  className?: string;
  variant?: "light" | "dark";
};

export function BrowserFrame({
  children,
  url,
  className,
  variant = "light",
}: BrowserFrameProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={clsx(
        "overflow-hidden rounded-xl border shadow-card",
        isDark
          ? "border-ink/20 bg-ink"
          : "border-ink/10 bg-paper-50",
        className
      )}
    >
      <div
        className={clsx(
          "flex items-center gap-2 border-b px-3 py-2 sm:px-4 sm:py-2.5",
          isDark ? "border-ink/40 bg-ink/95" : "border-ink/10 bg-paper-200/60"
        )}
      >
        <div className="flex gap-1.5">
          <span
            className={clsx(
              "h-2.5 w-2.5 rounded-full",
              isDark ? "bg-ink-faint/40" : "bg-ink/15"
            )}
          />
          <span
            className={clsx(
              "h-2.5 w-2.5 rounded-full",
              isDark ? "bg-ink-faint/40" : "bg-ink/15"
            )}
          />
          <span
            className={clsx(
              "h-2.5 w-2.5 rounded-full",
              isDark ? "bg-ink-faint/40" : "bg-ink/15"
            )}
          />
        </div>
        {url && (
          <div
            className={clsx(
              "ml-2 hidden flex-1 truncate rounded-md px-3 py-1 font-sans text-xs sm:block",
              isDark
                ? "bg-ink-muted/60 text-paper-50/60"
                : "bg-paper-100 text-ink-soft"
            )}
          >
            {url}
          </div>
        )}
      </div>
      <div className="relative bg-paper-50">{children}</div>
    </div>
  );
}
