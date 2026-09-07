import type { Metadata } from "next";
import { DecorativeBlossoms } from "@/components/ui/DecorativeBlossoms";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for KOD Universe.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 1, 2024";

  return (
    <div className="bg-canvas min-h-screen pt-32 pb-20 text-earth">
      <div className="container-site max-w-3xl mx-auto">
        <header className="mb-12 border-b border-border-warm pb-8">
          <p className="eyebrow mb-4">LEGAL</p>
          <h1 className="font-editorial text-4xl md:text-5xl mb-4">Privacy Policy</h1>
          <p className="text-kod-earth/80 text-base">Last updated: {lastUpdated}</p>
        </header>

        <div className="prose prose-base prose-headings:font-metropolis prose-headings:font-semibold prose-headings:text-earth prose-p:text-kod-earth/85 prose-p:text-base prose-p:leading-relaxed prose-a:text-signal-orange prose-a:no-underline hover:prose-a:underline max-w-none">
          <p>
            At KOD Universe, we respect your privacy and are committed to protecting your personal data. 
            This Privacy Policy will inform you as to how we look after your personal data when you visit our website 
            and tell you about your privacy rights.
          </p>

          <h2 className="text-2xl mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6 text-kod-earth/85 text-base">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
            <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
          </ul>

          <h2 className="text-2xl mt-8 mb-4">2. How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6 text-kod-earth/85 text-base">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <h2 className="text-xl mt-8 mb-4">3. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.
          </p>

          <h2 className="text-xl mt-8 mb-4">4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:hello@koduniverse.com">hello@koduniverse.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
