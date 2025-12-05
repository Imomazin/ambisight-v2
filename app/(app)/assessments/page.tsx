import Link from "next/link";
import { PageHeader, Button, Badge, StatusBadge, Card } from "@/components/ui";
import { getAssessmentListItems, formatDate } from "@/lib/repositories";

export default async function AssessmentsPage() {
  const assessments = await getAssessmentListItems();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Assessments"
        description="Manage your organisational ambidexterity assessments."
        actions={
          <Button>
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Assessment
          </Button>
        }
      />

      {/* Filters */}
      <div className="flex items-center gap-2">
        <Badge variant="primary" size="md">
          All ({assessments.length})
        </Badge>
        <Badge size="md">
          Live ({assessments.filter((a) => a.status === "live").length})
        </Badge>
        <Badge size="md">
          Draft ({assessments.filter((a) => a.status === "draft").length})
        </Badge>
        <Badge size="md">
          Closed ({assessments.filter((a) => a.status === "closed").length})
        </Badge>
      </div>

      {/* Assessments List */}
      <Card padding="none">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="text-left text-xs font-medium text-neutral-500 uppercase tracking-wider px-6 py-3">
                  Assessment
                </th>
                <th className="text-left text-xs font-medium text-neutral-500 uppercase tracking-wider px-6 py-3">
                  Status
                </th>
                <th className="text-left text-xs font-medium text-neutral-500 uppercase tracking-wider px-6 py-3">
                  Responses
                </th>
                <th className="text-left text-xs font-medium text-neutral-500 uppercase tracking-wider px-6 py-3">
                  Last Updated
                </th>
                <th className="text-right text-xs font-medium text-neutral-500 uppercase tracking-wider px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {assessments.map((assessment) => {
                const responsePercent =
                  assessment.respondentCount > 0
                    ? (assessment.responseCount / assessment.respondentCount) * 100
                    : 0;

                return (
                  <tr
                    key={assessment.id}
                    className="hover:bg-neutral-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <Link
                        href={`/assessments/${assessment.id}`}
                        className="block"
                      >
                        <p className="text-sm font-medium text-neutral-900 hover:text-brand-primary transition-colors">
                          {assessment.name}
                        </p>
                        <p className="text-xs text-neutral-500 mt-0.5">
                          {assessment.organisationName}
                        </p>
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={assessment.status} />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-neutral-900 min-w-[3rem]">
                          {assessment.responseCount}/{assessment.respondentCount}
                        </span>
                        <div className="w-20 h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              responsePercent >= 75
                                ? "bg-success"
                                : responsePercent >= 50
                                ? "bg-brand-primary"
                                : responsePercent > 0
                                ? "bg-warning"
                                : "bg-neutral-300"
                            }`}
                            style={{ width: `${responsePercent}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-neutral-500">
                        {formatDate(assessment.lastUpdated)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/assessments/${assessment.id}`}>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </Link>
                        {assessment.status === "live" && (
                          <Button variant="secondary" size="sm">
                            Share
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Empty state - shown when no assessments */}
      {assessments.length === 0 && (
        <Card className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">
            No assessments yet
          </h3>
          <p className="text-neutral-500 mb-6 max-w-sm mx-auto">
            Create your first assessment to start measuring organisational
            ambidexterity.
          </p>
          <Button>Create Assessment</Button>
        </Card>
      )}
    </div>
  );
}
