interface Step {
  num: number;
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    num: 1,
    title: "Choose Your Box",
    desc: "Pick a starter pack for $9 or jump straight into a monthly subscription. Every box comes with 4–6 kid-tested flavors.",
  },
  {
    num: 2,
    title: "We Ship, You Mix",
    desc: "Your box arrives fresh. Add water or milk, flip on a griddle, and breakfast is on the table in under 10 minutes.",
  },
  {
    num: 3,
    title: "Watch Them Ask for More",
    desc: "They eat the pancakes they love. You feel good knowing they got real nutrition. That's a breakfast win — every single morning.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: "white", padding: "80px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 60px" }}>
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
            Simple as Pancakes
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
            From your door to their plate in minutes.
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#304B70", opacity: 0.7 }}>
            No meal planning. No grocery store. No convincing. Just open, mix, flip, and watch a smoother morning happen.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 32,
          }}
        >
          {steps.map((step) => (
            <div key={step.num} style={{ textAlign: "center", padding: "0 16px" }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "#F5B44C",
                  color: "#304B70",
                  fontFamily: "var(--font-outfit)",
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  boxShadow: "0 4px 12px rgba(245,180,76,0.4)",
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#304B70",
                  marginBottom: 10,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "#304B70",
                  opacity: 0.72,
                  maxWidth: 240,
                  margin: "0 auto",
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
