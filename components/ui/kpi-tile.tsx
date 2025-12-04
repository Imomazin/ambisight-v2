import { type ReactNode } from "react";

interface KpiTileProps {
  label: string;
  value: string | number;
  subtext?: string;
  trend?: {
    direction: "up" | "down" | "neutral";
    value: string;
  };
  icon?: ReactNode;
  variant?: "default" | "primary" | "teal" | "purple" | "amber";
  className?: string;
}

const variantStyles = {
  default: {
    container: "bg-white",
    icon: "bg-neutral-100 text-neutral-600",
    value: "text-neutral-900",
  },
  primary: {
    container: "bg-white",
    icon: "bg-brand-primary-light text-brand-primary",
    value: "text-brand-primary",
  },
  teal: {
    container: "bg-white",
    icon: "bg-brand-teal-light text-brand-teal",
    value: "text-brand-teal",
  },
  purple: {
    container: "bg-white",
    icon: "bg-brand-purple-light text-brand-purple",
    value: "text-brand-purple",
  },
  amber: {
    container: "bg-white",
    icon: "bg-brand-amber-light text-brand-amber",
    value: "text-brand-amber",
  },
};

const trendStyles = {
  up: "text-success",
  down: "text-error",
  neutral: "text-neutral-500",
};

export function KpiTile({
  label,
  value,
  subtext,
  trend,
  icon,
  variant = "default",
  className = "",
}: KpiTileProps) {
  const styles = variantStyles[variant];

  return (
    <div
      className={`
        ${styles.container} rounded-xl border border-card-border p-5
        shadow-sm transition-all duration-200
        ${className}
      `}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <p className="text-sm font-medium text-neutral-500">{label}</p>
          <div className="flex items-baseline gap-2">
            <span className={`text-3xl font-bold tracking-tight ${styles.value}`}>
              {value}
            </span>
            {trend && (
              <span
                className={`flex items-center gap-0.5 text-sm font-medium ${trendStyles[trend.direction]}`}
              >
                {trend.direction === "up" && (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l5-5 5 5" />
                  </svg>
                )}
                {trend.direction === "down" && (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-5 5-5-5" />
                  </svg>
                )}
                {trend.value}
              </span>
            )}
          </div>
          {subtext && (
            <p className="text-sm text-neutral-500">{subtext}</p>
          )}
        </div>
        {icon && (
          <div className={`p-3 rounded-lg ${styles.icon}`}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}

// Compact variant for smaller spaces
interface KpiTileCompactProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
  color?: "primary" | "teal" | "purple" | "amber";
}

const colorMap = {
  primary: "text-brand-primary",
  teal: "text-brand-teal",
  purple: "text-brand-purple",
  amber: "text-brand-amber",
};

export function KpiTileCompact({
  label,
  value,
  icon,
  color = "primary",
}: KpiTileCompactProps) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50">
      {icon && (
        <div className={`${colorMap[color]}`}>
          {icon}
        </div>
      )}
      <div>
        <p className="text-xs text-neutral-500">{label}</p>
        <p className={`text-lg font-semibold ${colorMap[color]}`}>{value}</p>
      </div>
    </div>
  );
}
