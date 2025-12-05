// ============================================
// AmbiSight v2 - Mock Data
// ============================================

import type {
  Organisation,
  BusinessUnit,
  User,
  Assessment,
  Dimension,
  Item,
  ScoreSummary,
  DimensionScore,
  AIInsight,
  DashboardStats,
  AssessmentListItem,
  BusinessUnitListItem,
  HeatmapData,
  Respondent,
} from "./types";

// --------------------------------------------
// Organisations
// --------------------------------------------

export const organisations: Organisation[] = [
  {
    id: "org-1",
    name: "TechCorp Global",
    industry: "Technology",
    size: "501-1000",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-11-01"),
  },
];

// --------------------------------------------
// Business Units
// --------------------------------------------

export const businessUnits: BusinessUnit[] = [
  {
    id: "unit-1",
    organisationId: "org-1",
    name: "Research & Development",
    description: "Product innovation and R&D",
    headcount: 120,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-10-01"),
  },
  {
    id: "unit-2",
    organisationId: "org-1",
    name: "Operations",
    description: "Manufacturing and supply chain",
    headcount: 450,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-10-01"),
  },
  {
    id: "unit-3",
    organisationId: "org-1",
    name: "Marketing",
    description: "Brand and demand generation",
    headcount: 85,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-10-01"),
  },
  {
    id: "unit-4",
    organisationId: "org-1",
    name: "Finance",
    description: "Financial planning and accounting",
    headcount: 60,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-10-01"),
  },
  {
    id: "unit-5",
    organisationId: "org-1",
    name: "Human Resources",
    description: "People and culture",
    headcount: 45,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-10-01"),
  },
  {
    id: "unit-6",
    organisationId: "org-1",
    name: "Product",
    description: "Product management and strategy",
    headcount: 95,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-10-01"),
  },
];

// --------------------------------------------
// Users
// --------------------------------------------

export const users: User[] = [
  {
    id: "user-1",
    email: "alex.morgan@techcorp.com",
    name: "Alex Morgan",
    role: "admin",
    organisationId: "org-1",
    createdAt: new Date("2024-01-15"),
  },
];

export const currentUser = users[0];

// --------------------------------------------
// Dimensions
// --------------------------------------------

export const dimensions: Dimension[] = [
  {
    id: "dim-1",
    name: "Strategic Intent",
    description: "How the organisation balances long-term vision with short-term execution",
    category: "strategic",
    order: 1,
  },
  {
    id: "dim-2",
    name: "Knowledge Management",
    description: "Processes for creating new knowledge vs. leveraging existing knowledge",
    category: "knowledge",
    order: 2,
  },
  {
    id: "dim-3",
    name: "Resource Allocation",
    description: "Distribution of resources between exploratory and exploitative activities",
    category: "strategic",
    order: 3,
  },
  {
    id: "dim-4",
    name: "Organisational Structure",
    description: "Flexibility vs. efficiency in organisational design",
    category: "structural",
    order: 4,
  },
  {
    id: "dim-5",
    name: "Culture & Leadership",
    description: "Leadership styles and cultural norms supporting ambidexterity",
    category: "cultural",
    order: 5,
  },
  {
    id: "dim-6",
    name: "Innovation Processes",
    description: "Formal processes for both incremental and radical innovation",
    category: "process",
    order: 6,
  },
];

// --------------------------------------------
// Items (Sample)
// --------------------------------------------

export const items: Item[] = [
  // Strategic Intent
  { id: "item-1", dimensionId: "dim-1", text: "We actively pursue new market opportunities", orientation: "exploration", order: 1 },
  { id: "item-2", dimensionId: "dim-1", text: "We focus on optimizing our current market position", orientation: "exploitation", order: 2 },
  { id: "item-3", dimensionId: "dim-1", text: "Our strategy emphasizes breakthrough innovations", orientation: "exploration", order: 3 },
  { id: "item-4", dimensionId: "dim-1", text: "Our strategy emphasizes continuous improvement", orientation: "exploitation", order: 4 },
  // Knowledge Management
  { id: "item-5", dimensionId: "dim-2", text: "We invest heavily in learning new skills and capabilities", orientation: "exploration", order: 1 },
  { id: "item-6", dimensionId: "dim-2", text: "We leverage and refine our existing expertise", orientation: "exploitation", order: 2 },
  // Add more items as needed...
];

