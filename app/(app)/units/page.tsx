import { PageHeader, Button, Card, CardHeader, CardContent, Badge } from "@/components/ui";
import { DashboardGrid } from "@/components/layout";

export default function UnitsPage() {
  const units = [
    {
      id: "1",
      name: "Research & Development",
      headcount: 120,
      explorationScore: 82,
      exploitationScore: 65,
      assessments: 3,
    },
    {
      id: "2",
      name: "Operations",
      headcount: 450,
      explorationScore: 45,
      exploitationScore: 88,
      assessments: 4,
    },
    {
      id: "3",
      name: "Marketing",
      headcount: 85,
      explorationScore: 72,
      exploitationScore: 71,
      assessments: 2,
    },
    {
      id: "4",
      name: "Finance",
      headcount: 60,
      explorationScore: 38,
      exploitationScore: 92,
      assessments: 2,
    },
    {
      id: "5",
      name: "Human Resources",
      headcount: 45,
      explorationScore: 55,
      exploitationScore: 78,
      assessments: 1,
    },
    {
      id: "6",
      name: "Product",
      headcount: 95,
      explorationScore: 78,
      exploitationScore: 68,
      assessments: 3,
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Business Units"
        description="View and manage your organisation's business units and their ambidexterity profiles."
        actions={
          <Button>
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Unit
          </Button>
        }
      />

      <DashboardGrid columns={3}>
        {units.map((unit) => (
          <Card key={unit.id} hover className="cursor-pointer">
            <CardHeader
              title={unit.name}
              description={`${unit.headcount} employees`}
              action={
                <Badge variant="default">{unit.assessments} assessments</Badge>
              }
            />
            <CardContent>
              <div className="space-y-4">
                {/* Exploration Bar */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-brand-purple">Exploration</span>
                    <span className="text-xs font-semibold text-brand-purple">{unit.explorationScore}</span>
                  </div>
                  <div className="h-2 bg-brand-purple-light rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-purple rounded-full transition-all duration-500"
                      style={{ width: `${unit.explorationScore}%` }}
                    />
                  </div>
                </div>

                {/* Exploitation Bar */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-brand-teal">Exploitation</span>
                    <span className="text-xs font-semibold text-brand-teal">{unit.exploitationScore}</span>
                  </div>
                  <div className="h-2 bg-brand-teal-light rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-teal rounded-full transition-all duration-500"
                      style={{ width: `${unit.exploitationScore}%` }}
                    />
                  </div>
                </div>

                {/* Balance Indicator */}
                <div className="pt-2 border-t border-neutral-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500">Balance</span>
                    <span
                      className={`text-xs font-medium ${
                        Math.abs(unit.explorationScore - unit.exploitationScore) < 15
                          ? "text-success"
                          : "text-warning"
                      }`}
                    >
                      {Math.abs(unit.explorationScore - unit.exploitationScore) < 15
                        ? "Balanced"
                        : unit.explorationScore > unit.exploitationScore
                        ? "Exploration-focused"
                        : "Exploitation-focused"}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </DashboardGrid>
    </div>
  );
}
