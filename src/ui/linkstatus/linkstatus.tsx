/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import { useEffect } from "react";
import { useLinkStatus } from "next/link";
import { useLoading } from "@/providers/loading";

export function LinkStatus() {
  const { pending } = useLinkStatus();
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(pending);
  }, [pending]);

  return null;
}
