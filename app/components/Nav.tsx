"use client";

import Logo from "./Logo";

const links = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#flavors", label: "Flavors" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(255,244,228,0.95)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(48,75,112,0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 24px",
          maxWidth: 1160,
          margin: "0 auto",
        }}
      >
        {/* Brand */}
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "var(--font-outfit)",
            fontWeight: 800,
            fontSize: "1.3rem",
            color: "#304B70",
            textDecoration: "none",
          }}
        >
          <Logo size={40} />
          Kid Cakes
        </a>

        {/* Links */}
        <ul
          className="hidden md:flex"
          style={{ listStyle: "none", display: "flex", alignItems: "center", gap: 32, margin: 0, padding: 0 }}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "#304B70",
                  opacity: 0.75,
                  textDecoration: "none",
                  transition: "opacity 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#pricing"
          style={{
            fontFamily: "var(--font-outfit)",
            fontWeight: 700,
            fontSize: "0.95rem",
            padding: "12px 24px",
            borderRadius: 100,
            background: "#F5B44C",
            color: "#304B70",
            textDecoration: "none",
            boxShadow: "0 4px 16px rgba(245,180,76,0.4)",
            transition: "transform 0.15s, box-shadow 0.15s",
          }}
        >
          Start Your Box
        </a>
      </div>
    </nav>
  );
}
