import { PageHeader, Button, Card, CardHeader, CardContent, Badge } from "@/components/ui";
import { DashboardGrid } from "@/components/layout";
import { getBusinessUnitListItems, getBalanceColor } from "@/lib/repositories";

export default async function UnitsPage() {
  const units = await getBusinessUnitListItems();

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

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card padding="sm" className="text-center">
          <p className="text-2xl font-bold text-neutral-900">{units.length}</p>
          <p className="text-sm text-neutral-500">Total Units</p>
        </Card>
        <Card padding="sm" className="text-center">
          <p className="text-2xl font-bold text-success">
            {units.filter((u) => u.balance === "balanced").length}
          </p>
          <p className="text-sm text-neutral-500">Balanced Units</p>
        </Card>
        <Card padding="sm" className="text-center">
          <p className="text-2xl font-bold text-neutral-900">
            {units.reduce((sum, u) => sum + u.headcount, 0).toLocaleString()}
          </p>
          <p className="text-sm text-neutral-500">Total Headcount</p>
        </Card>
      </div>

      <DashboardGrid columns={3}>
        {units.map((unit) => (
          <Card key={unit.id} hover className="cursor-pointer">
            <CardHeader
              title={unit.name}
              description={`${unit.headcount.toLocaleString()} employees`}
              action={
                <Badge variant="default">{unit.assessmentCount} assessments</Badge>
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
                    <span className={`text-xs font-medium ${getBalanceColor(unit.balance)}`}>
                      {unit.balance === "balanced"
                        ? "Balanced"
                        : unit.balance === "exploration-focused"
                        ? "Exploration-focused"
                        : "Exploitation-focused"}
                    </span>
                  </div>
                </div>

                {/* Visual Balance Indicator */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1 bg-neutral-100 rounded-full relative overflow-hidden">
                    {/* Center marker */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-neutral-300 -translate-x-1/2" />
                    {/* Balance indicator */}
                    <div
                      className={`absolute top-0 bottom-0 transition-all duration-500 ${
                        unit.explorationScore > unit.exploitationScore
                          ? "bg-brand-purple right-1/2"
                          : "bg-brand-teal left-1/2"
                      }`}
                      style={{
                        width: `${Math.abs(unit.explorationScore - unit.exploitationScore) / 2}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </DashboardGrid>

      {/* Empty state */}
      {units.length === 0 && (
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
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">
            No business units yet
          </h3>
          <p className="text-neutral-500 mb-6 max-w-sm mx-auto">
            Add your first business unit to start tracking ambidexterity across
            your organisation.
          </p>
          <Button>Add Business Unit</Button>
        </Card>
      )}
    </div>
  );
}
