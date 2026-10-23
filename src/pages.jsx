import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  A,
  TextLink,
  Heading,
  Hero,
  SectionHead,
  CTA,
  FAQ,
  Suite,
  ScrollStory,
  Scene,
  EvidenceBlock,
  Steps,
  PersonaPanels,
  Coverage,
  Accounts,
  Icon,
  IntakeForm,
  ExportButton,
  useExperience,
  ProductOrbit,
} from "./components";
import { products, personas, commonFAQ, events } from "./content";
import fixture from "./fixture.json";
import Intro from "./Intro";

export function Home() {
  const { motion } = useExperience();
  const atmosphere = useRef(null);
  const [fogVisible, setFogVisible] = useState(true);
  const [fogOffset, setFogOffset] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setFogVisible(entry.isIntersecting);
    });
    if (atmosphere.current) observer.observe(atmosphere.current);
    const resize = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      // Match the photograph’s 58% horizontal crop on narrower screens.
      const cropWidth = Math.max(width, height * 1.1 * (1600 / 960));
      setFogOffset(window.innerWidth <= 780 ? -(cropWidth - width) * 0.08 : 0);
    });
    if (atmosphere.current) resize.observe(atmosphere.current.parentElement);
    return () => {
      observer.disconnect();
      resize.disconnect();
    };
  }, []);
  return (
    <>
      <Intro />
      <section className="home-hero" id="homepage-hero">
        <img
          className="hero-photo"
          src="/brand/imagery/hero-horizon-1600.webp"
          alt=""
          width="1600"
          height="1000"
          fetchPriority="high"
          data-parallax
        />
        <svg
          ref={atmosphere}
          style={{ left: fogOffset }}
          className={
            "hero-atmosphere " + (motion && fogVisible ? "" : "is-still")
          }
          viewBox="0 0 1600 960"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          data-parallax
        >
          <defs>
            <radialGradient id="window-mist">
              <stop offset="0" stopColor="#dce5e4" stopOpacity="0.78" />
              <stop offset="0.5" stopColor="#dce5e4" stopOpacity="0.34" />
              <stop offset="1" stopColor="#dce5e4" stopOpacity="0" />
            </radialGradient>
            <mask id="window-mist-mask">
              <path fill="white" d="M920 190H1094V530H920Z" />
              <path stroke="black" strokeWidth="3" d="M1005 190V530" />
            </mask>
          </defs>
          <g mask="url(#window-mist-mask)" fill="url(#window-mist)">
            <g className="mist-layer mist-near">
              <ellipse cx="972" cy="475" rx="68" ry="24" />
              <ellipse cx="1070" cy="432" rx="54" ry="29" />
            </g>
            <g className="mist-layer mist-middle">
              <ellipse cx="1036" cy="397" rx="60" ry="23" />
              <ellipse cx="940" cy="451" rx="48" ry="19" />
            </g>
            <g className="mist-layer mist-far">
              <ellipse cx="978" cy="354" rx="57" ry="26" />
              <ellipse cx="1024" cy="506" rx="82" ry="18" />
            </g>
          </g>
        </svg>
        <div className="hero-scrim" />
        <div className="container home-hero-inner">
          <div className="home-hero-copy" data-reveal>
            <p className="eyebrow">Agent incident response</p>
            <Heading lines={["Know what", "changed."]} />
            <p>
              Follow an agent write from trace to impact,
              <br className="desktop-break" /> owner and a human decision.
            </p>
            <div className="button-row">
              <A />
              <A secondary to="/demo">
                Explore the incident
              </A>
            </div>
          </div>
          <aside className="hero-margin">
            <span>Traces</span>
            <span>People</span>
            <span>Decisions</span>
            <i />
            <span>A safer</span>
            <span>tomorrow</span>
          </aside>
          <div className="home-bottom">
            <span>One write. The whole account.</span>
            <a href="#incident-story">
              Follow the evidence <span aria-hidden="true">↓</span>
            </a>
            <Link to="/products">
              Explore five views <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section
        className="funding-announcement container"
        aria-labelledby="funding-title"
      >
        <span className="eyebrow">Company announcement</span>
        <div>
          <h2 id="funding-title" className="display">
            TraceTriage has secured venture capital funding.
          </h2>
          <p>The investor and funding amount will be announced later.</p>
        </div>
      </section>
      <section className="opening-strip container" data-reveal>
        <span className="eyebrow">The missing context</span>
        <p>
          A trace shows an action.
          <br />
          <span>An incident asks what changed.</span>
        </p>
        <TextLink to="/why-change">Why TraceTriage</TextLink>
      </section>
      <ScrollStory />
      <EvidenceBlock />
      <Suite />
      <section className="platform-section apricot">
        <div className="container platform-grid">
          <div data-reveal>
            <p className="eyebrow">Shared evidence architecture</p>
            <Heading
              as="h2"
              lines={["Original context.", "Accountable outcomes."]}
            />
            <p>
              Bring traces, tool data and account state into the same
              investigation. Carry the original identifiers forward, with a
              clear boundary around the human decision.
            </p>
            <TextLink to="/platform">Explore the platform</TextLink>
          </div>
          <Scene kind="architecture" />
        </div>
      </section>
      <PersonaPanels />
      <section className="trust-band slate">
        <div className="container trust-grid">
          <div>
            <p className="eyebrow">People stay in control</p>
            <h2 className="display">
              A decision needs
              <br />
              <em>more than a suggestion.</em>
            </h2>
            <TextLink to="/trust">Explore the boundaries</TextLink>
          </div>
          <div className="trust-rules">
            {[
              [
                "01",
                "Evidence has a source.",
                "Keep observed changes separate from inference.",
              ],
              [
                "02",
                "Ownership is explicit.",
                "An unresolved owner remains an open question.",
              ],
              [
                "03",
                "Approval is deliberate.",
                "Proposing containment is not executing it.",
              ],
            ].map(([n, t, d]) => (
              <article key={n} data-reveal>
                <span>{n}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section engagement-surface">
        <div className="container engagement-section">
          <div data-reveal>
            <span className="eyebrow">A scoped beginning</span>
            <h2 className="display">
              Start with your
              <br />
              <em>incident workflow.</em>
            </h2>
            <p>
              Define the system, the write and the people who own it. Then
              evaluate the evidence handoff before expanding the scope.
            </p>
            <TextLink to="/pricing">Explore an engagement</TextLink>
          </div>
          <div className="engagement-card" data-reveal>
            <span className="eyebrow">Agent incident tabletop</span>
            <h3>
              A real question.
              <br />A bounded exercise.
            </h3>
            <ol>
              <li>Choose one agent workflow.</li>
              <li>Reconstruct a representative write.</li>
              <li>Inspect scope, ownership and review.</li>
              <li>Agree what the next evaluation must show.</li>
            </ol>
            <A />
          </div>
        </div>
      </section>
      <FAQ />
      <CTA />
    </>
  );
}

export function ProductsPage() {
  return (
    <>
      <Hero
        className="product-suite-hero"
        eyebrow="The product suite"
        lines={["Five views.", "One accountable response."]}
        description="Each view owns a different part of the incident. Together, they keep the action, its consequences and the human decision in the same account."
      >
        <ProductOrbit />
      </Hero>
      <div id="next" />
      <Suite />
      {products.map((p, i) => (
        <section
          className={"portfolio-detail " + (i % 2 ? "parchment" : "chalk")}
          key={p.slug}
        >
          <div className="container split-grid">
            <div data-reveal>
              <p className="eyebrow">
                {p.number} / {p.name}
              </p>
              <h2 className="display">{p.headline.join(" ")}</h2>
              <p>{p.description}</p>
              <TextLink to={"/products/" + p.slug}>Explore {p.short}</TextLink>
            </div>
            <Scene kind={p.visual} />
          </div>
        </section>
      ))}
      <CTA />
    </>
  );
}
export function ProductPage() {
  const { slug } = useParams();
  const p = products.find((p) => p.slug === slug);
  if (!p) return <NotFound />;
  const chapters = p.steps.map(([t, d], i) => [
    t,
    d,
    i === 0 ? "desk" : p.visual,
  ]);
  return (
    <>
      <Hero
        eyebrow={p.number + " / " + p.name}
        lines={p.headline}
        description={p.description}
        theme={p.color}
      >
        <Scene kind={p.visual} />
      </Hero>
      <section id="next" className="input-strip container">
        <span className="eyebrow">Start with</span>
        {p.input.map((s, i) => (
          <div key={s}>
            <span>0{i + 1}</span>
            <strong>{s}</strong>
          </div>
        ))}
      </section>
      <ScrollStory
        chapters={chapters}
        label={p.name + " / the workflow"}
        id="product-story"
      />
      <section className="section container output-grid">
        <div data-reveal>
          <span className="eyebrow">What moves forward</span>
          <h2 className="display">
            An output you
            <br />
            <em>can inspect.</em>
          </h2>
          <p>{p.output}</p>
          <TextLink
            to={
              "/demo/incidents/INC-027/" +
              ({
                desk: "",
                impact: "impact",
                approval: "approval",
                timeline: "timeline",
                report: "report",
              }[p.visual] || "")
            }
          >
            Inspect this view
          </TextLink>
        </div>
        <div className="output-record" data-reveal>
          <Icon name={p.icon} size={48} />
          <h3>{p.short}</h3>
          <p>{p.output}</p>
          <div>
            <span>Original context</span>
            <b>TR-27 / WB-3</b>
          </div>
          <div>
            <span>Handoff</span>
            <b>
              {p.visual === "approval" ? "Human review" : "Source retained"}
            </b>
          </div>
        </div>
      </section>
      <section className="boundary-section slate">
        <div className="container split-grid">
          <div data-reveal>
            <span className="eyebrow">Controls & boundaries</span>
            <h2 className="display">
              Keep the distinction
              <br />
              <em>that matters.</em>
            </h2>
          </div>
          <div data-reveal>
            <p className="large-copy">{p.limit}</p>
            <TextLink to="/trust">Review the boundaries</TextLink>
          </div>
        </div>
      </section>
      <FAQ items={p.faq} />
      <section className="section container related">
        <SectionHead
          label="The next useful view"
          title="Carry the context forward."
        />
        <div className="related-grid">
          {products
            .filter((x) => x.slug !== p.slug)
            .slice(0, 2)
            .map((x) => (
              <Link key={x.slug} to={"/products/" + x.slug}>
                <Icon name={x.icon} />
                <h3>{x.name}</h3>
                <p>{x.job}</p>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
        </div>
      </section>
      <CTA title={"Evaluate " + p.short + " in your workflow."} />
    </>
  );
}

export function Platform() {
  const chapters = [
    [
      "Start with original sources.",
      "Preserve the trace, tool write and downstream state as separate records with stable identifiers.",
      "architecture",
    ],
    [
      "Reconstruct the relationship.",
      "Join the records without turning a possible relationship into verified impact.",
      "impact",
    ],
    [
      "Keep authority separate.",
      "A proposal can carry context. A person must carry the authority to decide.",
      "approval",
    ],
  ];
  return (
    <>
      <Hero
        className="platform-hero-texture"
        eyebrow="The platform"
        lines={["Original context.", "Accountable outcomes."]}
        description="A shared evidence layer connects the five views. The trace, downstream state and human decision stay linked without becoming the same thing."
        theme="parchment"
      >
        <Scene kind="architecture" />
      </Hero>
      <div id="next" />
      <ScrollStory
        chapters={chapters}
        label="A shared account of the incident"
        id="platform-story"
      />
      <Steps
        title="Identifiers join records. Not assumptions."
        items={[
          [
            "Trace → write batch",
            "Use the session and batch identifiers to preserve the initiating action.",
          ],
          [
            "Write batch → account",
            "Verify persisted state from downstream evidence. Record missing sources explicitly.",
          ],
          [
            "Account → owner",
            "Bring ownership into the scope. A null owner is not a completed handoff.",
          ],
          [
            "Decision → evaluation",
            "Keep the reviewer’s rationale with the incident when generating an evaluation case.",
          ],
        ]}
      />
      <section className="section slate">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Two different boundaries</p>
            <h2 className="display">
              Source access.
              <br />
              <em>Response authority.</em>
            </h2>
            <p>
              Reading a record and authorizing a response are different
              permissions. Define them separately before an evaluation.
            </p>
          </div>
          <div className="permission-matrix">
            <div>
              <span>Responsibility</span>
              <span>Source access</span>
              <span>Response</span>
            </div>
            <div>
              <strong>Investigator</strong>
              <span>Scoped reads</span>
              <span>Propose</span>
            </div>
            <div>
              <strong>Reviewer</strong>
              <span>Inspect evidence</span>
              <span>Decide</span>
            </div>
            <div>
              <strong>System owner</strong>
              <span>Verify state</span>
              <span>Authorized process</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHead
          label="In your environment"
          title="Bring the right evidence."
          description="Connector access and deployment are evaluation decisions. The interactive example uses a local fixture, not live connections."
        />
        <div className="related-grid">
          <Link to="/integrations">
            <Icon name="database" />
            <h3>Evidence sources</h3>
            <p>Explore the proposed field mappings.</p>
            <span>↗</span>
          </Link>
          <Link to="/trust">
            <Icon name="owner" />
            <h3>Authority & data</h3>
            <p>Define the responsibilities around the investigation.</p>
            <span>↗</span>
          </Link>
        </div>
      </section>
      <CTA />
    </>
  );
}

export function WhyChange() {
  return (
    <>
      <Hero
        eyebrow="Why TraceTriage"
        lines={["When the trace ends,", "the incident doesn’t."]}
        description="A successful tool call answers one question. An investigator still needs to know what changed, who was affected and who can decide what happens next."
        theme="parchment"
      >
        <div className="material-frame">
          <img
            src="/brand/imagery/problem-ledger-gap-800.webp"
            alt="Separated slate records with an interrupted copper connection"
            width="800"
            height="600"
          />
          <span>Trace / write / downstream state</span>
        </div>
      </Hero>
      <div id="next" />
      <ScrollStory
        label="The gaps between the records"
        id="problem-story"
        chapters={[
          [
            "The tool says success.",
            "That response is useful context. It is not, on its own, verification of a persisted CRM change.",
            "desk",
          ],
          [
            "The scope is still a question.",
            "Observed writes, inferred relationships and missing evidence need different treatment.",
            "impact",
          ],
          [
            "The decision has an owner.",
            "Before containment, someone must inspect the scope and own the authority.",
            "approval",
          ],
        ]}
      />
      <section className="section container">
        <SectionHead
          label="A change in the operating model"
          title="From fragments to a defensible account."
        />
        <div className="before-after">
          <article>
            <span className="eyebrow">The fragmented handoff</span>
            <ul>
              <li>A trace link without downstream state.</li>
              <li>A tool response treated as a confirmed write.</li>
              <li>A scope estimate without a named owner.</li>
              <li>A proposal without an explicit decision boundary.</li>
            </ul>
          </article>
          <article>
            <span className="eyebrow">The accountable handoff</span>
            <ul>
              <li>Original identifiers carried through the incident.</li>
              <li>Observed evidence distinguished from inference.</li>
              <li>Affected records with ownership context.</li>
              <li>A deliberate review and recorded rationale.</li>
            </ul>
          </article>
        </div>
      </section>
      <Suite compact />
      <CTA />
    </>
  );
}
export function Solutions() {
  return (
    <>
      <Hero
        eyebrow="For the people responsible"
        lines={["The same incident.", "Different perspectives."]}
        description="The on-call lead, incident owner and platform engineer need different answers. Give each a view that supports their responsibility."
      >
        <div className="roles-visual">
          {personas.map((p, i) => (
            <Link key={p.slug} to={"/solutions/" + p.slug}>
              <span>0{i + 1}</span>
              <Icon name={p.icon} size={36} />
              <strong>{p.name}</strong>
              <i aria-hidden="true">↗</i>
            </Link>
          ))}
        </div>
      </Hero>
      <div id="next" />
      <PersonaPanels />
      <Steps
        title="A handoff that keeps its context."
        items={[
          [
            "Investigate",
            "The SRE follows the initiating trace and tool write.",
          ],
          [
            "Coordinate",
            "The incident owner brings scope and authority into the decision.",
          ],
          [
            "Evaluate",
            "The platform team turns the postmortem into a repeatable case.",
          ],
        ]}
      />
      <CTA />
    </>
  );
}
export function SolutionPage() {
  const { slug } = useParams();
  const p = personas.find((x) => x.slug === slug);
  if (!p) return <NotFound />;
  return (
    <>
      <Hero
        className={
          slug === "incident-management" ? "incident-owner-hero-texture" : ""
        }
        eyebrow={"Solutions / " + p.name}
        lines={p.headline}
        description={p.description}
        theme="parchment"
      >
        <Scene kind={p.scene} />
      </Hero>
      <div id="next" />
      <ScrollStory
        chapters={p.chapters.map(([t, d], i) => [
          t,
          d,
          i === 0 ? "desk" : i === 1 ? p.scene : "report",
        ])}
        label={p.name + " / your responsibility"}
        id="solution-story"
      />
      <section className="section container">
        <SectionHead
          label="The views that matter"
          title="Start with the question you own."
        />
        <div className="related-grid">
          {p.recommended.map((slug) => {
            const pr = products.find((x) => x.slug === slug);
            return (
              <Link key={slug} to={"/products/" + slug}>
                <Icon name={pr.icon} />
                <h3>{pr.name}</h3>
                <p>{pr.description}</p>
                <span>↗</span>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="section slate">
        <div className="container split-grid">
          <div>
            <span className="eyebrow">A useful evaluation</span>
            <h2 className="display">
              Agree the question.
              <br />
              <em>Then inspect the answer.</em>
            </h2>
          </div>
          <ul className="large-list">
            <li>Can the initiating write be reconstructed?</li>
            <li>Can each affected record be traced to evidence?</li>
            <li>Is ownership resolved or explicitly unknown?</li>
            <li>Can the human decision be reviewed later?</li>
          </ul>
        </div>
      </section>
      <CTA title={"Bring your " + p.name.toLowerCase() + " workflow."} />
    </>
  );
}

export function Pricing() {
  const [scope, setScope] = useState(1);
  return (
    <>
      <Hero
        eyebrow="Engagements"
        lines={["Start with one", "scoped incident."]}
        description="A bounded evaluation comes before a broad rollout. Start by agreeing the workflow, the evidence and the people who own the response."
        theme="apricot"
      >
        <div className="pricing-hero-card">
          <span className="eyebrow">Begin with a tabletop</span>
          <h3>
            One workflow.
            <br />A clear readout.
          </h3>
          <div className="pricing-step">
            <span>01</span>Define the scope
          </div>
          <div className="pricing-step">
            <span>02</span>Inspect the evidence
          </div>
          <div className="pricing-step">
            <span>03</span>Agree the next test
          </div>
        </div>
      </Hero>
      <section id="next" className="section container">
        <SectionHead
          label="A starting point for discussion"
          title="Two ways to evaluate."
          description="Indicative pricing hypotheses, subject to agreed scope and availability. No payment or subscription is activated through this website."
        />
        <div className="price-grid">
          <article className="price-card">
            <span className="eyebrow">Scoped exercise</span>
            <h3>Agent incident tabletop</h3>
            <div className="price">
              $4,000<span> / exercise</span>
            </div>
            <p>
              Reconstruct one representative write and examine the response
              workflow with your team.
            </p>
            <ul>
              <li>One agreed agent workflow</li>
              <li>Evidence and ownership review</li>
              <li>Human decision boundary</li>
              <li>Evaluation questions and readout</li>
            </ul>
            <A />
          </article>
          <article className="price-card dark-price">
            <span className="eyebrow">Continuing evaluation</span>
            <h3>Incident-managed agent group</h3>
            <div className="price">
              $2,200<span> / group / month</span>
            </div>
            <p>
              A proposed ongoing engagement after the first evaluation
              establishes its scope.
            </p>
            <ul>
              <li>Agent group defined together</li>
              <li>Source and authority boundaries</li>
              <li>Incident-to-evaluation workflow</li>
              <li>Scope and success criteria agreed</li>
            </ul>
            <A />
          </article>
        </div>
      </section>
      <section className="section parchment">
        <div className="container split-grid">
          <div>
            <span className="eyebrow">Explore the scope</span>
            <h2 className="display">
              What counts as
              <br />
              <em>an agent group?</em>
            </h2>
            <p>
              A group needs an agreed owner, workflow and source boundary. Use
              this estimate to frame a conversation, not as a quote.
            </p>
          </div>
          <div className="scope-estimator">
            <label htmlFor="groups">
              Incident-managed groups <strong>{scope}</strong>
            </label>
            <input
              id="groups"
              type="range"
              min="1"
              max="10"
              value={scope}
              onChange={(e) => setScope(Number(e.target.value))}
            />
            <div>
              <span>Indicative monthly scope</span>
              <strong>${(scope * 2200).toLocaleString("en-US")}</strong>
            </div>
            <small>
              Based on the $2,200/group hypothesis. Actual scope must be agreed.
            </small>
          </div>
        </div>
      </section>
      <FAQ
        items={[
          [
            "Can I buy a subscription here?",
            "No. This page frames commercial discussions. It does not activate billing or access.",
          ],
          [
            "What is included in an agent group?",
            "The exact workflow, owner, evidence sources and response responsibilities must be defined during scoping.",
          ],
          [
            "Is the tabletop a production remediation service?",
            "No. A scoped tabletop evaluates the investigation and decision workflow; production actions are outside this website.",
          ],
          [
            "What happens after the first exercise?",
            "Agree the evidence needed for a pilot decision, including source access, authority and measurable success criteria.",
          ],
        ]}
      />
      <CTA />
    </>
  );
}
export function Results() {
  const [tab, setTab] = useState("reconstruct");
  const checks = {
    reconstruct: [
      "Can the original trace be retrieved?",
      "Can the tool write be joined to its batch?",
      "Can original source events be inspected?",
    ],
    scope: [
      "Are observed and inferred records distinct?",
      "Is missing evidence left unresolved?",
      "Does the unique-account count reconcile?",
    ],
    decision: [
      "Is the reviewer explicitly identified?",
      "Are prerequisites and scope visible?",
      "Is the rationale carried into the report?",
    ],
  };
  return (
    <>
      <Hero
        eyebrow="Evaluation"
        lines={["Evidence before", "outcomes."]}
        description="A good evaluation establishes what the workflow can explain. Define the questions before deciding what improvement means."
      >
        <div className="scorecard">
          <span className="eyebrow">Pilot scorecard</span>
          {[
            ["Reconstruction", "To evaluate"],
            ["Scope accuracy", "To evaluate"],
            ["Owner handoff", "To evaluate"],
            ["Decision traceability", "To evaluate"],
          ].map(([k, v]) => (
            <div key={k}>
              <span>{k}</span>
              <b>{v}</b>
            </div>
          ))}
        </div>
      </Hero>
      <section id="next" className="section container">
        <SectionHead
          label="What would useful evidence show?"
          title="Inspect the evaluation questions."
        />
        <div className="evaluation-tabs">
          <div
            role="tablist"
            aria-label="Evaluation areas"
            onKeyDown={(e) => {
              const keys = Object.keys(checks),
                i = keys.indexOf(tab);
              let target;
              if (e.key === "ArrowRight") target = keys[(i + 1) % keys.length];
              if (e.key === "ArrowLeft")
                target = keys[(i + keys.length - 1) % keys.length];
              if (e.key === "Home") target = keys[0];
              if (e.key === "End") target = keys.at(-1);
              if (target) {
                e.preventDefault();
                setTab(target);
                document.getElementById("eval-" + target)?.focus();
              }
            }}
          >
            {Object.keys(checks).map((k) => (
              <button
                key={k}
                id={"eval-" + k}
                role="tab"
                tabIndex={tab === k ? 0 : -1}
                aria-selected={tab === k}
                aria-controls="eval-panel"
                onClick={() => setTab(k)}
              >
                {k === "reconstruct"
                  ? "Reconstruction"
                  : k === "scope"
                    ? "Scope"
                    : "Decision"}
              </button>
            ))}
          </div>
          <div id="eval-panel" role="tabpanel" aria-labelledby={"eval-" + tab}>
            {checks[tab].map((q, i) => (
              <article key={q}>
                <span>0{i + 1}</span>
                <h3>{q}</h3>
                <p>
                  Review with the source owner. Record the result and its
                  limits.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Steps
        className="results-workflow-texture"
        id="results-workflow"
        title="A decision needs a baseline."
        items={[
          [
            "Define the current workflow",
            "Document how your team investigates the same kind of write today.",
          ],
          [
            "Run the scoped exercise",
            "Use comparable evidence and record what could and could not be reconstructed.",
          ],
          [
            "Agree the readout",
            "Assess the handoff, scope and decision traceability before making a pilot commitment.",
          ],
        ]}
      />
      <section className="section slate">
        <div className="container split-grid">
          <h2 className="display">
            Customer evidence
            <br />
            <em>comes from customers.</em>
          </h2>
          <div>
            <p className="large-copy">
              There are no published customer outcomes yet. The first evaluation
              should produce an inspectable result before it produces a claim.
            </p>
            <TextLink to="/demo">Inspect the example instead</TextLink>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

export function About() {
  return (
    <>
      <section className="about-hero">
        <img
          src="/brand/imagery/material-copper-archive-1600.webp"
          alt=""
          width="1600"
          height="1000"
          data-parallax
        />
        <div className="hero-scrim" />
        <div className="container">
          <p className="eyebrow">About TraceTriage</p>
          <Heading lines={["A more accountable", "agent workflow."]} />
          <p className="lead">
            When an agent can change a system, the response needs a person, a
            source and a decision that can be explained.
          </p>
        </div>
      </section>
      <section
        id="next"
        className="section container about-statement"
        data-reveal
      >
        <span className="eyebrow">The principle</span>
        <h2 className="display">
          Preserve what happened.
          <br />
          Make uncertainty visible.
          <br />
          <em>Keep people responsible.</em>
        </h2>
      </section>
      <ScrollStory
        chapters={[
          [
            "Begin with the record.",
            "The original trace and downstream state are more useful than a confident summary without its sources.",
            "desk",
          ],
          [
            "Keep the unknowns visible.",
            "Missing evidence and unresolved ownership are facts about an investigation. They should survive every handoff.",
            "impact",
          ],
          [
            "End with a human decision.",
            "A proposal and an authorization are not interchangeable. The response should preserve the distinction.",
            "approval",
          ],
        ]}
        label="The way we approach the problem"
        id="company-story"
      />
      <Steps
        title="Investigate. Evaluate. Document."
        items={[
          [
            "Investigate the operational job",
            "Understand the write, the systems around it and the people accountable for them.",
          ],
          [
            "Evaluate a bounded workflow",
            "Use a representative incident to test the evidence and decision handoff.",
          ],
          [
            "Document what the exercise establishes",
            "Record what worked, what remains unknown and what a further pilot would need.",
          ],
        ]}
      />
      <section className="section container company-details">
        <span className="eyebrow">Company details</span>
        <div>
          <h2 className="display">Our address.</h2>
          <address>
            12 Truong Cong Dinh
            <br />
            Ward 13
            <br />
            Tan Binh District
            <br />
            Ho Chi Minh City 790094
            <br />
            Vietnam
          </address>
        </div>
      </section>
      <CTA title="Help define a useful agent incident evaluation." />
    </>
  );
}

export function Trust() {
  return (
    <>
      <Hero
        eyebrow="Trust & governance"
        lines={["Authority is", "a design boundary."]}
        description="An incident response should make the source, the owner and the decision visible. Data access and response permission need their own boundaries."
        theme="slate"
      >
        <Scene kind="approval" />
      </Hero>
      <div id="next" />
      <ScrollStory
        chapters={[
          [
            "Preserve provenance.",
            "Keep original event identifiers and distinguish observation from inference.",
            "desk",
          ],
          [
            "Minimize the data.",
            "Use the minimum context needed for the investigation. The web walkthrough stays separate from any real inquiry.",
            "architecture",
          ],
          [
            "Require a deliberate decision.",
            "No scroll state or recommendation can authorize containment. The local walkthrough records review only.",
            "approval",
          ],
        ]}
        label="Three boundaries, carried through the incident"
        id="trust-story"
      />
      <Steps
        title="A practical data boundary."
        items={[
          [
            "The interactive incident",
            "A fixed synthetic fixture is bundled with the site. Review choices exist only in browser memory.",
          ],
          [
            "Inquiry forms",
            "The current form prepares a local file. It does not transmit inquiry data or incident records.",
          ],
          [
            "Production evaluation",
            "Deployment, source permissions, retention and response authority must be agreed separately.",
          ],
        ]}
      />
      <section className="section container">
        <SectionHead
          label="What has been established"
          title="Say what is known."
        />
        <div className="trust-status">
          <div>
            <h3>Live source connections</h3>
            <p>Not connected in this website.</p>
          </div>
          <div>
            <h3>Production execution</h3>
            <p>No writes, pause or rollback are executed.</p>
          </div>
          <div>
            <h3>Security certifications</h3>
            <p>No certification is claimed.</p>
          </div>
          <div>
            <h3>Production deployment model</h3>
            <p>To be agreed during evaluation.</p>
          </div>
        </div>
      </section>
      <FAQ
        items={[
          [
            "Does the walkthrough use our data?",
            "No. It uses a bundled synthetic fixture and makes no model or production-system calls.",
          ],
          [
            "Does the form collect a real incident?",
            "No. Keep inquiries high level; the local form does not send data or accept production logs.",
          ],
          [
            "Can you provide compliance documentation?",
            "Formal security and legal documentation would need to be established for a real evaluation. No SOC 2, ISO or similar certification is claimed here.",
          ],
        ]}
      />
      <CTA title="Define the boundaries before the evaluation." />
    </>
  );
}

export function Integrations() {
  const [source, setSource] = useState("Trace");
  const fields = {
    Trace: [
      ["trace_id", "TR-27"],
      ["agent_id", "support-agent-01"],
      ["tool", "update_accounts"],
    ],
    Write: [
      ["write_batch_id", "WB-3"],
      ["account_id", "ACC-001"],
      ["source_id", "evt-0001"],
    ],
    Account: [
      ["original_tier", "Standard"],
      ["written_tier", "Enterprise"],
      ["evidence_status", "observed"],
    ],
  };
  return (
    <>
      <Hero
        eyebrow="Evidence sources"
        lines={["Keep your context.", "Connect the evidence."]}
        description="The source matters more than the logo on the integration card. Define which records, permissions and identifiers the investigation needs."
        theme="parchment"
      >
        <Scene kind="architecture" />
      </Hero>
      <div id="next" />
      <section className="section container">
        <SectionHead
          label="Proposed field mapping"
          title="See what needs to connect."
          description="The example below is a local fixture. Production connectors and permissions would be scoped during an evaluation."
        />
        <div className="integration-workbench">
          <div className="source-tabs" role="group" aria-label="Select source">
            {Object.keys(fields).map((k) => (
              <button
                key={k}
                aria-pressed={source === k}
                onClick={() => setSource(k)}
              >
                <Icon
                  name={
                    k === "Trace"
                      ? "document"
                      : k === "Write"
                        ? "database"
                        : "users"
                  }
                />
                {k}
                <span>→</span>
              </button>
            ))}
          </div>
          <div className="field-map">
            <span className="eyebrow">{source} / example fields</span>
            {fields[source].map(([k, v]) => (
              <div key={k}>
                <code>{k}</code>
                <span>{v}</span>
              </div>
            ))}
          </div>
          <div className="connector-status">
            <Icon name="layers" size={40} />
            <h3>Evidence layer</h3>
            <p>Preserve source identifiers through every view.</p>
            <span className="status inferred">Proposed mapping</span>
          </div>
        </div>
      </section>
      <Steps
        title="Connection is a scoping decision."
        items={[
          [
            "Identify the source owner",
            "Agree who can grant access and verify the source fields.",
          ],
          [
            "Limit the access",
            "Define the records and permissions necessary for one workflow.",
          ],
          [
            "Preserve the distinctions",
            "Keep raw source events, downstream state and inferred relationships separate.",
          ],
        ]}
      />
      <CTA />
    </>
  );
}

export function RequestDemo() {
  return (
    <>
      <Hero
        eyebrow="Request a tabletop"
        lines={["Bring one workflow.", "Ask a useful question."]}
        description="Start with the agent, the system it writes to and the people who own that system. Keep production data out of the inquiry."
        theme="apricot"
        actions={false}
      >
        <div className="form-journey">
          <div>
            <span>01</span>
            <strong>Scope the incident</strong>
            <p>Agree the workflow and the evidence.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Inspect the handoff</strong>
            <p>Trace, impact, owner and decision.</p>
          </div>
          <div>
            <span>03</span>
            <strong>Define the readout</strong>
            <p>What would a useful evaluation establish?</p>
          </div>
        </div>
      </Hero>
      <section id="next" className="section container form-section">
        <div data-reveal>
          <span className="eyebrow">The starting context</span>
          <h2 className="display">
            A small amount
            <br />
            <em>of useful detail.</em>
          </h2>
          <p>
            The on-call lead, incident owner and platform engineer each bring a
            different perspective. Start with whoever owns the workflow.
          </p>
          <div className="form-side-note">
            <Icon name="document" />
            <p>
              Prepare your inquiry locally. Nothing is sent from this website.
            </p>
          </div>
        </div>
        <IntakeForm />
      </section>
      <FAQ
        items={[
          [
            "What should I prepare?",
            "A high-level description of the agent, its writable system and the responsible people. Do not include credentials, personal data or incident logs.",
          ],
          [
            "Will submitting this form book a meeting?",
            "No. This implementation prepares a downloadable inquiry. A real delivery and scheduling channel is not connected.",
          ],
          [
            "Can I inspect the workflow first?",
            "Yes. The interactive incident shows the synthetic evidence and human review sequence without using production data.",
          ],
        ]}
      />
    </>
  );
}
export function Contact() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        lines={["Start a useful", "conversation."]}
        description="Tell us the question you want to answer about an agent incident. Keep the context high level."
        actions={false}
      >
        <div className="contact-options">
          <Link to="/request-demo">
            <Icon name="review" />
            <h3>Evaluate a workflow</h3>
            <p>Prepare a tabletop inquiry.</p>
            <span>↗</span>
          </Link>
          <Link to="/trust">
            <Icon name="owner" />
            <h3>Discuss the boundary</h3>
            <p>Read the source and authority considerations.</p>
            <span>↗</span>
          </Link>
        </div>
      </Hero>
      <section id="next" className="section container form-section">
        <div>
          <span className="eyebrow">A focused inquiry</span>
          <h2 className="display">
            The right context.
            <br />
            <em>No sensitive data.</em>
          </h2>
          <p>
            This website prepares an inquiry in your browser. A company contact
            channel has not been connected.
          </p>
        </div>
        <IntakeForm contact />
      </section>
    </>
  );
}
export function SignIn() {
  const [email, setEmail] = useState(""),
    [state, setState] = useState("");
  return (
    <section className="access-page">
      <div className="access-image">
        <img
          src="/brand/imagery/hero-horizon-800.webp"
          alt=""
          width="800"
          height="1000"
        />
        <div>
          <p className="eyebrow">TraceTriage workspace</p>
          <h1 className="display">
            Keep the whole
            <br />
            <em>incident in view.</em>
          </h1>
        </div>
      </div>
      <div className="access-form">
        <span className="eyebrow">Workspace access</span>
        <h2 className="display">
          Welcome
          <br />
          <em>back.</em>
        </h2>
        <p>
          Looking for an existing workspace? Authentication is not connected in
          this implementation. You can explore the incident without an account.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setState(
              "No identity service is connected. No sign-in link has been sent. Explore the incident below or prepare an access inquiry.",
            );
          }}
        >
          <label>
            Work email
            <input
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button className="button primary">
            Check access <span>↗</span>
          </button>
          {state && (
            <p className="form-note" role="status">
              {state}
            </p>
          )}
        </form>
        <A secondary to="/demo">
          Explore the incident
        </A>
        <TextLink to="/request-demo">Request access</TextLink>
        <Link className="help-link" to="/contact">
          Need help?
        </Link>
      </div>
    </section>
  );
}

const resourceData = {
  "incident-reconstruction-checklist": {
    eyebrow: "Field guide / 01",
    title: ["Reconstruct", "the write."],
    subtitle:
      "An investigator’s checklist for preserving the action, its scope and the evidence behind it.",
    sections: [
      [
        "Preserve the initiating context",
        "Capture the agent session, relevant trace identifiers and the tool call before context becomes scattered. Keep the source available for inspection.",
      ],
      [
        "Find the write batch",
        "Identify the batch associated with the tool operation. Record the affected account identifiers and any available event references.",
      ],
      [
        "Verify downstream state",
        "Compare source evidence against persisted state. A successful tool response alone does not establish that every record changed.",
      ],
      [
        "Separate observation from inference",
        "Classify observed writes, inferred relationships and records awaiting verification. Do not let a missing source silently become a verified record.",
      ],
      [
        "Resolve the responsibility",
        "Identify the source owner and the person authorized to review a response. Carry unresolved ownership forward.",
      ],
      [
        "Prepare the human decision",
        "Define the proposed scope, prerequisites, evidence and decision owner. Document the rationale without executing an action by implication.",
      ],
      [
        "Carry it into an evaluation",
        "Record expected behaviour, permitted action and a failure assertion. Preserve the source identifiers in the exported case.",
      ],
    ],
  },
  "tabletop-guide": {
    eyebrow: "Field guide / 02",
    title: ["Run a useful", "tabletop."],
    subtitle:
      "A bounded exercise for one agent workflow, with a readout that can support a real decision.",
    sections: [
      [
        "Choose a representative workflow",
        "Begin with one agent and one writable system. Avoid expanding the scenario until the responsibilities and evidence are clear.",
      ],
      [
        "Agree the participants",
        "Bring the on-call lead, incident owner and platform engineer where appropriate. Name who can verify source records and who owns the decision.",
      ],
      [
        "Set the evidence boundary",
        "Use synthetic or otherwise approved exercise material. Agree source permissions and exclude credentials, personal data and unrelated records.",
      ],
      [
        "Walk the incident",
        "Trace the action, reconstruct the write, inspect scope and ownership, and prepare the review. Record points where the evidence becomes incomplete.",
      ],
      [
        "Define a baseline",
        "Compare against your current investigation process using the same kind of incident. Establish a measurement method before claiming improvement.",
      ],
      [
        "Write the readout",
        "Document what the exercise established, what it did not and what a further pilot would require. Unknown is not zero.",
      ],
    ],
  },
};
export function Resources() {
  return (
    <>
      <Hero
        eyebrow="Resources"
        lines={["A field guide", "to agent incidents."]}
        description="Practical ways to reconstruct a write, scope an exercise and keep the human decision accountable."
        actions={false}
      >
        <div className="resource-cover">
          <span className="eyebrow">The incident notebook</span>
          <h3>
            Observe.
            <br />
            Reconstruct.
            <br />
            <em>Decide.</em>
          </h3>
          <div className="notebook-lines" />
          <Icon name="report" size={40} />
        </div>
      </Hero>
      <section id="next" className="section container">
        <div className="resource-grid">
          {Object.entries(resourceData).map(([slug, r], i) => (
            <Link
              to={"/resources/" + slug}
              className={"resource-card resource-" + i}
              key={slug}
            >
              <span className="eyebrow">{r.eyebrow}</span>
              <Icon name={i ? "review" : "report"} size={48} />
              <h2 className="display">{r.title.join(" ")}</h2>
              <p>{r.subtitle}</p>
              <span className="text-link">
                Read the guide <b>↗</b>
              </span>
            </Link>
          ))}
        </div>
      </section>
      <Steps
        title="The next useful resource is an incident."
        items={[
          [
            "Inspect the synthetic record",
            "Follow the source IDs, scope classes and ownership in the walkthrough.",
          ],
          [
            "Review the responsibility model",
            "Read the human decision and data boundaries before an evaluation.",
          ],
        ]}
      />
      <CTA />
    </>
  );
}
export function ResourceArticle() {
  const { slug } = useParams();
  const r = resourceData[slug];
  if (!r) return <NotFound />;
  return (
    <>
      <Hero
        eyebrow={r.eyebrow}
        lines={r.title}
        description={r.subtitle}
        actions={false}
      >
        <div className="article-index">
          <span className="eyebrow">In this guide</span>
          {r.sections.map(([t], i) => (
            <a key={t} href={"#guide-" + i}>
              <span>0{i + 1}</span>
              {t}
              <b>↓</b>
            </a>
          ))}
        </div>
      </Hero>
      <div id="next" />
      <div className="container article-layout">
        <aside>
          <span className="eyebrow">Keep the guide</span>
          <ExportButton
            kind={slug === "tabletop-guide" ? "tabletop" : "checklist"}
          />
          <TextLink to="/resources">All resources</TextLink>
        </aside>
        <article className="article-body">
          {r.sections.map(([t, d], i) => (
            <section id={"guide-" + i} key={t} data-reveal>
              <span className="eyebrow">0{i + 1}</span>
              <h2 className="display">{t}</h2>
              <p>{d}</p>
              {i === 2 && (
                <div className="article-figure">
                  <Scene
                    kind={
                      slug === "tabletop-guide" ? "approval" : "architecture"
                    }
                  />
                </div>
              )}
            </section>
          ))}
        </article>
      </div>
      <CTA title="Put the guide to work in a scoped exercise." />
    </>
  );
}
export function Legal({ terms = false }) {
  return (
    <>
      <Hero
        eyebrow="Website information"
        lines={terms ? ["Website", "use."] : ["Privacy &", "data handling."]}
        description={
          terms
            ? "The limits of the local incident walkthrough and inquiry tools."
            : "What happens to data in the current website implementation."
        }
        actions={false}
      >
        <Icon name={terms ? "document" : "owner"} size={80} />
      </Hero>
      <section id="next" className="container legal-body section">
        <p className="legal-note">
          These pages describe the current implementation. Formal operator
          details, production terms and processor-specific notices must be
          supplied before a commercial launch.
        </p>
        {(terms
          ? [
              [
                "The incident walkthrough",
                "Oakridge Services, its people and records are synthetic. The interaction is a local example, not a production incident-response service.",
              ],
              [
                "Review is not execution",
                "Local approve or reject choices record a browser-memory decision only. They do not pause agents, write records, roll back changes or call a model.",
              ],
              [
                "Commercial information",
                "Prices are hypotheses for discussion, subject to scope and availability. No contract, payment or subscription is created through this website.",
              ],
              [
                "Use of the material",
                "Guides and sample exports support evaluation. They are not a guarantee of completeness, operational safety or measured improvement.",
              ],
              [
                "Contact and access",
                "A real contact processor and identity service are not connected. Inquiry tools download locally rather than sending a message.",
              ],
            ]
          : [
              [
                "Interactive incident data",
                "The sample fixture is bundled with the site. Filters and review choices remain in browser memory and are lost on reload.",
              ],
              [
                "Inquiry details",
                "The inquiry form holds your entries in page memory and prepares a file only when you choose to download it. It sends nothing to an external processor.",
              ],
              [
                "Sensitive information",
                "Do not enter production incident logs, personal data, secrets or credentials. The form is intended for high-level evaluation context.",
              ],
              [
                "Analytics and storage",
                "No analytics, marketing cookies or remote lead collection are enabled. The website loads local fonts and assets.",
              ],
              [
                "Before a production launch",
                "A legal operator, contact channel, retention policy and any processors need to be identified in an approved notice.",
              ],
            ]
        ).map(([t, d]) => (
          <article key={t}>
            <h2>{t}</h2>
            <p>{d}</p>
          </article>
        ))}
        <TextLink to="/trust">Read the operational boundaries</TextLink>
      </section>
    </>
  );
}
export function NotFound() {
  return (
    <section className="not-found container">
      <span className="eyebrow">404 / No record found</span>
      <h1 className="display">
        This trace
        <br />
        <em>ends here.</em>
      </h1>
      <p>The page may have moved, or this record is outside the example.</p>
      <div className="button-row">
        <A to="/">Back to the beginning</A>
        <A to="/demo" secondary>
          Inspect the incident
        </A>
      </div>
    </section>
  );
}

const base = "/demo/incidents/INC-027";
export function DemoIntro() {
  const { decision } = useExperience();
  return (
    <>
      <Hero
        eyebrow="The interactive incident"
        lines={["One write.", "The whole account."]}
        description="Follow a CRM tier mutation from its initiating trace to a review decision. Inspect the original identifiers and distinguish evidence from inference."
        theme="parchment"
        actions={false}
      >
        <Scene kind="desk" />
      </Hero>
      <section id="next" className="demo-intro-section section container">
        <div>
          <span className="eyebrow">Oakridge Services</span>
          <h2 className="display">
            Twelve accounts.
            <br />
            <em>One open question.</em>
          </h2>
          <p>
            This is a synthetic incident with fictional records and people. It
            runs locally in your browser: no real writes, rollback, model calls
            or account access.
          </p>
          <A to={base}>Open INC-027</A>
          <TextLink to="/demo/incidents">View the incident desk</TextLink>
        </div>
        <div className="incident-flow-card" data-reveal>
          <div className="incident-flow-header">
            <div>
              <span className="eyebrow">Incident INC-027</span>
              <h3>Follow the change.</h3>
            </div>
            <span className="incident-flow-tag">CRM tier mutation</span>
          </div>
          <ol className="incident-flow-list">
            {[
              [
                "document",
                "Initiating trace",
                "TR-27",
                "The agent session that started the write.",
                base + "/timeline",
              ],
              [
                "database",
                "Tool write batch",
                "WB-3",
                "The write associated with this session.",
                base + "/timeline",
              ],
              [
                "users",
                "Affected scope",
                "12 accounts",
                "Eight observed, three inferred, one unresolved.",
                base + "/impact",
              ],
              [
                "checkpoint",
                "Human review",
                decision.state === "pending"
                  ? "Awaiting a decision"
                  : decision.state === "approved"
                    ? "Approved locally"
                    : "Rejected locally",
                "A proposal requires a deliberate human decision.",
                base + "/approval",
              ],
            ].map(([icon, label, value, description, to], i) => (
              <li key={label} className={i === 3 ? "review-stage" : ""}>
                <Link to={to} className="incident-flow-stage">
                  <span className="incident-flow-icon">
                    <Icon name={icon} />
                  </span>
                  <div>
                    <span className="incident-flow-label">{label}</span>
                    <strong>{value}</strong>
                    <p>{description}</p>
                  </div>
                  <span className="incident-flow-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <div className="incident-flow-coverage">
            <div className="incident-flow-bar" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <p>
              <span>
                <i className="observed-dot" />8 observed
              </span>
              <span>
                <i className="inferred-dot" />3 inferred
              </span>
              <span>
                <i className="awaiting-dot" />1 awaiting verification
              </span>
            </p>
          </div>
        </div>
      </section>
      <ScrollStory />
      <CTA />
    </>
  );
}
function DemoShell({ title, description, children }) {
  const { pathname } = useLocation();
  return (
    <div className="demo-shell">
      <aside className="demo-sidebar">
        <Link to="/demo/incidents" className="workspace-name">
          <span className="workspace-monogram">O</span>Oakridge Services
        </Link>
        <span className="data-notice">Synthetic incident</span>
        <div className="workspace-rule" />
        <Link to="/demo/incidents">
          Incident desk <span>10</span>
        </Link>
        {[
          ["Overview", base],
          ["Timeline", base + "/timeline"],
          ["Impact & owners", base + "/impact"],
          ["Review proposal", base + "/approval"],
          ["Report & export", base + "/report"],
        ].map(([t, l]) => (
          <Link className={pathname === l ? "active" : ""} key={l} to={l}>
            {t}
          </Link>
        ))}
        <div className="workspace-rule" />
        <Link to="/demo/data-dictionary">Data dictionary</Link>
        <Link to="/request-demo">Evaluate your workflow ↗</Link>
      </aside>
      <div className="demo-main">
        <div className="demo-breadcrumb">
          <Link to="/demo">Walkthrough</Link>
          <span>/</span>
          <Link to={base}>INC-027</Link>
          <span className="demo-memory-note">Local browser state</span>
        </div>
        <header className="demo-header">
          <p className="eyebrow">Oakridge Services / Incident response</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </header>
        {children}
      </div>
    </div>
  );
}
export function IncidentQueue() {
  const [query, setQuery] = useState("");
  const rows = Array.from({ length: 10 }, (_, i) => ({
    id: i === 0 ? "INC-027" : "INC-" + String(26 - i).padStart(3, "0"),
    name:
      i === 0
        ? "CRM tier mutation"
        : [
            "Scope reconciliation",
            "Tool response mismatch",
            "Owner handoff",
            "Source verification",
          ][i % 4],
  }));
  const filtered = rows.filter((r) =>
    (r.id + " " + r.name).toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <DemoShell
      title="Incident desk"
      description="Ten synthetic queue records. INC-027 is the complete investigation available to inspect."
    >
      <label className="search-field">
        <Icon name="search" />
        <input
          aria-label="Search incidents"
          placeholder="Search incidents"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      <div className="queue-list">
        {filtered.map((r, i) => (
          <article key={r.id}>
            <span>{r.id}</span>
            <div>
              <h2>{r.name}</h2>
              <p>
                {r.id === "INC-027"
                  ? "support-agent-01 · TR-27 / WB-3"
                  : "Queue context only · no source detail included"}
              </p>
            </div>
            <span
              className={
                "status " + (r.id === "INC-027" ? "awaiting" : "inferred")
              }
            >
              {r.id === "INC-027" ? "Review required" : "Reference record"}
            </span>
            {r.id === "INC-027" ? (
              <Link to={base}>Inspect ↗</Link>
            ) : (
              <span className="queue-static">No detail</span>
            )}
          </article>
        ))}
        {!filtered.length && (
          <div className="queue-empty" role="status">
            <h2>No incidents match this search.</h2>
            <p>Try an incident identifier or a shorter phrase.</p>
            <button className="button secondary" onClick={() => setQuery("")}>
              Clear search
            </button>
          </div>
        )}
      </div>
    </DemoShell>
  );
}
export function IncidentOverview() {
  const { decision } = useExperience();
  return (
    <DemoShell
      title="CRM tier mutation"
      description="support-agent-01 · trace TR-27 · write batch WB-3"
    >
      <div className="incident-summary">
        <div>
          <span>Accounts in scope</span>
          <strong>12</strong>
        </div>
        <div>
          <span>Observed writes</span>
          <strong>8</strong>
        </div>
        <div>
          <span>Decision state</span>
          <strong>
            {decision.state === "pending"
              ? "Pending"
              : decision.state === "approved"
                ? "Local approval"
                : "Local rejection"}
          </strong>
        </div>
      </div>
      <div className="demo-two">
        <Scene kind="desk" />
        <Coverage />
      </div>
      <div className="demo-notice">
        <Icon name="info" />
        <p>
          A proposed response is awaiting review. Local choices change this
          example only; no production action is executed.
        </p>
      </div>
      <div className="related-grid">
        <Link to={base + "/impact"}>
          <h3>Inspect the account scope</h3>
          <p>Observed, inferred and awaiting verification.</p>
          <span>↗</span>
        </Link>
        <Link to={base + "/approval"}>
          <h3>Review the proposal</h3>
          <p>Scope, prerequisites and a deliberate decision.</p>
          <span>↗</span>
        </Link>
      </div>
    </DemoShell>
  );
}
export function IncidentTimeline() {
  return (
    <DemoShell
      title="Evidence timeline"
      description="Inspect the source chronology. All times are 9 October 2026, UTC."
    >
      <Scene kind="timeline" />
      <section className="timeline-source-table">
        <h2>Source context</h2>
        {events.map((e) => (
          <article key={e.id}>
            <time>{e.time}</time>
            <div>
              <h3>{e.name}</h3>
              <p>{e.body}</p>
            </div>
            <code>{e.id}</code>
          </article>
        ))}
      </section>
    </DemoShell>
  );
}
export function IncidentImpact() {
  const [filter, setFilter] = useState("all");
  return (
    <DemoShell
      title="Impact & ownership"
      description="Twelve unique synthetic accounts. Evidence certainty is separate from the scenario’s intended write."
    >
      <div className="demo-two">
        <Scene kind="impact" />
        <Coverage onFilter={setFilter} filter={filter} />
      </div>
      <div
        className="filter-row"
        role="group"
        aria-label="Account evidence filter"
      >
        {["all", "observed", "inferred", "awaiting"].map((f) => (
          <button
            key={f}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f === "all"
              ? "All accounts"
              : f === "awaiting"
                ? "Awaiting verification"
                : f}
          </button>
        ))}
      </div>
      <Accounts filter={filter} />
      <p className="data-notice">
        A-012 has no verified source or resolved owner. Its written tier is
        unverified.
      </p>
    </DemoShell>
  );
}
export function IncidentRecord() {
  const { account } = useParams();
  const a = fixture.accounts.find((x) => x.id === account);
  if (!a) return <NotFound />;
  return (
    <DemoShell
      title={a.display_id + " / account reconciliation"}
      description="Compare original state, scenario write and the source evidence available for this record."
    >
      <div className="reconciliation">
        <article>
          <span className="eyebrow">Original tier</span>
          <h2 className="display">Standard</h2>
          <p>Starting state in the synthetic fixture.</p>
        </article>
        <span className="reconcile-arrow">→</span>
        <article>
          <span className="eyebrow">Written tier</span>
          <h2 className="display">
            {a.evidence_status === "awaiting" ? "Unverified" : "Enterprise"}
          </h2>
          <p>
            {a.evidence_status === "observed"
              ? "Observed source event available."
              : a.evidence_status === "inferred"
                ? "Inferred from the scenario; no direct event."
                : "Awaiting downstream verification."}
          </p>
        </article>
      </div>
      <div className="record-detail">
        <div>
          <span>Account identifier</span>
          <code>{a.id}</code>
        </div>
        <div>
          <span>Trace / batch</span>
          <code>TR-27 / WB-3</code>
        </div>
        <div>
          <span>Source event</span>
          <code>{a.source_id || "Unavailable"}</code>
        </div>
        <div>
          <span>Evidence class</span>
          <strong>{a.evidence_status}</strong>
        </div>
        <div>
          <span>Owner</span>
          <strong>{a.owner || "Unresolved"}</strong>
        </div>
      </div>
      {a.source_id ? (
        <pre className="source-code">
          {JSON.stringify(
            {
              event: a.source_id,
              trace: a.trace_id,
              write_batch: a.write_batch_id,
              account: a.id,
              original_tier: "Standard",
              written_tier: "Enterprise",
            },
            null,
            2,
          )}
        </pre>
      ) : (
        <div className="demo-notice">
          <Icon name="info" />
          <p>
            No direct source is included for this account. The uncertainty
            remains visible.
          </p>
        </div>
      )}
      <TextLink to={base + "/impact"}>Back to all accounts</TextLink>
    </DemoShell>
  );
}
export function IncidentApproval() {
  const { decision, setDecision } = useExperience();
  const [modal, setModal] = useState(null),
    [reason, setReason] = useState("");
  const dialog = useRef(null),
    opener = useRef(null);
  useEffect(() => {
    if (modal) {
      dialog.current?.showModal();
    } else dialog.current?.close();
  }, [modal]);
  const open = (value, e) => {
    opener.current = e.currentTarget;
    setReason("");
    setModal(value);
  };
  const close = () => {
    setModal(null);
    opener.current?.focus();
  };
  const commit = (e) => {
    e.preventDefault();
    setDecision({ state: modal, reason: reason.trim() });
    close();
  };
  return (
    <DemoShell
      title="Review the containment proposal"
      description="A deliberate local decision. No real pause, write or rollback is executed."
    >
      <div className="proposal-detail">
        <div className="proposal-status">
          <span
            className={
              "status " +
              (decision.state === "pending"
                ? "awaiting"
                : decision.state === "approved"
                  ? "observed"
                  : "inferred")
            }
          >
            {decision.state === "pending"
              ? "Awaiting review"
              : decision.state === "approved"
                ? "Approved locally"
                : "Rejected locally"}
          </span>
          <span>Reviewer: Maya Chen · fictional</span>
        </div>
        <h2>Scoped pause proposal</h2>
        <p>
          Proposed scope: support-agent-01, write batch WB-3. A-012 remains
          unverified, with unresolved ownership.
        </p>
        <div className="proposal-checklist">
          <h3>Before any real response</h3>
          <ul>
            <li>Verify affected records and the scope.</li>
            <li>Resolve authority over the target system.</li>
            <li>Agree the response and prerequisites.</li>
            <li>Record the human decision and its rationale.</li>
          </ul>
        </div>
        {decision.state === "pending" ? (
          <div className="button-row">
            <button
              className="button primary"
              onClick={(e) => open("approved", e)}
            >
              Record local approval ↗
            </button>
            <button
              className="button secondary"
              onClick={(e) => open("rejected", e)}
            >
              Record local rejection
            </button>
          </div>
        ) : (
          <div className="decision-record">
            <h3>Local review recorded</h3>
            <p>{decision.reason}</p>
            <p>
              No real action was executed. This choice exists only for the
              current browser session.
            </p>
            <button
              className="text-link"
              onClick={() => setDecision({ state: "pending", reason: "" })}
            >
              Reset example decision →
            </button>
          </div>
        )}
      </div>
      <dialog
        ref={dialog}
        className="review-dialog"
        data-lenis-prevent
        onCancel={close}
        onClick={(e) => {
          if (e.target === dialog.current) close();
        }}
        aria-labelledby="review-title"
      >
        <form onSubmit={commit}>
          <button
            type="button"
            className="dialog-close"
            aria-label="Cancel review"
            onClick={close}
          >
            ×
          </button>
          <span className="eyebrow">Local example only</span>
          <h2 className="display" id="review-title">
            Record {modal === "approved" ? "approval" : "rejection"}?
          </h2>
          <p>
            This records a simulated reviewer’s choice. It does not grant real
            authority or execute containment.
          </p>
          <label>
            Review rationale
            <textarea
              required
              minLength="8"
              rows="3"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Explain the decision and any remaining uncertainty."
            />
          </label>
          <div className="button-row">
            <button type="submit" className="button primary">
              Record local decision
            </button>
            <button type="button" className="button secondary" onClick={close}>
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </DemoShell>
  );
}
export function IncidentReport() {
  const { decision } = useExperience();
  return (
    <DemoShell
      title="Postmortem & evaluation"
      description="Keep the incident and the human decision attached to the next test."
    >
      <div className="report-layout">
        <article className="postmortem">
          <span className="eyebrow">Oakridge Services / INC-027</span>
          <h2 className="display">CRM tier mutation</h2>
          <h3>Observed behaviour</h3>
          <p>
            The scenario initiates a Standard → Enterprise tier mutation. Eight
            synthetic accounts have direct source events; three relationships
            are inferred and one awaits verification.
          </p>
          <h3>Decision</h3>
          <p>
            {decision.state === "pending"
              ? "Awaiting local human review."
              : decision.state === "approved"
                ? "Local example approval recorded."
                : "Local example rejection recorded."}{" "}
            No real action executed.
          </p>
          {decision.reason && <blockquote>{decision.reason}</blockquote>}
          <h3>Expected behaviour</h3>
          <p>
            Account tiers remain unchanged without explicit authorization. A
            missing owner or source remains an unresolved question.
          </p>
          <h3>Evaluation case</h3>
          <p>
            Retain the permitted action, expected state and failure assertion
            with TR-27, WB-3 and the original event identifiers.
          </p>
        </article>
        <aside>
          <Scene kind="report" />
          <ExportButton />
          <p className="data-notice">
            The JSON is synthetic and includes your current local review state.
          </p>
        </aside>
      </div>
    </DemoShell>
  );
}
export function Dictionary() {
  return (
    <DemoShell
      title="The evidence vocabulary"
      description="Definitions and boundaries of the example fixture."
    >
      <div className="dictionary">
        {[
          [
            "Observed",
            "A direct source event is available for the record. There are eight in this scenario.",
          ],
          [
            "Inferred",
            "The scenario suggests a relationship, but no direct source event is included. There are three.",
          ],
          [
            "Awaiting verification",
            "The record has no direct source and unresolved ownership. One account remains in this state.",
          ],
          ["Trace ID", "TR-27 identifies the initiating agent trace."],
          [
            "Write batch",
            "WB-3 joins the tool operation to the account-scope investigation.",
          ],
          [
            "Local review",
            "A browser-memory reviewer choice. It is not production authorization.",
          ],
          [
            "Evaluation export",
            "A JSON representation of the synthetic incident and expected behaviour. It does not train or call an agent.",
          ],
        ].map(([t, d]) => (
          <article key={t}>
            <h2>{t}</h2>
            <p>{d}</p>
          </article>
        ))}
      </div>
    </DemoShell>
  );
}
