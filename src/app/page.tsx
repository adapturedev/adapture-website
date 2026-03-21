"use client";

import { useEffect } from "react";

/** Root page — detects browser language and redirects to /pt or /en. */
export default function RootRedirect() {
  useEffect(() => {
    const lang = navigator.language ?? "";
    const locale = lang.startsWith("en") ? "en" : "pt";
    window.location.replace(`/${locale}`);
  }, []);

  return (
    <div className="flex min-h-dvh items-center justify-center">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
    </div>
  );
}
