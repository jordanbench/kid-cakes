const items = [
  { icon: "🟢", label: "No artificial colors or flavors" },
  { icon: "🩺", label: "Pediatric dietitian reviewed" },
  { icon: "📦", label: "Free shipping every month" },
  { icon: "↺", label: "Cancel anytime, no hassle" },
  { icon: "🛡", label: "30-day love-it guarantee" },
];

export default function TrustStrip() {
  return (
    <div style={{ background: "#304B70", padding: "28px 0" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          flexWrap: "wrap",
          maxWidth: 1160,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {items.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {i > 0 && (
              <div
                style={{
                  width: 1,
                  height: 24,
                  background: "rgba(255,244,228,0.2)",
                  marginRight: 8,
                }}
              />
            )}
            <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
            <span
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: "0.88rem",
                fontWeight: 600,
                color: "rgba(255,244,228,0.85)",
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
