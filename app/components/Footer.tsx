import Logo from "./Logo";

const footerLinks = {
  Product: ["Flavors", "Ingredients", "Nutrition Info", "How It Works", "Pricing"],
  Company: ["Our Story", "For Dietitians", "Press", "Affiliates", "Contact"],
  Support: ["FAQ", "Feeding Guide", "My Account", "Shipping Policy", "Returns"],
};

export default function Footer() {
  return (
    <footer style={{ background: "#213650", color: "rgba(255,244,228,0.7)", padding: "52px 0 32px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.8fr 1fr 1fr 1fr",
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-outfit)",
                fontWeight: 800,
                fontSize: "1.3rem",
                color: "#FFF4E4",
                marginBottom: 14,
                textDecoration: "none",
              }}
            >
              <Logo size={40} />
              Kid Cakes
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.65, maxWidth: 260 }}>
              Breakfast they ask for. Nutrition you can trust. Monthly pancake mixes designed for texture-sensitive, picky eater kids.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              {["📸", "f", "▶", "✉"].map((icon, i) => (
                <button
                  key={i}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(255,244,228,0.1)",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.9rem",
                    color: "rgba(255,244,228,0.7)",
                    cursor: "pointer",
                  }}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "rgba(255,244,228,0.45)",
                  marginBottom: 16,
                }}
              >
                {heading}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontSize: "0.9rem",
                        color: "rgba(255,244,228,0.65)",
                        textDecoration: "none",
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,244,228,0.1)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ color: "rgba(255,244,228,0.35)", fontSize: "0.8rem" }}>
            © 2025 Kid Cakes. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Service", "Accessibility"].map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  color: "rgba(255,244,228,0.45)",
                  fontSize: "0.8rem",
                  textDecoration: "none",
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