// --------------------------------------------
// Assessments
// --------------------------------------------

export const assessments: Assessment[] = [
  {
    id: "assess-1",
    name: "Q4 2024 Strategic Assessment",
    description: "Quarterly ambidexterity assessment across all business units",
    organisationId: "org-1",
    status: "live",
    targetUnitIds: ["unit-1", "unit-2", "unit-3", "unit-4", "unit-5", "unit-6"],
    createdBy: "user-1",
    createdAt: new Date("2024-10-01"),
    updatedAt: new Date("2024-11-28"),
  },
  {
    id: "assess-2",
    name: "Annual Innovation Review",
    description: "Deep dive into innovation capabilities",
    organisationId: "org-1",
    status: "draft",
    targetUnitIds: ["unit-1", "unit-6"],
    createdBy: "user-1",
    createdAt: new Date("2024-11-15"),
    updatedAt: new Date("2024-11-20"),
  },
  {
    id: "assess-3",
    name: "R&D Capability Assessment",
    description: "Focused assessment for R&D team",
    organisationId: "org-1",
    status: "live",
    targetUnitIds: ["unit-1"],
    createdBy: "user-1",
    createdAt: new Date("2024-09-15"),
    updatedAt: new Date("2024-11-25"),
  },
  {
    id: "assess-4",
    name: "Q3 2024 Review",
    description: "Previous quarter assessment",
    organisationId: "org-1",
    status: "closed",
    targetUnitIds: ["unit-1", "unit-2", "unit-3", "unit-4", "unit-5", "unit-6"],
    createdBy: "user-1",
    createdAt: new Date("2024-07-01"),
    updatedAt: new Date("2024-09-30"),
    closedAt: new Date("2024-09-30"),
  },
];

// --------------------------------------------
// Respondents
// --------------------------------------------

export const respondents: Respondent[] = [
  { id: "resp-1", assessmentId: "assess-1", email: "john.doe@techcorp.com", name: "John Doe", businessUnitId: "unit-1", invitedAt: new Date("2024-10-05"), lastAccessedAt: new Date("2024-11-20") },
  { id: "resp-2", assessmentId: "assess-1", email: "jane.smith@techcorp.com", name: "Jane Smith", businessUnitId: "unit-1", invitedAt: new Date("2024-10-05"), lastAccessedAt: new Date("2024-11-22") },
  { id: "resp-3", assessmentId: "assess-1", email: "bob.johnson@techcorp.com", name: "Bob Johnson", businessUnitId: "unit-2", invitedAt: new Date("2024-10-05"), lastAccessedAt: new Date("2024-11-18") },
  // More respondents...
];

// --------------------------------------------
// Score Summaries
// --------------------------------------------

export const scoreSummaries: ScoreSummary[] = [
  // Overall scores for assess-1
  {
    assessmentId: "assess-1",
    explorationScore: 68,
    exploitationScore: 76,
    ambidexterityScore: 72,
    responseCount: 32,
    calculatedAt: new Date("2024-11-28"),
  },
  // By business unit for assess-1
  {
    assessmentId: "assess-1",
    businessUnitId: "unit-1",
    explorationScore: 82,
    exploitationScore: 65,
    ambidexterityScore: 73,
    responseCount: 8,
    calculatedAt: new Date("2024-11-28"),
  },
  {
    assessmentId: "assess-1",
    businessUnitId: "unit-2",
    explorationScore: 45,
    exploitationScore: 88,
    ambidexterityScore: 66,
    responseCount: 12,
    calculatedAt: new Date("2024-11-28"),
  },
  {
    assessmentId: "assess-1",
    businessUnitId: "unit-3",
    explorationScore: 72,
    exploitationScore: 71,
    ambidexterityScore: 71,
    responseCount: 5,
    calculatedAt: new Date("2024-11-28"),
  },
  {
    assessmentId: "assess-1",
    businessUnitId: "unit-4",
    explorationScore: 38,
    exploitationScore: 92,
    ambidexterityScore: 65,
    responseCount: 3,
    calculatedAt: new Date("2024-11-28"),
  },
  {
    assessmentId: "assess-1",
    businessUnitId: "unit-5",
    explorationScore: 55,
    exploitationScore: 78,
    ambidexterityScore: 66,
    responseCount: 2,
    calculatedAt: new Date("2024-11-28"),
  },
  {
    assessmentId: "assess-1",
    businessUnitId: "unit-6",
    explorationScore: 78,
    exploitationScore: 68,
    ambidexterityScore: 73,
    responseCount: 2,
    calculatedAt: new Date("2024-11-28"),
  },
];

