// ============================================
// AmbiSight v2 - Domain Types
// ============================================

// --------------------------------------------
// Core Entities
// --------------------------------------------

export interface Organisation {
  id: string;
  name: string;
  industry: string;
  size: OrganisationSize;
  createdAt: Date;
  updatedAt: Date;
}

export type OrganisationSize =
  | "1-50"
  | "51-200"
  | "201-500"
  | "501-1000"
  | "1001-5000"
  | "5000+";

export interface BusinessUnit {
  id: string;
  organisationId: string;
  name: string;
  description?: string;
  headcount: number;
  parentUnitId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  role: UserRole;
  organisationId: string;
  createdAt: Date;
}

export type UserRole = "admin" | "analyst" | "respondent";

// --------------------------------------------
// Assessment Entities
// --------------------------------------------

export interface Assessment {
  id: string;
  name: string;
  description?: string;
  organisationId: string;
  status: AssessmentStatus;
  templateId?: string;
  targetUnitIds: string[];
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  closedAt?: Date;
}

export type AssessmentStatus = "draft" | "live" | "closed";

export interface AssessmentTemplate {
  id: string;
  name: string;
  description: string;
  dimensionIds: string[];
  isDefault: boolean;
}

// --------------------------------------------
// Dimensions & Items
// --------------------------------------------

export interface Dimension {
  id: string;
  name: string;
  description: string;
  category: DimensionCategory;
  order: number;
}

export type DimensionCategory =
  | "strategic"
  | "structural"
  | "cultural"
  | "process"
  | "knowledge";

export interface Item {
  id: string;
  dimensionId: string;
  text: string;
  orientation: ItemOrientation;
  order: number;
}

export type ItemOrientation = "exploration" | "exploitation";

// --------------------------------------------
// Responses
// --------------------------------------------

export interface Response {
  id: string;
  assessmentId: string;
  respondentId: string;
  businessUnitId: string;
  submittedAt?: Date;
  isComplete: boolean;
}

export interface ItemResponse {
  id: string;
  responseId: string;
  itemId: string;
  value: number; // 1-7 Likert scale
  answeredAt: Date;
}

export interface Respondent {
  id: string;
  assessmentId: string;
  email: string;
  name?: string;
  businessUnitId: string;
  invitedAt: Date;
  lastAccessedAt?: Date;
}

// --------------------------------------------
// Scores & Analytics
// --------------------------------------------

export interface ScoreSummary {
  assessmentId: string;
  businessUnitId?: string;
  explorationScore: number;
  exploitationScore: number;
  ambidexterityScore: number;
  responseCount: number;
  calculatedAt: Date;
}

export interface DimensionScore {
  assessmentId: string;
  businessUnitId?: string;
  dimensionId: string;
  explorationScore: number;
  exploitationScore: number;
  itemCount: number;
  responseCount: number;
}

export interface TrendDataPoint {
  date: Date;
  explorationScore: number;
  exploitationScore: number;
  ambidexterityScore: number;
}

// --------------------------------------------
// Heatmap Data Structure
// --------------------------------------------

export interface HeatmapCell {
  businessUnitId: string;
  businessUnitName: string;
  dimensionId: string;
  dimensionName: string;
  explorationScore: number;
  exploitationScore: number;
  balance: number; // -100 to +100 (negative = exploitation focused)
}

export interface HeatmapData {
  assessmentId: string;
  cells: HeatmapCell[];
  businessUnits: { id: string; name: string }[];
  dimensions: { id: string; name: string }[];
}

// --------------------------------------------
// AI Insights
// --------------------------------------------

export interface AIInsight {
  id: string;
  assessmentId: string;
  type: InsightType;
  title: string;
  content: string;
  confidence: number;
  generatedAt: Date;
}

export type InsightType =
  | "summary"
  | "recommendation"
  | "risk"
  | "opportunity"
  | "trend";

// --------------------------------------------
// Dashboard Stats
// --------------------------------------------

export interface DashboardStats {
  overallAmbidexterityScore: number;
  explorationIndex: number;
  exploitationIndex: number;
  activeAssessments: number;
  totalRespondents: number;
  responseRate: number;
  trends: {
    ambidexterity: TrendDirection;
    exploration: TrendDirection;
    exploitation: TrendDirection;
  };
}

export interface TrendDirection {
  direction: "up" | "down" | "neutral";
  percentage: number;
}

// --------------------------------------------
// List View Types
// --------------------------------------------

export interface AssessmentListItem {
  id: string;
  name: string;
  organisationName: string;
  status: AssessmentStatus;
  respondentCount: number;
  responseCount: number;
  lastUpdated: Date;
}

export interface BusinessUnitListItem {
  id: string;
  name: string;
  headcount: number;
  explorationScore: number;
  exploitationScore: number;
  assessmentCount: number;
  balance: "balanced" | "exploration-focused" | "exploitation-focused";
}
