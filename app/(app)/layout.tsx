"use client";

import { AppShell } from "@/components/layout";
import { AuthGuard } from "@/components/auth";
import { useAuth } from "@/lib/contexts/auth-context";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, logout } = useAuth();

  return (
    <AuthGuard>
      <AppShell
        user={user ? { name: user.name, email: user.email, avatarUrl: user.avatarUrl } : undefined}
        onLogout={logout}
      >
        {children}
      </AppShell>
    </AuthGuard>
  );
}
