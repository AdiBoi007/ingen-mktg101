"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Audience = "recruiter" | "student";

type Ctx = {
  audience: Audience;
  setAudience: (a: Audience) => void;
};

const AudienceCtx = createContext<Ctx | null>(null);
const STORAGE_KEY = "ingen.audience";

function readStored(): Audience | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "student" || v === "recruiter" ? v : null;
  } catch {
    return null;
  }
}

export function AudienceProvider({ children }: { children: ReactNode }) {
  const [audience, setAudienceState] = useState<Audience>("recruiter");

  useEffect(() => {
    const stored = readStored();
    if (stored && stored !== audience) setAudienceState(stored);

    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY) return;
      if (e.newValue === "student" || e.newValue === "recruiter") {
        setAudienceState(e.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setAudience = (a: Audience) => {
    setAudienceState(a);
    try {
      window.localStorage.setItem(STORAGE_KEY, a);
    } catch {}
  };

  return (
    <AudienceCtx.Provider value={{ audience, setAudience }}>
      {children}
    </AudienceCtx.Provider>
  );
}

export function useAudience() {
  const ctx = useContext(AudienceCtx);
  if (!ctx) throw new Error("useAudience must be used inside AudienceProvider");
  return ctx;
}
