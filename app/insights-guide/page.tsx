import Link from 'next/link';

export default function InsightsGuide() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Vercel Speed Insights Integration Guide
        </h1>

        <section className="mb-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Enabling Speed Insights
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>Navigate to your <a href="https://vercel.com/dashboard" className="text-blue-600 hover:underline">Vercel dashboard</a></li>
            <li>Select your project</li>
            <li>Go to the <strong>Speed Insights</strong> tab</li>
            <li>Click the <strong>Enable</strong> button</li>
          </ol>
          <div className="mt-4 bg-blue-50 p-4 rounded border-l-4 border-blue-500">
            <p className="text-blue-900">
              <strong>💡 Note:</strong> Enabling Speed Insights will add new routes (scoped at <code className="bg-blue-100 px-2 py-1 rounded">/_vercel/speed-insights/*</code>) after your next deployment.
            </p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Framework-Specific Integration
          </h2>

          <div className="space-y-6">
            {/* Next.js App Router */}
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Next.js 13+ (App Router)
              </h3>
              <p className="text-gray-700 mb-3">Add the component to your root layout:</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre className="text-sm">{`import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}`}</pre>
              </div>
            </div>

            {/* Next.js Pages Router */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Next.js Pages Router
              </h3>
              <p className="text-gray-700 mb-3">Add the component to your _app.tsx file:</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre className="text-sm">{`import type { AppProps } from 'next/app';
import { SpeedInsights } from '@vercel/speed-insights/next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;`}</pre>
              </div>
            </div>

            {/* React / Create React App */}
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Create React App
              </h3>
              <p className="text-gray-700 mb-3">Add the component to your main App.tsx file:</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre className="text-sm">{`import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  return (
    <div>
      {/* Your app content */}
      <SpeedInsights />
    </div>
  );
}`}</pre>
              </div>
            </div>

            {/* Vue */}
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Vue / Nuxt
              </h3>
              <p className="text-gray-700 mb-3">Add the component to your layout:</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre className="text-sm">{`<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <SpeedInsights />
</template>`}</pre>
              </div>
            </div>

            {/* Remix */}
            <div className="border-l-4 border-cyan-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Remix
              </h3>
              <p className="text-gray-700 mb-3">Add the component to your root file:</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre className="text-sm">{`import { SpeedInsights } from '@vercel/speed-insights/remix';

export default function App() {
  return (
    <html lang="en">
      <body>
        {/* Your app content */}
        <SpeedInsights />
      </body>
    </html>
  );
}`}</pre>
              </div>
            </div>

            {/* SvelteKit */}
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                SvelteKit
              </h3>
              <p className="text-gray-700 mb-3">Call the function in your root layout:</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre className="text-sm">{`import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

injectSpeedInsights();`}</pre>
              </div>
            </div>

            {/* HTML */}
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Plain HTML
              </h3>
              <p className="text-gray-700 mb-3">Add scripts before the closing body tag:</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre className="text-sm">{`<script>
  window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
</script>
<script defer src="/_vercel/speed-insights/script.js"></script>`}</pre>
              </div>
              <p className="text-gray-700 mt-3">
                <strong>Note:</strong> No need to install the package for HTML implementation.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Installation Commands by Package Manager
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-800 mb-2">npm</h4>
              <code className="text-sm text-gray-700 bg-gray-100 p-2 rounded block">npm i @vercel/speed-insights</code>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-800 mb-2">pnpm</h4>
              <code className="text-sm text-gray-700 bg-gray-100 p-2 rounded block">pnpm i @vercel/speed-insights</code>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-800 mb-2">yarn</h4>
              <code className="text-sm text-gray-700 bg-gray-100 p-2 rounded block">yarn i @vercel/speed-insights</code>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-800 mb-2">bun</h4>
              <code className="text-sm text-gray-700 bg-gray-100 p-2 rounded block">bun i @vercel/speed-insights</code>
            </div>
          </div>
        </section>

        <section className="mb-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Deployment
          </h2>
          <div className="bg-gray-900 text-gray-100 p-4 rounded mb-4">
            <code className="text-sm">vercel deploy</code>
          </div>
          <p className="text-gray-700 mb-4">
            After deployment, Speed Insights will automatically track performance metrics from your users.
          </p>
          <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
            <p className="text-green-900">
              <strong>✓ Verification:</strong> If everything is set up correctly, you should be able to find the
              <code className="bg-green-100 px-2 py-1 rounded">/_vercel/speed-insights/script.js</code> script in the body tag of your page.
            </p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Viewing Your Data
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>Once your app is deployed, users visit your site</li>
            <li>After a few days of traffic, go to your <a href="https://vercel.com/dashboard" className="text-blue-600 hover:underline">dashboard</a></li>
            <li>Select your project → Speed Insights tab</li>
            <li>Explore your performance metrics in the dashboard</li>
          </ol>
        </section>

        <section className="mb-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Key Performance Metrics
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 rounded border-l-4 border-purple-500">
              <h4 className="font-semibold text-gray-800 mb-1">LCP (Largest Contentful Paint)</h4>
              <p className="text-sm text-gray-700">Measures loading performance. Good LCP is 2.5 seconds or less.</p>
            </div>
            <div className="p-4 bg-blue-50 rounded border-l-4 border-blue-500">
              <h4 className="font-semibold text-gray-800 mb-1">FID (First Input Delay)</h4>
              <p className="text-sm text-gray-700">Measures responsiveness. Good FID is 100 milliseconds or less.</p>
            </div>
            <div className="p-4 bg-green-50 rounded border-l-4 border-green-500">
              <h4 className="font-semibold text-gray-800 mb-1">CLS (Cumulative Layout Shift)</h4>
              <p className="text-sm text-gray-700">Measures visual stability. Good CLS is 0.1 or less.</p>
            </div>
            <div className="p-4 bg-orange-50 rounded border-l-4 border-orange-500">
              <h4 className="font-semibold text-gray-800 mb-1">FCP (First Contentful Paint)</h4>
              <p className="text-sm text-gray-700">Time when first content is visible. Good FCP is 1.8 seconds or less.</p>
            </div>
          </div>
        </section>

        <section className="mb-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Advanced Configuration
          </h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Custom beforeSend Hook</h3>
            <p className="text-gray-700 mb-3">
              You can filter sensitive data before sending to Vercel:
            </p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
              <pre className="text-sm">{`<script is:inline>
  function speedInsightsBeforeSend(data){
    // Remove sensitive query parameters
    if (data.route && data.route.includes('?')) {
      data.route = data.route.split('?')[0];
    }
    return data;
  }
</script>`}</pre>
            </div>
          </div>
        </section>

        <section className="mb-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Resources & Documentation
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="https://vercel.com/docs/speed-insights" className="text-blue-600 hover:underline">
                📖 Speed Insights Documentation
              </a>
            </li>
            <li>
              <a href="https://vercel.com/docs/speed-insights/package" className="text-blue-600 hover:underline">
                📦 @vercel/speed-insights Package
              </a>
            </li>
            <li>
              <a href="https://vercel.com/docs/speed-insights/metrics" className="text-blue-600 hover:underline">
                📊 Understanding Metrics
              </a>
            </li>
            <li>
              <a href="https://vercel.com/docs/speed-insights/privacy-policy" className="text-blue-600 hover:underline">
                🔒 Privacy & Compliance
              </a>
            </li>
            <li>
              <a href="https://vercel.com/docs/speed-insights/limits-and-pricing" className="text-blue-600 hover:underline">
                💰 Pricing & Limits
              </a>
            </li>
            <li>
              <a href="https://vercel.com/docs/speed-insights/troubleshooting" className="text-blue-600 hover:underline">
                🔧 Troubleshooting Guide
              </a>
            </li>
          </ul>
        </section>

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
          <p className="text-center text-gray-800">
            <Link href="/" className="text-blue-600 hover:underline font-semibold">
              ← Back to Home
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
