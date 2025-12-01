export const metadata = {
  title: "Terms & Conditions | Bharat Trip",
  description: "Read the terms and conditions for using Bharat Trip services.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <p className="text-sm text-gray-600 mb-6">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="space-y-4 leading-relaxed text-gray-700">
        <h2 className="text-xl font-semibold mt-6">1. Acceptance of Terms</h2>
        <p>By accessing our website, you agree to abide by these terms and conditions.</p>

        <h2 className="text-xl font-semibold mt-6">2. Booking Policy</h2>
        <p>All bookings are subject to availability and confirmation by our team.</p>

        <h2 className="text-xl font-semibold mt-6">3. Cancellations & Refunds</h2>
        <p>Cancellation charges may apply as per the package or hotel policy.</p>

        <h2 className="text-xl font-semibold mt-6">4. User Responsibilities</h2>
        <p>Users must provide accurate information for bookings and communications.</p>

        <h2 className="text-xl font-semibold mt-6">5. Liability Disclaimer</h2>
        <p>We are not responsible for delays, natural events, or external factors affecting travel.</p>

        <h2 className="text-xl font-semibold mt-6">6. Contact Us</h2>
        <p>For questions about these Terms, email:  
          <strong> support@bharattrip.com</strong>
        </p>
      </section>
    </div>
  );
}
