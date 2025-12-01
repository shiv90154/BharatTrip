export const metadata = {
  title: "Cookies Policy | Bharat Trip",
  description: "Information about how Bharat Trip uses cookies.",
};

export default function CookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Cookies Policy</h1>
      <p className="text-sm text-gray-600 mb-6">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="space-y-4 leading-relaxed text-gray-700">
        <p>
          This Cookies Policy explains how <strong>Bharat Trip</strong> uses cookies to enhance your browsing experience.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. What Are Cookies?</h2>
        <p>Cookies are small text files stored on your device to improve site performance and personalization.</p>

        <h2 className="text-xl font-semibold mt-6">2. How We Use Cookies</h2>
        <p>We use cookies for analytics, login sessions, improving speed, and saving preferences.</p>

        <h2 className="text-xl font-semibold mt-6">3. Managing Cookies</h2>
        <p>You can modify your browser settings to block or delete cookies.</p>

        <h2 className="text-xl font-semibold mt-6">4. Third-Party Cookies</h2>
        <p>Services like Google Analytics may set third-party cookies on our site.</p>

        <h2 className="text-xl font-semibold mt-6">5. Contact Us</h2>
        <p>If you have any questions about our Cookies Policy, email us at  
          <strong> support@bharattrip.com</strong>
        </p>
      </section>
    </div>
  );
}