// --------------------------------------------
// Dimension Scores
// --------------------------------------------

export const dimensionScores: DimensionScore[] = [
  // assess-1 overall dimension scores
  { assessmentId: "assess-1", dimensionId: "dim-1", explorationScore: 70, exploitationScore: 75, itemCount: 4, responseCount: 32 },
  { assessmentId: "assess-1", dimensionId: "dim-2", explorationScore: 65, exploitationScore: 80, itemCount: 6, responseCount: 32 },
  { assessmentId: "assess-1", dimensionId: "dim-3", explorationScore: 62, exploitationScore: 78, itemCount: 7, responseCount: 32 },
  { assessmentId: "assess-1", dimensionId: "dim-4", explorationScore: 68, exploitationScore: 72, itemCount: 5, responseCount: 32 },
  { assessmentId: "assess-1", dimensionId: "dim-5", explorationScore: 75, exploitationScore: 70, itemCount: 9, responseCount: 32 },
  { assessmentId: "assess-1", dimensionId: "dim-6", explorationScore: 72, exploitationScore: 68, itemCount: 6, responseCount: 32 },
];

// --------------------------------------------
// AI Insights
// --------------------------------------------

export const aiInsights: AIInsight[] = [
  {
    id: "insight-1",
    assessmentId: "assess-1",
    type: "summary",
    title: "Overall Balance Assessment",
    content: "Your organisation shows a healthy balance between exploration and exploitation activities. The R&D division leads in innovation metrics, while Operations maintains strong efficiency scores. Consider focusing on knowledge transfer between units to further improve overall ambidexterity.",
    confidence: 0.85,
    generatedAt: new Date("2024-11-28"),
  },
  {
    id: "insight-2",
    assessmentId: "assess-1",
    type: "recommendation",
    title: "R&D-Operations Collaboration",
    content: "The significant gap between R&D (exploration-focused) and Operations (exploitation-focused) presents an opportunity. Establishing cross-functional teams could help transfer innovative practices while maintaining operational excellence.",
    confidence: 0.78,
    generatedAt: new Date("2024-11-28"),
  },
  {
    id: "insight-3",
    assessmentId: "assess-1",
    type: "risk",
    title: "Finance Department Imbalance",
    content: "The Finance department shows the lowest exploration score (38). While efficiency is valuable, this could indicate resistance to new financial technologies or methodologies that could benefit the organisation.",
    confidence: 0.72,
    generatedAt: new Date("2024-11-28"),
  },
];

// --------------------------------------------
// Dashboard Stats
// --------------------------------------------

export const dashboardStats: DashboardStats = {
  overallAmbidexterityScore: 72,
  explorationIndex: 68,
  exploitationIndex: 76,
  activeAssessments: 2,
  totalRespondents: 45,
  responseRate: 71,
  trends: {
    ambidexterity: { direction: "up", percentage: 5 },
    exploration: { direction: "up", percentage: 8 },
    exploitation: { direction: "neutral", percentage: 0 },
  },
};

// --------------------------------------------
// Assessment List Items
// --------------------------------------------

