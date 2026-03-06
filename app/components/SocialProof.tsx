interface Testimonial {
  stars: number;
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
  avatarColor: string;
}

const testimonials: Testimonial[] = [
  {
    stars: 5,
    quote:
      "My son has SPD and has eaten exactly four foods for two years. He ate three chocolate chip Kid Cakes on the first try and asked if we had more. I ugly-cried in the kitchen. This is the first time in months I haven't dreaded breakfast.",
    name: "Sarah L.",
    role: "Mom of a 5-year-old with SPD · Portland, OR",
    initials: "SL",
    avatarBg: "linear-gradient(135deg, #E96D7A, #c45565)",
    avatarColor: "white",
  },
  {
    stars: 5,
    quote:
      "We've tried every 'healthy' pancake mix out there. They always get rejected because of the texture or the weird brown color or some tiny visible speck. Kid Cakes look exactly like normal pancakes. My daughter literally cannot tell. She's been eating them every day for six weeks.",
    name: "Marcus R.",
    role: "Dad of twins, age 6 · Austin, TX",
    initials: "MR",
    avatarBg: "linear-gradient(135deg, #304B70, #1a2d46)",
    avatarColor: "white",
  },
  {
    stars: 5,
    quote:
      "As a pediatric dietitian, I've been recommending these to families struggling with extremely selective eating. The formulation is thoughtful, the texture is genuinely smooth, and — most importantly — kids actually eat them.",
    name: "Dr. Jamie K., RD",
    role: "Pediatric Dietitian · Seattle Children's",
    initials: "JK",
    avatarBg: "linear-gradient(135deg, #97C9A7, #5ea87c)",
    avatarColor: "white",
  },
];

const stats = [
  { num: "2,400+", label: "Families served in our beta" },
  { num: "94%", label: "Of kids ate it on the first try" },
  { num: "4.9/5", label: "Average parent satisfaction" },
  { num: "<8%", label: "Monthly churn rate" },
];

export default function SocialProof() {
  return (
    <section style={{ background: "#FFF4E4", padding: "80px 0" }}>
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
              background: "#97C9A7",
              color: "#304B70",
              marginBottom: 16,
            }}
          >
            Real Families. Real Wins.
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
            Parents who&apos;ve been exactly where you are.
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#304B70", opacity: 0.72 }}>
            These aren&apos;t handpicked success stories. This is what happens when you stop fighting breakfast and start working with your kid&apos;s palate.
          </p>
        </div>

        {/* Testimonials */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            marginBottom: 48,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: "white",
                borderRadius: 20,
                padding: 28,
                boxShadow: "0 4px 24px rgba(48,75,112,0.10)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div style={{ color: "#F5B44C", fontSize: "1rem" }}>{"★".repeat(t.stars)}</div>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.65,
                  color: "#304B70",
                  opacity: 0.82,
                  flex: 1,
                  margin: 0,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: t.avatarBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 800,
                    fontSize: "0.9rem",
                    color: t.avatarColor,
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-outfit)",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: "#304B70",
                    }}
                  >
                    {t.name}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#304B70", opacity: 0.6 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid rgba(48,75,112,0.1)",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.num}
              style={{
                background: "white",
                padding: "28px 20px",
                textAlign: "center",
                borderLeft: i > 0 ? "1px solid rgba(48,75,112,0.08)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: "2.2rem",
                  fontWeight: 800,
                  color: "#304B70",
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                {s.num}
              </div>
              <p style={{ fontSize: "0.85rem", color: "#304B70", opacity: 0.65, margin: 0 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
