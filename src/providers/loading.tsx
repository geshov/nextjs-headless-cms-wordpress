/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { Context, createContext, useContext, useState } from "react";

const LoadingContext = createContext(false);
const LoadingSetContext = createContext(null) as Context<any>;

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext value={loading}>
      <LoadingSetContext value={setLoading}>{children}</LoadingSetContext>
    </LoadingContext>
  );
}

export function useLoading() {
  return {
    loading: useContext(LoadingContext),
    setLoading: useContext(LoadingSetContext),
  };
}
