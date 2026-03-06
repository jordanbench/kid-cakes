interface Feature {
  icon: string;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: "💪",
    title: "12g Protein Per Serving",
    desc: "Chickpea flour, pea protein, and eggs deliver real protein that keeps kids full and focused — without a chalky aftertaste.",
  },
  {
    icon: "🥦",
    title: "Hidden Vegetable Blends",
    desc: "Butternut squash, cauliflower, zucchini, and beet powder — all milled into flavorless powders that vanish into the batter completely.",
  },
  {
    icon: "🩺",
    title: "Essential Vitamins & Minerals",
    desc: "Iron, calcium, vitamin D, and zinc are fortified into each mix — the exact nutrients picky eaters most commonly miss.",
  },
  {
    icon: "🚫",
    title: "No Artificial Anything",
    desc: "No artificial colors, no artificial flavors, no high-fructose corn syrup. Natural sweeteners only. Clean label parents can actually read.",
  },
  {
    icon: "🌟",
    title: "Smooth Texture, Every Time",
    desc: "No visible seeds, flecks, or grains. We test every formula with texture-sensitive kids before it ships. Guaranteed smooth.",
  },
  {
    icon: "😋",
    title: "Kid-Approved Flavor Range",
    desc: "Chocolate Chip, Vanilla Dream, Strawberry, Blueberry, Buttermilk Classic, and seasonal specials — chosen because real kids asked for them again.",
  },
];

export default function Features() {
  return (
    <section style={{ background: "#304B70", padding: "80px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 56px" }}>
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
              background: "rgba(245,180,76,0.2)",
              color: "#F5B44C",
              marginBottom: 16,
            }}
          >
            What&apos;s Inside
          </span>
          <h2
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              color: "#FFF4E4",
              marginBottom: 12,
            }}
          >
            Everything a growing kid needs. Nothing they&apos;ll notice.
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,244,228,0.7)" }}>
            Every Kid Cakes formula is built around one idea: kids eat what tastes good, not what&apos;s good for them. So we make those the same thing.
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
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                background: "rgba(255,244,228,0.06)",
                border: "1px solid rgba(255,244,228,0.12)",
                borderRadius: 20,
                padding: 28,
                transition: "background 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "rgba(245,180,76,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.3rem",
                    flexShrink: 0,
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#FFF4E4",
                  }}
                >
                  {f.title}
                </h3>
              </div>
              <p style={{ color: "rgba(255,244,228,0.65)", fontSize: "0.9rem", margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
