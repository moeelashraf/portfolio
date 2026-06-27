"use client";

import { type ReactNode } from "react";
import clsx from "clsx";

type PhoneFrameProps = {
  children: ReactNode;
  className?: string;
};

export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div
      className={clsx(
        "relative mx-auto w-full max-w-[260px] rounded-[2.2rem] border border-ink/15 bg-ink p-2 shadow-card",
        className
      )}
    >
      <div className="relative overflow-hidden rounded-[1.7rem] bg-paper-50">
        <div className="pointer-events-none absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-ink/90" />
        {children}
      </div>
    </div>
  );
}
