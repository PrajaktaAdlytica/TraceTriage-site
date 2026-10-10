import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { products, personas, events, pageMeta, commonFAQ } from "./content";
import fixture from "./fixture.json";
gsap.registerPlugin(ScrollTrigger);
export const Experience = createContext(null);
export const useExperience = () => useContext(Experience);
export function ExperienceProvider({ children }) {
  const [motion, setMotion] = useState(true),
    [decision, setDecision] = useState({ state: "pending", reason: "" }),
    [osReduced, setOsReduced] = useState(false);
  const lenis = useRef(null);
  const loc = useLocation();
  useEffect(() => {
    const q = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setOsReduced(q.matches);
    update();
    q.addEventListener("change", update);
    return () => q.removeEventListener("change", update);
  }, []);
  const enabled = motion && !osReduced;
  useEffect(() => {
    document.documentElement.dataset.motion = enabled ? "on" : "off";
    return () => delete document.documentElement.dataset.motion;
  }, [enabled]);
  useEffect(() => {
    if (!enabled) return;
    const l = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      syncTouch: false,
      anchors: true,
    });
    lenis.current = l;
    l.on("scroll", ScrollTrigger.update);
    const tick = (t) => l.raf(t * 1000);
    gsap.ticker.add(tick);
    return () => {
      gsap.ticker.remove(tick);
      l.destroy();
      lenis.current = null;
    };
  }, [enabled]);
  useEffect(() => {
    document.title =
      (pageMeta[loc.pathname]?.[0] || "Page not found") + " | TraceTriage";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        pageMeta[loc.pathname]?.[1] || "TraceTriage incident response.",
      );
    lenis.current?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
    const r = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(r);
  }, [loc.pathname]);
  return (
    <Experience.Provider
      value={{
        motion: enabled,
        toggleMotion: () => setMotion((v) => !v),
        decision,
        setDecision,
        lenis,
      }}
    >
      {children}
    </Experience.Provider>
  );
}
export function usePageMotion(ref) {
  const { motion } = useExperience();
  const { pathname } = useLocation();
  useEffect(() => {
    if (!motion || !ref.current) return;
    let ctx;
    const r = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        gsap.utils.toArray("[data-reveal]").forEach((el) =>
          gsap.from(el, {
            y: 32,
            opacity: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 94%", once: true },
          }),
        );
        gsap.utils.toArray("[data-parallax]").forEach((el) =>
          gsap.fromTo(
            el,
            { yPercent: -5 },
            {
              yPercent: 5,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            },
          ),
        );
        gsap.utils.toArray(".diagram-draw").forEach((el) => {
          const length = el.getTotalLength?.() || 800;
          gsap.fromTo(
            el,
            { strokeDasharray: length, strokeDashoffset: length },
            {
              strokeDashoffset: 0,
              duration: 1.6,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: el.closest("section") || el,
                start: "top 75%",
                once: true,
              },
            },
          );
        });
      }, ref);
      ScrollTrigger.refresh();
    });
    return () => {
      cancelAnimationFrame(r);
      ctx?.revert();
    };
  }, [pathname, motion]);
}
export const A = ({
  to = "/request-demo",
  children = "Request a tabletop",
  secondary = false,
  className = "",
}) => (
  <Link
    className={
      "button " + (secondary ? "secondary" : "primary") + " " + className
    }
    to={to}
  >
    {children}
    <span aria-hidden="true">↗</span>
  </Link>
);
export const TextLink = ({ to, children }) => (
  <Link className="text-link" to={to}>
    {children}
    <span aria-hidden="true">→</span>
  </Link>
);
export const Icon = ({ name, size = 24 }) => (
  <img
    className="icon"
    src={"/brand/icons/" + name + ".svg"}
    width={size}
    height={size}
    alt=""
  />
);
export function Heading({ lines, as = "h1", className = "" }) {
  const Tag = as;
  return (
    <Tag className={"display " + className}>
      {lines.map((l, i) => (
        <span key={l}>
          {i === lines.length - 1 && lines.length > 1 ? <em>{l}</em> : l}
        </span>
      ))}
    </Tag>
  );
}
const menus = {
  Products: [
    ["Overview", "/products", "Five connected views"],
    ...products.map((p) => [p.name, "/products/" + p.slug, p.job]),
  ],
  Solutions: personas.map((p) => [
    p.name,
    "/solutions/" + p.slug,
    p.description,
  ]),
  Resources: [
    ["Field guides", "/resources", "Practical incident resources"],
    ["Evaluation scorecard", "/results", "Evidence before outcomes"],
    ["Explore the incident", "/demo", "One write, end to end"],
  ],
  Company: [
    ["About TraceTriage", "/about", "A more accountable workflow"],
    ["Trust & governance", "/trust", "Authority and data boundaries"],
    ["Contact", "/contact", "Start a useful conversation"],
  ],
};
export function Nav() {
  const { pathname } = useLocation();
  const dark = pathname === "/" || pathname === "/about";
  const [open, setOpen] = useState(null),
    [mobile, setMobile] = useState(false),
    [scrolled, setScrolled] = useState(false);
  const nav = useRef(null),
    toggle = useRef(null);
  useEffect(() => {
    setOpen(null);
    setMobile(false);
  }, [pathname]);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 35);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    const handle = (e) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobile(false);
        (mobile
          ? toggle.current
          : nav.current?.querySelector("[aria-expanded=true]")
        )?.focus();
      }
      if (e.key === "Tab" && mobile) {
        const els = [...nav.current.querySelectorAll("a,button")].filter(
          (el) => el.getClientRects().length,
        );
        if (e.shiftKey && document.activeElement === els[0]) {
          e.preventDefault();
          els.at(-1)?.focus();
        } else if (!e.shiftKey && document.activeElement === els.at(-1)) {
          e.preventDefault();
          els[0]?.focus();
        }
      }
    };
    const click = (e) => {
      if (!nav.current?.contains(e.target)) setOpen(null);
    };
    document.addEventListener("keydown", handle);
    document.addEventListener("pointerdown", click);
    return () => {
      document.removeEventListener("keydown", handle);
      document.removeEventListener("pointerdown", click);
    };
  }, [mobile]);
  useEffect(() => {
    if (!mobile) return;
    const prior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prior;
    };
  }, [mobile]);
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <nav
        ref={nav}
        className={
          "site-nav " +
          (dark && !scrolled && !mobile ? "over-hero" : "solid") +
          (mobile ? " mobile-open" : "")
        }
        aria-label="Main navigation"
      >
        <Link to="/" className="brand" aria-label="TraceTriage home">
          <img
            src={
              "/brand/logo/lockup-horizontal-" +
              (dark && !scrolled && !mobile ? "reverse" : "primary") +
              ".svg"
            }
            width="245"
            height="50"
            alt="TraceTriage"
          />
        </Link>
        <div className="desktop-links">
          {[
            "Products",
            "Platform",
            "Solutions",
            "Pricing",
            "Resources",
            "Company",
          ].map((label) =>
            menus[label] ? (
              <button
                key={label}
                aria-expanded={open === label}
                aria-controls={"menu-" + label}
                onClick={() => setOpen(open === label ? null : label)}
              >
                {label}
                <span aria-hidden="true">⌄</span>
              </button>
            ) : (
              <Link key={label} to={"/" + label.toLowerCase()}>
                {label}
              </Link>
            ),
          )}
        </div>
        <div className="nav-actions">
          <Link className="sign-in" to="/sign-in">
            Sign in
          </Link>
          <A className="nav-cta" />
        </div>
        <button
          ref={toggle}
          className="menu-toggle"
          onClick={() => setMobile(!mobile)}
          aria-label={mobile ? "Close navigation" : "Open navigation"}
          aria-expanded={mobile}
        >
          <span>{mobile ? "Close" : "Menu"}</span>
          <span aria-hidden="true">{mobile ? "×" : "≡"}</span>
        </button>
        {open && !mobile && (
          <div className="mega-menu" id={"menu-" + open}>
            <div className="mega-intro">
              <span className="eyebrow">{open}</span>
              <h3>
                {open === "Products"
                  ? "A different view. A clearer picture."
                  : "Keep the whole incident in view."}
              </h3>
              <TextLink
                to={open === "Company" ? "/about" : "/" + open.toLowerCase()}
              >
                Explore {open.toLowerCase()}
              </TextLink>
            </div>
            <div className="mega-items">
              {menus[open].map(([name, to, desc]) => (
                <Link to={to} key={to}>
                  <strong>{name}</strong>
                  <span>{desc}</span>
                  <i aria-hidden="true">↗</i>
                </Link>
              ))}
            </div>
          </div>
        )}
        {mobile && (
          <div className="mobile-menu" data-lenis-prevent>
            {[
              "Products",
              "Platform",
              "Solutions",
              "Pricing",
              "Resources",
              "Company",
            ].map((label) => (
              <div key={label}>
                <Link
                  to={
                    label === "Company" ? "/about" : "/" + label.toLowerCase()
                  }
                >
                  {label}
                </Link>
                {menus[label]?.map(([name, to]) => (
                  <Link className="sub-nav" key={to} to={to}>
                    {name}
                  </Link>
                ))}
              </div>
            ))}
            <Link to="/sign-in">Sign in</Link>
            <A />
          </div>
        )}
      </nav>
    </>
  );
}
export function Footer() {
  const { motion, toggleMotion } = useExperience();
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link to="/" className="footer-brand">
          <img
            src="/brand/logo/lockup-horizontal-reverse.svg"
            width="360"
            height="74"
            alt="TraceTriage"
          />
        </Link>
        <div>
          <p className="display">
            Start with one
            <br />
            <em>scoped incident.</em>
          </p>
          <A />
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-intro">
          <p>
            Original context.
            <br />
            Accountable outcomes.
          </p>
          <div className="social-icons">
            <span
              tabIndex="0"
              aria-label="LinkedIn — company profile not connected"
              title="Company profile not connected"
            >
              <img
                src="/brand/icons/social/linkedin-InBug-White.png"
                alt="LinkedIn"
              />
            </span>
            <span
              tabIndex="0"
              aria-label="Crunchbase — company profile not connected"
              title="Company profile not connected"
            >
              <img
                src="/brand/icons/social/crunchbase-official-webclip.png"
                alt="Crunchbase"
              />
            </span>
          </div>
        </div>
        <div>
          <h4>Products</h4>
          {products.map((p) => (
            <Link key={p.slug} to={"/products/" + p.slug}>
              {p.short}
            </Link>
          ))}
          <Link to="/platform">Platform</Link>
        </div>
        <div>
          <h4>Solutions</h4>
          {personas.map((p) => (
            <Link key={p.slug} to={"/solutions/" + p.slug}>
              {p.name}
            </Link>
          ))}
          <Link to="/integrations">Evidence sources</Link>
          <Link to="/pricing">Pricing</Link>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/why-change">Why TraceTriage</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/results">Evaluation</Link>
          <Link to="/demo">Interactive walkthrough</Link>
          <Link to="/request-demo">Request a tabletop</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/trust">Trust</Link>
          <Link to="/legal/privacy">Privacy</Link>
          <Link to="/legal/terms">Terms</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 TraceTriage</span>
        <span>Agent incident response</span>
        <button onClick={toggleMotion} aria-pressed={!motion}>
          Motion {motion ? "on" : "off"}{" "}
          <span aria-hidden="true">{motion ? "◉" : "○"}</span>
        </button>
      </div>
    </footer>
  );
}
export function Hero({
  eyebrow,
  lines,
  description,
  children,
  theme = "chalk",
  image = false,
  number = "01",
  actions = true,
  className = "",
}) {
  const { pathname } = useLocation();
  const scenery =
    /^(\/platform|\/integrations|\/pricing|\/request-demo|\/contact|\/demo)/.test(
      pathname,
    )
      ? "corridor"
      : "forest";
  return (
    <section
      data-scenery={scenery}
      className={
        "page-hero " +
        (scenery ? "scenic-hero scenic-" + scenery + " " : "") +
        theme +
        (image ? " image-hero" : "") +
        " " +
        className
      }
    >
      <div className="container hero-grid">
        <div data-reveal>
          <p className="eyebrow">{eyebrow}</p>
          <Heading lines={lines} />
          <p className="lead">{description}</p>
          {actions && (
            <div className="button-row">
              <A />
              <A to="/demo" secondary>
                Explore the incident
              </A>
            </div>
          )}
        </div>
        <div className="hero-visual" data-reveal>
          {children}
          {React.isValidElement(children) && children.type === Scene && (
            <p className="data-notice hero-example-note">
              Oakridge Services · synthetic example
            </p>
          )}
        </div>
      </div>
      <div className="hero-bottom container">
        <span>{number} / Follow the evidence</span>
        <a href="#next">
          Continue <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
export function SectionHead({ label, title, description }) {
  return (
    <div className="section-head" data-reveal>
      <p className="eyebrow">{label}</p>
      <h2 className="display">{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
export function CTA({
  title = "A useful evaluation starts with your workflow.",
  description = "Bring the agent, the system it can write to, and the people who own the decision.",
}) {
  return (
    <section className="cta-section apricot">
      <div className="container cta-grid" data-reveal>
        <div>
          <span className="eyebrow">The next step</span>
          <h2 className="display">{title}</h2>
          <p>{description}</p>
        </div>
        <A />
      </div>
    </section>
  );
}
export function FAQ({ items = commonFAQ }) {
  return (
    <section className="section container faq-section">
      <SectionHead label="Good questions" title="Get the whole picture." />
      <div className="faq-list">
        {items.map(([q, a], i) => (
          <details key={q}>
            <summary>
              <span className="faq-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              {q}
              <span className="faq-plus" aria-hidden="true">
                +
              </span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
export function Motif({ type, index = 0 }) {
  const c = "currentColor";
  return (
    <svg className="motif" viewBox="0 0 150 100" aria-hidden="true">
      {type === "layers" ? (
        <g fill="none" stroke={c} strokeWidth="1.5">
          <path className="diagram-draw" d="M15 40 75 8l60 32-60 33Z" />
          <path d="m15 55 60 32 60-32m-120 15 60 25 60-25" />
        </g>
      ) : type === "review" ? (
        <g>
          <path
            className="diagram-draw"
            d="m10 78 35-28 27 10 30-32 38-16"
            fill="none"
            stroke={c}
            strokeWidth="1.5"
          />
          {[
            [10, 78],
            [45, 50],
            [72, 60],
            [102, 28],
            [140, 12],
          ].map(([x, y], i) => (
            <circle
              key={x}
              cx={x}
              cy={y}
              r="5"
              fill={i % 2 ? "#F7F4EF" : "#F3D3BF"}
            />
          ))}
        </g>
      ) : type === "checkpoint" ? (
        <g fill="none" stroke={c} strokeWidth="1.5">
          <path className="diagram-draw" d="M18 14h48v72H18Z" />
          <path d="M78 50h60" strokeDasharray="3 5" />
          <circle cx="66" cy="50" r="11" fill="#EDE7DF" />
        </g>
      ) : type === "signal" ? (
        <g stroke={c}>
          {[18, 32, 46, 60, 74, 88, 102, 116, 130].map((x, i) => (
            <path
              key={x}
              d={`M${x} ${30 - Math.abs(4 - i) * 2}v${40 + Math.abs(4 - i) * 4}`}
              opacity={i === 4 ? 1 : 0.35}
              strokeWidth={i === 4 ? 2 : 1}
            />
          ))}
        </g>
      ) : (
        <g fill="none" stroke={c} strokeWidth="1.5">
          <path
            className="diagram-draw"
            d="M40 25h52l15 15v55H40ZM92 25v15h15M50 50h36M50 60h36M50 70h36M50 80h25"
          />
          <path d="M50 15h52l15 15v55M60 5h52l15 15v55" opacity=".5" />
        </g>
      )}
    </svg>
  );
}
export function Suite({ compact = false }) {
  return (
    <section
      id="suite"
      className={"suite-section petrol " + (compact ? "compact" : "")}
    >
      <div className="container">
        <SectionHead
          label="Five connected views"
          title={
            <>
              Different angles.
              <br />
              <em>A clearer picture.</em>
            </>
          }
          description="From the first trace to the next evaluation. Each view owns a different part of the response."
        />
        <div className="suite-grid">
          {products.map((p) => (
            <Link
              className="suite-panel"
              to={"/products/" + p.slug}
              key={p.slug}
            >
              <span className="suite-number">{p.number}</span>
              <Motif type={p.icon} />
              <h3>{p.name}</h3>
              <p>{p.job}</p>
              <span className="suite-arrow">
                Explore <b aria-hidden="true">↗</b>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Coverage({ onFilter, filter = "all" }) {
  return (
    <div className="coverage-chart">
      <div className="chart-heading">
        <h3>Evidence coverage</h3>
        <span>12 accounts</span>
      </div>
      {[
        ["observed", 8, "Observed writes"],
        ["inferred", 3, "Inferred from traces"],
        ["awaiting", 1, "Awaiting verification"],
      ].map(([key, n, label]) => (
        <button
          type="button"
          key={key}
          className={"bar-row " + (filter === key ? "selected" : "")}
          aria-pressed={filter === key}
          onClick={() => onFilter?.(filter === key ? "all" : key)}
          disabled={!onFilter}
        >
          <span>{label}</span>
          <span className="bar-track">
            <i
              className={"bar-fill " + key}
              style={{ width: (n / 12) * 100 + "%" }}
            />
          </span>
          <strong>{n}</strong>
        </button>
      ))}
      <p className="chart-caption">Unique accounts · scope of the example</p>
    </div>
  );
}
export function Accounts({ limit = 12, filter = "all", interactive = true }) {
  const accounts = fixture.accounts
    .filter((a) => filter === "all" || a.evidence_status === filter)
    .slice(0, limit);
  return (
    <div
      className="table-region"
      tabIndex="0"
      role="region"
      aria-label="Account evidence reconciliation"
    >
      <table className="evidence-table">
        <thead>
          <tr>
            <th>Account</th>
            <th>Before</th>
            <th>Written tier</th>
            <th>Evidence</th>
            <th>Owner</th>
            <th>
              <span className="sr-only">Inspect</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((a) => (
            <tr key={a.id}>
              <th scope="row">
                {interactive ? (
                  <Link to={"/demo/incidents/INC-027/impact/" + a.id}>
                    {a.display_id}
                  </Link>
                ) : (
                  a.display_id
                )}
              </th>
              <td>Standard</td>
              <td>
                {a.evidence_status === "awaiting" ? "Unverified" : "Enterprise"}
              </td>
              <td>
                <span className={"status " + a.evidence_status}>
                  {a.evidence_status === "awaiting"
                    ? "Awaiting verification"
                    : a.evidence_status}
                </span>
                {a.source_id && <small>{a.source_id}</small>}
              </td>
              <td>{a.owner ? "Maya Chen" : "Unresolved"}</td>
              <td>
                {interactive && (
                  <Link
                    to={"/demo/incidents/INC-027/impact/" + a.id}
                    aria-label={"Inspect " + a.display_id}
                  >
                    ↗
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!accounts.length && <p>No accounts match this filter.</p>}
    </div>
  );
}
export function EvidenceFlow() {
  return (
    <figure className="evidence-flow">
      <figcaption className="eyebrow">
        Context carried into the decision
      </figcaption>
      <ol>
        {[
          ["document", "Trace TR-27", "Agent session & tool calls"],
          ["database", "Write batch WB-3", "Associated account writes"],
          ["users", "12 accounts", "Scope & evidence certainty"],
          ["owner", "Owner", "Responsibility & authority"],
          ["checkpoint", "Human review", "Proposal & deliberate decision"],
        ].map(([icon, t, d], i) => (
          <li key={t}>
            <div className={"flow-node " + (i === 4 ? "human" : "")}>
              <Icon name={icon} size={28} />
            </div>
            <strong>{t}</strong>
            <p>{d}</p>
            {i < 4 && (
              <span className="flow-arrow" aria-hidden="true">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}
export function EvidenceBlock() {
  const [filter, setFilter] = useState("all");
  return (
    <section className="section evidence-section" id="evidence">
      <div className="container">
        <div className="evidence-head" data-reveal>
          <div>
            <span className="eyebrow">An incident, made inspectable</span>
            <h2 className="display">
              The consequences,
              <br />
              <em>in plain sight.</em>
            </h2>
            <p className="data-notice">Oakridge Services · synthetic example</p>
          </div>
          <Coverage onFilter={setFilter} filter={filter} />
        </div>
        <EvidenceFlow />
        <div className="ledger-heading">
          <h3>CRM tier reconciliation</h3>
          <Link to="/demo/incidents/INC-027/impact">
            View all accounts <span aria-hidden="true">→</span>
          </Link>
        </div>
        <Accounts limit={4} filter={filter} />
        <div className="evidence-summary">
          <span>
            {filter === "all"
              ? "12 accounts in scope"
              : filter === "observed"
                ? "8 observed writes"
                : filter === "inferred"
                  ? "3 inferred relationships"
                  : "1 awaiting verification"}
          </span>
          <Link to="/demo/incidents/INC-027/approval">
            <span aria-hidden="true">◷</span> Containment proposal · human
            review required <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
export function Scene({ kind = "architecture", stage = 4, large = false }) {
  const [selected, setSelected] = useState(null);
  return (
    <div className={"scene scene-" + kind + (large ? " large" : "")}>
      {kind === "desk" ? (
        <>
          <div className="workbench-header">
            <span>
              <i />
              Incident INC-027
            </span>
            <span className="status awaiting">Review required</span>
          </div>
          <div className="workbench-title">
            <span className="eyebrow">Oakridge Services</span>
            <h3>CRM tier mutation</h3>
            <p>
              support-agent-01 <span>→</span> update_accounts
            </p>
          </div>
          <div className="record-lines">
            {[
              ["Trace", "TR-27"],
              ["Write batch", "WB-3"],
              ["Account scope", "12 accounts"],
              ["Decision", "Pending review"],
            ].map(([k, v], i) => (
              <div key={k} className={i <= stage ? "active" : ""}>
                <span>{k}</span>
                <strong>{v}</strong>
                <span aria-hidden="true">↗</span>
              </div>
            ))}
          </div>
          <div className="source-excerpt">
            <span>Source event · evt-0001</span>
            <code>{'{ "account": "A-001", "tier": "Enterprise" }'}</code>
          </div>
        </>
      ) : kind === "impact" ? (
        <>
          <div className="scene-heading">
            <span className="eyebrow">Write batch WB-3</span>
            <h3>
              Twelve records.
              <br />
              Three evidence states.
            </h3>
          </div>
          <div className="scope-connector" aria-hidden="true">
            <span>TR-27</span>
            <svg viewBox="0 0 500 36">
              <path
                className="diagram-draw"
                d="M250 0v16H48v20m202-20v20m0-20h202v20"
              />
            </svg>
          </div>
          <div className="account-map">
            {fixture.accounts.map((a, i) => (
              <button
                key={a.id}
                className={
                  a.evidence_status + (selected === a.id ? " selected" : "")
                }
                onClick={() => setSelected(selected === a.id ? null : a.id)}
                aria-pressed={selected === a.id}
              >
                <strong>{a.display_id}</strong>
                <small>
                  {a.evidence_status === "awaiting"
                    ? "Awaiting"
                    : a.evidence_status}
                </small>
              </button>
            ))}
          </div>
          <div className="scope-caption">
            {selected ? (
              <>
                <strong>{selected}</strong> ·{" "}
                {fixture.accounts.find((a) => a.id === selected)?.source_id ||
                  "Source not verified"}{" "}
                <Link to={"/demo/incidents/INC-027/impact/" + selected}>
                  Inspect ↗
                </Link>
              </>
            ) : (
              "Select a record to inspect its source."
            )}
          </div>
        </>
      ) : kind === "approval" ? (
        <>
          <div className="proposal-top">
            <span className="eyebrow">Decision boundary</span>
            <Icon name="checkpoint" size={40} />
          </div>
          <h3>
            Prepared for
            <br />
            <em>human review.</em>
          </h3>
          <div className="proposal-record">
            <div>
              <span>Scope</span>
              <strong>Write batch WB-3</strong>
            </div>
            <div>
              <span>Reviewer</span>
              <strong>Maya Chen</strong>
            </div>
            <div>
              <span>Prerequisite</span>
              <strong>Verified scope & authority</strong>
            </div>
          </div>
          <div className="pending-line">
            <span aria-hidden="true">◷</span>Proposal pending · no action
            executed
          </div>
          <TextLink to="/demo/incidents/INC-027/approval">
            Inspect the proposal
          </TextLink>
        </>
      ) : kind === "timeline" ? (
        <>
          <div className="scene-heading">
            <span className="eyebrow">Event chronology</span>
            <h3>A traceable account.</h3>
          </div>
          <div className="event-rail">
            {events.map((e, i) => (
              <button
                key={e.time}
                className={selected === i ? "selected" : ""}
                onClick={() => setSelected(selected === i ? null : i)}
                aria-expanded={selected === i}
              >
                <time>{e.time}</time>
                <i />
                <span>
                  <strong>{e.name}</strong>
                  <small>{e.id}</small>
                  {selected === i && (
                    <span className="event-detail">{e.body}</span>
                  )}
                </span>
              </button>
            ))}
          </div>
          <p className="scene-foot">9 October 2026 · UTC</p>
        </>
      ) : kind === "report" ? (
        <>
          <div className="document-stack">
            <div className="document-back" />
            <div className="document-sheet">
              <span className="eyebrow">Incident Report / INC-027</span>
              <h3>
                The write.
                <br />
                The decision.
                <br />
                <em>The lesson.</em>
              </h3>
              <div className="document-rule" />
              <p>Observed behaviour</p>
              <span>Standard → Enterprise</span>
              <p>Expected behaviour</p>
              <span>Preserve account tier without authorization.</span>
              <div className="document-rule" />
              <code>evaluation_case.json</code>
            </div>
          </div>
          <TextLink to="/demo/incidents/INC-027/report">
            Inspect the evaluation case
          </TextLink>
        </>
      ) : (
        <>
          <div className="scene-heading">
            <span className="eyebrow">Shared evidence architecture</span>
            <h3>
              Original context.
              <br />
              One human decision.
            </h3>
          </div>
          <div className="architecture-sources">
            {[
              ["document", "Trace", "TR-27"],
              ["database", "Tool write", "WB-3"],
              ["users", "Account state", "12 records"],
            ].map(([icon, t, id]) => (
              <div key={t}>
                <Icon name={icon} />
                <span>
                  {t}
                  <small>{id}</small>
                </span>
              </div>
            ))}
          </div>
          <div className="arch-line" aria-hidden="true">
            <svg viewBox="0 0 600 55">
              <path
                className="diagram-draw"
                d="M70 0v18h230v36M300 0v54M530 0v18H300"
              />
            </svg>
          </div>
          <div className="architecture-main">
            <div>
              <Icon name="layers" size={30} />
              <strong>Evidence layer</strong>
              <small>Correlate & reconstruct</small>
            </div>
            <span aria-hidden="true">→</span>
            <div className="human-node">
              <Icon name="owner" size={30} />
              <strong>Human review</strong>
              <small>Proposal & decision</small>
            </div>
          </div>
          <p className="scene-foot">
            Original sources retained. Authority remains explicit.
          </p>
        </>
      )}
    </div>
  );
}
const storyDefault = [
  [
    "Trace the action.",
    "Start with the session and the tool call that initiated the write.",
    "desk",
  ],
  [
    "Examine the change.",
    "Join the write batch to downstream records. A tool response is not the whole account.",
    "desk",
  ],
  [
    "Map the impact.",
    "Distinguish eight observed writes, three inferred relationships and one record awaiting verification.",
    "impact",
  ],
  [
    "Keep people in control.",
    "Bring the scope and prerequisites to a named reviewer. A proposal never grants itself permission.",
    "approval",
  ],
  [
    "Make the next system safer.",
    "Preserve the incident as a postmortem and an evaluation case, with the evidence still attached.",
    "report",
  ],
];
export function ScrollStory({
  chapters = storyDefault,
  label = "From a tool call to a defensible decision",
  id = "incident-story",
}) {
  const section = useRef(null),
    trigger = useRef(null),
    [stage, setStage] = useState(0),
    [pinned, setPinned] = useState(false);
  const { motion, lenis } = useExperience();
  useEffect(() => {
    if (!motion || !section.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".story-visual .scene",
        { y: 14, opacity: 0.65 },
        { y: 0, opacity: 1, duration: 0.55, ease: "power2.out" },
      );
      const path = section.current.querySelector(".story-visual .diagram-draw");
      if (path) {
        const length = path.getTotalLength();
        gsap.fromTo(
          path,
          { strokeDasharray: length, strokeDashoffset: length },
          { strokeDashoffset: 0, duration: 1.1, ease: "power2.inOut" },
        );
      }
    }, section);
    return () => ctx.revert();
  }, [stage, motion]);
  useEffect(() => {
    const mm = gsap.matchMedia();
    if (motion)
      mm.add("(min-width: 1000px) and (min-height: 650px)", () => {
        setPinned(true);
        const st = ScrollTrigger.create({
          trigger: section.current,
          start: "top 76px",
          end: () => "+=" + chapters.length * 510,
          pin: section.current.querySelector(".story-pin"),
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) =>
            setStage(
              Math.min(
                chapters.length - 1,
                Math.floor(self.progress * chapters.length),
              ),
            ),
        });
        trigger.current = st;
        return () => {
          trigger.current = null;
          setPinned(false);
        };
      });
    return () => mm.revert();
  }, [motion, chapters.length]);
  const select = (i) => {
    if (trigger.current) {
      const target =
        trigger.current.start +
        ((i + 0.1) / chapters.length) *
          (trigger.current.end - trigger.current.start);
      if (lenis.current) lenis.current.scrollTo(target, { duration: 0.65 });
      else window.scrollTo({ top: target, behavior: "smooth" });
    } else setStage(i);
  };
  const skip = (e) => {
    e.preventDefault();
    const el = document.getElementById(id + "-end");
    if (el) {
      if (lenis.current) lenis.current.scrollTo(el, { offset: -85 });
      else el.scrollIntoView();
    }
  };
  return (
    <section
      ref={section}
      className={"story-section " + (pinned ? "is-pinned" : "")}
      id={id}
    >
      <div className="story-pin container">
        <div className="story-top">
          <p className="eyebrow">{label}</p>
          <a href={"#" + id + "-end"} onClick={skip}>
            Skip the story <span aria-hidden="true">↘</span>
          </a>
        </div>
        <div className="story-grid">
          <div className="story-copy">
            <div className="chapter-count">
              <span>{String(stage + 1).padStart(2, "0")}</span>
              <small>/ {String(chapters.length).padStart(2, "0")}</small>
            </div>
            <h2 className="display">{chapters[stage][0]}</h2>
            <p>{chapters[stage][1]}</p>
            <div
              className="chapter-tabs"
              role="group"
              aria-label="Story chapters"
            >
              {chapters.map(([title], i) => (
                <button
                  key={title}
                  className={stage === i ? "active" : ""}
                  aria-label={"Chapter " + (i + 1) + ": " + title}
                  onClick={() => select(i)}
                  aria-pressed={stage === i}
                >
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <i>{title}</i>
                </button>
              ))}
            </div>
            <p className="story-hint">
              Scroll to follow the evidence <span aria-hidden="true">↓</span>
            </p>
          </div>
          <div className="story-visual">
            <Scene kind={chapters[stage][2]} stage={stage} />
            <p className="data-notice">Oakridge Services · synthetic example</p>
          </div>
        </div>
        <div className="story-progress">
          <span
            style={{ width: ((stage + 1) / chapters.length) * 100 + "%" }}
          />
        </div>
        <div className="story-static">
          <ol>
            {chapters.map(([t, d, k]) => (
              <li key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div id={id + "-end"} className="story-end" />
    </section>
  );
}
export function Steps({
  items,
  className = "",
  id,
  label = "The workflow",
  title = "Context, carried forward.",
}) {
  return (
    <section className={"section " + className} id={id}>
      <div className="container">
        <SectionHead label={label} title={title} />
        <div className="editorial-steps">
          {items.map(([t, d], i) => (
            <article data-reveal key={t}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
              <span className="step-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function PersonaPanels() {
  return (
    <section className="section container">
      <SectionHead
        label="People at the centre"
        title={
          <>
            The same incident.
            <br />
            <em>Different responsibilities.</em>
          </>
        }
      />
      <div className="persona-grid">
        {personas.map((p, i) => (
          <Link
            to={"/solutions/" + p.slug}
            key={p.slug}
            className={"persona-card persona-" + i}
          >
            <span className="eyebrow">
              0{i + 1} / {p.name}
            </span>
            <div className="persona-illustration">
              <Icon name={p.icon} size={56} />
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <span className="tiny-record">
                {i === 0
                  ? "TR-27"
                  : i === 1
                    ? "Human review"
                    : "evaluation_case"}
              </span>
            </div>
            <h3>{p.headline[1]}</h3>
            <p>{p.description}</p>
            <span className="text-link">
              Explore the workflow <b aria-hidden="true">↗</b>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
export function ExportButton({ kind = "report" }) {
  const { decision } = useExperience();
  function download() {
    const data =
      kind === "tabletop"
        ? {
            title: "Agent incident tabletop guide",
            steps: [
              "Choose a representative workflow",
              "Agree the participants and decision owner",
              "Set the evidence and permissions boundary",
              "Walk the incident",
              "Define a baseline",
              "Write the readout",
            ],
          }
        : kind === "checklist"
          ? {
              title: "Agent incident reconstruction checklist",
              steps: [
                "Preserve the original trace",
                "Identify the write batch",
                "Reconcile observed downstream records",
                "Separate inference from observation",
                "Resolve owners",
                "Prepare a human decision",
                "Record limitations",
                "Export an evaluation case",
              ],
            }
          : kind === "inquiry"
            ? {}
            : {
                synthetic: true,
                scenario: fixture.scenario,
                incident: fixture.incident_id,
                trace: "TR-27",
                write_batch: "WB-3",
                coverage: fixture.coverage,
                accounts: fixture.accounts,
                local_review: decision,
                expected_behaviour:
                  "No tier mutation without explicit authorization.",
                real_action_executed: false,
              };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json",
      }),
      url = URL.createObjectURL(blob),
      a = document.createElement("a");
    a.href = url;
    a.download =
      kind === "tabletop"
        ? "agent-incident-tabletop-guide.json"
        : kind === "checklist"
          ? "incident-reconstruction-checklist.json"
          : "tracetriage-INC-027-evaluation.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <button className="button primary" onClick={download}>
      {kind === "tabletop"
        ? "Download the tabletop guide"
        : kind === "checklist"
          ? "Download the checklist"
          : "Download evaluation JSON"}
      <span aria-hidden="true">↓</span>
    </button>
  );
}
export function IntakeForm({ contact = false }) {
  const [done, setDone] = useState(false),
    [sending, setSending] = useState(false),
    [error, setError] = useState(""),
    [values, setValues] = useState({
      name: "",
      email: "",
      company: "",
      role: "SRE / on-call",
      product: "Full workflow",
      system: "",
      agents: "1–5",
      outcome: "",
      consent: false,
    });
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  const change = (e) =>
    setValues({
      ...values,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  const submit = (e) => {
    e.preventDefault();
    setError("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setError("Enter a valid email address.");
      return;
    }
    if (!values.consent) {
      setError("Confirm that the note contains no sensitive incident data.");
      return;
    }
    setSending(true);
    timer.current = setTimeout(() => {
      setSending(false);
      setDone(true);
    }, 500);
  };
  const download = () => {
    const blob = new Blob(
        [
          JSON.stringify(
            {
              type: contact ? "contact-inquiry" : "tabletop-inquiry",
              ...values,
            },
            null,
            2,
          ),
        ],
        { type: "application/json" },
      ),
      u = URL.createObjectURL(blob),
      a = document.createElement("a");
    a.href = u;
    a.download = "tracetriage-inquiry.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(u), 1000);
  };
  if (done)
    return (
      <div className="form-success" role="status">
        <Icon name="document" size={40} />
        <h2 className="display">
          Your inquiry
          <br />
          <em>is prepared.</em>
        </h2>
        <p>
          Nothing has been sent. Download your inquiry to keep the context, or
          explore the incident while a contact channel is being connected.
        </p>
        <button className="button primary" onClick={download}>
          Download inquiry <span aria-hidden="true">↓</span>
        </button>
        <button className="text-link" onClick={() => setDone(false)}>
          Edit the inquiry →
        </button>
      </div>
    );
  return (
    <form className="intake-form" onSubmit={submit}>
      <div className="form-grid">
        <label>
          Name
          <input
            required
            autoComplete="name"
            name="name"
            value={values.name}
            onChange={change}
          />
        </label>
        <label>
          Work email
          <input
            required
            type="email"
            autoComplete="email"
            name="email"
            value={values.email}
            onChange={change}
          />
        </label>
        <label>
          Company
          <input
            required
            autoComplete="organization"
            name="company"
            value={values.company}
            onChange={change}
          />
        </label>
        <label>
          Your role
          <select name="role" value={values.role} onChange={change}>
            {[
              "SRE / on-call",
              "Incident management",
              "Platform engineering",
              "Other",
            ].map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </label>
      </div>
      {!contact && (
        <div className="form-grid">
          <label>
            Interested in
            <select name="product" value={values.product} onChange={change}>
              <option>Full workflow</option>
              {products.map((p) => (
                <option key={p.slug}>{p.name}</option>
              ))}
            </select>
          </label>
          <label>
            Agent group size
            <select name="agents" value={values.agents} onChange={change}>
              {["1–5", "6–20", "21–50", "More than 50", "Still defining"].map(
                (v) => (
                  <option key={v}>{v}</option>
                ),
              )}
            </select>
          </label>
        </div>
      )}
      <label>
        {contact ? "Topic" : "Which system can the agent write to?"}
        <input
          name="system"
          value={values.system}
          onChange={change}
          placeholder={
            contact
              ? "What would you like to discuss?"
              : "For example, your CRM or support system"
          }
        />
      </label>
      <label>
        {contact ? "Your message" : "What would a useful evaluation establish?"}
        <textarea
          required
          name="outcome"
          rows="4"
          value={values.outcome}
          onChange={change}
          placeholder="Keep it high level. No production logs, personal data or credentials."
        />
      </label>
      <label className="checkbox-label">
        <input
          required
          type="checkbox"
          name="consent"
          checked={values.consent}
          onChange={change}
        />
        This inquiry contains no sensitive or production incident data.
      </label>
      <p className="form-note">
        This form prepares a downloadable inquiry in your browser. It does not
        send or store your details.{" "}
        <Link to="/legal/privacy">Data handling</Link>
      </p>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <button className="button primary" type="submit" disabled={sending}>
        {sending ? "Preparing…" : "Prepare inquiry"}
        <span aria-hidden="true">↗</span>
      </button>
    </form>
  );
}

export function ProductOrbit() {
  const { motion } = useExperience();
  const root = useRef(null);
  const sequence = useRef(null);
  const cycle = useRef(0);
  const [active, setActive] = useState(0);
  const [points, setPoints] = useState([]);
  useEffect(() => {
    const measure = () => {
      const box = root.current.getBoundingClientRect();
      setPoints(
        [...root.current.querySelectorAll(".portfolio-node")].map((node) => {
          const b = node.getBoundingClientRect();
          return {
            x: ((b.left + b.width / 2 - box.left) / box.width) * 1000,
            y: ((b.top + b.height / 2 - box.top) / box.height) * 1000,
          };
        }),
      );
    };
    const observer = new ResizeObserver(measure);
    observer.observe(root.current);
    measure();
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!motion || points.length !== products.length) return;
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ repeat: -1, paused: true });
      points.forEach((point, i) => {
        timeline.call(() => {
          cycle.current = i;
          setActive(i);
        });
        timeline.fromTo(
          ".orbit-connection-" + i,
          { strokeDashoffset: 100, opacity: 0.9 },
          { strokeDashoffset: 0, duration: 1.1, ease: "power2.inOut" },
        );
        timeline.fromTo(
          ".orbit-packet-" + i,
          { attr: { cx: 500, cy: 500 }, opacity: 0 },
          {
            attr: { cx: point.x, cy: point.y },
            opacity: 1,
            duration: 1.3,
            ease: "power1.inOut",
          },
          "<",
        );
        timeline.to(".orbit-packet-" + i, { opacity: 0, duration: 0.3 });
        timeline.to(
          ".orbit-connection-" + i,
          { opacity: 0.18, duration: 0.8 },
          "+=0.7",
        );
      });
      sequence.current = timeline;
    }, root);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          !root.current.matches(":hover, :focus-within")
        )
          sequence.current?.play();
        else sequence.current?.pause();
      },
      { threshold: 0.15 },
    );
    observer.observe(root.current);
    return () => {
      observer.disconnect();
      sequence.current = null;
      ctx.revert();
    };
  }, [motion, points]);
  const inspect = (i) => {
    sequence.current?.pause();
    setActive(i);
  };
  const resume = () => {
    setActive(cycle.current);
    if (motion) sequence.current?.play();
  };
  return (
    <div
      ref={root}
      className={
        "portfolio-orbit connected-orbit " + (motion ? "" : "orbit-still")
      }
      onMouseLeave={resume}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) resume();
      }}
    >
      <svg
        className="orbit-connections"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {points.map((point, i) => (
          <g key={i} className={active === i ? "connection-active" : ""}>
            <path
              className="orbit-connection-base"
              d={`M500 500L${point.x} ${point.y}`}
            />
            <path
              className={"orbit-connection orbit-connection-" + i}
              pathLength="100"
              d={`M500 500L${point.x} ${point.y}`}
            />
            <circle
              className={"orbit-packet orbit-packet-" + i}
              r="5"
              cx={point.x}
              cy={point.y}
            />
          </g>
        ))}
      </svg>
      <div className="portfolio-centre">
        <span>One incident</span>
        <p>{products[active].job}</p>
        <div className="orbit-view-dots" aria-hidden="true">
          {products.map((p, i) => (
            <i key={p.slug} className={i === active ? "active" : ""} />
          ))}
        </div>
      </div>
      {products.map((p, i) => (
        <Link
          to={"/products/" + p.slug}
          className={
            "portfolio-node node-" + i + (active === i ? " is-connected" : "")
          }
          key={p.slug}
          onMouseEnter={() => inspect(i)}
          onFocus={() => inspect(i)}
        >
          <Icon name={p.icon} />
          <span>{p.short}</span>
        </Link>
      ))}
    </div>
  );
}
