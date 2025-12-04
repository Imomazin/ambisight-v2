import { PageHeader } from "@/components/ui";
import { KpiStrip, DashboardGrid } from "@/components/layout";
import { KpiTile, Card, CardHeader, CardContent } from "@/components/ui";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Overview"
        description="Monitor your organisation's ambidexterity across all business units."
      />

      {/* KPI Strip */}
      <KpiStrip>
        <KpiTile
          label="Ambidexterity Score"
          value="72"
          subtext="Above industry average"
          trend={{ direction: "up", value: "+5%" }}
          variant="primary"
          icon={
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          }
        />
        <KpiTile
          label="Exploration Index"
          value="68"
          subtext="Innovation capacity"
          trend={{ direction: "up", value: "+8%" }}
          variant="purple"
          icon={
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          }
        />
        <KpiTile
          label="Exploitation Index"
          value="76"
          subtext="Operational efficiency"
          trend={{ direction: "neutral", value: "0%" }}
          variant="teal"
          icon={
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
        />
        <KpiTile
          label="Active Assessments"
          value="4"
          subtext="2 in progress"
          variant="amber"
          icon={
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          }
        />
      </KpiStrip>

      {/* Dashboard Grid */}
      <DashboardGrid columns={2}>
        {/* Heatmap Card */}
        <Card>
          <CardHeader
            title="Business Unit Heatmap"
            description="Performance across dimensions"
          />
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-neutral-50 rounded-lg border border-dashed border-neutral-200">
              <p className="text-sm text-neutral-500">Heatmap visualization coming in Step 5</p>
            </div>
          </CardContent>
        </Card>

        {/* Radar Chart Card */}
        <Card>
          <CardHeader
            title="Dimension Radar"
            description="Balance across all dimensions"
          />
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-neutral-50 rounded-lg border border-dashed border-neutral-200">
              <p className="text-sm text-neutral-500">Radar chart coming in Step 5</p>
            </div>
          </CardContent>
        </Card>
      </DashboardGrid>

      <DashboardGrid columns={2}>
        {/* Recent Assessments */}
        <Card>
          <CardHeader
            title="Recent Assessments"
            description="Latest activity across your assessments"
          />
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Q4 2024 Assessment", org: "TechCorp", status: "Live" },
                { name: "Annual Review", org: "FinanceDiv", status: "Draft" },
                { name: "Innovation Pulse", org: "R&D Team", status: "Closed" },
              ].map((assessment, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 transition-colors cursor-pointer"
                >
                  <div>
                    <p className="text-sm font-medium text-neutral-900">{assessment.name}</p>
                    <p className="text-xs text-neutral-500">{assessment.org}</p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      assessment.status === "Live"
                        ? "bg-success-light text-success"
                        : assessment.status === "Draft"
                        ? "bg-neutral-100 text-neutral-600"
                        : "bg-neutral-100 text-neutral-500"
                    }`}
                  >
                    {assessment.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Insights */}
        <Card className="bg-gradient-to-br from-brand-purple-light to-white">
          <CardHeader
            title="AI Insight"
            description="Generated analysis summary"
          />
          <CardContent>
            <div className="p-4 bg-white/80 rounded-lg border border-brand-purple/10">
              <p className="text-sm text-neutral-700 leading-relaxed">
                Your organisation shows a <strong className="text-brand-purple">healthy balance</strong> between exploration and exploitation activities. The R&D division leads in innovation metrics, while Operations maintains strong efficiency scores. Consider focusing on knowledge transfer between units to further improve overall ambidexterity.
              </p>
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              Generated based on latest assessment data
            </p>
          </CardContent>
        </Card>
      </DashboardGrid>
    </div>
  );
}
