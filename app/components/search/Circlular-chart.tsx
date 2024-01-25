"use client";

import { ProgressCircle } from "@tremor/react";

export const CircularChart = ({ value }: { value: number }) => (
  <ProgressCircle value={value} size="lg" color="indigo">
    <span className="h-12 w-12 rounded-full flex items-center justify-center text-sm text-indigo-500 font-medium">
      {value} %
    </span>
  </ProgressCircle>
);
