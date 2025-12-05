import Link from "next/link";
import { Button, Card, Badge } from "@/components/ui";

export default function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="primary" size="md" className="mb-4">
              Now in Beta
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
              AmbiSight
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-neutral-600 font-light">
              Precision Diagnostics for Organisational Ambidexterity
            </p>
            <p className="mt-6 text-lg text-neutral-500 max-w-2xl mx-auto">
              Measure and manage the balance between exploration and exploitation
              across your enterprise. Make data-driven decisions about innovation and efficiency.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register">
                <Button size="lg" className="min-w-[200px]">
                  Start Free Assessment
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="secondary" size="lg" className="min-w-[200px]">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card hover className="text-center p-6">
              <div className="w-12 h-12 rounded-xl bg-brand-purple-light flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900">Exploration</h3>
              <p className="text-sm text-neutral-500 mt-2">Innovation & Adaptability</p>
            </Card>
            <Card hover className="text-center p-6">
              <div className="w-12 h-12 rounded-xl bg-brand-primary-light flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900">Balance</h3>
              <p className="text-sm text-neutral-500 mt-2">Strategic Equilibrium</p>
            </Card>
            <Card hover className="text-center p-6">
              <div className="w-12 h-12 rounded-xl bg-brand-teal-light flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900">Exploitation</h3>
              <p className="text-sm text-neutral-500 mt-2">Efficiency & Execution</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-neutral-900">
              Everything you need to measure ambidexterity
            </h2>
            <p className="mt-4 text-lg text-neutral-500">
              A complete diagnostic toolkit built for strategy leaders and consultants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                ),
                title: "Multi-Dimensional Assessment",
                description: "Evaluate organisations across multiple research-backed dimensions of ambidexterity.",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                ),
                title: "Interactive Dashboards",
                description: "Visualise results with heatmaps, radar charts, and trend analysis across business units.",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
                title: "Team Collaboration",
                description: "Invite respondents, track participation, and aggregate insights across teams.",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ),
                title: "AI-Powered Insights",
                description: "Get automatically generated interpretation summaries and recommendations.",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                ),
                title: "Privacy-First Design",
                description: "Your data stays secure with enterprise-grade privacy and compliance controls.",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                ),
                title: "Research-Backed",
                description: "Built on decades of academic research on organisational ambidexterity.",
              },
            ].map((feature, i) => (
              <Card key={i} className="p-6">
                <div className="w-10 h-10 rounded-lg bg-brand-primary-light flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-900">{feature.title}</h3>
                <p className="text-sm text-neutral-500 mt-2">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Strip */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-neutral-900">
              Powerful tools for strategic decisions
            </h2>
            <p className="mt-4 text-lg text-neutral-500">
              From assessment creation to board-ready reports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Dashboard", description: "Real-time overview of all metrics" },
              { title: "Heatmaps", description: "Visual comparison across units" },
              { title: "Board Reports", description: "Export-ready presentations" },
              { title: "Assessment Builder", description: "Custom survey creation" },
            ].map((item, i) => (
              <Card key={i} hover className="p-6 text-center">
                <div className="h-32 bg-neutral-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-sm text-neutral-400">Preview</span>
                </div>
                <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                <p className="text-sm text-neutral-500 mt-1">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-primary to-brand-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to measure your organisation&apos;s ambidexterity?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Start with a free assessment and see how your organisation balances
            exploration and exploitation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register">
              <Button
                size="lg"
                className="min-w-[200px] bg-white text-brand-primary hover:bg-neutral-100"
              >
                Start Free Assessment
              </Button>
            </Link>
            <Link href="#features">
              <Button
                variant="ghost"
                size="lg"
                className="min-w-[200px] text-white hover:bg-white/10"
              >
                Talk to Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
