"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Button, Card, CardContent } from "@/components/ui";

// Mock survey items grouped by dimension
const surveyDimensions = [
  {
    id: "dim-1",
    name: "Strategic Intent",
    description: "How your organisation balances long-term vision with short-term execution",
    items: [
      { id: "item-1", text: "We actively pursue new market opportunities", orientation: "exploration" as const },
      { id: "item-2", text: "We focus on optimizing our current market position", orientation: "exploitation" as const },
      { id: "item-3", text: "Our strategy emphasizes breakthrough innovations", orientation: "exploration" as const },
      { id: "item-4", text: "Our strategy emphasizes continuous improvement", orientation: "exploitation" as const },
    ],
  },
  {
    id: "dim-2",
    name: "Knowledge Management",
    description: "Processes for creating new knowledge vs. leveraging existing knowledge",
    items: [
      { id: "item-5", text: "We invest heavily in learning new skills and capabilities", orientation: "exploration" as const },
      { id: "item-6", text: "We leverage and refine our existing expertise", orientation: "exploitation" as const },
      { id: "item-7", text: "We actively experiment with new approaches", orientation: "exploration" as const },
      { id: "item-8", text: "We follow proven best practices", orientation: "exploitation" as const },
    ],
  },
  {
    id: "dim-3",
    name: "Resource Allocation",
    description: "Distribution of resources between exploratory and exploitative activities",
    items: [
      { id: "item-9", text: "Resources are allocated to risky, innovative projects", orientation: "exploration" as const },
      { id: "item-10", text: "Resources prioritize operational efficiency improvements", orientation: "exploitation" as const },
      { id: "item-11", text: "We have dedicated budget for experimentation", orientation: "exploration" as const },
      { id: "item-12", text: "Budget is primarily allocated to core business activities", orientation: "exploitation" as const },
    ],
  },
];

const likertScale = [
  { value: 1, label: "Strongly Disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Somewhat Disagree" },
  { value: 4, label: "Neutral" },
  { value: 5, label: "Somewhat Agree" },
  { value: 6, label: "Agree" },
  { value: 7, label: "Strongly Agree" },
];

export default function TakeAssessmentPage() {
  const params = useParams();
  const router = useRouter();
  const assessmentId = params.id as string;

  const [currentDimensionIndex, setCurrentDimensionIndex] = useState(0);
  const [responses, setResponses] = useState<Record<string, number>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentDimension = surveyDimensions[currentDimensionIndex];
  const totalDimensions = surveyDimensions.length;
  const progress = ((currentDimensionIndex + 1) / totalDimensions) * 100;

  const currentDimensionAnswered = currentDimension.items.every(
    (item) => responses[item.id] !== undefined
  );

  const allAnswered = surveyDimensions.every((dim) =>
    dim.items.every((item) => responses[item.id] !== undefined)
  );

  const handleResponse = (itemId: string, value: number) => {
    setResponses((prev) => ({ ...prev, [itemId]: value }));
  };

  const handleNext = () => {
    if (currentDimensionIndex < totalDimensions - 1) {
      setCurrentDimensionIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (currentDimensionIndex > 0) {
      setCurrentDimensionIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // Redirect back to assessment detail
    router.push(`/assessments/${assessmentId}?submitted=true`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-14 z-30 bg-white border-b border-neutral-200">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <Link
              href={`/assessments/${assessmentId}`}
              className="text-sm text-neutral-500 hover:text-neutral-700 flex items-center gap-1"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Exit Assessment
            </Link>
            <span className="text-sm text-neutral-500">
              Section {currentDimensionIndex + 1} of {totalDimensions}
            </span>
          </div>
          {/* Progress bar */}
          <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-primary rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Dimension Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-neutral-900 mb-2">
            {currentDimension.name}
          </h1>
          <p className="text-neutral-600">{currentDimension.description}</p>
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {currentDimension.items.map((item, index) => (
            <Card key={item.id}>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center text-sm font-medium text-neutral-600">
                      {index + 1}
                    </span>
                    <p className="text-neutral-900 font-medium">{item.text}</p>
                  </div>

                  {/* Likert Scale */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-2 text-xs text-neutral-500">
                      <span>Strongly Disagree</span>
                      <span>Strongly Agree</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {likertScale.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => handleResponse(item.id, option.value)}
                          className={`
                            flex-1 h-12 rounded-lg border-2 font-medium text-sm
                            transition-all duration-200
                            ${
                              responses[item.id] === option.value
                                ? "border-brand-primary bg-brand-primary-light text-brand-primary"
                                : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50"
                            }
                          `}
                          title={option.label}
                        >
                          {option.value}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          <Button
            variant="secondary"
            onClick={handlePrevious}
            disabled={currentDimensionIndex === 0}
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Previous
          </Button>

          {currentDimensionIndex < totalDimensions - 1 ? (
            <Button onClick={handleNext} disabled={!currentDimensionAnswered}>
              Next
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!allAnswered || isSubmitting}
              isLoading={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Assessment"}
            </Button>
          )}
        </div>

        {/* Progress Summary */}
        <div className="mt-8 p-4 bg-neutral-50 rounded-lg">
          <h3 className="text-sm font-medium text-neutral-700 mb-3">
            Your Progress
          </h3>
          <div className="flex gap-2">
            {surveyDimensions.map((dim, idx) => {
              const answered = dim.items.filter(
                (item) => responses[item.id] !== undefined
              ).length;
              const total = dim.items.length;
              const isComplete = answered === total;
              const isCurrent = idx === currentDimensionIndex;

              return (
                <button
                  key={dim.id}
                  onClick={() => setCurrentDimensionIndex(idx)}
                  className={`
                    flex-1 p-3 rounded-lg text-left transition-all
                    ${
                      isCurrent
                        ? "bg-brand-primary-light border-2 border-brand-primary"
                        : isComplete
                        ? "bg-success-light border-2 border-success"
                        : "bg-white border-2 border-neutral-200"
                    }
                  `}
                >
                  <p className="text-xs font-medium text-neutral-700 truncate">
                    {dim.name}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    {answered}/{total} answered
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
