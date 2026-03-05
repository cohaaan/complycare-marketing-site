import { FormEvent, useState } from 'react';

const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export function FinalCtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!SCRIPT_URL) {
      setError('Form is not configured. Set VITE_GOOGLE_SCRIPT_URL in your environment.');
      return;
    }
    setError(null);
    setLoading(true);
    const form = event.currentTarget;
    const email = (form.querySelector('[name="email"]') as HTMLInputElement)?.value ?? '';
    const facilities = (form.querySelector('[name="facilities"]') as HTMLInputElement)?.value ?? '';
    const formData = {
      name: '',
      email,
      company: facilities,
      phone: '',
      message: 'Request Demo - Homepage CTA',
      requestDemo: true,
    };
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
      form.reset();
    } catch {
      setError('Something went wrong. Please try again or email info@complycare.io.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="request-demo" className="section-pad border-b border-[#E4EDF5] bg-[#F2F6FA]">
      <div className="cc-container">
        <div className="grid gap-8 rounded-3xl border border-[#E4EDF5] bg-white p-7 shadow-[0_14px_34px_rgba(46,64,87,0.1)] sm:p-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4E6478]">Next step</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight text-[#2E4057] sm:text-4xl">
              Stay audit-ready. Keep operations moving.
            </h2>
            <p className="mt-4 max-w-xl text-[#4E6478]">
              Tell us your facility footprint and top workflows. We will map the rollout plan and expected ROI in your demo.
            </p>

          </div>

          <div className="surface-sky rounded-2xl border border-[#D9E8F8] p-5">
            <h3 className="font-display text-xl font-semibold text-[#2E4057]">Request a tailored walkthrough</h3>
            <p className="mt-2 text-sm text-[#4E6478]">Optional fast form for teams that want scheduling follow-up.</p>
            <p className="mt-2 text-sm text-[#4E6478]">
              Or reach out at{' '}
              <a href="mailto:info@complycare.io" className="font-semibold text-[#3DA882] hover:text-[#2E8E6D]">
                info@complycare.io
              </a>
            </p>

            {submitted ? (
              <p className="mt-4 rounded-lg border border-[#5BBFA0]/50 bg-[#EAF7F2] px-3 py-2 text-sm text-[#3DA882]">
                Thanks. A ComplyCare specialist will reach out shortly.
              </p>
            ) : (
              <form className="mt-4 grid gap-3" onSubmit={handleSubmit}>
                {error && (
                  <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                    {error}
                  </p>
                )}
                <label className="grid gap-1 text-sm text-[#4E6478]">
                  Work email
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={loading}
                    className="rounded-lg border border-[#E4EDF5] bg-white px-3 py-2 text-sm text-[#2E4057] placeholder:text-[#8FA3B5] focus:border-[#5BBFA0] focus:outline-none disabled:opacity-60"
                    placeholder="you@facility.org"
                  />
                </label>
                <label className="grid gap-1 text-sm text-[#4E6478]">
                  Facilities in network
                  <input
                    type="text"
                    name="facilities"
                    required
                    disabled={loading}
                    className="rounded-lg border border-[#E4EDF5] bg-white px-3 py-2 text-sm text-[#2E4057] placeholder:text-[#8FA3B5] focus:border-[#5BBFA0] focus:outline-none disabled:opacity-60"
                    placeholder="e.g. 18"
                  />
                </label>
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 inline-flex items-center justify-center rounded-lg bg-[#5BBFA0] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#3DA882] disabled:opacity-60"
                >
                  {loading ? 'Sending…' : 'Request Demo Slot'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
