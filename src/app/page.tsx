import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Droplets,
  Flame,
  Gauge,
  Phone,
  ShieldCheck,
  Star,
  Wrench,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { HeroScene } from "@/components/hero-scene";

const phoneDisplay = "(07) 5603 9274";
const phoneHref = `tel:${"+61756039274"}`;

const heroImage =
  "https://upload.wikimedia.org/wikipedia/commons/d/df/Plumber_at_work_2010_USA.jpg";
const serviceImage =
  "https://upload.wikimedia.org/wikipedia/commons/e/e8/Sink_unclogging_repair.jpg";
const hotWaterImage =
  "https://upload.wikimedia.org/wikipedia/commons/f/f2/A_plumber_and_water_tank.jpg";
const houseImage =
  "https://upload.wikimedia.org/wikipedia/commons/4/47/Modern-home-dusk_%28Creative_Commons%29.jpg";
const teamImage =
  "https://upload.wikimedia.org/wikipedia/commons/8/80/Group_1_Employees_Pose_with_Donated_Van.jpg";

const services = [
  {
    icon: Droplets,
    title: "Blocked drains",
    copy:
      "From slow kitchen sinks to overflowing outdoor drains, we find the cause quickly and clear it properly.",
    image: serviceImage,
  },
  {
    icon: Flame,
    title: "Hot water systems",
    copy:
      "Repairs, replacements and honest advice so your home gets reliable hot water without guesswork.",
    image: hotWaterImage,
  },
  {
    icon: Gauge,
    title: "Leaks & burst pipes",
    copy:
      "We track down hidden leaks, isolate the problem fast and protect your cabinetry, walls and flooring.",
    image: heroImage,
  },
  {
    icon: ShieldCheck,
    title: "Gas fitting",
    copy:
      "Licensed gas fitting for appliances, upgrades and safety checks carried out with care and clear communication.",
    image: houseImage,
  },
  {
    icon: Zap,
    title: "Emergency plumbing",
    copy:
      "If something has failed after hours, call us and we will help you make the home safe and get moving fast.",
    image: teamImage,
  },
];

const reasons = [
  "Licensed, insured and respectful in your home",
  "Clear arrival windows and updates if the job changes",
  "Tidy workmanship with practical advice you can trust",
  "Fast support across the central and southern Gold Coast",
];

const suburbs = [
  "Southport",
  "Surfers Paradise",
  "Broadbeach",
  "Mermaid Waters",
  "Burleigh Heads",
  "Robina",
  "Nerang",
  "Helensvale",
  "Palm Beach",
  "Varsity Lakes",
];

const testimonials = [
  {
    name: "Hannah — Broadbeach Waters",
    quote:
      "We had water under the kitchen sink before guests arrived. Harbor Flow arrived the same day, fixed it cleanly and explained exactly what had failed.",
  },
  {
    name: "Daniel — Robina",
    quote:
      "Clear quote, tidy work and no chasing. They replaced our hot water system and left the space cleaner than they found it.",
  },
  {
    name: "Leanne — Burleigh",
    quote:
      "When a drain backed up on a Sunday night they answered straight away and talked us through what to do until the technician arrived.",
  },
];

