interface Benefit {
  icon: string;
  iconBg: string;
  title: string;
  desc: string;
}

const benefits: Benefit[] = [
  {
    icon: "🧇",
    iconBg: "rgba(245,180,76,0.15)",
    title: "Hidden Goodness, Zero Evidence",
    desc: "Cauliflower in the chocolate chip mix. Chickpea flour in the vanilla. Your kid tastes pancakes. You see a balanced meal. Everyone wins.",
  },
  {
    icon: "🌊",
    iconBg: "rgba(233,109,122,0.12)",
    title: "Texture-Engineered for Sensitive Kids",
    desc: "No seeds. No flecks. No grainy surprises. Every formula is tested for the smooth, fluffy, consistent texture that picky eaters need.",
  },
  {
    icon: "🩺",
    iconBg: "rgba(151,201,167,0.15)",
    title: "Pediatric Dietitian Reviewed",
    desc: "Real nutrition that actually matters for growing kids — not marketing spin. Each flavor delivers meaningful protein, healthy fats, and micronutrients per serving.",
  },
  {
    icon: "🥞",
    iconBg: "rgba(48,75,112,0.1)",
    title: "A Variety Pack That Builds Wins",
    desc: "4–6 flavors per box keeps mornings interesting. Small wins add up to an expanding palette — and less stress for you.",
  },
  {
    icon: "📦",
    iconBg: "rgba(245,180,76,0.15)",
    title: "Ready in 5 Minutes, Ships Monthly",
    desc: "Just add water or milk. Box arrives at your door before you run out. No last-minute grocery runs, no out-of-stock stress.",
  },
  {
    icon: "✨",
    iconBg: "rgba(233,109,122,0.12)",
    title: "They'll Ask for It By Name",
    desc: "The best outcome isn't just nutrition — it's a kid who runs to the kitchen excited about breakfast. That's the win we design for.",
  },
];

export default function Solution() {
  return (
    <section id="flavors" style={{ background: "#FFF4E4", padding: "80px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 60px" }}>
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
            The Fix
          </span>
          <h2
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              color: "#304B70",
              marginBottom: 16,
            }}
          >
            Pancakes they love. Nutrition you can count on.
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#304B70", opacity: 0.72 }}>
            Kid Cakes are engineered for texture-sensitive kids — smooth, familiar, treat-like pancakes
            with hidden vegetables, real protein, and essential vitamins baked right in.
            No visible flecks. No weird taste. Just pancakes that disappear fast.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {benefits.map((b) => (
            <div
              key={b.title}
              style={{
                background: "white",
                borderRadius: 20,
                padding: "32px 28px",
                boxShadow: "0 4px 24px rgba(48,75,112,0.10)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.6rem",
                  marginBottom: 18,
                  background: b.iconBg,
                }}
              >
                {b.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#304B70",
                  marginBottom: 10,
                }}
              >
                {b.title}
              </h3>
              <p style={{ fontSize: "0.92rem", color: "#304B70", opacity: 0.72, margin: 0 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
