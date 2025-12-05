import Link from "next/link";
import { notFound } from "next/navigation";
import {
  PageHeader,
  Breadcrumb,
  Button,
  Card,
  CardHeader,
  CardContent,
  StatusBadge,
  Badge,
  KpiTile,
  Tabs,
  TabsListUnderline,
  TabsTriggerUnderline,
  TabsContent,
} from "@/components/ui";
import { KpiStrip, DashboardGrid } from "@/components/layout";
import {
  getAssessmentById,
  getOverallScoreForAssessment,
  getScoresByUnit,
  getDimensionScoresForAssessment,
  getInsightsForAssessment,
  getRespondentsForAssessment,
  getBusinessUnitById,
  formatDate,
} from "@/lib/repositories";

interface AssessmentDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function AssessmentDetailPage({
  params,
}: AssessmentDetailPageProps) {
  const { id } = await params;

  const [assessment, overallScore, unitScores, dimensionScores, insights, respondents] =
    await Promise.all([
      getAssessmentById(id),
      getOverallScoreForAssessment(id),
      getScoresByUnit(id),
      getDimensionScoresForAssessment(id),
      getInsightsForAssessment(id),
      getRespondentsForAssessment(id),
    ]);

  if (!assessment) {
    notFound();
  }

  // Get unit names for scores
  const unitScoresWithNames = await Promise.all(
    unitScores.map(async (score) => {
      const unit = score.businessUnitId
        ? await getBusinessUnitById(score.businessUnitId)
        : null;
      return {
        ...score,
        unitName: unit?.name ?? "Unknown",
      };
    })
  );

  const responseRate =
    respondents.length > 0
      ? Math.round(
          (respondents.filter((r) => r.lastAccessedAt).length /
            respondents.length) *
            100
        )
      : 0;

  return (
    <div className="space-y-6">
      <PageHeader
        title={assessment.name}
        description={assessment.description}
        breadcrumb={
          <Breadcrumb
            items={[
              { label: "Assessments", href: "/assessments" },
              { label: assessment.name },
            ]}
          />
        }
        actions={
          <div className="flex items-center gap-3">
            <StatusBadge status={assessment.status} />
            {assessment.status === "live" && (
              <Link href={`/assessments/${id}/take`}>
                <Button variant="secondary">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  Preview
                </Button>
              </Link>
            )}
            <Button>
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Share
            </Button>
          </div>
        }
      />

      <Tabs defaultValue="overview">
        <TabsListUnderline>
          <TabsTriggerUnderline value="overview">Overview</TabsTriggerUnderline>
          <TabsTriggerUnderline value="units">Units</TabsTriggerUnderline>
          <TabsTriggerUnderline value="dimensions">Dimensions</TabsTriggerUnderline>
          <TabsTriggerUnderline value="responses">Responses</TabsTriggerUnderline>
          <TabsTriggerUnderline value="insights">Insights</TabsTriggerUnderline>
        </TabsListUnderline>

        {/* Overview Tab */}
        <TabsContent value="overview">
          <div className="space-y-6">
            {/* KPI Strip */}
            {overallScore && (
              <KpiStrip>
                <KpiTile
                  label="Ambidexterity Score"
                  value={overallScore.ambidexterityScore}
                  variant="primary"
                />
                <KpiTile
                  label="Exploration Index"
                  value={overallScore.explorationScore}
                  variant="purple"
                />
                <KpiTile
                  label="Exploitation Index"
                  value={overallScore.exploitationScore}
                  variant="teal"
                />
                <KpiTile
                  label="Response Rate"
                  value={`${responseRate}%`}
                  subtext={`${overallScore.responseCount} responses`}
                  variant="amber"
                />
              </KpiStrip>
            )}

            <DashboardGrid columns={2}>
              {/* Unit Performance */}
              <Card>
                <CardHeader
                  title="Performance by Unit"
                  description="Exploration vs Exploitation scores"
                />
                <CardContent>
                  <div className="space-y-3">
                    {unitScoresWithNames.map((score) => (
                      <div
                        key={score.businessUnitId}
                        className="p-3 rounded-lg bg-neutral-50"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-neutral-900">
                            {score.unitName}
                          </span>
                          <span className="text-xs text-neutral-500">
                            {score.responseCount} responses
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-brand-purple-light rounded-l">
                            <div
                              className="h-full bg-brand-purple rounded-l"
                              style={{ width: `${score.explorationScore}%` }}
                            />
                          </div>
                          <span className="text-xs font-medium w-16 text-center">
                            <span className="text-brand-purple">
                              {score.explorationScore}
                            </span>
                            <span className="text-neutral-400"> / </span>
                            <span className="text-brand-teal">
                              {score.exploitationScore}
                            </span>
                          </span>
                          <div className="flex-1 h-2 bg-brand-teal-light rounded-r">
                            <div
                              className="h-full bg-brand-teal rounded-r ml-auto"
                              style={{ width: `${score.exploitationScore}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Assessment Info */}
              <Card>
                <CardHeader title="Assessment Details" />
                <CardContent>
                  <dl className="space-y-4">
                    <div className="flex justify-between">
                      <dt className="text-sm text-neutral-500">Status</dt>
                      <dd>
                        <StatusBadge status={assessment.status} />
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-sm text-neutral-500">Created</dt>
                      <dd className="text-sm text-neutral-900">
                        {formatDate(assessment.createdAt)}
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-sm text-neutral-500">Last Updated</dt>
                      <dd className="text-sm text-neutral-900">
                        {formatDate(assessment.updatedAt)}
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-sm text-neutral-500">Target Units</dt>
                      <dd className="text-sm text-neutral-900">
                        {assessment.targetUnitIds.length} units
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-sm text-neutral-500">Respondents</dt>
                      <dd className="text-sm text-neutral-900">
                        {respondents.length} invited
                      </dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </DashboardGrid>
          </div>
        </TabsContent>

        {/* Units Tab */}
        <TabsContent value="units">
          <div className="space-y-4">
            {unitScoresWithNames.map((score) => (
              <Card key={score.businessUnitId}>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-neutral-900">
                        {score.unitName}
                      </h4>
                      <p className="text-sm text-neutral-500">
                        {score.responseCount} responses
                      </p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-brand-purple">
                          {score.explorationScore}
                        </p>
                        <p className="text-xs text-neutral-500">Exploration</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-brand-teal">
                          {score.exploitationScore}
                        </p>
                        <p className="text-xs text-neutral-500">Exploitation</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-brand-primary">
                          {score.ambidexterityScore}
                        </p>
                        <p className="text-xs text-neutral-500">Ambidexterity</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Dimensions Tab */}
        <TabsContent value="dimensions">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dimensionScores.map((score) => (
              <Card key={score.dimensionId}>
                <CardContent>
                  <h4 className="font-medium text-neutral-900 mb-4">
                    Dimension {score.dimensionId.replace("dim-", "")}
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-brand-purple">Exploration</span>
                        <span className="font-medium">{score.explorationScore}</span>
                      </div>
                      <div className="h-2 bg-brand-purple-light rounded-full">
                        <div
                          className="h-full bg-brand-purple rounded-full"
                          style={{ width: `${score.explorationScore}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-brand-teal">Exploitation</span>
                        <span className="font-medium">{score.exploitationScore}</span>
                      </div>
                      <div className="h-2 bg-brand-teal-light rounded-full">
                        <div
                          className="h-full bg-brand-teal rounded-full"
                          style={{ width: `${score.exploitationScore}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-neutral-500">
                    {score.itemCount} items | {score.responseCount} responses
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Responses Tab */}
        <TabsContent value="responses">
          <Card padding="none">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50">
                    <th className="text-left text-xs font-medium text-neutral-500 uppercase px-6 py-3">
                      Respondent
                    </th>
                    <th className="text-left text-xs font-medium text-neutral-500 uppercase px-6 py-3">
                      Invited
                    </th>
                    <th className="text-left text-xs font-medium text-neutral-500 uppercase px-6 py-3">
                      Last Access
                    </th>
                    <th className="text-left text-xs font-medium text-neutral-500 uppercase px-6 py-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {respondents.map((respondent) => (
                    <tr key={respondent.id} className="hover:bg-neutral-50">
                      <td className="px-6 py-4">
                        <p className="text-sm font-medium text-neutral-900">
                          {respondent.name || "Anonymous"}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {respondent.email}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-500">
                        {formatDate(respondent.invitedAt)}
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-500">
                        {respondent.lastAccessedAt
                          ? formatDate(respondent.lastAccessedAt)
                          : "-"}
                      </td>
                      <td className="px-6 py-4">
                        <Badge
                          variant={
                            respondent.lastAccessedAt ? "success" : "default"
                          }
                        >
                          {respondent.lastAccessedAt ? "Responded" : "Pending"}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        {/* Insights Tab */}
        <TabsContent value="insights">
          <div className="space-y-4">
            {insights.length > 0 ? (
              insights.map((insight) => (
                <Card
                  key={insight.id}
                  className={
                    insight.type === "risk"
                      ? "border-l-4 border-l-error"
                      : insight.type === "opportunity"
                      ? "border-l-4 border-l-success"
                      : insight.type === "recommendation"
                      ? "border-l-4 border-l-brand-primary"
                      : ""
                  }
                >
                  <CardContent>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            variant={
                              insight.type === "risk"
                                ? "error"
                                : insight.type === "opportunity"
                                ? "success"
                                : insight.type === "recommendation"
                                ? "primary"
                                : "default"
                            }
                          >
                            {insight.type}
                          </Badge>
                          <span className="text-xs text-neutral-500">
                            {Math.round(insight.confidence * 100)}% confidence
                          </span>
                        </div>
                        <h4 className="font-medium text-neutral-900 mb-2">
                          {insight.title}
                        </h4>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                          {insight.content}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-xs text-neutral-500">
                      Generated {formatDate(insight.generatedAt)}
                    </p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="text-center py-12">
                <p className="text-neutral-500">
                  No AI insights generated yet for this assessment.
                </p>
              </Card>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
