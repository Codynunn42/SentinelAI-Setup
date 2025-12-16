import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Sentinel AI Setup - Vercel Speed Insights
        </h1>

        <section className="mb-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Getting Started with Speed Insights
          </h2>
          <p className="text-gray-700 mb-4">
            This guide will help you get started with using Vercel Speed Insights on your project.
            Speed Insights enables you to track and monitor the performance metrics of your
            application in real-time.
          </p>
          <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500 mb-4">
            <p className="text-blue-900">
              <strong>💡 Note:</strong> Speed Insights is automatically enabled for all Vercel projects.
              Once deployed, it will start collecting performance data from your users.
            </p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Prerequisites
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>A Vercel account (sign up at <a href="https://vercel.com/signup" className="text-blue-600 hover:underline">vercel.com/signup</a>)</li>
            <li>A Vercel project</li>
            <li>The Vercel CLI installed</li>
            <li>Node.js and npm/pnpm/yarn installed</li>
          </ul>
        </section>

        <section className="mb-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Installation
          </h2>
          <div className="bg-gray-900 text-gray-100 p-4 rounded mb-4">
            <code className="text-sm">npm install @vercel/speed-insights</code>
          </div>
          <p className="text-gray-700 mb-4">
            The package has already been installed in this project and integrated into the root layout.
          </p>
        </section>

        <section className="mb-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Deployment
          </h2>
          <p className="text-gray-700 mb-4">
            To deploy your app and start tracking performance metrics:
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded mb-4">
            <code className="text-sm">vercel deploy</code>
          </div>
          <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
            <p className="text-green-900">
              <strong>✓ Tip:</strong> You can also connect your git repository to Vercel for automatic
              deployments on every push to your main branch.
            </p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Viewing Metrics
          </h2>
          <p className="text-gray-700 mb-4">
            Once deployed and users have visited your site, view the data in the dashboard:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Go to your <a href="https://vercel.com/dashboard" className="text-blue-600 hover:underline">Vercel dashboard</a></li>
            <li>Select your project</li>
            <li>Click the <strong>Speed Insights</strong> tab</li>
          </ol>
        </section>

        <section className="mb-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Key Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded">
              <h3 className="font-semibold text-gray-800 mb-2">LCP</h3>
              <p className="text-sm text-gray-700">Largest Contentful Paint - How quickly the page's main content loads</p>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <h3 className="font-semibold text-gray-800 mb-2">FID</h3>
              <p className="text-sm text-gray-700">First Input Delay - Responsiveness to user interactions</p>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <h3 className="font-semibold text-gray-800 mb-2">CLS</h3>
              <p className="text-sm text-gray-700">Cumulative Layout Shift - Visual stability of the page</p>
            </div>
          </div>
        </section>

        <section className="mb-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Next Steps
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a href="https://vercel.com/docs/speed-insights/package" className="text-blue-600 hover:underline">
                📖 Learn about the @vercel/speed-insights package
              </a>
            </li>
            <li>
              <a href="https://vercel.com/docs/speed-insights/metrics" className="text-blue-600 hover:underline">
                📊 Explore available metrics
              </a>
            </li>
            <li>
              <a href="https://vercel.com/docs/speed-insights/privacy-policy" className="text-blue-600 hover:underline">
                🔒 Read about privacy and compliance
              </a>
            </li>
            <li>
              <a href="https://vercel.com/docs/speed-insights/troubleshooting" className="text-blue-600 hover:underline">
                🔧 Troubleshooting guide
              </a>
            </li>
          </ul>
        </section>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <p className="text-center text-gray-700">
            <Link href="/insights-guide" className="text-blue-600 hover:underline font-semibold">
              View the detailed integration guide →
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
