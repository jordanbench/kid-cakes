const flavors = [
  { label: "Chocolate Chip", style: { background: "#FDF0E8", color: "#5A4037", borderColor: "#5A4037" } },
  { label: "Vanilla Dream", style: { background: "#FFF8E7", color: "#b07c00", borderColor: "#F5B44C" } },
  { label: "Berry Bliss", style: { background: "#FFF0F1", color: "#E96D7A", borderColor: "#E96D7A" } },
  { label: "Buttermilk Classic", style: { background: "#F0F5FF", color: "#304B70", borderColor: "#304B70" } },
];

const avatars = [
  { initials: "S", bg: "#E96D7A", color: "white" },
  { initials: "M", bg: "#304B70", color: "white" },
  { initials: "J", bg: "#97C9A7", color: "white" },
  { initials: "R", bg: "#F5B44C", color: "#304B70" },
];

export default function Hero() {
  return (
    <section
      style={{
        background: "#FFF4E4",
        padding: "80px 0 60px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(245,180,76,0.18) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 60,
            alignItems: "center",
          }}
        >
          {/* Left: Copy */}
          <div>
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
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
                }}
              >
                New
              </span>
              <span
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#304B70",
                  opacity: 0.6,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Nutritious Pancakes for Picky Eaters
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                color: "#304B70",
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              Breakfast{" "}
              <em style={{ fontStyle: "normal", color: "#e0a030" }}>without</em>{" "}
              the battle.
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                color: "#304B70",
                opacity: 0.75,
                marginBottom: 36,
                maxWidth: 460,
                lineHeight: 1.7,
              }}
            >
              Your picky eater gets pancakes that taste like a treat. You get
              protein, vegetables, and vitamins secretly stacked inside. No
              fights. No force. Just a smoother morning.
            </p>

            <div
              style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", marginBottom: 40 }}
            >
              <a
                href="#pricing"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  padding: "20px 44px",
                  borderRadius: 100,
                  background: "#F5B44C",
                  color: "#304B70",
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(245,180,76,0.4)",
                }}
              >
                Get Your First Box — $9
              </a>
              <a
                href="#how-it-works"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  padding: "16px 32px",
                  borderRadius: 100,
                  background: "transparent",
                  color: "#304B70",
                  border: "2px solid #304B70",
                  textDecoration: "none",
                }}
              >
                See How It Works
              </a>
            </div>

            {/* Social proof */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "16px 20px",
                background: "white",
                borderRadius: 20,
                boxShadow: "0 4px 24px rgba(48,75,112,0.10)",
                maxWidth: 400,
              }}
            >
              <div style={{ display: "flex" }}>
                {avatars.map((a, i) => (
                  <div
                    key={i}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      border: "2px solid white",
                      marginLeft: i === 0 ? 0 : -8,
                      background: a.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: a.color,
                      fontFamily: "var(--font-outfit)",
                    }}
                  >
                    {a.initials}
                  </div>
                ))}
              </div>
              <div style={{ fontSize: "0.85rem", color: "#304B70", lineHeight: 1.4 }}>
                <div style={{ color: "#F5B44C", fontSize: "0.85rem", marginBottom: 2 }}>★★★★★</div>
                <strong>Loved by 2,400+ families</strong>
                <br />
                "He asked for seconds. I cried." — Sarah, mom of a 4-year-old
              </div>
            </div>
          </div>

          {/* Right: Pancake Box Visual */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
            {/* Float card: Hidden Nutrition */}
            <div
              className="animate-float-slow"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                background: "white",
                borderRadius: 20,
                boxShadow: "0 8px 40px rgba(48,75,112,0.15)",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-outfit)",
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "#304B70",
                zIndex: 3,
              }}
            >
              <span style={{ fontSize: "1.3rem" }}>🥦</span>
              <div>
                <div style={{ fontWeight: 800 }}>Hidden Nutrition</div>
                <div style={{ fontSize: "0.75rem", opacity: 0.6 }}>Veggies &amp; protein inside</div>
              </div>
            </div>

            {/* Main card */}
            <div
              className="animate-float"
              style={{
                background: "white",
                borderRadius: 32,
                boxShadow: "0 8px 40px rgba(48,75,112,0.15)",
                padding: 32,
                width: 320,
                position: "relative",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -16,
                  right: 20,
                  background: "#E96D7A",
                  color: "white",
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  padding: "6px 14px",
                  borderRadius: 100,
                }}
              >
                Monthly Box
              </div>

              {/* Pancake stack SVG */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 20 }}>
                <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Top pancake */}
                  <ellipse cx="110" cy="30" rx="90" ry="18" fill="#F7C06A" />
                  <ellipse cx="110" cy="36" rx="90" ry="8" fill="#D4932A" opacity="0.4" />
                  {/* Syrup drip */}
                  <ellipse cx="110" cy="22" rx="28" ry="7" fill="#5A4037" opacity="0.35" />
                  {/* Middle pancake */}
                  <ellipse cx="110" cy="60" rx="96" ry="18" fill="#F5B44C" />
                  <ellipse cx="110" cy="66" rx="96" ry="8" fill="#D4932A" opacity="0.4" />
                  {/* Bottom pancake */}
                  <ellipse cx="110" cy="90" rx="100" ry="18" fill="#F7C06A" />
                  <ellipse cx="110" cy="96" rx="100" ry="8" fill="#D4932A" opacity="0.3" />
                  {/* Plate */}
                  <ellipse cx="110" cy="112" rx="108" ry="8" fill="#E8E0D0" />
                </svg>
              </div>

              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 16 }}>
                {flavors.map((f) => (
                  <span
                    key={f.label}
                    style={{
                      fontFamily: "var(--font-outfit)",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      padding: "5px 12px",
                      borderRadius: 100,
                      border: "1.5px solid",
                      ...f.style,
                    }}
                  >
                    {f.label}
                  </span>
                ))}
              </div>
              <div style={{ textAlign: "center", fontSize: "0.8rem", color: "#304B70", opacity: 0.6 }}>
                4–6 flavors · <strong style={{ opacity: 1 }}>Ships every month</strong> · Cancel anytime
              </div>
            </div>

            {/* Float card: Texture-Friendly */}
            <div
              className="animate-float-delayed"
              style={{
                position: "absolute",
                bottom: 20,
                right: 0,
                background: "white",
                borderRadius: 20,
                boxShadow: "0 8px 40px rgba(48,75,112,0.15)",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-outfit)",
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "#304B70",
                zIndex: 3,
              }}
            >
              <span style={{ fontSize: "1.3rem", color: "#97C9A7" }}>✓</span>
              <div>
                <div style={{ fontWeight: 800 }}>Texture-Friendly</div>
                <div style={{ fontSize: "0.75rem", opacity: 0.6 }}>Smooth. No lumps. No flecks.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
