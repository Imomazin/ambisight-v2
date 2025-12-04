"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs provider");
  }
  return context;
}

interface TabsProps {
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
  className?: string;
}

export function Tabs({
  defaultValue,
  value,
  onValueChange,
  children,
  className = "",
}: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const activeTab = value ?? internalValue;

  const setActiveTab = (tab: string) => {
    if (!value) {
      setInternalValue(tab);
    }
    onValueChange?.(tab);
  };

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

interface TabsListProps {
  children: ReactNode;
  className?: string;
}

export function TabsList({ children, className = "" }: TabsListProps) {
  return (
    <div
      className={`
        flex items-center gap-1 p-1 bg-neutral-100 rounded-lg w-fit
        ${className}
      `}
      role="tablist"
    >
      {children}
    </div>
  );
}

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

export function TabsTrigger({
  value,
  children,
  className = "",
  disabled = false,
}: TabsTriggerProps) {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      disabled={disabled}
      onClick={() => setActiveTab(value)}
      className={`
        px-4 py-2 text-sm font-medium rounded-md
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-1
        disabled:opacity-50 disabled:cursor-not-allowed
        ${
          isActive
            ? "bg-white text-neutral-900 shadow-sm"
            : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
}

interface TabsContentProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function TabsContent({
  value,
  children,
  className = "",
}: TabsContentProps) {
  const { activeTab } = useTabsContext();

  if (activeTab !== value) {
    return null;
  }

  return (
    <div
      role="tabpanel"
      className={`mt-4 focus:outline-none ${className}`}
      tabIndex={0}
    >
      {children}
    </div>
  );
}

// Underline variant tabs (more like traditional tabs)
export function TabsListUnderline({ children, className = "" }: TabsListProps) {
  return (
    <div
      className={`
        flex items-center gap-6 border-b border-neutral-200
        ${className}
      `}
      role="tablist"
    >
      {children}
    </div>
  );
}

export function TabsTriggerUnderline({
  value,
  children,
  className = "",
  disabled = false,
}: TabsTriggerProps) {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      disabled={disabled}
      onClick={() => setActiveTab(value)}
      className={`
        relative pb-3 text-sm font-medium
        transition-colors duration-200
        focus:outline-none
        disabled:opacity-50 disabled:cursor-not-allowed
        ${
          isActive
            ? "text-brand-primary"
            : "text-neutral-500 hover:text-neutral-900"
        }
        ${className}
      `}
    >
      {children}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary rounded-full" />
      )}
    </button>
  );
}
