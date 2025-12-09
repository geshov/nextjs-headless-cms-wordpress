/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useEffect } from "react";
import { useLinkStatus } from "next/link";
import { useSetLoading } from "@/providers/loading";

export function LinkStatus() {
  const { pending } = useLinkStatus();
  const setLoading = useSetLoading() as any;

  useEffect(() => {
    setLoading(pending);
  }, [pending]);

  return null;
}
