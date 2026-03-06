interface PainPoint {
  icon: string;
  title: string;
  desc: string;
}

const painPoints: PainPoint[] = [
  {
    icon: "😵",
    title: "The same two foods, every single day",
    desc: "Picky eaters don't outgrow it on demand. You're stuck making the same safe meal while worrying whether they're getting what they need to grow.",
  },
  {
    icon: "🤔",
    title: "Every \"healthy\" option gets rejected",
    desc: "Whole grain? Rejected. Veggie-infused? Thrown across the room. Texture-sensitive kids aren't being difficult — their sensory systems are just wired differently.",
  },
  {
    icon: "💔",
    title: "The guilt is relentless",
    desc: "Pediatricians ask \"is he eating a variety?\" and you die a little inside. You love your kid fiercely and you're doing your best — you just need something that actually works.",
  },
  {
    icon: "⏰",
    title: "Mornings are already hectic enough",
    desc: "You don't have time to cook three different breakfasts before 8am. You need something easy, fast, and reliable that the whole family can agree on.",
  },
];

export default function Problem() {
  return (
    <section style={{ background: "white", padding: "80px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 60,
            alignItems: "center",
          }}
        >
          {/* Left: Pain */}
          <div>
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
                background: "#E96D7A",
                color: "white",
                marginBottom: 16,
              }}
            >
              The Reality
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
              Mealtime shouldn&apos;t feel like a negotiation.
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#304B70", opacity: 0.72, marginBottom: 28 }}>
              You&apos;ve tried everything. Different foods, different shapes, different plates. Your kid gags. Refuses. You worry about nutrition, and every morning starts with a battle you didn&apos;t sign up for.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              {painPoints.map((p) => (
                <li
                  key={p.title}
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                    padding: 18,
                    background: "#FFF4E4",
                    borderRadius: 12,
                    borderLeft: "4px solid #E96D7A",
                  }}
                >
                  <span style={{ fontSize: "1.4rem", flexShrink: 0, marginTop: 1 }}>{p.icon}</span>
                  <div>
                    <h4
                      style={{
                        fontFamily: "var(--font-outfit)",
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        marginBottom: 3,
                        color: "#304B70",
                      }}
                    >
                      {p.title}
                    </h4>
                    <p style={{ fontSize: "0.88rem", opacity: 0.7, margin: 0 }}>{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                background: "#304B70",
                color: "#FFF4E4",
                borderRadius: 20,
                padding: 28,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: "3rem",
                  fontWeight: 800,
                  color: "#F5B44C",
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                40M+
              </div>
              <p style={{ fontSize: "0.9rem", opacity: 0.8, margin: 0 }}>
                US parents dealing with picky eaters — and almost none of them have a product built specifically for their kid.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { num: "64%", desc: "of parents prefer health-oriented mixes for their kids but can't find ones kids will actually eat" },
                { num: "0", desc: "direct competitors offering kid-specific, texture-neutral pancake nutrition" },
              ].map((s) => (
                <div
                  key={s.num}
                  style={{
                    background: "#FFF4E4",
                    border: "2px solid rgba(48,75,112,0.1)",
                    borderRadius: 20,
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-outfit)",
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: "#304B70",
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {s.num}
                  </div>
                  <p style={{ fontSize: "0.8rem", opacity: 0.65, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>

            <div
              style={{
                background: "#F5B44C",
                borderRadius: 20,
                padding: 28,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: "3rem",
                  fontWeight: 800,
                  color: "#304B70",
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                $1.6B
              </div>
              <p style={{ fontSize: "0.9rem", color: "rgba(48,75,112,0.8)", margin: 0 }}>
                Pancake market growing at 4.26% annually — and nobody&apos;s cracked the picky eater segment yet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
