import Link from "next/link";
import { Button, Card, Badge } from "@/components/ui";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-ambi-surface">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero-radial" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Copy & CTAs */}
            <div>
              <Badge variant="primary" size="md" className="mb-6">
                Now in Beta
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ambi-text-main tracking-tight leading-tight">
                Diagnose your organisation&apos;s{" "}
                <span className="text-ambi-primary">ambidexterity</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-ambi-text-muted leading-relaxed max-w-xl">
                Measure the balance between exploration and exploitation across
                your enterprise. Get actionable insights to drive strategic decisions.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button size="lg" className="w-full sm:w-auto min-w-[180px]">
                    Start Free Assessment
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto min-w-[180px]">
                    See How It Works
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-10 pt-8 border-t border-ambi-border">
                <p className="text-sm text-ambi-text-light mb-4">Trusted by strategy teams at</p>
                <div className="flex items-center gap-8 opacity-60">
                  <span className="text-sm font-semibold text-ambi-text-muted">Accenture</span>
                  <span className="text-sm font-semibold text-ambi-text-muted">McKinsey</span>
                  <span className="text-sm font-semibold text-ambi-text-muted">Deloitte</span>
                  <span className="text-sm font-semibold text-ambi-text-muted">BCG</span>
                </div>
              </div>
            </div>

            {/* Right Column - Ambidexterity Snapshot Card */}
            <div className="lg:pl-8">
              <Card className="p-6 sm:p-8 shadow-lg border border-ambi-border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-ambi-text-main">Ambidexterity Snapshot</h3>
                  <Badge variant="success" size="sm">Live Demo</Badge>
                </div>

                {/* Score Summary */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 rounded-xl bg-ambi-purple-soft">
                    <p className="text-3xl font-bold text-ambi-purple">72</p>
                    <p className="text-sm text-ambi-text-muted mt-1">Exploration</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-ambi-teal-soft">
                    <p className="text-3xl font-bold text-ambi-teal">68</p>
                    <p className="text-sm text-ambi-text-muted mt-1">Exploitation</p>
                  </div>
                </div>

                {/* Dimension Progress Bars */}
                <div className="space-y-4">
                  <DimensionBar
                    label="Strategic Flexibility"
                    exploration={75}
                    exploitation={62}
                  />
                  <DimensionBar
                    label="Resource Allocation"
                    exploration={68}
                    exploitation={74}
                  />
                  <DimensionBar
                    label="Culture & Leadership"
                    exploration={78}
                    exploitation={65}
                  />
                  <DimensionBar
                    label="Process Innovation"
                    exploration={65}
                    exploitation={71}
                  />
                </div>

                <div className="mt-6 pt-4 border-t border-ambi-border">
                  <p className="text-xs text-ambi-text-light text-center">
                    Sample data from 847 responses across 12 business units
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Strategy Teams Section */}
      <section className="py-20 bg-ambi-gray-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ambi-text-main">
              Built for strategy teams
            </h2>
            <p className="mt-4 text-lg text-ambi-text-muted">
              Everything you need to measure, understand, and improve your
              organisation&apos;s ambidextrous capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-ambi-primary-soft flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-ambi-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-ambi-text-main mb-3">
                Research-Backed Assessments
              </h3>
              <p className="text-ambi-text-muted leading-relaxed">
                Built on decades of academic research into organisational
                ambidexterity. Our multi-dimensional framework captures both
                exploration and exploitation capabilities.
              </p>
            </Card>

            {/* Feature Card 2 */}
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-ambi-teal-soft flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-ambi-teal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-ambi-text-main mb-3">
                Visual Insights & Heatmaps
              </h3>
              <p className="text-ambi-text-muted leading-relaxed">
                Interactive dashboards with radar charts, heatmaps, and trend
                analysis. Compare business units and track progress over time
                with intuitive visualisations.
              </p>
            </Card>

            {/* Feature Card 3 */}
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-ambi-purple-soft flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-ambi-purple"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-ambi-text-main mb-3">
                AI-Powered Recommendations
              </h3>
              <p className="text-ambi-text-muted leading-relaxed">
                Get automatically generated interpretation summaries and
                actionable recommendations tailored to your organisation&apos;s
                unique profile and goals.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-ambi-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ambi-text-main">
              How it works
            </h2>
            <p className="mt-4 text-lg text-ambi-text-muted">
              Get from assessment to insights in three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-ambi-primary flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <div className="hidden md:block flex-1 h-px bg-ambi-border ml-6" />
              </div>
              <h3 className="text-xl font-semibold text-ambi-text-main mb-3">
                Create your assessment
              </h3>
              <p className="text-ambi-text-muted leading-relaxed">
                Set up your organisation structure, define business units, and
                customise survey questions to match your context.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-ambi-primary flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <div className="hidden md:block flex-1 h-px bg-ambi-border ml-6" />
              </div>
              <h3 className="text-xl font-semibold text-ambi-text-main mb-3">
                Collect responses
              </h3>
              <p className="text-ambi-text-muted leading-relaxed">
                Invite participants via email or shareable links. Track
                completion rates in real-time and send reminders automatically.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-ambi-primary flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold text-ambi-text-main mb-3">
                Analyse & act
              </h3>
              <p className="text-ambi-text-muted leading-relaxed">
                Review aggregated scores, explore heatmaps by dimension, and
                export board-ready reports with AI-generated insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-ambi-primary to-ambi-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to measure your organisation&apos;s ambidexterity?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Start with a free assessment and discover how your organisation
            balances exploration and exploitation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register">
              <Button
                size="lg"
                className="min-w-[200px] bg-white text-ambi-primary hover:bg-neutral-100"
              >
                Start Free Assessment
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="ghost"
                size="lg"
                className="min-w-[200px] text-white border-white/30 hover:bg-white/10"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* Helper component for dimension progress bars */
function DimensionBar({
  label,
  exploration,
  exploitation,
}: {
  label: string;
  exploration: number;
  exploitation: number;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-ambi-text-main">{label}</span>
      </div>
      <div className="flex gap-2">
        {/* Exploration bar */}
        <div className="flex-1">
          <div className="h-2 bg-ambi-purple-soft rounded-full overflow-hidden">
            <div
              className="h-full bg-ambi-purple rounded-full transition-all duration-500"
              style={{ width: `${exploration}%` }}
            />
          </div>
          <p className="text-xs text-ambi-text-light mt-1">Expl. {exploration}%</p>
        </div>
        {/* Exploitation bar */}
        <div className="flex-1">
          <div className="h-2 bg-ambi-teal-soft rounded-full overflow-hidden">
            <div
              className="h-full bg-ambi-teal rounded-full transition-all duration-500"
              style={{ width: `${exploitation}%` }}
            />
          </div>
          <p className="text-xs text-ambi-text-light mt-1">Expt. {exploitation}%</p>
        </div>
      </div>
    </div>
  );
}
