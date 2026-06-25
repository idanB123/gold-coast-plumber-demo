import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="shell flex min-h-screen items-center justify-center py-16">
        <div className="editorial-panel max-w-2xl rounded-[2rem] p-8 text-center sm:p-12">
          <p className="section-kicker">Request received</p>
          <h1 className="display-font mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Thanks — we&apos;ll be in touch shortly.
          </h1>
          <p className="mt-5 text-lg leading-8 text-[var(--muted-strong)]">
            Harbor Flow Plumbing has your details. If the job is urgent, call us now and
            we&apos;ll help you straight away.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/" className="button-primary">
              Back to the homepage
            </Link>
            <a href={`tel:${"+617****9274"}`} className="button-secondary">
              Call (07) 5603 9274
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
