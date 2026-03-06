"use client";

import { useModal } from "../providers";
import type { Plan } from "../providers";
import type { CSSProperties, ReactNode } from "react";

interface Props {
  plan?: Plan;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export default function CTAButton({ plan, children, style, className }: Props) {
  const { openModal } = useModal();
  return (
    <button
      onClick={() => openModal(plan)}
      className={className}
      style={{
        cursor: "pointer",
        border: "none",
        background: "none",
        padding: 0,
        font: "inherit",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