export const assessmentListItems: AssessmentListItem[] = [
  {
    id: "assess-1",
    name: "Q4 2024 Strategic Assessment",
    organisationName: "TechCorp Global",
    status: "live",
    respondentCount: 45,
    responseCount: 32,
    lastUpdated: new Date("2024-11-28"),
  },
  {
    id: "assess-2",
    name: "Annual Innovation Review",
    organisationName: "TechCorp Global",
    status: "draft",
    respondentCount: 28,
    responseCount: 0,
    lastUpdated: new Date("2024-11-20"),
  },
  {
    id: "assess-3",
    name: "R&D Capability Assessment",
    organisationName: "TechCorp Global",
    status: "live",
    respondentCount: 15,
    responseCount: 12,
    lastUpdated: new Date("2024-11-25"),
  },
  {
    id: "assess-4",
    name: "Q3 2024 Review",
    organisationName: "TechCorp Global",
    status: "closed",
    respondentCount: 52,
    responseCount: 48,
    lastUpdated: new Date("2024-09-30"),
  },
];

// --------------------------------------------
// Business Unit List Items
// --------------------------------------------

export const businessUnitListItems: BusinessUnitListItem[] = [
  {
    id: "unit-1",
    name: "Research & Development",
    headcount: 120,
    explorationScore: 82,
    exploitationScore: 65,
    assessmentCount: 3,
    balance: "exploration-focused",
  },
  {
    id: "unit-2",
    name: "Operations",
    headcount: 450,
    explorationScore: 45,
    exploitationScore: 88,
    assessmentCount: 4,
    balance: "exploitation-focused",
  },
  {
    id: "unit-3",
    name: "Marketing",
    headcount: 85,
    explorationScore: 72,
    exploitationScore: 71,
    assessmentCount: 2,
    balance: "balanced",
  },
  {
    id: "unit-4",
    name: "Finance",
    headcount: 60,
    explorationScore: 38,
    exploitationScore: 92,
    assessmentCount: 2,
    balance: "exploitation-focused",
  },
  {
    id: "unit-5",
    name: "Human Resources",
    headcount: 45,
    explorationScore: 55,
    exploitationScore: 78,
    assessmentCount: 1,
    balance: "exploitation-focused",
  },
  {
    id: "unit-6",
    name: "Product",
    headcount: 95,
    explorationScore: 78,
    exploitationScore: 68,
    assessmentCount: 3,
    balance: "exploration-focused",
  },
];

// --------------------------------------------
// Heatmap Data
// --------------------------------------------

