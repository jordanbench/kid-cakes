import { readContacts } from "../../lib/contacts";
import type { Contact } from "../../lib/contacts";
import Logo from "../components/Logo";

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

const planColors: Record<string, { bg: string; color: string }> = {
  starter: { bg: "rgba(151,201,167,0.2)", color: "#2d7a4a" },
  monthly: { bg: "rgba(245,180,76,0.2)", color: "#9a6500" },
  bundle: { bg: "rgba(233,109,122,0.15)", color: "#a82535" },
  general: { bg: "rgba(48,75,112,0.1)", color: "#304B70" },
};

function PlanBadge({ plan }: { plan: string }) {
  const colors = planColors[plan] ?? planColors.general;
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "var(--font-outfit)",
        fontSize: "0.72rem",
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "capitalize",
        padding: "4px 10px",
        borderRadius: 100,
        background: colors.bg,
        color: colors.color,
      }}
    >
      {plan}
    </span>
  );
}

export default function AdminPage() {
  const contacts: Contact[] = readContacts();

  const byPlan = contacts.reduce<Record<string, number>>((acc, c) => {
    acc[c.plan] = (acc[c.plan] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <div style={{ minHeight: "100vh", background: "#F0F4F8", fontFamily: "var(--font-nunito)" }}>
      {/* Header */}
      <div style={{ background: "#304B70", padding: "20px 32px" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Logo size={36} />
            <div>
              <div
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  color: "#FFF4E4",
                }}
              >
                Kid Cakes Admin
              </div>
              <div style={{ fontSize: "0.78rem", color: "rgba(255,244,228,0.55)" }}>
                Signups &amp; Interest Tracker
              </div>
            </div>
          </div>
          <div style={{ fontSize: "0.82rem", color: "rgba(255,244,228,0.5)" }}>
            🔒 Protected
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>
        {/* Summary cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 16,
            marginBottom: 32,
          }}
        >
          {[
            { label: "Total Signups", value: contacts.length, color: "#304B70" },
            { label: "Starter", value: byPlan.starter ?? 0, color: "#2d7a4a" },
            { label: "Monthly", value: byPlan.monthly ?? 0, color: "#9a6500" },
            { label: "Bundle", value: byPlan.bundle ?? 0, color: "#a82535" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: "white",
                borderRadius: 16,
                padding: "20px 20px",
                boxShadow: "0 2px 12px rgba(48,75,112,0.08)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: s.color,
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: "0.82rem", color: "#304B70", opacity: 0.6 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div
          style={{
            background: "white",
            borderRadius: 20,
            boxShadow: "0 2px 12px rgba(48,75,112,0.08)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "20px 24px",
              borderBottom: "1px solid rgba(48,75,112,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#304B70",
                margin: 0,
              }}
            >
              All Signups
            </h1>
            <span style={{ fontSize: "0.82rem", color: "#304B70", opacity: 0.5 }}>
              {contacts.length} total
            </span>
          </div>

          {contacts.length === 0 ? (
            <div style={{ padding: "60px 24px", textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>🥞</div>
              <p style={{ color: "#304B70", opacity: 0.5, fontSize: "0.95rem" }}>
                No signups yet. Share the landing page and they&apos;ll show up here.
              </p>
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "rgba(48,75,112,0.04)" }}>
                    {["Name", "Email", "Plan", "Signed Up"].map((h) => (
                      <th
                        key={h}
                        style={{
                          padding: "12px 20px",
                          textAlign: "left",
                          fontFamily: "var(--font-outfit)",
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          color: "#304B70",
                          opacity: 0.5,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[...contacts].reverse().map((c, i) => (
                    <tr
                      key={c.id}
                      style={{
                        borderTop: "1px solid rgba(48,75,112,0.06)",
                        background: i % 2 === 0 ? "white" : "rgba(48,75,112,0.015)",
                      }}
                    >
                      <td style={{ padding: "14px 20px", fontWeight: 600, color: "#304B70", fontSize: "0.92rem" }}>
                        {c.name}
                      </td>
                      <td style={{ padding: "14px 20px", color: "#304B70", opacity: 0.75, fontSize: "0.9rem" }}>
                        <a href={`mailto:${c.email}`} style={{ color: "inherit", textDecoration: "none" }}>
                          {c.email}
                        </a>
                      </td>
                      <td style={{ padding: "14px 20px" }}>
                        <PlanBadge plan={c.plan} />
                      </td>
                      <td style={{ padding: "14px 20px", color: "#304B70", opacity: 0.55, fontSize: "0.85rem", whiteSpace: "nowrap" }}>
                        {formatDate(c.createdAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div style={{ marginTop: 20, fontSize: "0.78rem", color: "#304B70", opacity: 0.4, textAlign: "center" }}>
          Data stored in <code>data/contacts.json</code> · Page auto-refreshes on each visit
        </div>
      </div>
    </div>
  );
}
