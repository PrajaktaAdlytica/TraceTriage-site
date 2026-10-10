export const products = [
  {
    slug: "incident-desk",
    name: "TraceTriage Incident Desk",
    short: "Incident Desk",
    icon: "layers",
    number: "01",
    job: "Correlate the trace.",
    headline: ["The incident starts", "with a write."],
    description:
      "Bring the trigger, agent session and tool write into one investigation. Start with what happened, before deciding what it means.",
    color: "parchment",
    visual: "desk",
    input: ["Agent session", "Tool-call records", "Write batch"],
    steps: [
      [
        "Find the initiating trace",
        "Follow the agent session to the tool call that touched a customer system.",
      ],
      [
        "Join the write",
        "Keep the trace identifier, write batch and source event together.",
      ],
      [
        "Hand off the context",
        "Give the reviewer the original source, not a summary stripped of its evidence.",
      ],
    ],
    output:
      "A single incident record with the trace, write batch, source events and next investigative step.",
    limit:
      "A successful tool call does not establish a persisted record change. Incident Desk keeps that distinction visible.",
    faq: [
      [
        "What belongs in an incident?",
        "The initiating agent session, relevant tool calls, linked write batches and the source evidence available for review.",
      ],
      [
        "Does this replace our pager?",
        "The workflow is designed to complement incident coordination. Your existing escalation and ownership process stays authoritative.",
      ],
    ],
  },
  {
    slug: "incident-review",
    name: "Incident Review",
    short: "Incident Review",
    icon: "review",
    number: "02",
    job: "Map impact and ownership.",
    headline: ["See where", "the change travelled."],
    description:
      "Move from a tool response to the records it may have affected. Separate observed changes from inference, then put an owner beside the scope.",
    color: "slate",
    visual: "impact",
    input: ["Write batch", "Record history", "Ownership context"],
    steps: [
      [
        "Reconcile the source",
        "Compare the write against downstream account state and available source records.",
      ],
      [
        "Map the scope",
        "See observed writes, inferred relationships and records still awaiting verification.",
      ],
      [
        "Resolve the owner",
        "Carry unresolved ownership into the investigation instead of treating it as a completed handoff.",
      ],
    ],
    output:
      "An inspectable impact map, record-level reconciliation and ownership context.",
    limit:
      "An inferred relationship remains an inference. Missing records and owners stay unresolved until a person verifies them.",
    faq: [
      [
        "How is impact counted?",
        "The example counts unique accounts in the scenario. Its evidence classes are observed, inferred and awaiting verification.",
      ],
      [
        "What happens when an owner is missing?",
        "The record remains explicitly unresolved and any decision requiring that authority remains pending.",
      ],
    ],
  },
  {
    slug: "incident-proof",
    name: "Incident Proof",
    short: "Incident Proof",
    icon: "checkpoint",
    number: "03",
    job: "Prepare a human decision.",
    headline: ["A proposal.", "Not a permission."],
    description:
      "Bring the scope, evidence and intended response to the person who can authorize it. A containment proposal is the beginning of a decision, not its completion.",
    color: "apricot",
    visual: "approval",
    input: ["Verified scope", "Decision owner", "Response prerequisites"],
    steps: [
      [
        "Assemble the case",
        "Bring the original evidence and scope into a bounded proposal.",
      ],
      [
        "Make the boundary explicit",
        "Name the reviewer, prerequisites, proposed action and unresolved questions.",
      ],
      [
        "Wait for the person",
        "Review and authorization are deliberate steps. A scroll, animation or suggestion cannot make that decision.",
      ],
    ],
    output:
      "A containment proposal with a named review boundary and an auditable decision record.",
    limit:
      "The demonstration records local review decisions only. It does not pause agents, change accounts or execute rollback.",
    faq: [
      [
        "Can containment happen automatically?",
        "This workflow requires an explicit human decision. The example never executes a production action.",
      ],
      [
        "Can a proposal be rejected?",
        "Yes. The local incident walkthrough lets a reviewer record rejection and its rationale without changing any real system.",
      ],
    ],
  },
  {
    slug: "incident-signal",
    name: "Incident Signal",
    short: "Incident Signal",
    icon: "signal",
    number: "04",
    job: "Preserve the evidence timeline.",
    headline: ["Every event.", "In its own context."],
    description:
      "Keep the incident chronology readable from the first trace to the last decision. Preserve sources and uncertainty alongside the sequence.",
    color: "parchment",
    visual: "timeline",
    input: ["Source events", "Event timestamps", "Decision records"],
    steps: [
      [
        "Preserve the sequence",
        "Separate the time an event happened from the time it became available to an investigator.",
      ],
      [
        "Keep the source attached",
        "Select an event to inspect the trace, batch and evidence behind it.",
      ],
      [
        "Record the decision",
        "Add human review context without rewriting the originating record.",
      ],
    ],
    output:
      "A queryable incident chronology with source references and decision context.",
    limit:
      "Chronology shows ordering, not automatic causality. Missing timestamps and incomplete sources must remain visible.",
    faq: [
      [
        "Are all timestamps equivalent?",
        "No. Event time and ingestion time answer different questions and should not be silently merged.",
      ],
      [
        "Can I inspect an individual event?",
        "The walkthrough exposes source identifiers and available evidence for each event in the example.",
      ],
    ],
  },
  {
    slug: "incident-report",
    name: "Incident Report",
    short: "Incident Report",
    icon: "report",
    number: "05",
    job: "Turn incidents into learning.",
    headline: ["Close the loop.", "Keep the evidence."],
    description:
      "Turn the postmortem into structured evaluation cases. The next system should learn from the exact failure, not an abbreviated account of it.",
    color: "chalk",
    visual: "report",
    input: ["Incident record", "Human decisions", "Expected behaviour"],
    steps: [
      [
        "Write the account",
        "Separate the observed write, inferred scope and unresolved questions in the postmortem.",
      ],
      [
        "Define the expected behaviour",
        "State the permitted action, expected state and failure assertion.",
      ],
      [
        "Export a usable case",
        "Download the example as structured JSON, with original evidence identifiers retained.",
      ],
    ],
    output:
      "A postmortem and evaluation-case export with source references, expectations and limitations.",
    limit:
      "Exporting a case does not demonstrate that a model or agent has improved. That requires an independently evaluated result.",
    faq: [
      [
        "What does the export contain?",
        "Scenario identifiers, evidence classes, available sources, the local review decision and expected behaviour.",
      ],
      [
        "Does the export train an agent?",
        "No. It provides material for a later evaluation workflow; no model call or training pipeline is connected.",
      ],
    ],
  },
];
export const personas = [
  {
    slug: "sre-on-call",
    name: "SRE & on-call",
    icon: "signal",
    headline: ["An agent incident.", "A clearer handoff."],
    description:
      "Follow the write that matters. Give the next responder the trace, affected records and owner in one account.",
    scene: "desk",
    chapters: [
      [
        "An alert is a starting point.",
        "An agent session and a successful tool response can still leave you asking which customer records changed.",
      ],
      [
        "Make the handoff inspectable.",
        "Pass on original identifiers and source events, rather than asking the next shift to reconstruct the incident again.",
      ],
      [
        "Decide on evidence.",
        "Bring scope and ownership to the reviewer before proposing containment.",
      ],
    ],
    recommended: ["incident-desk", "incident-signal"],
  },
  {
    slug: "incident-management",
    name: "Incident owners",
    icon: "owner",
    headline: ["One incident.", "One accountable decision."],
    description:
      "Bring people, scope and evidence together around the decision that needs to be made.",
    scene: "approval",
    chapters: [
      [
        "Know the scope.",
        "Distinguish observed records from possible impact before assembling a response.",
      ],
      [
        "Name the authority.",
        "An owner and a reviewer are responsibilities, not decorative labels on a dashboard.",
      ],
      [
        "Preserve the rationale.",
        "Record what was proposed, what the reviewer decided and what remained unresolved.",
      ],
    ],
    recommended: ["incident-review", "incident-proof"],
  },
  {
    slug: "platform-engineering",
    name: "Platform engineering",
    icon: "database",
    headline: ["Shared context.", "Safer agent systems."],
    description:
      "Connect the operational write to the evaluation case, without losing the original incident context.",
    scene: "architecture",
    chapters: [
      [
        "Join records, not assumptions.",
        "Keep trace, tool and account identifiers intact across the investigation.",
      ],
      [
        "Preserve the boundary.",
        "Source access, response authority and model evaluation are separate responsibilities.",
      ],
      [
        "Feed the next evaluation.",
        "Make the incident’s permitted action and expected state explicit for a later test.",
      ],
    ],
    recommended: ["incident-report", "incident-desk"],
  },
];
export const events = [
  {
    time: "10:24",
    name: "Agent trace captured",
    id: "TR-27",
    body: "support-agent-01 begins the CRM workflow.",
  },
  {
    time: "10:25",
    name: "Tool write linked",
    id: "WB-3",
    body: "A write batch is associated with trace TR-27.",
  },
  {
    time: "10:26",
    name: "Account scope assembled",
    id: "12 accounts",
    body: "Eight observed writes, three inferred relationships and one awaiting verification.",
  },
  {
    time: "10:29",
    name: "Proposal prepared",
    id: "Human review",
    body: "A scoped response is prepared. No action is executed.",
  },
];
export const commonFAQ = [
  [
    "What does TraceTriage focus on?",
    "The incident workflow around agents that write to customer systems: reconstruct the write, examine downstream scope, identify the owner and prepare a human decision.",
  ],
  [
    "Can I explore the workflow myself?",
    "Yes. The interactive walkthrough follows one fictional CRM incident using twelve synthetic accounts. It runs locally in your browser and never touches production.",
  ],
  [
    "How does it fit our existing stack?",
    "The proposed workflow complements tracing, paging and incident coordination. Connector scope, source permissions and ownership must be agreed during an evaluation.",
  ],
  [
    "What should we bring to a tabletop?",
    "A description of an agent workflow, the systems it can write to and the people responsible for those systems. Do not share secrets, personal data or production incident logs through this website.",
  ],
];
export const pageMeta = {
  "/": [
    "Know what changed.",
    "Follow an agent write from trace to impact, ownership and a human decision.",
  ],
  "/why-change": [
    "When the trace ends, the incident doesn’t.",
    "Why agent incidents need context beyond the tool call.",
  ],
  "/products": [
    "Five views. One accountable response.",
    "Explore the five TraceTriage incident-response products.",
  ],
  "/platform": [
    "Original context. Accountable outcomes.",
    "A shared evidence architecture for agent incidents.",
  ],
  "/solutions": [
    "Built around the person on call.",
    "Agent incident workflows for SRE, incident owners and platform engineering.",
  ],
  "/results": [
    "Evidence before outcomes.",
    "A practical scorecard for evaluating the incident workflow.",
  ],
  "/pricing": [
    "Start with one scoped incident.",
    "Discuss a scoped tabletop and incident-managed agent group.",
  ],
  "/request-demo": [
    "Request a tabletop.",
    "Prepare a useful agent incident evaluation.",
  ],
  "/sign-in": [
    "Workspace access.",
    "Access and tabletop options for TraceTriage.",
  ],
  "/about": [
    "A more accountable agent workflow.",
    "The principles behind TraceTriage.",
  ],
  "/contact": [
    "Start a useful conversation.",
    "Contact and evaluation inquiry options.",
  ],
  "/trust": [
    "Authority is a design boundary.",
    "Evidence, data handling and human decision boundaries.",
  ],
  "/integrations": [
    "Keep your context. Connect the evidence.",
    "Proposed source mappings for agent incident investigations.",
  ],
  "/resources": [
    "A field guide to agent incidents.",
    "Practical checklists and tabletop guidance.",
  ],
  "/resources/incident-reconstruction-checklist": [
    "Reconstruct the write.",
    "An investigator’s checklist for agent-initiated changes.",
  ],
  "/resources/tabletop-guide": [
    "Run a useful tabletop.",
    "A scoped exercise for an agent workflow.",
  ],
  "/legal/privacy": [
    "Privacy & data handling.",
    "How this website handles its local interactive examples.",
  ],
  "/legal/terms": [
    "Website use.",
    "Terms and limits of this local demonstration.",
  ],
  "/404": ["This trace ends here.", "Find your way back to TraceTriage."],
  "/demo": [
    "Follow one incident.",
    "Explore the Oakridge Services synthetic incident.",
  ],
  "/demo/incidents": [
    "Incident desk.",
    "Inspect the fictional incident queue.",
  ],
  "/demo/incidents/INC-027": [
    "Oakridge Services · INC-027",
    "A synthetic CRM tier mutation investigation.",
  ],
  "/demo/incidents/INC-027/timeline": [
    "Incident timeline.",
    "Inspect the source chronology.",
  ],
  "/demo/incidents/INC-027/impact": [
    "Impact & ownership.",
    "Reconcile twelve synthetic accounts.",
  ],
  "/demo/incidents/INC-027/impact/ACC-001": [
    "Account reconciliation.",
    "Inspect record-level synthetic evidence.",
  ],
  "/demo/incidents/INC-027/approval": [
    "Review the proposal.",
    "A deliberate local decision with no real execution.",
  ],
  "/demo/incidents/INC-027/report": [
    "Postmortem & evaluation.",
    "Download the synthetic incident report.",
  ],
  "/demo/data-dictionary": [
    "The evidence vocabulary.",
    "Definitions and boundaries of the example fixture.",
  ],
};
products.forEach(
  (p) =>
    (pageMeta["/products/" + p.slug] = [p.name + " — " + p.job, p.description]),
);
personas.forEach(
  (p) =>
    (pageMeta["/solutions/" + p.slug] = [
      p.name + " — TraceTriage",
      p.description,
    ]),
);
for (let i = 2; i <= 12; i++)
  pageMeta["/demo/incidents/INC-027/impact/ACC-" + String(i).padStart(3, "0")] =
    ["Account reconciliation.", "Inspect record-level synthetic evidence."];
export const routePaths = Object.keys(pageMeta);
