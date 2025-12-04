import { type HTMLAttributes } from "react";

type BadgeVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "teal"
  | "purple";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: "sm" | "md";
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-neutral-100 text-neutral-700",
  primary: "bg-brand-primary-light text-brand-primary",
  success: "bg-success-light text-success",
  warning: "bg-warning-light text-warning",
  error: "bg-error-light text-error",
  teal: "bg-brand-teal-light text-brand-teal",
  purple: "bg-brand-purple-light text-brand-purple",
};

const sizeStyles = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
};

export function Badge({
  variant = "default",
  size = "sm",
  className = "",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center font-medium rounded-full
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
}

// Status badge with dot indicator
interface StatusBadgeProps {
  status: "draft" | "live" | "closed" | "pending";
  className?: string;
}

const statusConfig: Record<
  StatusBadgeProps["status"],
  { label: string; dotColor: string; bgColor: string; textColor: string }
> = {
  draft: {
    label: "Draft",
    dotColor: "bg-neutral-400",
    bgColor: "bg-neutral-100",
    textColor: "text-neutral-600",
  },
  live: {
    label: "Live",
    dotColor: "bg-success",
    bgColor: "bg-success-light",
    textColor: "text-success",
  },
  closed: {
    label: "Closed",
    dotColor: "bg-neutral-400",
    bgColor: "bg-neutral-100",
    textColor: "text-neutral-500",
  },
  pending: {
    label: "Pending",
    dotColor: "bg-warning",
    bgColor: "bg-warning-light",
    textColor: "text-warning",
  },
};

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-medium
        ${config.bgColor} ${config.textColor}
        ${className}
      `}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dotColor}`} />
      {config.label}
    </span>
  );
}
