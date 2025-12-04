// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#e0f2fe,_transparent_55%),_radial-gradient(circle_at_bottom,_#e0e7ff,_transparent_55%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-16 md:flex-row md:items-center md:pt-24">
          {/* Left column */}
          <div className="md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-100">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              Research-driven organisational diagnostics
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              AmbiSight v2
              <span className="block text-sky-600">
                Precision diagnostics for ambidexterity
              </span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Measure how well your organisation balances{" "}
              <span className="font-semibold text-sky-700">exploration</span> and{" "}
              <span className="font-semibold text-indigo-700">exploitation</span>{" "}
              across units, markets, and time. Built on doctoral research and
              ready for AI-native strategy work.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              >
                Start free assessment
              </Link>

              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              >
                Book expert walkthrough
              </Link>

              <p className="text-xs text-slate-500">
                No credit card • Private by design
              </p>
            </div>

            {/* Tiny stats row */}
            <dl className="grid gap-4 text-xs text-slate-600 sm:grid-cols-3 sm:text-sm">
              <div>
                <dt className="font-semibold text-slate-900">5+ dimensions</dt>
                <dd>Leadership, culture, structure, learning, markets.</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">
                  Federated ready
                </dt>
                <dd>Supports privacy-preserving data pipelines.</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">
                  Board-level output
                </dt>
                <dd>Executive summaries and action portfolios.</dd>
              </div>
            </dl>
          </div>

          {/* Right column – simple “mock dashboard” */}
          <div className="md:w-1/2">
            <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur">
              {/* Header row */}
              <div className="mb-4 flex items-center justify-between gap-2">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Ambidexterity snapshot
                  </p>
                  <p className="text-sm text-slate-700">Global portfolio view</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-100">
                  Stable • Low risk
                </span>
              </div>

              {/* Bars */}
              <div className="mb-4 space-y-3">
                <MetricBar
                  label="Exploration intensity"
                  value={72}
                  color="bg-sky-500"
                />
                <MetricBar
                  label="Exploitation strength"
                  value={68}
                  color="bg-indigo-500"
                />
                <MetricBar
                  label="Balance index"
                  value={0.82}
                  color="bg-emerald-500"
                  isRatio
                />
              </div>

              {/* Simple table */}
              <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-3">
                <div className="mb-2 flex items-center justify-between text-[11px] font-medium uppercase tracking-wide text-slate-500">
                  <span>Unit</span>
                  <span>Profile</span>
                  <span>Signal</span>
                </div>
                <MiniRow name="Digital Ventures" tag="Explorer-led" tone="sky" />
                <MiniRow name="Core Ops" tag="Exploit-heavy" tone="amber" />
                <MiniRow name="Emerging Markets" tag="Balanced" tone="emerald" />
              </div>

              <p className="mt-3 text-[11px] text-slate-500">
                Demo data only. Connect real surveys and operational metrics to
                unlock full dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three-column feature section */}
      <section className="border-b border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
              Why AmbiSight
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Built for strategy teams, not just data teams
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              AmbiSight v2 follows the same architectural principles you used
              for R_Lumina: clean data flows, modular dashboards, and AI-ready
              outputs that plug into your decision systems.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Multi-layer diagnostics"
              body="Run assessments at organisation, business-unit, and squad level. Compare patterns across markets and time."
            />
            <FeatureCard
              title="Data-agnostic engine"
              body="Start with survey data, then enrich with financials, product telemetry, or project portfolios as you grow."
            />
            <FeatureCard
              title="Actionable playbooks"
              body="Translate scores into concrete strategic options, trade-off maps, and change portfolios your board can act on."
            />
          </div>
        </div>
      </section>

      {/* Simple 3-step “How it works” */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
                How it works
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                From raw signals to strategic guidance
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-600">
              This is the high-level flow we will wire up with Copilot and
              Claude Opus: clean ingestion, scoring engine, then AI-assisted
              interpretation.
            </p>
          </div>

          <ol className="grid gap-6 md:grid-cols-3">
            <StepCard
              step={1}
              title="Collect and connect"
              body="Deploy the AmbiSight survey, import existing data, and segment by unit, role, or market."
            />
            <StepCard
              step={2}
              title="Score and compare"
              body="Apply the OA models to compute balance, tensions, and risk across dimensions."
            />
            <StepCard
              step={3}
              title="Design moves"
              body="Generate scenario options, track chosen moves, and monitor how the portfolio evolves."
            />
          </ol>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Ready to pilot AmbiSight v2?
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Use this build as the foundation. Next steps are wiring data
            ingestion, dashboards, and AI agents with Copilot + Claude Opus.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              Launch pilot assessment
            </Link>
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              Talk to the strategy team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ───────── Helper components ───────── */

type MetricBarProps = {
  label: string;
  value: number;
  color: string;
  isRatio?: boolean;
};

function MetricBar({ label, value, color, isRatio }: MetricBarProps) {
  const percent = isRatio ? Math.round(value * 100) : value;
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs text-slate-600">
        <span>{label}</span>
        <span className="font-semibold text-slate-900">{percent}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-slate-100">
        <div
          className={`h-2 rounded-full ${color}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

type MiniRowProps = {
  name: string;
  tag: string;
  tone: "sky" | "amber" | "emerald";
};

function MiniRow({ name, tag, tone }: MiniRowProps) {
  const toneMap: Record<MiniRowProps["tone"], string> = {
    sky: "bg-sky-50 text-sky-800 ring-sky-100",
    amber: "bg-amber-50 text-amber-800 ring-amber-100",
    emerald: "bg-emerald-50 text-emerald-800 ring-emerald-100",
  };

  return (
    <div className="mt-1 flex items-center justify-between rounded-lg bg-white px-2 py-1.5 text-xs text-slate-700">
      <span>{name}</span>
      <span
        className={`rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ${toneMap[tone]}`}
      >
        {tag}
      </span>
    </div>
  );
}

type FeatureCardProps = {
  title: string;
  body: string;
};

function FeatureCard({ title, body }: FeatureCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{body}</p>
    </div>
  );
}

type StepCardProps = {
  step: number;
  title: string;
  body: string;
};

function StepCard({ step, title, body }: StepCardProps) {
  return (
    <li className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-xs font-semibold text-white">
        {step}
      </div>
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{body}</p>
    </li>
  );
}
