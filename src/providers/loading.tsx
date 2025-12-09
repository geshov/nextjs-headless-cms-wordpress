"use client";

import { createContext, useContext, useState } from "react";

const LoadingContext = createContext(false);
const SetLoadingContext = createContext({});

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext value={loading}>
      <SetLoadingContext value={setLoading}>{children}</SetLoadingContext>
    </LoadingContext>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}

export function useSetLoading() {
  return useContext(SetLoadingContext);
}
