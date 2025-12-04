import { PageHeader, Card, CardHeader, CardContent } from "@/components/ui";

export default function MethodologyPage() {
  const dimensions = [
    {
      name: "Strategic Intent",
      description: "How the organisation balances long-term vision with short-term execution",
      items: 8,
      color: "brand-primary",
    },
    {
      name: "Knowledge Management",
      description: "Processes for creating new knowledge vs. leveraging existing knowledge",
      items: 6,
      color: "brand-purple",
    },
    {
      name: "Resource Allocation",
      description: "Distribution of resources between exploratory and exploitative activities",
      items: 7,
      color: "brand-teal",
    },
    {
      name: "Organisational Structure",
      description: "Flexibility vs. efficiency in organisational design",
      items: 5,
      color: "brand-amber",
    },
    {
      name: "Culture & Leadership",
      description: "Leadership styles and cultural norms supporting ambidexterity",
      items: 9,
      color: "brand-primary",
    },
    {
      name: "Innovation Processes",
      description: "Formal processes for both incremental and radical innovation",
      items: 6,
      color: "brand-purple",
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Methodology"
        description="Understand the research-backed framework behind AmbiSight's ambidexterity assessment."
      />

      {/* Overview Card */}
      <Card className="bg-gradient-to-r from-brand-primary-light to-brand-teal-light">
        <CardContent>
          <div className="max-w-3xl">
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              Research-Backed Framework
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              AmbiSight&apos;s methodology is grounded in decades of academic research on organisational ambidexterity. Our assessment framework measures the balance between <strong className="text-brand-purple">exploration</strong> (innovation, experimentation, flexibility) and <strong className="text-brand-teal">exploitation</strong> (efficiency, refinement, execution) across multiple organisational dimensions.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Dimensions Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-neutral-900">Assessment Dimensions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dimensions.map((dimension, index) => (
            <Card key={index} hover className="cursor-pointer">
              <CardHeader
                title={dimension.name}
                description={dimension.description}
              />
              <CardContent>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500">{dimension.items} assessment items</span>
                  <span className={`w-3 h-3 rounded-full bg-${dimension.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Scoring Explanation */}
      <Card>
        <CardHeader
          title="Scoring System"
          description="How AmbiSight calculates ambidexterity scores"
        />
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand-purple-light flex items-center justify-center flex-shrink-0">
                <span className="text-brand-purple font-bold">E</span>
              </div>
              <div>
                <h4 className="font-medium text-neutral-900">Exploration Score (0-100)</h4>
                <p className="text-sm text-neutral-500 mt-1">
                  Measures innovation capacity, risk tolerance, experimentation culture, and adaptability to change.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand-teal-light flex items-center justify-center flex-shrink-0">
                <span className="text-brand-teal font-bold">X</span>
              </div>
              <div>
                <h4 className="font-medium text-neutral-900">Exploitation Score (0-100)</h4>
                <p className="text-sm text-neutral-500 mt-1">
                  Measures operational efficiency, process optimisation, quality control, and execution excellence.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand-primary-light flex items-center justify-center flex-shrink-0">
                <span className="text-brand-primary font-bold">A</span>
              </div>
              <div>
                <h4 className="font-medium text-neutral-900">Ambidexterity Score (0-100)</h4>
                <p className="text-sm text-neutral-500 mt-1">
                  A composite score reflecting the organisation&apos;s ability to balance both exploration and exploitation effectively.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
