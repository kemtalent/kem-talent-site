import { useState } from "react";

const FONT_LINK_ID = "kem-fonts";

function useFonts() {
  if (typeof document !== "undefined" && !document.getElementById(FONT_LINK_ID)) {
    const link = document.createElement("link");
    link.id = FONT_LINK_ID;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=IBM+Plex+Sans:wght@400;500;600&display=swap";
    document.head.appendChild(link);
  }
}

const colors = {
  ink: "#182620",
  inkSoft: "#33463B",
  bone: "#EDEBE1",
  boneDeep: "#E1DECE",
  moss: "#3F6B4F",
  mossDeep: "#2C4E39",
  brass: "#B4863A",
  brassDeep: "#8E6A2A",
  cream: "#F7F5EC",
};

const displayFont = "'Fraunces', serif";
const bodyFont = "'IBM Plex Sans', sans-serif";

function NavBar({ page, setPage }) {
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
  ];
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: colors.bone,
        borderBottom: `1px solid ${colors.boneDeep}`,
      }}
    >
      <div
        className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4"
        style={{ fontFamily: bodyFont }}
      >
        <button
          onClick={() => setPage("home")}
          style={{
            fontFamily: displayFont,
            fontWeight: 600,
            fontSize: "1.35rem",
            color: colors.ink,
            letterSpacing: "0.01em",
          }}
        >
          KEM Talent
        </button>
        <div className="flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => setPage(l.id)}
              style={{
                color: page === l.id ? colors.moss : colors.inkSoft,
                fontWeight: page === l.id ? 600 : 500,
                fontSize: "0.95rem",
                borderBottom: page === l.id ? `2px solid ${colors.moss}` : "2px solid transparent",
                paddingBottom: "2px",
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Footer({ setPage }) {
  return (
    <footer style={{ backgroundColor: colors.ink, color: colors.cream, fontFamily: bodyFont }}>
      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <div style={{ fontFamily: displayFont, fontSize: "1.4rem", fontWeight: 600 }}>
            KEM Talent
          </div>
          <p style={{ color: "#B9C2BB", maxWidth: "26rem", marginTop: "0.75rem", fontSize: "0.95rem", lineHeight: 1.6 }}>
            Fractional recruiting and talent strategy for teams who need real hiring
            outcomes, not another vendor relationship.
          </p>
        </div>
        <div className="flex gap-12">
          <div>
            <div style={{ color: "#8FA396", fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Explore
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <button onClick={() => setPage("about")} style={{ textAlign: "left", fontSize: "0.95rem" }}>About</button>
              <button onClick={() => setPage("services")} style={{ textAlign: "left", fontSize: "0.95rem" }}>Services</button>
            </div>
          </div>
          <div>
            <div style={{ color: "#8FA396", fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Connect
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <a href="mailto:kelli@kemtalent.com" style={{ fontSize: "0.95rem", color: colors.cream }}>kelli@kemtalent.com</a>
              <a href="https://www.linkedin.com/company/kem-talent/" target="_blank" rel="noreferrer" style={{ fontSize: "0.95rem", color: colors.cream }}>LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const SERVICES = {
  partnership: [
    {
      name: "Embedded Recruiting",
      blurb:
        "Plugging into your team like a recruiter you hired, not a vendor you manage — running 2-3 open roles at a time inside your ATS, your Slack, your process.",
      fee: "Monthly retainer — $5,000/month",
      includes: [
        "Full-cycle ownership of active roles",
        "Weekly reporting on pipeline health",
        "Direct partnership with hiring managers",
      ],
    },
    {
      name: "Recruiting Operations & TA Systems",
      blurb:
        "A close look at your current hiring workflow and the data behind it — where candidates are dropping off, where the experience is falling flat, where recruiters are spending cycles that aren't producing better hires. Then a plan and, if you want it, the hands to build it.",
      fee: "$3,000/month stipend, or scoped project fee",
      includes: [
        "Workflow and funnel data audit",
        "Automation and tooling recommendations",
        "Implementation, if you want it done rather than just diagnosed",
      ],
    },
    {
      name: "Career Navigator",
      blurb:
        "Ongoing career advisory for people navigating what's next — a standing monthly check-in as the market, the role, or the plan evolves.",
      fee: "Monthly retainer — $300/mo",
      includes: [
        "Recurring 1:1 sessions",
        "Between session availability for questions and support",
        "Continuity as your search or strategy evolves",
      ],
    },
  ],
  project: [
    {
      name: "Contingent Search",
      blurb:
        "Traditional search, without the traditional markup. Partnering with companies on a contingent basis, with fees tied only to successful hires.",
      fee: "15% of first-year base salary",
      includes: [
        "Full-cycle sourcing through offer",
        "Below-market agency rate",
        "No fee unless you hire",
      ],
    },
    {
      name: "Sourcing Sprint",
      blurb:
        "A curated slate of vetted, top-tier candidates for a single role, delivered as a fixed-fee project. You run the process from there.",
      fee: "Flat project fee — $3,000",
      includes: [
        "Market map and outreach",
        "Screened, ranked candidate slate",
        "You own the process from there",
      ],
    },
    {
      name: "Employer Brand Audit",
      blurb:
        "An outside, expert read on how candidates actually experience your company — what's working, what's costing you offers, and what to fix first.",
      fee: "Flat project fee — $2,500",
      includes: [
        "Careers page, JD, and process review",
        "Candidate-experience findings report",
        "Prioritized recommendations",
      ],
    },
    {
      name: "Referral",
      blurb:
        "For companies that don't need a full search but value a trusted introduction. KEM Talent makes the connection, then steps aside while your team manages the interview process.",
      fee: "Flat 7% fee — below contingent rate",
      includes: [
        "Warm introduction only",
        "No process management",
        "Fee due only on hire",
      ],
    },
    {
      name: "Career Navigator",
      blurb:
        "A single 60- or 90-minute session for whatever's on your mind right now — resume review, offer evaluation, negotiating a title change, or just thinking out loud about what's next.",
      fee: "60 min — $100/hour · 90 min — $130",
      includes: [
        "One focused working session",
        "Resume, LinkedIn, or offer review on request",
        "No package required to start",
      ],
    },
  ],
};

function ServiceCard({ s, accent }) {
  return (
    <div
      style={{
        backgroundColor: colors.cream,
        border: `1px solid ${colors.boneDeep}`,
        borderRadius: "0.75rem",
        padding: "1.75rem",
      }}
    >
      <h3 style={{ fontFamily: displayFont, fontSize: "1.25rem", fontWeight: 600, color: colors.ink }}>
        {s.name}
      </h3>
      <p style={{ fontFamily: bodyFont, color: colors.inkSoft, fontSize: "0.95rem", lineHeight: 1.6, marginTop: "0.6rem" }}>
        {s.blurb}
      </p>
      <div
        style={{
          fontFamily: bodyFont,
          fontSize: "0.85rem",
          fontWeight: 600,
          color: accent,
          marginTop: "1rem",
        }}
      >
        {s.fee}
      </div>
      <ul style={{ marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
        {s.includes.map((i) => (
          <li key={i} style={{ fontFamily: bodyFont, fontSize: "0.85rem", color: colors.inkSoft, display: "flex", gap: "0.5rem" }}>
            <span style={{ color: accent }}>—</span>
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HomePage({ setPage }) {
  const [mode, setMode] = useState("partnership");
  const accent = mode === "partnership" ? colors.moss : colors.brass;
  const list = SERVICES[mode].slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: colors.bone }}>
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div
              style={{
                fontFamily: bodyFont,
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: colors.moss,
                fontWeight: 600,
              }}
            >
              Fractional Recruiting & Talent Strategy
            </div>
            <h1
              style={{
                fontFamily: displayFont,
                fontWeight: 600,
                fontSize: "3rem",
                lineHeight: 1.08,
                color: colors.ink,
                marginTop: "1rem",
              }}
            >
              Talent strategy with sleeves rolled up.
            </h1>
            <p style={{ fontFamily: bodyFont, color: colors.inkSoft, fontSize: "1.05rem", lineHeight: 1.7, marginTop: "1.5rem", maxWidth: "32rem" }}>
              KEM Talent partners with growing companies that need more than another
              recruiter. Strategic hiring guidance, hands-on execution, and an experience
              that candidates remember for the right reasons.
            </p>
            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setPage("services")}
                style={{
                  backgroundColor: colors.ink,
                  color: colors.cream,
                  padding: "0.85rem 1.75rem",
                  borderRadius: "999px",
                  fontFamily: bodyFont,
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                See services
              </button>
              <button
                onClick={() => setPage("about")}
                style={{
                  border: `1px solid ${colors.ink}`,
                  color: colors.ink,
                  padding: "0.85rem 1.75rem",
                  borderRadius: "999px",
                  fontFamily: bodyFont,
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                Learn more
              </button>
            </div>
          </div>
          <div
            style={{
              backgroundColor: colors.ink,
              borderRadius: "1rem",
              padding: "2.25rem",
              color: colors.cream,
            }}
          >
            <div style={{ fontFamily: displayFont, fontSize: "1.5rem", fontWeight: 600 }}>
              Thoughtful hiring.
            </div>
            <p style={{ fontFamily: bodyFont, color: "#C7D0C9", fontSize: "0.95rem", lineHeight: 1.7, marginTop: "0.75rem" }}>
              The best recruiting doesn't feel transactional. It creates clarity for hiring
              teams, confidence for candidates, and momentum for growing companies.
            </p>
            <div style={{ height: "1px", backgroundColor: "#3A4B41", margin: "1.5rem 0" }} />
            <div style={{ fontFamily: bodyFont, color: "#8FA396", fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              The KEM Talent approach
            </div>
            <ul style={{ marginTop: "0.6rem", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
              {[
                "Thoughtful search.",
                "Transparent communication.",
                "Candidate experiences that strengthen your brand.",
                "Partnership built around judgment — not just process.",
              ].map((line) => (
                <li key={line} style={{ fontFamily: bodyFont, color: "#C7D0C9", fontSize: "0.95rem", lineHeight: 1.5 }}>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Signature: partnership / project toggle */}
      <section style={{ backgroundColor: colors.cream }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 style={{ fontFamily: displayFont, fontSize: "2rem", fontWeight: 600, color: colors.ink }}>
                Two ways to work together
              </h2>
              <p style={{ fontFamily: bodyFont, color: colors.inkSoft, fontSize: "1rem", marginTop: "0.5rem", maxWidth: "34rem" }}>
                Some engagements run best as a standing partnership. Others are a clean
                one-off project. KEM Talent is built to do both.
              </p>
            </div>
            <div
              style={{
                display: "inline-flex",
                backgroundColor: colors.bone,
                borderRadius: "999px",
                padding: "0.3rem",
                border: `1px solid ${colors.boneDeep}`,
              }}
            >
              {["partnership", "project"].map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  style={{
                    fontFamily: bodyFont,
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    padding: "0.6rem 1.4rem",
                    borderRadius: "999px",
                    backgroundColor: mode === m ? (m === "partnership" ? colors.moss : colors.brass) : "transparent",
                    color: mode === m ? colors.cream : colors.inkSoft,
                  }}
                >
                  {m === "partnership" ? "Ongoing Partnership" : "One-Off Project"}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {list.map((s) => (
              <ServiceCard key={s.name} s={s} accent={accent} />
            ))}
          </div>
          <div className="mt-8">
            <button
              onClick={() => setPage("services")}
              style={{ fontFamily: bodyFont, fontWeight: 600, color: accent, fontSize: "0.95rem" }}
            >
              See all {mode === "partnership" ? "partnership" : "project"} services →
            </button>
          </div>
        </div>
      </section>

      {/* Credibility strip */}
      <section style={{ backgroundColor: colors.bone, borderTop: `1px solid ${colors.boneDeep}` }}>
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
          {[
            {
              h: "Healthtech-native",
              p: "Experience building recruiting from the ground up inside healthtech startups, including through 2 acquisitions.",
            },
            {
              h: "Full-cycle, all functions of the org",
              p: "Technical, commercial/GTM, corporate, clinical and leadership hiring alike — not a specialist in one lane.",
            },
            {
              h: "Systems, not just search",
              p: "Fluent in the tools and the data behind hiring: Juicebox, Ashby, Greenhouse, Lever, and the funnel metrics that matter to you.",
            },
          ].map((b) => (
            <div key={b.h}>
              <div style={{ fontFamily: displayFont, fontWeight: 600, fontSize: "1.15rem", color: colors.ink }}>
                {b.h}
              </div>
              <p style={{ fontFamily: bodyFont, color: colors.inkSoft, fontSize: "0.9rem", lineHeight: 1.6, marginTop: "0.5rem" }}>
                {b.p}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: colors.ink }}>
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 style={{ fontFamily: displayFont, fontWeight: 600, fontSize: "2.25rem", color: colors.cream }}>
            Let's talk about what you're hiring for.
          </h2>
          <p style={{ fontFamily: bodyFont, color: "#C7D0C9", marginTop: "0.75rem" }}>
            <a href="mailto:kelli@kemtalent.com" style={{ color: "#C7D0C9" }}>kelli@kemtalent.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}

function AboutPage() {
  const timeline = [
    {
      org: "Consumer Reports",
      role: "Early career",
      desc: "Where Kelli cut her teeth in HR as Chief of Staff to the talented People leaders at this storied organization.",
    },
    {
      org: "ZRG Partners",
      role: "Executive Search",
      desc: "Retained search across media, nonprofit, financial services, and retail — learning the discipline of a true search process.",
    },
    {
      org: "RubiconMD",
      role: "Founding Recruiter → Director, HRBP",
      desc: "First dedicated recruiter, progressing from Manager to Associate Director to Director HRBP. Present through the company's acquisition by Oak Street Health, later CVS Health.",
    },
    {
      org: "IntusCare",
      role: "Founding Recruiter | Sr Dir, Talent Acquisition & Strategy",
      desc: "Built and led the talent function through a period of rapid growth.",
    },
  ];

  return (
    <div style={{ backgroundColor: colors.cream }}>
      <section style={{ backgroundColor: colors.bone }}>
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-16">
          <div
            style={{
              fontFamily: bodyFont,
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: colors.moss,
              fontWeight: 600,
            }}
          >
            About
          </div>
          <div style={{ fontFamily: displayFont, fontWeight: 600, fontSize: "1.5rem", color: colors.ink, marginTop: "0.9rem" }}>
            Kelli Mackiewicz
          </div>
          <div style={{ fontFamily: bodyFont, fontWeight: 600, fontSize: "0.9rem", color: colors.brassDeep, marginTop: "0.15rem" }}>
            Principal, KEM Talent
          </div>
          <h1 style={{ fontFamily: displayFont, fontWeight: 600, fontSize: "2.5rem", color: colors.ink, marginTop: "1.25rem" }}>
            She's sat on the inside of the hiring process — as the whole department.
          </h1>
          <p style={{ fontFamily: bodyFont, color: colors.inkSoft, fontSize: "1.05rem", lineHeight: 1.75, marginTop: "1.25rem" }}>
            KEM Talent exists because most companies between 25 and a few hundred people
            don't need a full talent acquisition department — they may need someone who's
            already built one, who can walk in and run recruiting like it's their own. That's
            what Kelli has done twice now, as the founding or first dedicated recruiter inside
            fast-moving healthtech startups.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 style={{ fontFamily: displayFont, fontWeight: 600, fontSize: "1.6rem", color: colors.ink }}>
            Where Kelli has built
          </h2>
          <div className="flex flex-col mt-8" style={{ borderLeft: `2px solid ${colors.boneDeep}` }}>
            {timeline.map((t) => (
              <div key={t.org} style={{ paddingLeft: "1.5rem", paddingBottom: "2rem", position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    left: "-6.5px",
                    top: "0.4rem",
                    width: "11px",
                    height: "11px",
                    borderRadius: "999px",
                    backgroundColor: colors.moss,
                  }}
                />
                <div style={{ fontFamily: displayFont, fontWeight: 600, fontSize: "1.2rem", color: colors.ink }}>
                  {t.org}
                </div>
                <div style={{ fontFamily: bodyFont, fontWeight: 600, fontSize: "0.9rem", color: colors.brassDeep, marginTop: "0.15rem" }}>
                  {t.role}
                </div>
                <p style={{ fontFamily: bodyFont, color: colors.inkSoft, fontSize: "0.95rem", lineHeight: 1.65, marginTop: "0.5rem", maxWidth: "34rem" }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: colors.ink }}>
        <div className="max-w-4xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 style={{ fontFamily: displayFont, fontWeight: 600, fontSize: "1.4rem", color: colors.cream }}>
              What makes Kelli different
            </h2>
            <ul className="flex flex-col gap-4 mt-5">
              {[
                "Founding and sole-recruiter experience in healthtech — she's done the job with no team behind her.",
                "Full-cycle range across all functions (commercial, technical, corporate) and levels (analyst and individual contributor through executive leadership).",
                "She treats each candidate interaction as an opportunity to shape reputation and build advocates, not detractors.",
              ].map((t) => (
                <li key={t} style={{ display: "flex", gap: "0.75rem" }}>
                  <span style={{ color: colors.brass, fontFamily: displayFont, fontWeight: 600 }}>—</span>
                  <span style={{ fontFamily: bodyFont, color: "#D7DED8", fontSize: "0.95rem", lineHeight: 1.6 }}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 style={{ fontFamily: displayFont, fontWeight: 600, fontSize: "1.4rem", color: colors.cream }}>
              Tools Kelli works in
            </h2>
            <div className="flex flex-wrap gap-2 mt-5">
              {["Juicebox AI", "Ashby", "Greenhouse", "Lever", "Radford / Aon", "LinkedIn Recruiter", "Claude", "ChatGPT", "Copilot", "Motion"].map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: bodyFont,
                    fontSize: "0.85rem",
                    color: colors.cream,
                    border: "1px solid #3A4B41",
                    borderRadius: "999px",
                    padding: "0.4rem 0.9rem",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServicesPage() {
  return (
    <div style={{ backgroundColor: colors.cream }}>
      <section style={{ backgroundColor: colors.bone }}>
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-14">
          <div
            style={{
              fontFamily: bodyFont,
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: colors.moss,
              fontWeight: 600,
            }}
          >
            Services
          </div>
          <h1 style={{ fontFamily: displayFont, fontWeight: 600, fontSize: "2.5rem", color: colors.ink, marginTop: "0.75rem" }}>
            Ongoing partnerships, and clean one-off projects.
          </h1>
          <p style={{ fontFamily: bodyFont, color: colors.inkSoft, fontSize: "1.05rem", lineHeight: 1.7, marginTop: "1rem", maxWidth: "38rem" }}>
            Every engagement below can flex between a standing retainer and a fixed-fee
            project — pricing here is illustrative so you know roughly what to expect before
            talking specifics.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 style={{ fontFamily: displayFont, fontWeight: 600, fontSize: "1.6rem", color: colors.moss }}>
            Ongoing Partnership
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {SERVICES.partnership.map((s) => (
              <ServiceCard key={s.name} s={s} accent={colors.moss} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: colors.bone }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 style={{ fontFamily: displayFont, fontWeight: 600, fontSize: "1.6rem", color: colors.brassDeep }}>
            One-Off Project
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {SERVICES.project.map((s) => (
              <ServiceCard key={s.name} s={s} accent={colors.brassDeep} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <p style={{ fontFamily: bodyFont, color: colors.inkSoft, fontSize: "0.95rem" }}>
            Not sure which fits? <a href="mailto:kelli@kemtalent.com" style={{ color: colors.moss, fontWeight: 600 }}>kelli@kemtalent.com</a> — happy to talk through it.
          </p>
        </div>
      </section>
    </div>
  );
}

export default function KemTalentSite() {
  useFonts();
  const [page, setPage] = useState("home");

  return (
    <div style={{ backgroundColor: colors.cream, minHeight: "100vh" }}>
      <NavBar page={page} setPage={setPage} />
      {page === "home" && <HomePage setPage={setPage} />}
      {page === "about" && <AboutPage />}
      {page === "services" && <ServicesPage />}
      <Footer setPage={setPage} />
    </div>
  );
}
