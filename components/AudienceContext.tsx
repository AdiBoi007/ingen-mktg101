"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Audience = "recruiter" | "student";

type Ctx = {
  audience: Audience;
  setAudience: (a: Audience) => void;
};

const AudienceCtx = createContext<Ctx | null>(null);

export function AudienceProvider({ children }: { children: ReactNode }) {
  const [audience, setAudience] = useState<Audience>("recruiter");
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
