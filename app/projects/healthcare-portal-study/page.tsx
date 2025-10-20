import Link from 'next/link';
import { ArrowLeft, Heart, Users, ClipboardCheck, Target, Eye, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Healthcare Portal Study | Portfolio',
  description: 'User research and design for patient portal with focus on accessibility, health data management, and appointment scheduling',
  openGraph: {
    title: 'Healthcare Portal Study',
    description: 'User research and design for patient portal',
    type: 'article',
  },
};

export default function HealthcarePortalStudyPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Healthcare Portal Study',
    description: 'User research and design for patient portal',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
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
        name: 'Healthcare Portal Study',
        item: 'https://ishaaq.me/projects/healthcare-portal-study',
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <main className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-blue-50">
        <div className="pt-24 pb-20">
          <div className="max-w-6xl mx-auto px-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors mb-6 font-medium"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>

            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Heart size={16} />
                UX CASE STUDY
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900">
                Healthcare Portal
                <br />
                <span className="text-teal-600">User Research</span>
              </h1>
              <p className="text-2xl text-gray-600 leading-relaxed">
                Designing an accessible, patient-centered digital experience that simplifies health
                data management and improves care coordination.
              </p>
            </div>

            <div className="mb-16">
              <img
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Healthcare Portal"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-20">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-teal-100">
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Duration
                </div>
                <div className="text-2xl font-bold text-gray-900">4 months</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-teal-100">
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Participants
                </div>
                <div className="text-2xl font-bold text-gray-900">48 patients</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-teal-100">
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                  My Role
                </div>
                <div className="text-2xl font-bold text-gray-900">UX Researcher</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-teal-100">
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Methods
                </div>
                <div className="text-2xl font-bold text-gray-900">5 research</div>
              </div>
            </div>

            <section className="mb-20">
              <h2 className="text-5xl font-bold mb-8 text-gray-900">Background</h2>
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-200">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  A regional healthcare network needed to redesign their patient portal to improve
                  engagement and reduce the burden on their call center. The existing portal had low
                  adoption rates and patients struggled with basic tasks like viewing test results and
                  scheduling appointments.
                </p>
                <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg">
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    Research Goal: Understand patient needs, pain points, and behaviors to inform a
                    human-centered redesign that prioritizes accessibility and usability.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-5xl font-bold mb-8 text-gray-900">Research Methods</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="bg-teal-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <MessageCircle className="text-teal-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">In-depth Interviews</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    24 one-on-one sessions with patients of varying ages and health conditions
                  </p>
                  <div className="text-sm text-teal-600 font-medium">45-60 min each</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <Eye className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Usability Testing</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Task-based testing with current portal and paper prototypes
                  </p>
                  <div className="text-sm text-blue-600 font-medium">18 participants</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="bg-teal-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <ClipboardCheck className="text-teal-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Contextual Inquiry</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Observing patients interact with health tech in their homes
                  </p>
                  <div className="text-sm text-teal-600 font-medium">12 home visits</div>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-5xl font-bold mb-8 text-gray-900">
                <Users className="inline mr-3 text-teal-600" />
                User Personas
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-10 rounded-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl">
                      👩
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">Sarah, 72</h3>
                      <div className="text-teal-100">Chronic Care Patient</div>
                    </div>
                  </div>
                  <div className="space-y-4 text-teal-50">
                    <div>
                      <div className="font-bold mb-1">Goals</div>
                      <p>Track medications and manage multiple conditions independently</p>
                    </div>
                    <div>
                      <div className="font-bold mb-1">Frustrations</div>
                      <p>Small text, confusing navigation, too many passwords to remember</p>
                    </div>
                    <div>
                      <div className="font-bold mb-1">Tech Comfort</div>
                      <p>Moderate - uses smartphone for calls and photos</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-10 rounded-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl">
                      👨
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">Marcus, 34</h3>
                      <div className="text-blue-100">Working Parent</div>
                    </div>
                  </div>
                  <div className="space-y-4 text-blue-50">
                    <div>
                      <div className="font-bold mb-1">Goals</div>
                      <p>Quick access to family health info and easy appointment booking</p>
                    </div>
                    <div>
                      <div className="font-bold mb-1">Frustrations</div>
                      <p>Time-consuming processes, can't book appointments outside office hours</p>
                    </div>
                    <div>
                      <div className="font-bold mb-1">Tech Comfort</div>
                      <p>High - expects mobile-first, instant experiences</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-5xl font-bold mb-8 text-gray-900">
                <Target className="inline mr-3 text-teal-600" />
                Key Findings
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-teal-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-100 text-teal-600 font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">Accessibility Barriers</h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        67% of senior patients struggled with small text and low contrast. Many relied
                        on family members to use the portal, defeating the purpose of self-service.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-blue-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-blue-600 font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">Medical Jargon Confusion</h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Patients didn't understand test results or clinical terminology. 82% wanted
                        plain-language explanations and contextual help for medical terms.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-teal-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-100 text-teal-600 font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">Scheduling Friction</h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        The appointment booking process required 7+ steps and didn't show provider
                        availability. Patients abandoned midway and called the office instead.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-blue-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-blue-600 font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">Trust & Privacy Concerns</h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Many patients worried about data security but couldn't find information about
                        privacy protections. Clear communication about security measures was essential.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-5xl font-bold mb-8 text-gray-900">Design Recommendations</h2>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-12 rounded-2xl">
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-3xl font-bold mb-6 text-teal-400">Priority Changes</h3>
                    <ul className="space-y-4 text-lg">
                      <li className="flex items-start gap-3">
                        <span className="text-teal-400 mt-1 text-2xl">▸</span>
                        <span>Implement WCAG AAA contrast standards for text readability</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-teal-400 mt-1 text-2xl">▸</span>
                        <span>Add adjustable font size controls on every page</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-teal-400 mt-1 text-2xl">▸</span>
                        <span>Provide plain-language summaries for all test results</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-teal-400 mt-1 text-2xl">▸</span>
                        <span>Streamline appointment booking to 3 steps maximum</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-6 text-blue-400">Enhanced Features</h3>
                    <ul className="space-y-4 text-lg">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400 mt-1 text-2xl">▸</span>
                        <span>Medication reminders with visual confirmation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400 mt-1 text-2xl">▸</span>
                        <span>Family member access for caregiving support</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400 mt-1 text-2xl">▸</span>
                        <span>Secure messaging with care team responses</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400 mt-1 text-2xl">▸</span>
                        <span>Health goals tracking with progress visualization</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-5xl font-bold mb-8 text-gray-900">Prototype Testing</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img
                    src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Prototype interface"
                    className="w-full h-64 object-cover rounded-xl mb-4 border border-gray-200"
                  />
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Dashboard Redesign</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Clean, card-based layout with large touch targets and clear visual hierarchy
                  </p>
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/4386465/pexels-photo-4386465.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Mobile view"
                    className="w-full h-64 object-cover rounded-xl mb-4 border border-gray-200"
                  />
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Mobile Optimization</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Responsive design with simplified navigation for on-the-go access
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-5xl font-bold mb-8 text-gray-900">Impact & Next Steps</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-teal-600 text-white p-8 rounded-xl text-center">
                  <div className="text-5xl font-bold mb-2">92%</div>
                  <div className="text-teal-100">Task Success Rate</div>
                </div>
                <div className="bg-blue-600 text-white p-8 rounded-xl text-center">
                  <div className="text-5xl font-bold mb-2">-58%</div>
                  <div className="text-blue-100">Support Call Volume</div>
                </div>
                <div className="bg-teal-600 text-white p-8 rounded-xl text-center">
                  <div className="text-5xl font-bold mb-2">4.6/5</div>
                  <div className="text-teal-100">Patient Satisfaction</div>
                </div>
              </div>
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-200">
                <p className="text-xl text-gray-700 leading-relaxed">
                  The research findings informed a complete portal redesign focused on accessibility
                  and simplicity. Follow-up testing showed dramatic improvements in patient
                  satisfaction and task completion rates. The healthcare network is now rolling out
                  the new design across all facilities, with plans to expand features based on
                  continued user feedback.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
