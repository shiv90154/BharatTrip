export const metadata = {
  title: "Privacy Policy | Bharat Trip",
  description: "Learn how Bharat Trip collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-6">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="space-y-4 leading-relaxed text-gray-700">
        <p>
          At <strong>Bharat Trip</strong>, we are committed to protecting your privacy. 
          This Privacy Policy outlines how we collect, use, and safeguard your information when you use our website.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
        <p>We may collect personal information such as your name, email, phone number, and travel preferences.</p>

        <h2 className="text-xl font-semibold mt-6">2. How We Use Your Information</h2>
        <p>Your information is used to provide travel services, improve our website, and offer personalized recommendations.</p>

        <h2 className="text-xl font-semibold mt-6">3. Cookies & Tracking</h2>
        <p>We use cookies for analytics, personalization, and performance optimization.</p>

        <h2 className="text-xl font-semibold mt-6">4. Data Security</h2>
        <p>We implement strong security measures to protect your data from unauthorized access.</p>

        <h2 className="text-xl font-semibold mt-6">5. Contact Us</h2>
        <p>If you have any questions regarding our privacy policy, contact us at:  
          <strong> support@bharattrip.com</strong>
        </p>
      </section>
    </div>
  );
}
