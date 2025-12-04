import { PageHeader, Button, Badge, StatusBadge, Card } from "@/components/ui";

export default function AssessmentsPage() {
  const assessments = [
    {
      id: "1",
      name: "Q4 2024 Strategic Assessment",
      organisation: "TechCorp Global",
      status: "live" as const,
      respondents: 45,
      responses: 32,
      lastUpdated: "2 hours ago",
    },
    {
      id: "2",
      name: "Annual Innovation Review",
      organisation: "Finance Division",
      status: "draft" as const,
      respondents: 28,
      responses: 0,
      lastUpdated: "1 day ago",
    },
    {
      id: "3",
      name: "R&D Capability Assessment",
      organisation: "Research & Development",
      status: "live" as const,
      respondents: 15,
      responses: 12,
      lastUpdated: "5 hours ago",
    },
    {
      id: "4",
      name: "Q3 2024 Review",
      organisation: "TechCorp Global",
      status: "closed" as const,
      respondents: 52,
      responses: 48,
      lastUpdated: "2 weeks ago",
    },
  ];

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
        <Badge variant="primary" size="md">All</Badge>
        <Badge size="md">Live</Badge>
        <Badge size="md">Draft</Badge>
        <Badge size="md">Closed</Badge>
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
              {assessments.map((assessment) => (
                <tr
                  key={assessment.id}
                  className="hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-neutral-900">
                        {assessment.name}
                      </p>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        {assessment.organisation}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={assessment.status} />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-neutral-900">
                        {assessment.responses}/{assessment.respondents}
                      </span>
                      <div className="w-16 h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-brand-primary rounded-full"
                          style={{
                            width: `${(assessment.responses / assessment.respondents) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-neutral-500">
                      {assessment.lastUpdated}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
