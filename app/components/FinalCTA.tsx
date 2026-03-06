import CTAButton from "./CTAButton";

export default function FinalCTA() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #304B70 0%, #1a2d46 100%)",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow decorations */}
      <div
        style={{
          position: "absolute",
          bottom: -80,
          left: -80,
          width: 360,
          height: 360,
          background: "radial-gradient(circle, rgba(245,180,76,0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 280,
          height: 280,
          background: "radial-gradient(circle, rgba(233,109,122,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
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
              marginBottom: 20,
            }}
          >
            Today Is a Good Day to Start
          </span>

          <h2
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              color: "#FFF4E4",
              marginBottom: 16,
            }}
          >
            One smoother morning is worth $9.
          </h2>

          <p
            style={{
              color: "rgba(255,244,228,0.75)",
              fontSize: "1.1rem",
              marginBottom: 36,
            }}
          >
            You don&apos;t have to solve picky eating. You just have to find one thing your kid will eat
            that&apos;s also good for them. We&apos;ve built it. Let us send you a box.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <CTAButton
              plan="starter"
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
                boxShadow: "0 4px 16px rgba(245,180,76,0.4)",
              }}
            >
              Get the $9 Starter Box
            </CTAButton>
            <CTAButton
              plan="monthly"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontFamily: "var(--font-outfit)",
                fontWeight: 700,
                fontSize: "1.1rem",
                padding: "20px 44px",
                borderRadius: 100,
                background: "white",
                color: "#304B70",
                boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
              }}
            >
              See All Plans
            </CTAButton>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              marginTop: 24,
              color: "rgba(255,244,228,0.55)",
              fontSize: "0.85rem",
            }}
          >
            <span>🛡</span>
            30-day love-it guarantee · Cancel anytime · Free shipping
          </div>
        </div>
      </div>
    </section>
  );
}
