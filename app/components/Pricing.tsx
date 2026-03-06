import CTAButton from "./CTAButton";
import type { Plan } from "../providers";

interface PricingTier {
  name: string;
  price: string | number;
  period: string;
  desc: string;
  features: string[];
  cta: string;
  plan: Plan;
  featured?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: 9,
    period: "one-time trial box",
    desc: "Perfect for taste-testing before committing. One box, no strings attached.",
    features: [
      "3 full-size flavor pouches",
      "Feeding guide for picky eaters",
      "Free shipping",
      "30-day satisfaction guarantee",
    ],
    cta: "Try a Starter Box",
    plan: "starter",
  },
  {
    name: "Monthly",
    price: 24,
    period: "/month",
    desc: "The full experience. 4–6 flavors every month, automatically delivered before you run out.",
    features: [
      "4–6 flavor pouches monthly",
      "New seasonal flavor every box",
      "Feeding guide & recipe tips",
      "Free shipping, every month",
      "Dietitian Q&A access",
      "Pause or cancel anytime",
    ],
    cta: "Start Monthly — $24/mo",
    plan: "monthly",
    featured: true,
  },
  {
    name: "Family Bundle",
    price: 40,
    period: "per box, billed monthly",
    desc: "The full breakfast experience — pancakes, waffles, and an exclusive cooking class every quarter.",
    features: [
      "Everything in Monthly",
      "Waffle mix variety pack",
      "Quarterly virtual cooking class",
      "Priority support",
      "Early access to new flavors",
    ],
    cta: "Get the Bundle",
    plan: "bundle",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: "white", padding: "80px 0" }}>
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
            Transparent Pricing
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
            Less than a single breakfast out. Every month.
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#304B70", opacity: 0.72 }}>
            Start with a trial box to let your kid taste-test, or jump straight into a subscription and save.
            Cancel anytime — no awkward phone calls required.
          </p>
        </div>

        {/* Tiers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
        >
          {tiers.map((tier) => (
            <div
              key={tier.name}
              style={{
                background: tier.featured ? "#304B70" : "#FFF4E4",
                border: `2px solid ${tier.featured ? "#F5B44C" : "rgba(48,75,112,0.1)"}`,
                borderRadius: 32,
                padding: "36px 28px",
                position: "relative",
                transform: tier.featured ? "scale(1.04)" : "none",
              }}
            >
              {tier.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: -14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#F5B44C",
                    color: "#304B70",
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 800,
                    fontSize: "0.75rem",
                    padding: "6px 16px",
                    borderRadius: 100,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  Most Popular
                </div>
              )}

              <div
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 8,
                  color: tier.featured ? "rgba(255,244,228,0.6)" : "rgba(48,75,112,0.65)",
                }}
              >
                {tier.name}
              </div>

              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
                <span
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    opacity: 0.6,
                    color: tier.featured ? "#FFF4E4" : "#304B70",
                  }}
                >
                  $
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: "3rem",
                    fontWeight: 800,
                    lineHeight: 1,
                    color: tier.featured ? "#F5B44C" : "#304B70",
                  }}
                >
                  {tier.price}
                </span>
                <span
                  style={{
                    fontSize: "0.85rem",
                    opacity: 0.6,
                    color: tier.featured ? "#FFF4E4" : "#304B70",
                  }}
                >
                  {tier.period}
                </span>
              </div>

              <p
                style={{
                  fontSize: "0.88rem",
                  marginBottom: 24,
                  minHeight: 40,
                  color: tier.featured ? "rgba(255,244,228,0.7)" : "rgba(48,75,112,0.65)",
                }}
              >
                {tier.desc}
              </p>

              <div
                style={{
                  height: 1,
                  background: tier.featured ? "rgba(255,244,228,0.15)" : "rgba(48,75,112,0.1)",
                  marginBottom: 20,
                }}
              />

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 12 }}>
                {tier.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: "0.9rem",
                      color: tier.featured ? "rgba(255,244,228,0.85)" : "#304B70",
                    }}
                  >
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: tier.featured ? "#F5B44C" : "#97C9A7",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: tier.featured ? "#304B70" : "white",
                        fontSize: "0.65rem",
                        flexShrink: 0,
                        fontWeight: 800,
                      }}
                    >
                      ✓
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <CTAButton
                plan={tier.plan}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  padding: "16px 32px",
                  borderRadius: 100,
                  ...(tier.featured
                    ? {
                        background: "#F5B44C",
                        color: "#304B70",
                        boxShadow: "0 4px 16px rgba(245,180,76,0.4)",
                      }
                    : {
                        background: "transparent",
                        color: "#304B70",
                        border: "2px solid #304B70",
                      }),
                }}
              >
                {tier.cta}
              </CTAButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