const faqs = [
  {
    question: "Do you offer same-day service?",
    answer:
      "Yes. For urgent plumbing problems we do our best to get to you the same day and we will always let you know the earliest realistic arrival window.",
  },
  {
    question: "Can you help with hot water replacements?",
    answer:
      "Absolutely. We repair and replace electric, gas and continuous flow systems and will recommend the most practical option for your home and budget.",
  },
  {
    question: "Do you service newer homes and renovations?",
    answer:
      "Yes. We work in established family homes, coastal properties, apartments and renovation projects across the Gold Coast.",
  },
  {
    question: "How quickly do you respond to emergencies?",
    answer:
      "If the issue is urgent, call us. We will triage the problem immediately, help you limit damage and organise the fastest available response.",
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <a href={phoneHref} className="mobile-callbar button-primary md:hidden">
        <Phone className="h-4 w-4" />
        Call Harbor Flow now
      </a>

      <header className="site-header">
        <div className="shell flex items-center justify-between py-4">
          <a href="#top" className="display-font text-xl tracking-wide text-[var(--foreground)]">
            Harbor Flow Plumbing
          </a>
          <nav className="hidden items-center gap-6 text-sm text-[var(--muted-strong)] md:flex">
            <a href="#services" className="transition hover:text-[var(--foreground)]">Services</a>
            <a href="#why-us" className="transition hover:text-[var(--foreground)]">Why us</a>
            <a href="#areas" className="transition hover:text-[var(--foreground)]">Areas</a>
            <a href="#faq" className="transition hover:text-[var(--foreground)]">FAQ</a>
            <a href="#quote" className="button-secondary min-h-0 px-4 py-2">Get a free quote</a>
          </nav>
        </div>
      </header>

      <section id="top" className="hero-surface">
        <div className="shell hero-grid">
          <Reveal>
            <div className="max-w-2xl">
              <p className="section-kicker">
                <Clock3 className="h-3.5 w-3.5" /> Gold Coast plumbing for homes that need fast, tidy help
              </p>
              <h1 className="display-font mt-5 text-[3.2rem] font-semibold leading-[0.92] tracking-[-0.04em] text-[var(--foreground)] sm:text-[4.5rem] lg:text-[5.75rem]">
                Calm service when your home needs a plumber now.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted-strong)] sm:text-xl">
                Harbor Flow Plumbing helps Gold Coast homeowners with blocked drains,
                hot water problems, leaks, gas fitting and urgent callouts — with clear
                communication, clean workmanship and no runaround.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#quote" className="button-primary">
                  Get a free quote
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href={phoneHref} className="button-secondary">
                  <Phone className="h-4 w-4" />
                  Call {phoneDisplay}
                </a>
              </div>

              <div className="hero-stats mt-10 max-w-2xl">
                <div className="hero-stat">
                  <strong>24/7</strong>
                  <span>Emergency support when the job cannot wait</span>
                </div>
                <div className="hero-stat">
                  <strong>5★</strong>
                  <span>Friendly, tidy service homeowners feel good calling again</span>
                </div>
                <div className="hero-stat">
                  <strong>10+</strong>
                  <span>Gold Coast suburbs covered every week</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <HeroScene />
          </Reveal>
        </div>
      </section>

      <section className="shell py-14 sm:py-18">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="editorial-panel rounded-[1.8rem] p-7 sm:p-9">
              <p className="section-kicker">How we work</p>
              <h2 className="display-font mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                We keep it clear, tidy and easy to say yes to.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted-strong)]">
                When you call Harbor Flow, you get practical advice first, a clear plan for
                the work, and a plumber who treats your kitchen, bathroom or outdoor area
                with respect.
              </p>
              <ul className="service-bullets mt-6">
                <li>We explain the problem in plain language before major work begins.</li>
                <li>We protect finishes, keep the site tidy and leave you with a working result.</li>
                <li>We help you choose the fix that makes sense for your home, not the upsell.</li>
              </ul>
            </div>
            <div className="photo-frame h-[360px] lg:h-[460px]">
              <img alt="Modern Gold Coast home exterior" src={houseImage} />
            </div>
          </div>
        </Reveal>
      </section>

      <section id="services" className="shell py-16 sm:py-22">
        <Reveal>
          <div className="max-w-2xl">
            <p className="section-kicker">Services</p>
            <h2 className="display-font mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              The plumbing work homeowners call us for most.
            </h2>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ icon: Icon, title, copy, image }, index) => (
            <Reveal key={title} delay={index * 0.05}>
              <article className="service-card">
                <img alt={title} className="service-card__image" src={image} />
                <div className="service-card__body">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(15,93,122,0.1)] text-[var(--brand-deep)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-[var(--foreground)]">{title}</h3>
                  <p className="mt-3 leading-7 text-[var(--muted-strong)]">{copy}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="why-us" className="shell py-16 sm:py-22">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="photo-frame h-[380px] lg:h-[560px]">
              <img alt="Harbor Flow Plumbing team ready to help" src={teamImage} />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="trust-panel rounded-[1.9rem] p-7 sm:p-10">
              <p className="section-kicker">Why homeowners choose Harbor Flow</p>
              <h2 className="display-font mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Reliable help without the stress.
              </h2>
              <p className="mt-4 text-lg leading-8 text-[var(--muted-strong)]">
                Whether it is an urgent leak, a failed hot water system or a blocked drain
                before the weekend, we focus on quick decisions, clean execution and calm communication.
              </p>
              <ul className="trust-list mt-7">
                {reasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#quote" className="button-primary">Book a plumbing quote</a>
                <a href={phoneHref} className="button-secondary">Call the office</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="areas" className="shell py-16 sm:py-22">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="area-panel rounded-[1.8rem] p-7 sm:p-10">
              <p className="section-kicker">Service areas</p>
              <h2 className="display-font mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Across the central and southern Gold Coast.
              </h2>
              <p className="mt-4 text-lg leading-8 text-[var(--muted-strong)]">
                We regularly work in family homes, apartments and coastal properties across the suburbs below.
              </p>
              <ul className="area-list mt-7 grid sm:grid-cols-2">
                {suburbs.map((suburb) => (
                  <li key={suburb} className="pr-4">{suburb}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="photo-frame h-[340px] lg:h-[460px]">
              <img alt="Water texture detail" src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Water_Texture.jpg" />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="testimonials" className="shell py-16 sm:py-22">
        <Reveal>
          <div className="max-w-2xl">
            <p className="section-kicker">Kind words</p>
            <h2 className="display-font mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Trusted in the homes we work in.
            </h2>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05}>
              <blockquote className="testimonial-card rounded-[1.6rem] p-7">
                <div className="flex gap-1 text-[var(--accent)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-lg leading-8 text-[var(--foreground)]">“{item.quote}”</p>
                <footer className="mt-6 text-sm font-medium text-[var(--muted-strong)]">{item.name}</footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="faq" className="shell py-16 sm:py-22">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <div>
              <p className="section-kicker">FAQ</p>
              <h2 className="display-font mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Straight answers before you book.
              </h2>
            </div>
          </Reveal>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.04}>
                <details className="faq-card rounded-[1.4rem] p-6">
                  <summary className="cursor-pointer list-none text-lg font-semibold text-[var(--foreground)]">
                    {faq.question}
                  </summary>
                  <p className="mt-4 leading-7 text-[var(--muted-strong)]">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="shell py-16 sm:py-22">
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <Reveal>
            <div className="quote-card rounded-[1.9rem] p-7 sm:p-10">
              <p className="section-kicker">Request a quote</p>
              <h2 className="display-font mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Tell us what is happening at your place.
              </h2>
              <p className="mt-4 text-lg leading-8 text-[var(--muted-strong)]">
                Share a few details and our team will come back with the right next step for your home.
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
                <input type="hidden" name="subject" value="New plumber lead from Harbor Flow Plumbing" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm text-[var(--muted-strong)]">
                    Full name
                    <input name="name" required />
                  </label>
                  <label className="grid gap-2 text-sm text-[var(--muted-strong)]">
                    Mobile number
                    <input name="phone" required />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm text-[var(--muted-strong)]">
                    Email
                    <input type="email" name="email" required />
                  </label>
                  <label className="grid gap-2 text-sm text-[var(--muted-strong)]">
                    Suburb
                    <input name="suburb" required />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm text-[var(--muted-strong)]">
                    Service needed
                    <select name="service" required>
                      <option value="Blocked drains">Blocked drains</option>
                      <option value="Hot water">Hot water system</option>
                      <option value="Leaks">Leaks & burst pipes</option>
                      <option value="Gas">Gas fitting</option>
                      <option value="Emergency">Emergency plumbing</option>
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm text-[var(--muted-strong)]">
                    Timing
                    <select name="urgency" required>
                      <option value="ASAP">As soon as possible</option>
                      <option value="This week">This week</option>
                      <option value="Flexible">I&apos;m flexible</option>
                    </select>
                  </label>
                </div>
                <label className="grid gap-2 text-sm text-[var(--muted-strong)]">
                  Tell us about the issue
                  <textarea name="message" required rows={5} />
                </label>
                <button type="submit" className="button-primary mt-2 w-fit">
                  Send my request
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.08}>
              <div className="booking-placeholder">
                <p className="section-kicker">
                  <CalendarDays className="h-3.5 w-3.5" /> Inspection booking
                </p>
                <h3 className="display-font mt-4 text-3xl font-semibold tracking-tight">
                  Choose your preferred time and we&apos;ll confirm it with you.
                </h3>
                <p className="mt-4 leading-7 text-[var(--muted-strong)]">
                  Online scheduling is being refreshed. For now, send your preferred time
                  in the quote form or call the office and we&apos;ll lock in the next available inspection.
                </p>
                <div className="booking-placeholder__window mt-6">
                  <div className="booking-placeholder__bar">
                    <span className="booking-placeholder__dot" />
                    <span className="booking-placeholder__dot" />
                    <span className="booking-placeholder__dot" />
                  </div>
                  <div className="booking-placeholder__body">
                    <p className="font-semibold text-[var(--foreground)]">Preferred booking windows</p>
                    <div className="booking-placeholder__slots">
                      <div className="booking-placeholder__slot">Tomorrow morning<br /><span className="text-sm text-[var(--muted-strong)]">7:30am – 10:30am</span></div>
                      <div className="booking-placeholder__slot">Tomorrow afternoon<br /><span className="text-sm text-[var(--muted-strong)]">12:00pm – 3:00pm</span></div>
                      <div className="booking-placeholder__slot">Friday morning<br /><span className="text-sm text-[var(--muted-strong)]">8:00am – 11:00am</span></div>
                      <div className="booking-placeholder__slot">After-hours urgent callout<br /><span className="text-sm text-[var(--muted-strong)]">Phone confirmation only</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="editorial-panel rounded-[1.8rem] p-7 sm:p-9">
                <h3 className="display-font text-3xl font-semibold tracking-tight">
                  Need help urgently?
                </h3>
                <p className="mt-4 leading-7 text-[var(--muted-strong)]">
                  If a pipe has burst, the hot water system has failed, or a drain is backing up, call us now and we will help you take the next safe step immediately.
                </p>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <a href={phoneHref} className="button-primary">
                    <Phone className="h-4 w-4" />
                    Call {phoneDisplay}
                  </a>
                  <a href="#services" className="button-secondary">
                    <Wrench className="h-4 w-4" />
                    View services
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="pb-24 pt-10 sm:pb-12">
        <div className="shell flex flex-col gap-6 border-t border-[rgba(14,34,52,0.08)] pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="display-font text-2xl">Harbor Flow Plumbing</p>
            <p className="footer-note mt-3 max-w-xl leading-7">
              Gold Coast plumbing for blocked drains, hot water, leaks, gas fitting and emergency callouts.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-[var(--muted-strong)] sm:items-end">
            <a href={phoneHref} className="font-semibold text-[var(--foreground)]">{phoneDisplay}</a>
            <a href="#quote">Get a free quote</a>
            <p>Southport to Palm Beach</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
