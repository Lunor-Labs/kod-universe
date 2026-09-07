import type { Metadata } from "next";
import { DecorativeBlossoms } from "@/components/ui/DecorativeBlossoms";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for KOD Universe.",
};

export default function TermsOfServicePage() {
  const lastUpdated = "September 1, 2024";

  return (
    <div className="bg-canvas min-h-screen pt-32 pb-20 text-earth">
      <div className="container-site max-w-3xl mx-auto">
        <header className="mb-12 border-b border-border-warm pb-8">
          <p className="eyebrow mb-4">LEGAL</p>
          <h1 className="font-editorial text-4xl md:text-5xl mb-4">Terms of Service</h1>
          <p className="text-kod-earth/80 text-base">Last updated: {lastUpdated}</p>
        </header>

        <div className="prose prose-base prose-headings:font-metropolis prose-headings:font-semibold prose-headings:text-earth prose-p:text-kod-earth/85 prose-p:text-base prose-p:leading-relaxed prose-a:text-signal-orange prose-a:no-underline hover:prose-a:underline max-w-none">
          <p>
            Welcome to KOD Universe. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website,
            services, and applications. Please read them carefully.
          </p>

          <h2 className="text-2xl mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy. 
            If you do not agree to these Terms, do not use our services.
          </p>

          <h2 className="text-2xl mt-8 mb-4">2. Intellectual Property Rights</h2>
          <p>
            The content, design, graphics, and other materials related to our website and services are protected under 
            applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use, or publication 
            by you of any such matters or any part of our website is strictly prohibited.
          </p>

          <h2 className="text-2xl mt-8 mb-4">3. User Conduct</h2>
          <p>
            You agree not to use the services to:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6 text-kod-earth/85 text-base">
            <li>Violate any local, state, national, or international law.</li>
            <li>Infringe upon the rights of others.</li>
            <li>Distribute viruses or any other technologies that may harm the website or the interests or property of its users.</li>
          </ul>

          <h2 className="text-xl mt-8 mb-4">4. Limitation of Liability</h2>
          <p>
            KOD Universe shall not be liable for any indirect, incidental, special, consequential or punitive damages, 
            or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, 
            or other intangible losses, resulting from your access to or use of or inability to access or use the services.
          </p>

          <h2 className="text-xl mt-8 mb-4">5. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. If we make material changes, we will notify you 
            by updating the date at the top of these Terms and, depending on the specific changes, we may provide you with 
            additional notice.
          </p>

          <h2 className="text-xl mt-8 mb-4">6. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at: <a href="mailto:hello@koduniverse.com">hello@koduniverse.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
