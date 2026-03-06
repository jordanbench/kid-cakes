"use client";

import { useState, useEffect, useRef } from "react";
import type { Plan } from "../providers";

interface Props {
  isOpen: boolean;
  plan?: Plan;
  onClose: () => void;
}

const planLabels: Record<Plan, string> = {
  starter: "Starter Box — $9 one-time",
  monthly: "Monthly Subscription — $24/mo",
  bundle: "Family Bundle — $40/mo",
};

type Status = "idle" | "loading" | "success" | "error";

export default function SignupModal({ isOpen, plan, onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setName("");
      setEmail("");
      setStatus("idle");
      setErrorMsg("");
      setTimeout(() => nameRef.current?.focus(), 80);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, plan: plan ?? "general" }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(33, 54, 80, 0.6)",
          backdropFilter: "blur(4px)",
          zIndex: 1000,
        }}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Sign up for Kid Cakes"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1001,
          width: "min(480px, calc(100vw - 32px))",
          background: "#FFF4E4",
          borderRadius: 32,
          boxShadow: "0 24px 80px rgba(48,75,112,0.25)",
          overflow: "hidden",
        }}
      >
        {/* Gold top bar */}
        <div style={{ background: "#F5B44C", padding: "24px 28px 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 800,
                  fontSize: "1.4rem",
                  color: "#304B70",
                  marginBottom: 4,
                }}
              >
                {status === "success" ? "You're on the list! 🎉" : "Save your spot"}
              </div>
              {status !== "success" && plan && (
                <div
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "#304B70",
                    opacity: 0.75,
                  }}
                >
                  {planLabels[plan]}
                </div>
              )}
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "rgba(48,75,112,0.12)",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#304B70",
                fontSize: "0.9rem",
                flexShrink: 0,
              }}
            >
              ✕
            </button>
          </div>
        </div>

        <div style={{ padding: "28px" }}>
          {status === "success" ? (
            <div style={{ textAlign: "center", padding: "8px 0 16px" }}>
              <div style={{ fontSize: "3rem", marginBottom: 16 }}>🥞</div>
              <p
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "#304B70",
                  marginBottom: 8,
                }}
              >
                We&apos;ll be in touch soon, {name.split(" ")[0]}!
              </p>
              <p style={{ fontSize: "0.9rem", color: "#304B70", opacity: 0.7, marginBottom: 24 }}>
                Check your inbox — we&apos;ll send details about your{" "}
                {plan ? planLabels[plan] : "order"} shortly.
              </p>
              <button
                onClick={onClose}
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  padding: "14px 32px",
                  borderRadius: 100,
                  background: "#304B70",
                  color: "#FFF4E4",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Back to the page
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p style={{ fontSize: "0.92rem", color: "#304B70", opacity: 0.72, marginBottom: 24 }}>
                We&apos;re getting ready to launch. Drop your info and we&apos;ll reach out first with
                your order details and any early-bird perks.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 20 }}>
                <div>
                  <label
                    htmlFor="modal-name"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-outfit)",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      color: "#304B70",
                      marginBottom: 6,
                    }}
                  >
                    Your name
                  </label>
                  <input
                    id="modal-name"
                    ref={nameRef}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="First name is fine"
                    required
                    style={{
                      width: "100%",
                      padding: "13px 16px",
                      borderRadius: 12,
                      border: "2px solid rgba(48,75,112,0.15)",
                      background: "white",
                      fontFamily: "var(--font-nunito)",
                      fontSize: "0.95rem",
                      color: "#304B70",
                      outline: "none",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#F5B44C")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(48,75,112,0.15)")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="modal-email"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-outfit)",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      color: "#304B70",
                      marginBottom: 6,
                    }}
                  >
                    Email address
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    style={{
                      width: "100%",
                      padding: "13px 16px",
                      borderRadius: 12,
                      border: "2px solid rgba(48,75,112,0.15)",
                      background: "white",
                      fontFamily: "var(--font-nunito)",
                      fontSize: "0.95rem",
                      color: "#304B70",
                      outline: "none",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#F5B44C")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(48,75,112,0.15)")}
                  />
                </div>
              </div>

              {errorMsg && (
                <div
                  style={{
                    padding: "12px 16px",
                    borderRadius: 10,
                    background: "rgba(233,109,122,0.1)",
                    border: "1px solid rgba(233,109,122,0.3)",
                    color: "#c0384a",
                    fontSize: "0.88rem",
                    marginBottom: 16,
                  }}
                >
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  width: "100%",
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  padding: "16px",
                  borderRadius: 100,
                  background: status === "loading" ? "#e0a030" : "#F5B44C",
                  color: "#304B70",
                  border: "none",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  boxShadow: "0 4px 16px rgba(245,180,76,0.4)",
                  transition: "background 0.15s",
                }}
              >
                {status === "loading" ? "Saving your spot…" : "Reserve my spot"}
              </button>

              <p
                style={{
                  textAlign: "center",
                  fontSize: "0.78rem",
                  color: "#304B70",
                  opacity: 0.5,
                  marginTop: 14,
                }}
              >
                No spam. No payment info. Just a heads-up when we&apos;re ready.
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
