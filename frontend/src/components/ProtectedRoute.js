"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, checkAuth, user, isCheachingAuth, isLoading } =
    useAuthStore();

  const router = useRouter();

  useEffect(() => {
    const verifyAuth = async () => {
      await checkAuth();
    };

    verifyAuth();
  }, [checkAuth]);

  if (!isAuthenticated) {
    router.replace("/login");
    return null;
  }

  if (!user.isVerified) {
    router.replace("/login");
    return null;
  }

  return children;
}
