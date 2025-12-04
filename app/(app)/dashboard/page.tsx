import { PageHeader } from "@/components/ui";
import { KpiStrip, DashboardGrid } from "@/components/layout";
import { KpiTile, Card, CardHeader, CardContent, StatusBadge } from "@/components/ui";
import {
  getDashboardStats,
  getAssessmentListItems,
  getInsightsForAssessment,
  getHeatmapData,
  getRadarChartData,
  formatDate,
} from "@/lib/repositories";

export default async function DashboardPage() {
  // Fetch data from repositories
  const [stats, assessments, insights, heatmap, radarData] = await Promise.all([
    getDashboardStats(),
    getAssessmentListItems(),
    getInsightsForAssessment("assess-1"),
    getHeatmapData("assess-1"),
    getRadarChartData("assess-1"),
  ]);

  const latestInsight = insights[0];
  const recentAssessments = assessments.slice(0, 3);

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
          value={stats.overallAmbidexterityScore}
          subtext="Above industry average"
          trend={{
            direction: stats.trends.ambidexterity.direction,
            value: `${stats.trends.ambidexterity.direction === "up" ? "+" : ""}${stats.trends.ambidexterity.percentage}%`,
          }}
          variant="primary"
          icon={
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          }
        />
        <KpiTile
          label="Exploration Index"
          value={stats.explorationIndex}
          subtext="Innovation capacity"
          trend={{
            direction: stats.trends.exploration.direction,
            value: `${stats.trends.exploration.direction === "up" ? "+" : ""}${stats.trends.exploration.percentage}%`,
          }}
          variant="purple"
          icon={
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          }
        />
        <KpiTile
          label="Exploitation Index"
          value={stats.exploitationIndex}
          subtext="Operational efficiency"
          trend={{
            direction: stats.trends.exploitation.direction,
            value: `${stats.trends.exploitation.percentage}%`,
          }}
          variant="teal"
          icon={
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
        />
        <KpiTile
          label="Active Assessments"
          value={stats.activeAssessments}
          subtext={`${stats.responseRate}% response rate`}
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
            description="Exploration vs Exploitation balance by unit"
          />
          <CardContent>
            <div className="space-y-2">
              {/* Legend */}
              <div className="flex items-center justify-end gap-4 text-xs text-neutral-500 mb-4">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded bg-brand-purple" />
                  <span>Exploration</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded bg-brand-teal" />
                  <span>Exploitation</span>
                </div>
              </div>

              {/* Heatmap rows - grouped by unit */}
              {heatmap.businessUnits.slice(0, 4).map((unit) => {
                const unitCells = heatmap.cells.filter(
                  (c) => c.businessUnitId === unit.id
                );
                const avgExploration =
                  unitCells.reduce((sum, c) => sum + c.explorationScore, 0) /
                  unitCells.length;
                const avgExploitation =
                  unitCells.reduce((sum, c) => sum + c.exploitationScore, 0) /
                  unitCells.length;

                return (
                  <div
                    key={unit.id}
                    className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 transition-colors"
                  >
                    <div className="w-24 flex-shrink-0">
                      <p className="text-sm font-medium text-neutral-900 truncate">
                        {unit.name.split(" ")[0]}
                      </p>
                    </div>
                    <div className="flex-1 flex items-center gap-2">
                      {/* Exploration bar */}
                      <div className="flex-1 h-6 bg-brand-purple-light rounded-l overflow-hidden">
                        <div
                          className="h-full bg-brand-purple transition-all duration-500"
                          style={{ width: `${avgExploration}%` }}
                        />
                      </div>
                      {/* Score display */}
                      <div className="w-20 text-center flex-shrink-0">
                        <span className="text-xs font-medium text-brand-purple">
                          {Math.round(avgExploration)}
                        </span>
                        <span className="text-xs text-neutral-400 mx-1">/</span>
                        <span className="text-xs font-medium text-brand-teal">
                          {Math.round(avgExploitation)}
                        </span>
                      </div>
                      {/* Exploitation bar */}
                      <div className="flex-1 h-6 bg-brand-teal-light rounded-r overflow-hidden flex justify-end">
                        <div
                          className="h-full bg-brand-teal transition-all duration-500"
                          style={{ width: `${avgExploitation}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
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
            {/* Simple radar visualization using bars */}
            <div className="space-y-3">
              {radarData.map((point, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-neutral-700">
                      {point.dimension}
                    </span>
                    <span className="text-neutral-500">
                      E:{point.exploration} / X:{point.exploitation}
                    </span>
                  </div>
                  <div className="flex gap-1 h-4">
                    <div
                      className="bg-brand-purple rounded-l transition-all duration-500"
                      style={{ width: `${point.exploration / 2}%` }}
                    />
                    <div
                      className="bg-brand-teal rounded-r transition-all duration-500"
                      style={{ width: `${point.exploitation / 2}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-neutral-500 text-center">
              E = Exploration, X = Exploitation
            </p>
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
              {recentAssessments.map((assessment) => (
                <div
                  key={assessment.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 transition-colors cursor-pointer"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-neutral-900 truncate">
                      {assessment.name}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-xs text-neutral-500">
                        {assessment.responseCount}/{assessment.respondentCount} responses
                      </p>
                      <span className="text-neutral-300">|</span>
                      <p className="text-xs text-neutral-500">
                        {formatDate(assessment.lastUpdated)}
                      </p>
                    </div>
                  </div>
                  <StatusBadge status={assessment.status} />
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
            {latestInsight ? (
              <>
                <div className="p-4 bg-white/80 rounded-lg border border-brand-purple/10">
                  <h4 className="text-sm font-medium text-neutral-900 mb-2">
                    {latestInsight.title}
                  </h4>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {latestInsight.content}
                  </p>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-neutral-500">
                  <span>
                    Confidence: {Math.round(latestInsight.confidence * 100)}%
                  </span>
                  <span>{formatDate(latestInsight.generatedAt)}</span>
                </div>
              </>
            ) : (
              <div className="p-4 bg-white/80 rounded-lg border border-neutral-200 text-center">
                <p className="text-sm text-neutral-500">
                  No insights available yet
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </DashboardGrid>
    </div>
  );
}
