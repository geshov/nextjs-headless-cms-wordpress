/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { createContext, useContext, useReducer } from "react";

const LoadingContext = createContext(false);
const LoadingSetContext = createContext(null) as any;

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useReducer(loadingReducer, false);

  return (
    <LoadingContext value={loading}>
      <LoadingSetContext value={setLoading}>{children}</LoadingSetContext>
    </LoadingContext>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}

export function useSetLoading() {
  return useContext(LoadingSetContext);
}

function loadingReducer(current: boolean, newest: boolean) {
  return newest;
}
