import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Clock3,
  Droplets,
  Flame,
  Gauge,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Wrench,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const phoneDisplay = "07 5550 0123";
const phoneHref = "tel:+61755500123";
const bookingUrl = "https://cal.com/montessorithrive-solutioncall/book-with-june?embed=1&theme=light";

const services = [
  {
    icon: Droplets,
    title: "Blocked drains",
    copy: "Fast diagnosis, clean jetting, and clear advice before a small blockage turns into a flooded mess.",
  },
  {
    icon: Flame,
    title: "Hot water systems",
    copy: "Repairs, replacements, and same-day hot water solutions with tidy installation and clear pricing.",
  },
  {
    icon: Gauge,
    title: "Leaks & burst pipes",
    copy: "Leak detection and urgent repair work to protect flooring, cabinetry, walls, and water bills.",
  },
  {
    icon: ShieldCheck,
    title: "Gas fitting",
    copy: "Licensed gas appliance installs, repairs, and safety-first compliance work for homes and small businesses.",
  },
  {
    icon: Zap,
    title: "24/7 emergencies",
    copy: "Call-now response for after-hours plumbing emergencies across the Gold Coast with rapid dispatch framing.",
  },
];

const reasons = [
  "Licensed and insured local tradespeople",
  "5-star service standard with tidy workmanship",
  "Transparent quoting before major repair work",
  "Gold Coast response windows homeowners can trust",
];

const suburbs = [
  "Southport",
  "Surfers Paradise",
  "Broadbeach",
  "Burleigh Heads",
  "Robina",
  "Nerang",
  "Helensvale",
  "Coomera",
  "Palm Beach",
  "Varsity Lakes",
];

const testimonials = [
  {
    name: "Sophie, Broadbeach",
    quote:
      "Fast response, clear communication, and no mess left behind. The kind of tradie website that instantly feels trustworthy.",
  },
  {
    name: "Mark, Robina",
    quote:
      "The quote flow is simple, the emergency number is obvious, and the service breakdown makes it easy to know what to book.",
  },
  {
    name: "Emily, Burleigh Heads",
    quote:
      "Premium without being flashy. It feels local, capable, and conversion-ready — exactly what a plumbing business needs.",
  },
];

const faqs = [
  {
    question: "Do you offer same-day plumbing across the Gold Coast?",
    answer:
      "Yes — this demo is structured around same-day and emergency conversion. In production, service windows would map to the operator’s real dispatch radius and roster.",
  },
  {
    question: "Can customers book an inspection online?",
    answer:
      "Yes — the booking section embeds a real Cal.com scheduling page so visitors can pick a time instead of waiting for a callback.",
  },
  {
    question: "How do quote requests get handled?",
    answer:
      "The quote form is marked up for Netlify Forms so the deployed site can capture leads through a managed backend rather than a fake frontend-only form.",
  },
  {
    question: "Is the chatbot live?",
    answer:
      "A real Chatbase widget placeholder is loaded so the live site can demonstrate a working assistant bubble while a plumber-specific bot is trained later.",
  },
];

