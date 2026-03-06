"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Will my kid actually not taste the vegetables?",
    a: "Yes — and this is the whole reason Kid Cakes exists. Every vegetable ingredient is processed into a fine, flavorless powder that fully integrates into the batter. We don't add fresh pureed vegetables (which can change texture and taste), we use specifically milled powders that disappear completely. Our beta families ran blind taste tests against regular pancake mixes and kids could not tell the difference. That's the bar we hold ourselves to.",
  },
  {
    q: "My kid is extremely texture-sensitive. Is the texture really smooth?",
    a: "Texture sensitivity is exactly who we designed this for. No visible seeds, flecks, or grains. No whole grain chunks. No bran pieces. We test every formula with texture-sensitive kids (including kids with SPD and ARFID) before it ships. If the texture isn't smooth and consistent, it doesn't go in a box.",
  },
  {
    q: "How much nutrition does each serving actually contain?",
    a: "Per 3-pancake serving (made with milk and one egg): approximately 12g protein, 4g fiber, meaningful amounts of iron, calcium, vitamin D, and zinc. Exact values vary by flavor and are printed on every pouch. We add one egg to our cooking instructions because it boosts both protein and nutrition — and most picky eaters who accept pancakes don't notice an egg in the batter.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Absolutely, any time — no phone calls, no cancellation fees, no guilt. Log into your account and cancel in two clicks. You can also pause your subscription for up to 3 months if life gets busy. If you ever want to restart, your flavor preferences are saved.",
  },
  {
    q: "Are there any allergens I should know about?",
    a: "Most flavors contain wheat (gluten) and are made in a facility that also processes tree nuts, dairy, and soy. Each flavor pouch clearly lists all allergens. We are actively developing gluten-free and dairy-free versions — sign up for our newsletter to be first to know.",
  },
  {
    q: "How long does one box last?",
    a: "Each flavor pouch makes about 12–15 pancakes (4–5 servings), and a monthly box contains 4–6 pouches. For a family making pancakes 3–5 times per week, a box typically lasts 3–4 weeks — which is why monthly delivery is timed the way it is.",
  },
  {
    q: "What if my kid doesn't like it?",
    a: "We offer a 30-day satisfaction guarantee on your first box. If your kid genuinely won't eat it, contact us and we'll refund you fully — no questions, no judgment. We also include a feeding guide with every box with practical strategies for first introductions.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" style={{ background: "#FFF4E4", padding: "80px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 52px" }}>
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-outfit)",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "6px 14px",
              borderRadius: 100,
              background: "#F5B44C",
              color: "#304B70",
              marginBottom: 16,
            }}
          >
            Questions
          </span>
          <h2
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              color: "#304B70",
              marginBottom: 12,
            }}
          >
            Everything you&apos;re wondering about.
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#304B70", opacity: 0.7 }}>
            We&apos;ve heard from a lot of parents. Here&apos;s what they always ask first.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  background: "white",
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "0 4px 24px rgba(48,75,112,0.10)",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    width: "100%",
                    padding: "22px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 700,
                    fontSize: "0.98rem",
                    color: "#304B70",
                    gap: 16,
                    background: "none",
                    border: "none",
                    textAlign: "left",
                  }}
                >
                  {item.q}
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: isOpen ? "#F5B44C" : "#FFF4E4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: "0.7rem",
                      color: "#304B70",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease, background 0.25s ease",
                    }}
                  >
                    ▼
                  </span>
                </button>
                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 22px",
                      fontSize: "0.93rem",
                      color: "#304B70",
                      opacity: 0.72,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
