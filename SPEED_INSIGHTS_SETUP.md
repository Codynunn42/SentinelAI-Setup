# Getting Started with Vercel Speed Insights

This guide will help you get started with using Vercel Speed Insights on your project, showing you how to enable it, add the package to your project, deploy your app to Vercel, and view your data in the dashboard.

## Prerequisites

- A Vercel account. If you don't have one, you can [sign up for free](https://vercel.com/signup).
- A Vercel project. If you don't have one, you can [create a new project](https://vercel.com/new).
- The Vercel CLI installed. If you don't have it, you can install it using the following command:

### Install Vercel CLI

```bash
# npm
npm i -g vercel

# pnpm
pnpm i -g vercel

# yarn
yarn global add vercel

# bun
bun add -g vercel
```

## Step 1: Enable Speed Insights in Vercel

On the [Vercel dashboard](/dashboard), select your Project followed by the **Speed Insights** tab. Then, select **Enable** from the dialog.

> **💡 Note:** Enabling Speed Insights will add new routes (scoped at `/_vercel/speed-insights/*`) after your next deployment.

## Step 2: Add `@vercel/speed-insights` to Your Project

Using the package manager of your choice, add the `@vercel/speed-insights` package to your project:

### npm
```bash
npm i @vercel/speed-insights
```

### pnpm
```bash
pnpm i @vercel/speed-insights
```

### yarn
```bash
yarn i @vercel/speed-insights
```

### bun
```bash
bun i @vercel/speed-insights
```

## Step 3: Add the `SpeedInsights` Component to Your App

### For Next.js 13+ (App Router)

The `SpeedInsights` component is a wrapper around the tracking script, offering more seamless integration with Next.js.

Add the following component to your root layout (`app/layout.tsx`):

```typescript
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

### For Next.js Pages Router

Add the following component to your `pages/_app.tsx`:

```typescript
import type { AppProps } from 'next/app';
import { SpeedInsights } from '@vercel/speed-insights/next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;
```

### For Create React App

Add the following component to your main `App.tsx` file:

```typescript
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  return (
    <div>
      {/* ... */}
      <SpeedInsights />
    </div>
  );
}
```

### For Remix

Add the following component to your root file (`app/root.tsx`):

```typescript
import { SpeedInsights } from '@vercel/speed-insights/remix';

export default function App() {
  return (
    <html lang="en">
      <body>
        {/* ... */}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

### For SvelteKit

Call the `injectSpeedInsights` function in your root layout (`src/routes/+layout.ts`):

```typescript
import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

injectSpeedInsights();
```

### For Vue / Nuxt

Add the following component to your layout:

```vue
<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <SpeedInsights />
</template>
```

### For Astro

Add the component to one of your layout components, such as `BaseHead.astro`:

```astro
---
import SpeedInsights from '@vercel/speed-insights/astro';
const { title, description } = Astro.props;
---
<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description} />

<SpeedInsights />
```

Optionally, you can remove sensitive information from the URL by adding a `speedInsightsBeforeSend` function:

```astro
---
import SpeedInsights from '@vercel/speed-insights/astro';
---

<script is:inline>
  function speedInsightsBeforeSend(data){
    // Remove query parameters from routes
    if (data.route && data.route.includes('?')) {
      data.route = data.route.split('?')[0];
    }
    return data;
  }
</script>
<SpeedInsights />
```

### For Plain HTML

Add the following scripts before the closing `</body>` tag:

```html
<script>
  window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
</script>
<script defer src="/_vercel/speed-insights/script.js"></script>
```

> **💡 Note:** When using the HTML implementation, there is no need to install the `@vercel/speed-insights` package.

## Step 4: Deploy Your App to Vercel

You can deploy your app to Vercel's global CDN by running the following command from your terminal:

```bash
vercel deploy
```

Alternatively, you can [connect your project's git repository](/docs/git#deploying-a-git-repository), which will enable Vercel to deploy your latest pushes and merges to main.

Once your app is deployed, it's ready to begin tracking performance metrics.

> **💡 Note:** If everything is set up correctly, you should be able to find the `/_vercel/speed-insights/script.js` script inside the body tag of your page.

## Step 5: View Your Data in the Dashboard

Once your app is deployed, and users have visited your site, you can view the data in the dashboard.

To do so:

1. Go to your [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Speed Insights** tab

After a few days of visitors, you'll be able to start exploring your metrics. For more information on how to use Speed Insights, see [Using Speed Insights](/docs/speed-insights/using-speed-insights).

## Key Performance Metrics

- **LCP (Largest Contentful Paint)**: Measures loading performance. Target: ≤ 2.5 seconds
- **FID (First Input Delay)**: Measures responsiveness. Target: ≤ 100 milliseconds
- **CLS (Cumulative Layout Shift)**: Measures visual stability. Target: ≤ 0.1
- **FCP (First Contentful Paint)**: Measures paint timing. Target: ≤ 1.8 seconds

## Advanced Configuration

### Custom beforeSend Hook

For frameworks that support it, you can add a `speedInsightsBeforeSend` function to filter sensitive data:

```typescript
<script>
  function speedInsightsBeforeSend(data) {
    // Remove sensitive query parameters
    if (data.route) {
      data.route = data.route.split('?')[0];
    }
    return data;
  }
</script>
```

## Next Steps

Now that you have Vercel Speed Insights set up, you can explore the following topics to learn more:

- [Learn how to use the `@vercel/speed-insights` package](https://vercel.com/docs/speed-insights/package)
- [Learn about metrics](https://vercel.com/docs/speed-insights/metrics)
- [Read about privacy and compliance](https://vercel.com/docs/speed-insights/privacy-policy)
- [Explore pricing](https://vercel.com/docs/speed-insights/limits-and-pricing)
- [Troubleshooting](https://vercel.com/docs/speed-insights/troubleshooting)

## Privacy and Compliance

Vercel Speed Insights maintains strict privacy and data compliance standards. Learn more about [privacy and data compliance standards](https://vercel.com/docs/speed-insights/privacy-policy) with Vercel Speed Insights.
