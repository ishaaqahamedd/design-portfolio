import Link from 'next/link';
import { ArrowLeft, Package, Code2, Layers, Zap, FileCode, Book, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'UI Component Library | Portfolio',
  description: 'Reusable component system for web apps with comprehensive documentation, design tokens, and accessibility built-in',
  openGraph: {
    title: 'UI Component Library',
    description: 'Reusable component system for web apps',
    type: 'article',
  },
};

export default function UIComponentLibraryPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'UI Component Library',
    description: 'Reusable component system for web apps',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
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
        name: 'UI Component Library',
        item: 'https://ishaaq.me/projects/ui-component-library',
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <main className="min-h-screen bg-white">
        <div className="border-b border-gray-200 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-bold mb-6">
                <Package size={16} />
                DESIGN SYSTEM
              </div>
              <h1 className="text-6xl font-bold mb-6 leading-tight text-gray-900">
                UI Component Library
              </h1>
              <p className="text-2xl text-gray-600 leading-relaxed mb-8">
                A production-ready component library built with React and TypeScript, providing
                developers with a comprehensive set of accessible, customizable UI components.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium">
                  React 18
                </span>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium">
                  TypeScript
                </span>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium">
                  Tailwind CSS
                </span>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium">
                  Storybook
                </span>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium">
                  Jest
                </span>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-gray-900 text-white p-8 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold mb-6">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Components</span>
                    <span className="text-2xl font-bold">45+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Downloads</span>
                    <span className="text-2xl font-bold">125K+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Bundle Size</span>
                    <span className="text-2xl font-bold">~8KB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Test Coverage</span>
                    <span className="text-2xl font-bold">96%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 mb-16">
            <img
              src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Component library showcase"
              className="w-full h-[500px] object-cover rounded-lg border border-gray-200"
            />
          </div>

          <section className="mb-20">
            <h2 className="text-5xl font-bold mb-12 text-gray-900">Core Components</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Code2 className="text-gray-700" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Buttons</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Multiple variants, sizes, and states with built-in loading and disabled handling
                </p>
                <div className="bg-gray-50 p-4 rounded border border-gray-200 font-mono text-sm">
                  <code className="text-gray-800">
                    {'<Button variant="primary">'}
                    <br />
                    {'  Click me'}
                    <br />
                    {'</Button>'}
                  </code>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <FileCode className="text-gray-700" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Forms</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Inputs, selects, checkboxes with validation and error handling
                </p>
                <div className="bg-gray-50 p-4 rounded border border-gray-200 font-mono text-sm">
                  <code className="text-gray-800">
                    {'<Input'}
                    <br />
                    {'  label="Email"'}
                    <br />
                    {'  type="email"'}
                    <br />
                    {'/>'}
                  </code>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Layers className="text-gray-700" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Modals</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Accessible dialogs with focus trap and escape key handling
                </p>
                <div className="bg-gray-50 p-4 rounded border border-gray-200 font-mono text-sm">
                  <code className="text-gray-800">
                    {'<Modal isOpen={open}>'}
                    <br />
                    {'  <ModalContent />'}
                    <br />
                    {'</Modal>'}
                  </code>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Package className="text-gray-700" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Cards</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Flexible container components with header, body, and footer sections
                </p>
                <div className="bg-gray-50 p-4 rounded border border-gray-200 font-mono text-sm">
                  <code className="text-gray-800">
                    {'<Card>'}
                    <br />
                    {'  <CardHeader />'}
                    <br />
                    {'  <CardBody />'}
                    <br />
                    {'</Card>'}
                  </code>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Zap className="text-gray-700" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Alerts</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Toast notifications and banner alerts with auto-dismiss functionality
                </p>
                <div className="bg-gray-50 p-4 rounded border border-gray-200 font-mono text-sm">
                  <code className="text-gray-800">
                    {'<Alert type="success">'}
                    <br />
                    {'  Saved!'}
                    <br />
                    {'</Alert>'}
                  </code>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Book className="text-gray-700" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Navigation</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Menus, tabs, breadcrumbs with keyboard navigation support
                </p>
                <div className="bg-gray-50 p-4 rounded border border-gray-200 font-mono text-sm">
                  <code className="text-gray-800">
                    {'<Tabs>'}
                    <br />
                    {'  <Tab>Tab 1</Tab>'}
                    <br />
                    {'  <Tab>Tab 2</Tab>'}
                    <br />
                    {'</Tabs>'}
                  </code>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-5xl font-bold mb-8 text-gray-900">Design Tokens</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Color System</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      <div className="w-12 h-12 bg-blue-50 border border-gray-200 rounded"></div>
                      <div className="w-12 h-12 bg-blue-100 border border-gray-200 rounded"></div>
                      <div className="w-12 h-12 bg-blue-200 border border-gray-200 rounded"></div>
                      <div className="w-12 h-12 bg-blue-300 border border-gray-200 rounded"></div>
                    </div>
                    <span className="text-gray-600 font-medium">Primary Scale</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded"></div>
                      <div className="w-12 h-12 bg-gray-100 border border-gray-200 rounded"></div>
                      <div className="w-12 h-12 bg-gray-200 border border-gray-200 rounded"></div>
                      <div className="w-12 h-12 bg-gray-300 border border-gray-200 rounded"></div>
                    </div>
                    <span className="text-gray-600 font-medium">Neutral Scale</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      <div className="w-12 h-12 bg-green-200 border border-gray-200 rounded"></div>
                      <div className="w-12 h-12 bg-yellow-200 border border-gray-200 rounded"></div>
                      <div className="w-12 h-12 bg-red-200 border border-gray-200 rounded"></div>
                      <div className="w-12 h-12 bg-blue-200 border border-gray-200 rounded"></div>
                    </div>
                    <span className="text-gray-600 font-medium">Semantic Colors</span>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Typography</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-4xl font-bold mb-2">Heading 1</div>
                    <div className="text-sm text-gray-600 font-mono">36px / Bold / 1.2 line-height</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-2">Heading 2</div>
                    <div className="text-sm text-gray-600 font-mono">24px / Bold / 1.3 line-height</div>
                  </div>
                  <div>
                    <div className="text-base mb-2">Body Text</div>
                    <div className="text-sm text-gray-600 font-mono">16px / Regular / 1.5 line-height</div>
                  </div>
                  <div>
                    <div className="text-sm mb-2">Small Text</div>
                    <div className="text-sm text-gray-600 font-mono">14px / Regular / 1.4 line-height</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-5xl font-bold mb-8 text-gray-900">
              <CheckCircle2 className="inline mr-3 text-gray-700" />
              Accessibility Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">WCAG 2.1 AA Compliant</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span>Color contrast ratios meet accessibility standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span>Semantic HTML for screen reader compatibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span>ARIA labels and roles properly implemented</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span>Focus indicators visible and clear</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Keyboard Navigation</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span>Full keyboard accessibility for all interactive elements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span>Tab order follows logical visual flow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span>Escape key closes modals and dropdowns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span>Arrow keys navigate menus and lists</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-5xl font-bold mb-8 text-gray-900">Documentation</h2>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-900 text-white p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Book className="text-gray-400" size={24} />
                  <span className="font-mono text-sm">docs.componentlibrary.com</span>
                </div>
                <p className="text-gray-300">
                  Comprehensive documentation with live examples, API references, and usage guidelines
                </p>
              </div>
              <div className="grid md:grid-cols-3 divide-x divide-gray-200">
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Getting Started</h3>
                  <p className="text-gray-600 text-sm">Installation, setup, and basic usage</p>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Component API</h3>
                  <p className="text-gray-600 text-sm">Props, events, and customization options</p>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Examples</h3>
                  <p className="text-gray-600 text-sm">Real-world implementation patterns</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-5xl font-bold mb-8 text-gray-900">Adoption & Impact</h2>
            <div className="bg-gray-900 text-white p-12 rounded-lg">
              <div className="grid md:grid-cols-4 gap-8 mb-10">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">350+</div>
                  <div className="text-gray-400">Projects Using</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">70%</div>
                  <div className="text-gray-400">Faster Development</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">95%</div>
                  <div className="text-gray-400">Developer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">45K</div>
                  <div className="text-gray-400">GitHub Stars</div>
                </div>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed text-center">
                The component library has become the standard for internal projects across the
                organization, dramatically reducing development time and ensuring consistent user
                experiences. The open-source community has contributed over 100 improvements since
                launch.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
