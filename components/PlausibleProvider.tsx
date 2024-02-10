"use client";

import * as React from "react";
import PlausibleProviderWrapper from "next-plausible";

export function PlausibleProvider({ children }: { children: React.ReactNode }) {
  return (
    <PlausibleProviderWrapper
      customDomain="https://plausible.pranavp.xyz"
      domain="pranavp.xyz"
      selfHosted
    >
      {children}
    </PlausibleProviderWrapper>
  );
}
