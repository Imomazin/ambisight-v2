// ============================================
// AmbiSight v2 - Repository Functions
// ============================================
// These functions simulate API calls to a backend.
// They can be easily replaced with real API calls later.

import {
  organisations,
  businessUnits,
  users,
  currentUser,
  assessments,
  dimensions,
  items,
  scoreSummaries,
  dimensionScores,
  aiInsights,
  dashboardStats,
  assessmentListItems,
  businessUnitListItems,
  heatmapData,
  radarChartData,
  respondents,
} from "../mock-data";

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
} from "../types";

import type { RadarDataPoint } from "../mock-data";

// Simulate async API call
const delay = (ms: number = 100) => new Promise((resolve) => setTimeout(resolve, ms));

// --------------------------------------------
// Organisation Repository
// --------------------------------------------

export async function getOrganisations(): Promise<Organisation[]> {
  await delay();
  return organisations;
}

export async function getOrganisationById(id: string): Promise<Organisation | undefined> {
  await delay();
  return organisations.find((org) => org.id === id);
}

// --------------------------------------------
// Business Unit Repository
// --------------------------------------------

export async function getBusinessUnits(): Promise<BusinessUnit[]> {
  await delay();
  return businessUnits;
}

export async function getBusinessUnitsForOrg(organisationId: string): Promise<BusinessUnit[]> {
  await delay();
  return businessUnits.filter((unit) => unit.organisationId === organisationId);
}

export async function getBusinessUnitById(id: string): Promise<BusinessUnit | undefined> {
  await delay();
  return businessUnits.find((unit) => unit.id === id);
}

export async function getBusinessUnitListItems(): Promise<BusinessUnitListItem[]> {
  await delay();
  return businessUnitListItems;
}

// --------------------------------------------
// User Repository
// --------------------------------------------

export async function getCurrentUser(): Promise<User> {
  await delay();
  return currentUser;
}

export async function getUserById(id: string): Promise<User | undefined> {
  await delay();
  return users.find((user) => user.id === id);
}

// --------------------------------------------
// Assessment Repository
// --------------------------------------------

export async function getAssessments(): Promise<Assessment[]> {
  await delay();
  return assessments;
}

export async function getAssessmentsForOrg(organisationId: string): Promise<Assessment[]> {
  await delay();
  return assessments.filter((a) => a.organisationId === organisationId);
}

export async function getAssessmentById(id: string): Promise<Assessment | undefined> {
  await delay();
  return assessments.find((a) => a.id === id);
}

export async function getAssessmentListItems(): Promise<AssessmentListItem[]> {
  await delay();
  return assessmentListItems;
}

export async function getRespondentsForAssessment(assessmentId: string): Promise<Respondent[]> {
  await delay();
  return respondents.filter((r) => r.assessmentId === assessmentId);
}

// --------------------------------------------
// Dimension & Item Repository
// --------------------------------------------

export async function getDimensions(): Promise<Dimension[]> {
  await delay();
  return dimensions;
}

export async function getDimensionById(id: string): Promise<Dimension | undefined> {
  await delay();
  return dimensions.find((d) => d.id === id);
}

export async function getItemsForDimension(dimensionId: string): Promise<Item[]> {
  await delay();
  return items.filter((item) => item.dimensionId === dimensionId);
}

export async function getAllItems(): Promise<Item[]> {
  await delay();
  return items;
}

// --------------------------------------------
// Score Repository
// --------------------------------------------

export async function getScoresForAssessment(assessmentId: string): Promise<ScoreSummary[]> {
  await delay();
  return scoreSummaries.filter((s) => s.assessmentId === assessmentId);
}

export async function getOverallScoreForAssessment(
  assessmentId: string
): Promise<ScoreSummary | undefined> {
  await delay();
  return scoreSummaries.find(
    (s) => s.assessmentId === assessmentId && !s.businessUnitId
  );
}

export async function getScoresByUnit(
  assessmentId: string
): Promise<ScoreSummary[]> {
  await delay();
  return scoreSummaries.filter(
    (s) => s.assessmentId === assessmentId && s.businessUnitId
  );
}

export async function getDimensionScoresForAssessment(
  assessmentId: string
): Promise<DimensionScore[]> {
  await delay();
  return dimensionScores.filter((s) => s.assessmentId === assessmentId);
}

// --------------------------------------------
// AI Insights Repository
// --------------------------------------------

export async function getInsightsForAssessment(
  assessmentId: string
): Promise<AIInsight[]> {
  await delay();
  return aiInsights.filter((i) => i.assessmentId === assessmentId);
}

export async function getLatestInsight(
  assessmentId: string
): Promise<AIInsight | undefined> {
  await delay();
  const insights = aiInsights.filter((i) => i.assessmentId === assessmentId);
  return insights.sort(
    (a, b) => b.generatedAt.getTime() - a.generatedAt.getTime()
  )[0];
}

// --------------------------------------------
// Dashboard Repository
// --------------------------------------------

export async function getDashboardStats(): Promise<DashboardStats> {
  await delay();
  return dashboardStats;
}

export async function getHeatmapData(_assessmentId: string): Promise<HeatmapData> {
  await delay();
  // In real implementation, filter by _assessmentId
  return heatmapData;
}

export async function getRadarChartData(_assessmentId: string): Promise<RadarDataPoint[]> {
  await delay();
  // In real implementation, filter by _assessmentId
  return radarChartData;
}

// --------------------------------------------
// Utility Functions
// --------------------------------------------

export function formatDate(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMins < 60) {
    return diffMins <= 1 ? "Just now" : `${diffMins} minutes ago`;
  }
  if (diffHours < 24) {
    return diffHours === 1 ? "1 hour ago" : `${diffHours} hours ago`;
  }
  if (diffDays < 7) {
    return diffDays === 1 ? "1 day ago" : `${diffDays} days ago`;
  }
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  }

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function getBalanceLabel(
  explorationScore: number,
  exploitationScore: number
): "balanced" | "exploration-focused" | "exploitation-focused" {
  const diff = Math.abs(explorationScore - exploitationScore);
  if (diff < 15) return "balanced";
  return explorationScore > exploitationScore
    ? "exploration-focused"
    : "exploitation-focused";
}

export function getBalanceColor(
  balance: "balanced" | "exploration-focused" | "exploitation-focused"
): string {
  switch (balance) {
    case "balanced":
      return "text-success";
    case "exploration-focused":
      return "text-brand-purple";
    case "exploitation-focused":
      return "text-brand-teal";
  }
}
