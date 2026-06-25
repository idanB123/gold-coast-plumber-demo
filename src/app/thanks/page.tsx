import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <div className="shell flex min-h-screen items-center justify-center py-16">
        <div className="glass max-w-2xl rounded-[2rem] p-8 text-center sm:p-12">
          <p className="section-eyebrow">Quote request received</p>
          <h1 className="display-font mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Thanks — we’ve got your job details.
          </h1>
          <p className="mt-5 text-lg leading-8 text-stone-300">
            This demo thank-you page is wired for a Netlify Forms handoff. In a live
            production setup, the plumbing team would receive the lead by email and follow
            up to confirm timing.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-[#d6a867] px-6 py-3 font-semibold text-stone-950 transition hover:bg-[#e2bb86]"
          >
            Back to the homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
