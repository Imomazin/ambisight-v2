"use client";

import { type ReactNode } from "react";
import { Topbar } from "./topbar";
import { Sidebar } from "./sidebar";

interface AppShellProps {
  children: ReactNode;
  user?: {
    name: string;
    email: string;
    avatarUrl?: string;
  };
  onLogout?: () => void;
}

export function AppShell({ children, user, onLogout }: AppShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <Topbar user={user} onLogout={onLogout} />
      <Sidebar />
      <main className="pl-60 pt-14">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}

// DashboardGrid - helper for laying out dashboard widgets
interface DashboardGridProps {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

export function DashboardGrid({
  children,
  columns = 2,
  className = "",
}: DashboardGridProps) {
  const colsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 lg:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid gap-6 ${colsClass[columns]} ${className}`}>
      {children}
    </div>
  );
}

// KpiStrip - horizontal row of KPI tiles
interface KpiStripProps {
  children: ReactNode;
  className?: string;
}

export function KpiStrip({ children, className = "" }: KpiStripProps) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}
    >
      {children}
    </div>
  );
}
