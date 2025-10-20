import Link from 'next/link';
import { ArrowLeft, Activity, BarChart3, Database, Zap, TrendingUp, Cloud, Code } from 'lucide-react';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Real-time Dashboard | Portfolio',
  description: 'Analytics dashboard with live data updates, WebSocket integration, and interactive data visualizations for enterprise clients',
  openGraph: {
    title: 'Real-time Dashboard',
    description: 'Analytics dashboard with live data updates',
    type: 'article',
  },
};

export default function RealtimeDashboardPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Real-time Dashboard',
    description: 'Analytics dashboard with live data updates',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: {
      '@type': 'Person',
      name: 'Portfolio',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Portfolio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ishaaq.me/logo.png',
      },
    },
    datePublished: '2024-01-01',
    dateModified: '2024-01-01',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ishaaq.me',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: 'https://ishaaq.me/projects',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Real-time Dashboard',
        item: 'https://ishaaq.me/projects/realtime-dashboard',
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <main className="min-h-screen bg-gray-950 text-white">
        <div className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6 font-medium"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-cyan-500/30">
                  <Activity size={16} />
                  VIBE CODING
                </div>
                <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  Real-time
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    Dashboard
                  </span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                  Enterprise analytics platform delivering live insights through WebSocket
                  connections, processing millions of data points per second with sub-100ms latency.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-gray-400">Live System</span>
                  </div>
                  <div className="text-gray-600">|</div>
                  <div className="text-gray-400">10M+ Data Points/Day</div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-3xl opacity-20"></div>
                <img
                  src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Real-time Dashboard"
                  className="relative w-full h-[500px] object-cover rounded-2xl border border-cyan-500/30"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-20">
              <div className="bg-gray-900 border border-cyan-500/30 p-6 rounded-xl">
                <Zap className="text-cyan-400 mb-3" size={32} />
                <div className="text-3xl font-bold mb-1">87ms</div>
                <div className="text-gray-400 text-sm">Average Latency</div>
              </div>
              <div className="bg-gray-900 border border-blue-500/30 p-6 rounded-xl">
                <Database className="text-blue-400 mb-3" size={32} />
                <div className="text-3xl font-bold mb-1">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime SLA</div>
              </div>
              <div className="bg-gray-900 border border-cyan-500/30 p-6 rounded-xl">
                <TrendingUp className="text-cyan-400 mb-3" size={32} />
                <div className="text-3xl font-bold mb-1">500K</div>
                <div className="text-gray-400 text-sm">Concurrent Users</div>
              </div>
              <div className="bg-gray-900 border border-blue-500/30 p-6 rounded-xl">
                <Cloud className="text-blue-400 mb-3" size={32} />
                <div className="text-3xl font-bold mb-1">12 TB</div>
                <div className="text-gray-400 text-sm">Data Processed</div>
              </div>
            </div>

            <section className="mb-20">
              <h2 className="text-5xl font-bold mb-8">
                <BarChart3 className="inline mr-3 text-cyan-400" />
                Technical Architecture
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700">
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">Frontend Stack</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                        <Code size={20} className="text-cyan-400" />
                      </div>
                      <div>
                        <div className="font-bold">React 18</div>
                        <div className="text-sm text-gray-400">With concurrent features</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Code size={20} className="text-blue-400" />
                      </div>
                      <div>
                        <div className="font-bold">TypeScript</div>
                        <div className="text-sm text-gray-400">Type-safe development</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                        <BarChart3 size={20} className="text-cyan-400" />
                      </div>
                      <div>
                        <div className="font-bold">D3.js & Recharts</div>
                        <div className="text-sm text-gray-400">Data visualization</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Activity size={20} className="text-blue-400" />
                      </div>
                      <div>
                        <div className="font-bold">Socket.io Client</div>
                        <div className="text-sm text-gray-400">Real-time updates</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">Backend Stack</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                        <Database size={20} className="text-cyan-400" />
                      </div>
                      <div>
                        <div className="font-bold">Node.js & Express</div>
                        <div className="text-sm text-gray-400">API server</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Cloud size={20} className="text-blue-400" />
                      </div>
                      <div>
                        <div className="font-bold">WebSocket Server</div>
                        <div className="text-sm text-gray-400">Live data streaming</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                        <Database size={20} className="text-cyan-400" />
                      </div>
                      <div>
                        <div className="font-bold">TimescaleDB</div>
                        <div className="text-sm text-gray-400">Time-series data</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Zap size={20} className="text-blue-400" />
                      </div>
                      <div>
                        <div className="font-bold">Redis</div>
                        <div className="text-sm text-gray-400">Caching & pub/sub</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-5xl font-bold mb-8">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-900 p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-500/60 transition-colors">
                  <div className="bg-cyan-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <Activity className="text-cyan-400" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Live Monitoring</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Real-time metrics streaming with automatic reconnection and fallback mechanisms
                    for uninterrupted monitoring.
                  </p>
                </div>
                <div className="bg-gray-900 p-8 rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-colors">
                  <div className="bg-blue-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 className="text-blue-400" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Custom Visualizations</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Interactive charts and graphs with drill-down capabilities, supporting multiple
                    time ranges and data aggregations.
                  </p>
                </div>
                <div className="bg-gray-900 p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-500/60 transition-colors">
                  <div className="bg-cyan-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="text-cyan-400" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Predictive Analytics</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Machine learning models for trend forecasting and anomaly detection with
                    configurable alert thresholds.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-5xl font-bold mb-8">Dashboard Showcase</h2>
              <div className="space-y-6">
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                  <img
                    src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1000"
                    alt="Main dashboard view"
                    className="w-full h-80 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-2">Overview Dashboard</h3>
                  <p className="text-gray-400">
                    Comprehensive view of all key metrics with customizable widgets and layouts
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                    <img
                      src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Analytics view"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">Analytics View</h3>
                    <p className="text-gray-400 text-sm">Deep-dive into specific metrics</p>
                  </div>
                  <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                    <img
                      src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Alert system"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">Alert Management</h3>
                    <p className="text-gray-400 text-sm">Configure thresholds and notifications</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-5xl font-bold mb-8">Performance Optimizations</h2>
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-10 rounded-xl border border-gray-700">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-cyan-400">Data Handling</h3>
                    <ul className="space-y-4 text-gray-300">
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-400 mt-1 font-bold">→</span>
                        <div>
                          <div className="font-bold text-white">Chunked Data Loading</div>
                          <div className="text-sm">Incremental data fetching to reduce initial load
                          time</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-400 mt-1 font-bold">→</span>
                        <div>
                          <div className="font-bold text-white">Virtual Scrolling</div>
                          <div className="text-sm">Render only visible data rows for large datasets
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-400 mt-1 font-bold">→</span>
                        <div>
                          <div className="font-bold text-white">Data Compression</div>
                          <div className="text-sm">Gzip compression reduces payload by 70%</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-blue-400">Rendering</h3>
                    <ul className="space-y-4 text-gray-300">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400 mt-1 font-bold">→</span>
                        <div>
                          <div className="font-bold text-white">Canvas-based Charts</div>
                          <div className="text-sm">Hardware-accelerated rendering for smooth
                          animations</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400 mt-1 font-bold">→</span>
                        <div>
                          <div className="font-bold text-white">Memoization</div>
                          <div className="text-sm">React.memo and useMemo prevent unnecessary
                          re-renders</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400 mt-1 font-bold">→</span>
                        <div>
                          <div className="font-bold text-white">Web Workers</div>
                          <div className="text-sm">Offload heavy computations to background threads
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-5xl font-bold mb-8">Project Impact</h2>
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-12 rounded-2xl">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">200%</div>
                    <div className="text-cyan-100">Faster Decision Making</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">$2.8M</div>
                    <div className="text-cyan-100">Cost Savings/Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">98%</div>
                    <div className="text-cyan-100">User Satisfaction</div>
                  </div>
                </div>
                <p className="text-xl text-center text-cyan-50 leading-relaxed">
                  The real-time dashboard transformed how enterprise clients monitor their operations,
                  enabling proactive problem-solving and data-driven decision making at unprecedented
                  speed.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
