import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — iNGen",
  description:
    "The terms that govern your use of iNGen's products, website, and services.",
};

const LAST_UPDATED = "May 18, 2026";
const CONTACT_EMAIL = "contact@ingenworkspace.com";
const ABN = "63 688 809 145";
const ABN_LINK = "https://abr.business.gov.au/ABN/View?abn=63688809145";
const ENTITY_NAME = "INGEN LABS PTY LTD";

const SECTIONS: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. Who we are",
    body: (
      <p>
        iNGen is operated by {ENTITY_NAME}, an Australian registered company (ABN {ABN}). You
        can verify our registration on the Australian Business Register at{" "}
        <a className="text-brand-purple hover:underline" href={ABN_LINK} target="_blank" rel="noreferrer">
          abr.business.gov.au
        </a>
        .
      </p>
    ),
  },
  {
    title: "2. Using iNGen",
    body: (
      <p>
        By using iNGen or joining our waiting list, you agree to these terms. If you don&apos;t
        agree, please don&apos;t use the service. You must be at least 16 years old to use
        iNGen.
      </p>
    ),
  },
  {
    title: "3. Your account",
    body: (
      <p>
        Provide accurate information when you sign up or join the waiting list, and keep your
        login details safe. You&apos;re responsible for activity that happens under your
        account.
      </p>
    ),
  },
  {
    title: "4. Waiting list",
    body: (
      <p>
        Joining the waiting list doesn&apos;t guarantee access — we&apos;ll roll out invites
        as capacity allows. By joining, you agree to receive product updates from us. You
        can unsubscribe any time.
      </p>
    ),
  },
  {
    title: "5. What you can't do",
    body: (
      <p>
        Don&apos;t break the law, abuse the service, reverse-engineer it, scrape it, or use
        it to harm others. We may suspend accounts that do.
      </p>
    ),
  },
  {
    title: "6. Your content",
    body: (
      <p>
        You keep ownership of anything you put into iNGen. You give us permission to store
        and process it so we can run the service for you.
      </p>
    ),
  },
  {
    title: "7. Our content",
    body: (
      <p>
        The iNGen product, brand, and code are ours. Using the service doesn&apos;t give you
        ownership of any of it.
      </p>
    ),
  },
  {
    title: "8. Payments",
    body: (
      <p>
        If a feature requires payment, the price and terms will be shown before you buy. Fees
        are non-refundable unless we say otherwise.
      </p>
    ),
  },
  {
    title: "9. Ending your access",
    body: (
      <p>
        You can stop using iNGen at any time. We may suspend or end access if you break these
        terms.
      </p>
    ),
  },
  {
    title: "10. No warranty",
    body: (
      <p>
        iNGen is provided &ldquo;as is&rdquo;. We do our best to keep it reliable, but we
        can&apos;t promise it will be perfect or always available.
      </p>
    ),
  },
  {
    title: "11. Liability",
    body: (
      <p>
        To the extent allowed by law, we&apos;re not liable for indirect or consequential
        losses. Nothing here limits rights you have under Australian Consumer Law.
      </p>
    ),
  },
  {
    title: "12. Changes",
    body: (
      <p>
        We may update these terms occasionally. If we make important changes, we&apos;ll let
        you know by email or in the product.
      </p>
    ),
  },
  {
    title: "13. Governing law",
    body: (
      <p>
        These terms are governed by the laws of Australia. Any disputes will be handled in
        Australian courts.
      </p>
    ),
  },
  {
    title: "14. Contact",
    body: (
      <p>
        Questions? Email us at{" "}
        <a className="text-brand-purple hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
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

      <section className="px-4 pt-10 pb-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-mono text-brand-ink/60">Legal</p>
          <h1 className="mt-3 font-display text-[30px] md:text-[40px] leading-tight text-brand-ink">
            Terms of Service
          </h1>
          <p className="mt-3 text-[13px] text-brand-ink/70">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto max-w-2xl rounded-2xl border border-black/5 bg-white px-5 py-7 md:px-8 md:py-10 shadow-sm">
          <div className="rounded-lg border border-black/5 bg-brand-bg/60 px-4 py-3 text-[13px] leading-6 text-brand-ink/80">
            <p>
              <span className="font-medium text-brand-ink">{ENTITY_NAME}</span> · Australian
              registered company · ABN {ABN}
            </p>
            <p className="mt-1">
              Verify our registration on the Australian Business Register:{" "}
              <a
                className="text-brand-purple hover:underline break-all"
                href={ABN_LINK}
                target="_blank"
                rel="noreferrer"
              >
                {ABN_LINK}
              </a>
            </p>
          </div>

          <p className="mt-6 text-[14px] leading-7 text-brand-ink/80">
            These terms explain how iNGen works and what we expect from each other. We&apos;ve
            kept them short and plain.
          </p>

          <div className="mt-8 space-y-7">
            {SECTIONS.map((s) => (
              <article key={s.title}>
                <h2 className="font-display text-[18px] md:text-[19px] text-brand-ink">
                  {s.title}
                </h2>
                <div className="mt-2 text-[14px] leading-7 text-brand-ink/80">{s.body}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
