"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import LoadingSpinner from "./LoadingSpinner";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, checkAuth, user, isCheckingAuth, isLoading } =
    useAuthStore();
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (!isCheckingAuth && !isLoading) {
      if (!isAuthenticated || !user?.isVerified) {
        router.replace("/login");
      }
    }
  }, [isAuthenticated, user, isCheckingAuth, isLoading, router]);

  if (!isAuthenticated || !user?.isVerified) {
    router.replace("/login");
  }

  if (isCheckingAuth || isLoading) {
    return <LoadingSpinner />;
  }

  return children;
}
