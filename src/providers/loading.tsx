"use client";

import { createContext, useContext, useState } from "react";

const LoadingContext = createContext(false);
const LoadingSetContext = createContext({});

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext value={loading}>
      <LoadingSetContext value={setLoading}>{children}</LoadingSetContext>
    </LoadingContext>
  );
}

export function useLoading() {
  return [useContext(LoadingContext), useContext(LoadingSetContext)];
}
