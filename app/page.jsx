'use client';
import {useState} from 'react';

const phases = [
  ['01', 'Intake', 'A human describes the outcome, constraints, evidence, and success criteria.'],
  ['02', 'Deliberate', 'The ADK planner forms a task-specific team and delegates bounded work.'],
  ['03', 'Execute', 'Specialists call approved tools, persist evidence, and report progress.'],
  ['04', 'Judge', 'An independent evaluator checks the result against the original brief.'],
  ['05', 'Deliver', 'The operator receives the answer, artifacts, trace, and a clear decision.'],
];

export default function Home() {
  const [selected, setSelected] = useState(0);
  return <main>
    <header className="topbar"><a className="brand" href="#top"><span className="mark">Q</span>quantaris<span>.</span></a><nav><a href="#diagram">Architecture</a><a href="#flow">Execution flow</a><a href="#decisions">Decisions</a></nav><button onClick={() => document.querySelector('#diagram').scrollIntoView({behavior: 'smooth'})}>View the system</button></header>
    <section id="top" className="hero"><p className="eyebrow">QUANTARIS HARNESS / GOOGLE CLOUD</p><h1>One mission in.<br/><em>A complete team</em> out.</h1><p className="intro">The control plane turns a business problem into a secure, observable, multi-agent execution loop. Google Cloud is the system of record for every application, model, service, and credential.</p><div className="chips"><span>Next.js on Cloud Run</span><span>Google ADK orchestration</span><span>Vertex AI model access</span></div></section>
    <section id="diagram" className="diagram-section"><div className="section-heading"><p className="eyebrow">SYSTEM MAP</p><h2>Architecture at a glance</h2><p>Browser → control plane → agent runtime → model gateway, with all operational data and credentials governed in Google Cloud.</p></div><figure><img src="/harness-architecture.svg" alt="Quantaris Google Cloud multi-agent harness architecture diagram"/><figcaption><strong>Google Cloud boundary.</strong> The Next.js console is the human-facing control plane; Google ADK owns agent coordination; Vertex AI is the default model boundary, while LiteLLM is a controlled adapter for approved multi-model routing.</figcaption></figure></section>
    <section id="flow" className="flow"><div className="section-heading"><p className="eyebrow">HARNESS LOOP</p><h2>Every task follows the same accountable flow.</h2></div><div className="phase-grid">{phases.map(([n,title,copy],i)=><button className={i===selected?'phase active':'phase'} onClick={()=>setSelected(i)} key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p><b>{i===selected?'Currently in focus':'Explore phase'} →</b></button>)}</div></section>
    <section id="decisions" className="decisions"><div><p className="eyebrow">DECISIONS MADE</p><h2>Implementation direction</h2></div><div className="decision-grid"><article><span>01</span><h3>Next.js, not a standalone React SPA</h3><p>Use the latest stable Next.js App Router. It gives us server-side control-plane endpoints, secure server actions, route isolation, and a first-class deployment path to Cloud Run.</p></article><article><span>02</span><h3>Google ADK for orchestration</h3><p>Run the agentic backend as a dedicated Google ADK service on Cloud Run. Keep planning, specialist execution, judgement, and policy enforcement outside the UI process.</p></article><article><span>03</span><h3>Google Cloud only</h3><p>Use Secret Manager, IAM service accounts, Cloud SQL for PostgreSQL, Memorystore for Redis, Cloud Storage, Cloud Logging, and Cloud Trace. No credentials or primary state live elsewhere.</p></article><article><span>04</span><h3>Vertex AI + LiteLLM adapter</h3><p>Gemini is the default through Vertex AI. LiteLLM sits behind the runtime as a provider abstraction for approved additional models, with quotas, policy, and traceability retained by the harness.</p></article></div></section>
    <footer>Quantaris AI <span>•</span> Harness reference architecture <span>•</span> v1.1</footer>
  </main>;
}