export const heatmapData: HeatmapData = {
  assessmentId: "assess-1",
  businessUnits: businessUnits.map((u) => ({ id: u.id, name: u.name })),
  dimensions: dimensions.map((d) => ({ id: d.id, name: d.name })),
  cells: [
    // R&D
    { businessUnitId: "unit-1", businessUnitName: "R&D", dimensionId: "dim-1", dimensionName: "Strategic Intent", explorationScore: 85, exploitationScore: 60, balance: 25 },
    { businessUnitId: "unit-1", businessUnitName: "R&D", dimensionId: "dim-2", dimensionName: "Knowledge Mgmt", explorationScore: 80, exploitationScore: 65, balance: 15 },
    { businessUnitId: "unit-1", businessUnitName: "R&D", dimensionId: "dim-3", dimensionName: "Resource Alloc", explorationScore: 78, exploitationScore: 62, balance: 16 },
    { businessUnitId: "unit-1", businessUnitName: "R&D", dimensionId: "dim-4", dimensionName: "Org Structure", explorationScore: 82, exploitationScore: 68, balance: 14 },
    { businessUnitId: "unit-1", businessUnitName: "R&D", dimensionId: "dim-5", dimensionName: "Culture", explorationScore: 88, exploitationScore: 70, balance: 18 },
    { businessUnitId: "unit-1", businessUnitName: "R&D", dimensionId: "dim-6", dimensionName: "Innovation", explorationScore: 90, exploitationScore: 65, balance: 25 },
    // Operations
    { businessUnitId: "unit-2", businessUnitName: "Operations", dimensionId: "dim-1", dimensionName: "Strategic Intent", explorationScore: 42, exploitationScore: 90, balance: -48 },
    { businessUnitId: "unit-2", businessUnitName: "Operations", dimensionId: "dim-2", dimensionName: "Knowledge Mgmt", explorationScore: 48, exploitationScore: 85, balance: -37 },
    { businessUnitId: "unit-2", businessUnitName: "Operations", dimensionId: "dim-3", dimensionName: "Resource Alloc", explorationScore: 40, exploitationScore: 92, balance: -52 },
    { businessUnitId: "unit-2", businessUnitName: "Operations", dimensionId: "dim-4", dimensionName: "Org Structure", explorationScore: 45, exploitationScore: 88, balance: -43 },
    { businessUnitId: "unit-2", businessUnitName: "Operations", dimensionId: "dim-5", dimensionName: "Culture", explorationScore: 50, exploitationScore: 85, balance: -35 },
    { businessUnitId: "unit-2", businessUnitName: "Operations", dimensionId: "dim-6", dimensionName: "Innovation", explorationScore: 45, exploitationScore: 88, balance: -43 },
    // Marketing
    { businessUnitId: "unit-3", businessUnitName: "Marketing", dimensionId: "dim-1", dimensionName: "Strategic Intent", explorationScore: 75, exploitationScore: 70, balance: 5 },
    { businessUnitId: "unit-3", businessUnitName: "Marketing", dimensionId: "dim-2", dimensionName: "Knowledge Mgmt", explorationScore: 70, exploitationScore: 72, balance: -2 },
    { businessUnitId: "unit-3", businessUnitName: "Marketing", dimensionId: "dim-3", dimensionName: "Resource Alloc", explorationScore: 72, exploitationScore: 68, balance: 4 },
    { businessUnitId: "unit-3", businessUnitName: "Marketing", dimensionId: "dim-4", dimensionName: "Org Structure", explorationScore: 70, exploitationScore: 72, balance: -2 },
    { businessUnitId: "unit-3", businessUnitName: "Marketing", dimensionId: "dim-5", dimensionName: "Culture", explorationScore: 78, exploitationScore: 70, balance: 8 },
    { businessUnitId: "unit-3", businessUnitName: "Marketing", dimensionId: "dim-6", dimensionName: "Innovation", explorationScore: 74, exploitationScore: 72, balance: 2 },
    // Finance
    { businessUnitId: "unit-4", businessUnitName: "Finance", dimensionId: "dim-1", dimensionName: "Strategic Intent", explorationScore: 35, exploitationScore: 95, balance: -60 },
    { businessUnitId: "unit-4", businessUnitName: "Finance", dimensionId: "dim-2", dimensionName: "Knowledge Mgmt", explorationScore: 40, exploitationScore: 90, balance: -50 },
    { businessUnitId: "unit-4", businessUnitName: "Finance", dimensionId: "dim-3", dimensionName: "Resource Alloc", explorationScore: 35, exploitationScore: 94, balance: -59 },
    { businessUnitId: "unit-4", businessUnitName: "Finance", dimensionId: "dim-4", dimensionName: "Org Structure", explorationScore: 38, exploitationScore: 92, balance: -54 },
    { businessUnitId: "unit-4", businessUnitName: "Finance", dimensionId: "dim-5", dimensionName: "Culture", explorationScore: 42, exploitationScore: 88, balance: -46 },
    { businessUnitId: "unit-4", businessUnitName: "Finance", dimensionId: "dim-6", dimensionName: "Innovation", explorationScore: 38, exploitationScore: 92, balance: -54 },
  ],
};

// --------------------------------------------
// Radar Chart Data
// --------------------------------------------

export interface RadarDataPoint {
  dimension: string;
  exploration: number;
  exploitation: number;
}

export const radarChartData: RadarDataPoint[] = dimensions.map((dim) => {
  const score = dimensionScores.find(
    (s) => s.assessmentId === "assess-1" && s.dimensionId === dim.id
  );
  return {
    dimension: dim.name.split(" ")[0], // Short name for radar
    exploration: score?.explorationScore ?? 50,
    exploitation: score?.exploitationScore ?? 50,
  };
});
