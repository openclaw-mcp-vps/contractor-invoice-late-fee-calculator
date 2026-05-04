export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelancers &amp; Agencies
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Losing Money on{' '}
          <span className="text-[#58a6ff]">Late Invoices</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Automatically calculate and track late payment fees based on your contract terms and local jurisdiction rules. Never leave money on the table again.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $9/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { title: 'Auto Late Fees', desc: 'Fees calculated instantly when invoices pass due date per your contract terms.' },
          { title: 'Jurisdiction Rules', desc: 'Supports statutory interest rates by country and US state.' },
          { title: 'Email Alerts', desc: 'Automated reminders sent to clients when fees accrue.' },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited invoices',
              'Automatic late fee calculation',
              'Multi-jurisdiction support',
              'Email notifications to clients',
              'Payment tracking dashboard',
              'CSV export',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          {[
            {
              q: 'How are late fees calculated?',
              a: 'You set your contract terms (e.g. 1.5%/month after 30 days). The app tracks each invoice due date and applies your rate automatically, also cross-referencing statutory minimums for your jurisdiction.',
            },
            {
              q: 'Which jurisdictions are supported?',
              a: 'All 50 US states and 30+ countries with statutory late payment interest laws, including the EU Late Payment Directive.',
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel from your account dashboard at any time with no cancellation fees or lock-in periods.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Invoice Late Fee Calculator. All rights reserved.
      </footer>
    </main>
  )
}