const stats = [
  { value: "24/7", label: "Emergency response framing" },
  { value: "5★", label: "Trust-led review positioning" },
  { value: "10+", label: "Core Gold Coast suburbs highlighted" },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <a
        href={phoneHref}
        className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center gap-2 rounded-full bg-[#d6a867] px-5 py-3 font-semibold text-stone-950 shadow-2xl shadow-black/40 md:hidden"
      >
        <Phone className="h-4 w-4" />
        Call now — {phoneDisplay}
      </a>

      <header className="sticky top-0 z-30 border-b border-white/8 bg-stone-950/70 backdrop-blur-xl">
        <div className="shell flex items-center justify-between py-4">
          <a href="#top" className="display-font text-xl tracking-wide text-stone-50">
            Harbor Flow Plumbing
          </a>
          <nav className="hidden items-center gap-6 text-sm text-stone-300 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#areas" className="transition hover:text-white">Areas</a>
            <a href="#testimonials" className="transition hover:text-white">Reviews</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
            <a
              href="#quote"
              className="rounded-full border border-white/12 px-4 py-2 font-medium text-white transition hover:border-[#d6a867] hover:text-[#f4d6ab]"
            >
              Get a free quote
            </a>
          </nav>
        </div>
      </header>

      <section id="top" className="grid-fade relative overflow-hidden pt-10 sm:pt-16">
        <div className="shell relative grid gap-12 py-10 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-20">
          <Reveal>
            <div>
              <p className="section-eyebrow">
                <Clock3 className="h-3.5 w-3.5" /> Gold Coast local plumber demo
              </p>
              <h1 className="display-font mt-6 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.03em] text-stone-50 sm:text-6xl lg:text-7xl">
                Premium plumbing websites that look trusted before the first call.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
                Clean, conversion-first design for blocked drains, hot water, leaks, gas,
                and emergency jobs — built to feel local, capable, and premium without
                overdesigning the sale.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d6a867] px-6 py-3.5 font-semibold text-stone-950 transition hover:bg-[#e2bb86]"
                >
                  Get a free quote
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/4 px-6 py-3.5 font-semibold text-white transition hover:border-white/25 hover:bg-white/8"
                >
                  <Phone className="h-4 w-4" />
                  Call now — {phoneDisplay}
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-3 text-sm text-stone-300">
                <span className="glass rounded-full px-4 py-2">Licensed & insured</span>
                <span className="glass rounded-full px-4 py-2">5-star positioning</span>
                <span className="glass rounded-full px-4 py-2">Same-day response framing</span>
                <span className="glass rounded-full px-4 py-2">Netlify form + Cal.com embed</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass rounded-[2rem] p-5 sm:p-7">
              <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-[#f4d6ab]">Emergency response</p>
                    <h2 className="display-font mt-3 text-3xl font-semibold text-white">
                      Need a plumber today?
                    </h2>
                  </div>
                  <div className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                    24/7 available
                  </div>
                </div>
                <div className="mt-8 grid gap-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 px-4 py-4"
                    >
                      <span className="text-stone-300">{stat.label}</span>
                      <span className="display-font text-3xl text-white">{stat.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-[1.5rem] border border-white/8 bg-[#102033]/70 p-5 text-stone-100">
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="mt-1 h-5 w-5 text-[#f4d6ab]" />
                    <div>
                      <p className="font-semibold text-white">Premium trust stack</p>
                      <p className="mt-1 text-sm leading-7 text-stone-300">
                        Smooth scroll, premium Fontshare typography, clear CTA hierarchy,
                        and a real managed lead-capture path instead of a dead demo form.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="shell py-20 sm:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <p className="section-eyebrow">Core services</p>
            <h2 className="display-font mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Built around the jobs that convert fastest.
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-300">
              The section system follows your plumber starter kit: simple service blocks,
              strong outcome framing, and no fluff between the customer problem and the CTA.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {services.map(({ icon: Icon, title, copy }, index) => (
            <Reveal key={title} delay={index * 0.05}>
              <article className="glass h-full rounded-[1.75rem] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d6a867]/12 text-[#f4d6ab]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-300">{copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell py-6 sm:py-10">
        <div className="glass rounded-[2rem] p-8 sm:p-10">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="section-eyebrow">Why choose us</p>
                <h2 className="display-font mt-5 text-4xl font-semibold tracking-tight text-white">
                  Trust signals customers scan in seconds.
                </h2>
                <p className="mt-4 text-lg leading-8 text-stone-300">
                  This block is tuned for local-service conversion: licensing, insurance,
                  social proof, and locality presented before the visitor has to dig.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {reasons.map((reason, index) => (
                  <Reveal key={reason} delay={index * 0.06}>
                    <div className="rounded-[1.5rem] border border-white/8 bg-black/20 p-5 text-stone-100">
                      <div className="flex items-start gap-3">
                        <Star className="mt-1 h-5 w-5 text-[#f4d6ab]" />
                        <p className="leading-7">{reason}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="areas" className="shell py-20 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <div>
              <p className="section-eyebrow">Service areas</p>
              <h2 className="display-font mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Gold Coast suburb coverage called out clearly.
              </h2>
              <p className="mt-4 text-lg leading-8 text-stone-300">
                This is the local SEO and trust layer: make the visitor feel certain you
                actually service their suburb before they bounce or ring a competitor.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass rounded-[2rem] p-6 sm:p-8">
              <div className="grid gap-3 sm:grid-cols-2">
                {suburbs.map((suburb) => (
                  <div
                    key={suburb}
                    className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-4 text-stone-200"
                  >
                    <MapPin className="h-4 w-4 text-[#f4d6ab]" />
                    {suburb}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="testimonials" className="shell py-20 sm:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <p className="section-eyebrow">Testimonials</p>
            <h2 className="display-font mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Premium social proof without overcomplicating the page.
            </h2>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.06}>
              <blockquote className="glass h-full rounded-[1.75rem] p-6">
                <div className="flex gap-1 text-[#f4d6ab]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-base leading-8 text-stone-200">“{item.quote}”</p>
                <footer className="mt-6 text-sm text-stone-400">{item.name}</footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="faq" className="shell py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div>
              <p className="section-eyebrow">FAQ</p>
              <h2 className="display-font mt-5 text-4xl font-semibold tracking-tight text-white">
                Questions that remove friction before the quote request.
              </h2>
            </div>
          </Reveal>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.04}>
                <details className="glass group rounded-[1.5rem] p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-white marker:content-none">
                    {faq.question}
                    <span className="rounded-full border border-white/12 px-3 py-1 text-xs uppercase tracking-[0.18em] text-stone-300 group-open:text-[#f4d6ab]">
                      Open
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-300">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="shell py-20 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div className="glass rounded-[2rem] p-8 sm:p-10">
              <p className="section-eyebrow">Request a quote</p>
              <h2 className="display-font mt-5 text-4xl font-semibold tracking-tight text-white">
                Netlify Forms quote capture, structured for real leads.
              </h2>
              <p className="mt-4 text-lg leading-8 text-stone-300">
                This form uses real Netlify Forms markup so the final deployed build can send
                leads through a managed backend instead of a fake success message.
              </p>
              <form
                name="quote-request"
                method="POST"
                action="/thanks"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="mt-8 grid gap-4"
              >
                <input type="hidden" name="form-name" value="quote-request" />
                <input type="hidden" name="bot-field" />
                <input
                  type="hidden"
                  name="subject"
                  value="New plumber lead from Harbor Flow Plumbing demo"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm text-stone-300">
                    Full name
                    <input name="name" required className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-[#d6a867]" />
                  </label>
                  <label className="grid gap-2 text-sm text-stone-300">
                    Mobile
                    <input name="phone" required className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-[#d6a867]" />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm text-stone-300">
                    Email
                    <input type="email" name="email" required className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-[#d6a867]" />
                  </label>
                  <label className="grid gap-2 text-sm text-stone-300">
                    Suburb
                    <input name="suburb" required className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-[#d6a867]" />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm text-stone-300">
                    Service needed
                    <select name="service" required className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-[#d6a867]">
                      <option value="Blocked drains">Blocked drains</option>
                      <option value="Hot water">Hot water</option>
                      <option value="Leaks">Leaks & burst pipes</option>
                      <option value="Gas">Gas fitting</option>
                      <option value="Emergency">24/7 emergency</option>
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm text-stone-300">
                    Urgency
                    <select name="urgency" required className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-[#d6a867]">
                      <option value="Today">Need help today</option>
                      <option value="This week">This week</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </label>
                </div>
                <label className="grid gap-2 text-sm text-stone-300">
                  Tell us what’s happening
                  <textarea name="message" required rows={5} className="rounded-3xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-[#d6a867]" />
                </label>
                <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#d6a867] px-6 py-3.5 font-semibold text-stone-950 transition hover:bg-[#e2bb86]">
                  Submit quote request
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </Reveal>

          <div className="grid gap-8">
            <Reveal delay={0.08}>
              <div className="glass overflow-hidden rounded-[2rem] p-2">
                <div className="rounded-[1.5rem] bg-white p-4 text-stone-900 sm:p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <CalendarDays className="h-5 w-5 text-[#102033]" />
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
                        Online booking
                      </p>
                      <h3 className="display-font text-2xl font-semibold text-stone-950">
                        Cal.com inspection booking embed
                      </h3>
                    </div>
                  </div>
                  <iframe
                    title="Cal.com booking"
                    src={bookingUrl}
                    className="h-[620px] w-full rounded-[1.25rem] border border-stone-200"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="glass rounded-[2rem] p-8">
                <h3 className="display-font text-3xl font-semibold text-white">
                  Emergency? Call now instead of waiting.
                </h3>
                <p className="mt-4 text-base leading-8 text-stone-300">
                  The sticky call CTA is designed for burst pipes, overflowing drains, hot
                  water failures, and after-hours problems where the customer wants the
                  fastest path to a human.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-stone-950 transition hover:bg-stone-200"
                  >
                    <Phone className="h-4 w-4" />
                    {phoneDisplay}
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 px-6 py-3 font-semibold text-white transition hover:border-white/25 hover:bg-white/6"
                  >
                    <Wrench className="h-4 w-4" />
                    Review services
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/8 pb-24 pt-10 sm:pb-10">
        <div className="shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="display-font text-2xl text-white">Harbor Flow Plumbing</p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-stone-400">
              Gold Coast plumber demo site built in Next.js using your elite-arsenal stack:
              premium Fontshare typography, smooth motion, real booking, and managed lead
              capture markup.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-stone-300 sm:items-end">
            <a href={phoneHref} className="inline-flex items-center gap-2 font-semibold text-white">
              <Phone className="h-4 w-4 text-[#f4d6ab]" />
              {phoneDisplay}
            </a>
            <a href="#quote" className="transition hover:text-white">Get a free quote</a>
            <a href="#areas" className="transition hover:text-white">Gold Coast service areas</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
