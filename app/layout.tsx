import type { ReactNode } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata = {
  title: 'Sentinel AI Setup',
  description: 'Getting started with Vercel Speed Insights',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
