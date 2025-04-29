'use client';
import { type ReactNode } from 'react';

import { ThemeProvider } from '@/providers/theme-provider';
import { QueryProvider } from '@/providers/query-provider';

type ProvidersProps = {
  children: ReactNode;
};

export function Providers(props: ProvidersProps) {
  const { children } = props;

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  );
}
