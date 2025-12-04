"use client";

import { AppShell } from "@/components/layout";

// Mock user for now - will be replaced with real auth context
const mockUser = {
  name: "Alex Morgan",
  email: "alex.morgan@company.com",
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleLogout = () => {
    // TODO: Implement real logout
    window.location.href = "/login";
  };

  return (
    <AppShell user={mockUser} onLogout={handleLogout}>
      {children}
    </AppShell>
  );
}
