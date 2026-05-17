import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — iNGen",
  description:
    "The terms that govern your use of iNGen's products, websites, and services.",
};

const LAST_UPDATED = "May 18, 2026";

const SECTIONS: { id: string; title: string; body: React.ReactNode }[] = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    body: (
      <>
        <p>
          By accessing or using iNGen (the &ldquo;Service&rdquo;), you agree to be bound by
          these Terms of Service (the &ldquo;Terms&rdquo;). If you do not agree to these
          Terms, you may not access or use the Service. These Terms form a binding agreement
          between you and iNGen, Inc.
        </p>
        <p>
          If you are accepting these Terms on behalf of a company or other legal entity, you
          represent that you have the authority to bind that entity, in which case
          &ldquo;you&rdquo; refers to that entity.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "2. Eligibility & Accounts",
    body: (
      <>
        <p>
          You must be at least 16 years old to use the Service. When you create an account or
          join the waiting list, you agree to provide accurate, current, and complete
          information and to keep that information up to date.
        </p>
        <p>
          You are responsible for safeguarding your credentials and for all activity that
          occurs under your account. Notify us immediately of any unauthorized use.
        </p>
      </>
    ),
  },
  {
    id: "waitlist",
    title: "3. Waiting List",
    body: (
      <>
        <p>
          Joining the iNGen waiting list does not guarantee access to the Service. We may
          grant access at our discretion based on availability, fit, and rollout plans. By
          joining the waiting list, you consent to receive product updates and onboarding
          communications from iNGen at the email address you provide.
        </p>
        <p>
          You can opt out of these communications at any time via the unsubscribe link in any
          email or by contacting us at{" "}
          <a
            className="text-brand-purple hover:underline"
            href="mailto:hello@ingen.ai"
          >
            hello@ingen.ai
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "4. Acceptable Use",
    body: (
      <>
        <p>You agree not to use the Service to:</p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>Violate any applicable law, regulation, or third-party right.</li>
          <li>Reverse engineer, decompile, or attempt to extract source code.</li>
          <li>
            Probe, scan, or test the vulnerability of the Service or breach security or
            authentication measures.
          </li>
          <li>
            Submit content that is unlawful, deceptive, discriminatory, infringing, or
            harmful.
          </li>
          <li>Resell, rent, or sublicense the Service without our written consent.</li>
        </ul>
      </>
    ),
  },
  {
    id: "content",
    title: "5. Your Content",
    body: (
      <>
        <p>
          You retain all rights to the data, candidate information, and other materials you
          submit to the Service (&ldquo;Your Content&rdquo;). You grant iNGen a worldwide,
          non-exclusive, royalty-free license to host, process, and display Your Content
          solely as needed to provide and improve the Service.
        </p>
        <p>
          You represent and warrant that you have all rights, consents, and authority
          required to submit Your Content and that doing so does not violate any law or
          third-party right.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    title: "6. Privacy",
    body: (
      <p>
        Your use of the Service is also governed by our Privacy Policy, which describes how
        we collect, use, and share personal information. By using the Service, you consent
        to our handling of information as described in that policy.
      </p>
    ),
  },
  {
    id: "ip",
    title: "7. Intellectual Property",
    body: (
      <p>
        The Service, including all software, models, designs, text, logos, and other
        materials, is owned by iNGen or its licensors and is protected by intellectual
        property laws. Except for the limited rights expressly granted in these Terms, no
        right, title, or interest in the Service is transferred to you.
      </p>
    ),
  },
  {
    id: "fees",
    title: "8. Fees & Billing",
    body: (
      <p>
        Some features of the Service may require payment. Fees, billing cycles, and refund
        policies will be presented at the point of purchase. Unless otherwise stated, fees
        are non-refundable. You authorize us to charge your designated payment method for
        all amounts due.
      </p>
    ),
  },
  {
    id: "termination",
    title: "9. Termination",
    body: (
      <p>
        We may suspend or terminate your access to the Service at any time, with or without
        notice, if we believe you have violated these Terms or pose a risk to the Service or
        other users. You may stop using the Service at any time. Sections that by their
        nature should survive termination will survive.
      </p>
    ),
  },
  {
    id: "warranty",
    title: "10. Disclaimers",
    body: (
      <p>
        The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
        basis without warranties of any kind, whether express or implied, including the
        implied warranties of merchantability, fitness for a particular purpose, and
        non-infringement. iNGen does not warrant that the Service will be uninterrupted,
        secure, or error-free.
      </p>
    ),
  },
  {
    id: "liability",
    title: "11. Limitation of Liability",
    body: (
      <p>
        To the maximum extent permitted by law, iNGen will not be liable for any indirect,
        incidental, special, consequential, or punitive damages, or for any loss of profits,
        revenue, data, or goodwill, arising out of or in connection with these Terms or your
        use of the Service. Our aggregate liability for any claim will not exceed the
        greater of (a) the fees you paid us in the twelve months preceding the claim, or (b)
        one hundred U.S. dollars.
      </p>
    ),
  },
  {
    id: "changes",
    title: "12. Changes to These Terms",
    body: (
      <p>
        We may update these Terms from time to time. If we make material changes, we will
        notify you by email or by posting a notice in the Service. Your continued use of the
        Service after the changes take effect constitutes your acceptance of the updated
        Terms.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "13. Governing Law",
    body: (
      <p>
        These Terms are governed by the laws of the State of Delaware, USA, without regard
        to its conflict-of-law principles. Any disputes will be resolved exclusively in the
        state or federal courts located in Delaware, and you consent to personal
        jurisdiction there.
      </p>
    ),
  },
  {
    id: "contact",
    title: "14. Contact",
    body: (
      <p>
        Questions about these Terms? Reach us at{" "}
        <a className="text-brand-purple hover:underline" href="mailto:hello@ingen.ai">
          hello@ingen.ai
        </a>
        .
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="bg-brand-bg">
      <Navbar />

      <section className="px-4 pt-12 pb-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="label-mono text-brand-ink/60">Legal</p>
          <h1 className="mt-3 font-display text-[36px] md:text-[48px] leading-tight text-brand-ink">
            Terms of Service
          </h1>
          <p className="mt-3 text-[14px] text-brand-ink/70">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-black/5 bg-white px-6 py-8 md:px-10 md:py-12 shadow-sm">
          <p className="text-[15px] leading-7 text-brand-ink/80">
            Welcome to iNGen. These Terms of Service explain the rules and expectations for
            using our products, websites, and services. Please read them carefully — they
            include important information about your rights, obligations, and how disputes
            are resolved.
          </p>

          <div className="mt-10 space-y-10">
            {SECTIONS.map((s) => (
              <article key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="font-display text-[20px] md:text-[22px] text-brand-ink">
                  {s.title}
                </h2>
                <div className="mt-3 space-y-3 text-[15px] leading-7 text-brand-ink/80">
                  {s.body}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
