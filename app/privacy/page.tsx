import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

export default function PrivacyPolicy() {
  return (
    <div className={`min-h-screen bg-dark-bg text-white ${poppins.className} pt-24`}>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: January 28, 2026</p>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-8">
            Zemore Games respects your privacy. This Privacy Policy explains what information we collect,
            how we use it, and your rights when you visit or interact with https://www.zemore.games.
          </p>
          <div className="border-b border-white/20 my-8"></div>
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We collect information you voluntarily provide to us and limited information collected
            automatically.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">A. Information You Provide</h3>
          
          <h4 className="text-lg font-medium mt-4 mb-2">1. Contact Form</h4>
          <p className="mb-4">
            When you submit the contact form at https://www.zemore.games/contact, we collect:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Subject</li>
            <li>Message content</li>
          </ul>
          <p className="mb-6">This information is used solely to respond to inquiries and communications.</p>
          <div className="border-b border-white/20 my-8"></div>
          <h4 className="text-lg font-medium mt-4 mb-2">2. Pitch Your Game Form</h4>
          <p className="mb-4">
            When you submit a game pitch at https://www.zemore.games/submit, we collect:
          </p>
          
          <h5 className="font-medium mt-4 mb-2">Game Information</h5>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Game title</li>
            <li>Genre</li>
            <li>Development status</li>
            <li>Supported platforms (PC, Console, Mobile)</li>
            <li>Game description</li>
          </ul>

          <h5 className="font-medium mt-4 mb-2">Developer / Studio Information</h5>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Studio or developer name</li>
            <li>Contact email address</li>
            <li>Phone number (if provided)</li>
            <li>Region</li>
          </ul>

          <h5 className="font-medium mt-4 mb-2">Media & Links</h5>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Pitch deck URL</li>
            <li>Gameplay video URL</li>
            <li>Screenshot URLs</li>
          </ul>

          <h5 className="font-medium mt-4 mb-2">Publishing Needs</h5>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Publishing</li>
            <li>Marketing & promotion</li>
            <li>Funding</li>
            <li>Distribution</li>
            <li>QA testing</li>
            <li>Platform negotiation</li>
          </ul>

          <h5 className="font-medium mt-4 mb-2">Additional Information</h5>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Any additional details or questions you choose to provide</li>
          </ul>
          <p className="mb-6">
            This information is used strictly for evaluating submissions, responding to pitches, and potential
            business discussions.
          </p>
          <div className="border-b border-white/20 my-8"></div>

          <h3 className="text-xl font-semibold mt-6 mb-3">B. Information Collected Automatically (Analytics)</h3>
          <p className="mb-4">
            We use Google Analytics to understand how visitors use our website. This may collect:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Pages visited</li>
            <li>Time spent on pages</li>
            <li>Device and browser type</li>
            <li>Approximate location (city/region level)</li>
          </ul>
          <p className="mb-4">
            Google Analytics uses cookies. Analytics cookies are loaded only after user consent, where
            required.
          </p>
          <p className="mb-8">We enable IP anonymization to reduce data sensitivity.</p>

          <div className="border-b border-white/20 my-8"></div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use collected information to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Respond to inquiries and messages</li>
            <li>Review and evaluate game submissions</li>
            <li>Communicate regarding pitches or potential partnerships</li>
            <li>Improve website performance and user experience</li>
            <li>Monitor website usage and traffic trends</li>
          </ul>
          <p className="mb-8">We do not sell personal data.</p>

          <div className="border-b border-white/20 my-8"></div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cookies and Tracking Technologies</h2>
          <p className="mb-4">Cookies are used for:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Website analytics (with consent where required)</li>
            <li>Basic site functionality</li>
          </ul>
          <p className="mb-8">
            You may control or disable cookies through your browser settings. Disabling cookies may affect
            site functionality.
          </p>

          <div className="border-b border-white/20 my-8"></div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Sharing of Information</h2>
          <p className="mb-4">We do not sell or rent your personal information.</p>
          <p className="mb-4">We may share information:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>With trusted service providers (e.g., analytics providers) solely to operate the website</li>
            <li>If required by law or legal process</li>
            <li>To protect the rights, safety, or integrity of Zemore Games</li>
          </ul>
          <p className="mb-8">All third parties are expected to handle data responsibly.</p>

          <div className="border-b border-white/20 my-8"></div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Retention</h2>
          <p className="mb-8">
            We retain personal information only as long as necessary to:
            respond to inquiries, evaluate submissions, and meet legal or business requirements.
            You may request deletion of your data at any time.
          </p>

          <div className="border-b border-white/20 my-8"></div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
          <p className="mb-4">Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion</li>
            <li>Withdraw consent for analytics cookies</li>
            <li>Object to certain data processing activities</li>
          </ul>
          <p className="mb-8">Requests can be sent to the contact details below.</p>

          <div className="border-b border-white/20 my-8"></div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Data Security</h2>
          <p className="mb-8">
            We take reasonable technical and organizational measures to protect your data. However, no
            method of transmission or storage is 100% secure.
          </p>

          <div className="border-b border-white/20 my-8"></div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. International Visitors</h2>
          <p className="mb-8">
            If you access the site from outside our operating country, your information may be processed in
            jurisdictions with different data protection laws.
          </p>

          <div className="border-b border-white/20 my-8"></div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Children's Privacy</h2>
          <p className="mb-8">
            This website is not intended for children under the age of 13. We do not knowingly collect data
            from children.
          </p>

          <div className="border-b border-white/20 my-8"></div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to This Policy</h2>
          <p className="mb-8">
            We may update this Privacy Policy from time to time. Updates will be posted on this page with a
            revised date.
          </p>

          <div className="border-b border-white/20 my-8"></div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
          <p className="mb-4">
            If you have questions about this Privacy Policy or your data, contact us at:
          </p>
          <div className="mb-6">
            <p className="mb-2">Email: pr@zemoredesign.com</p>
            <p>Website: https://www.zemore.games</p>
          </div>
        </div>
      </div>
    </div>
  )
}
