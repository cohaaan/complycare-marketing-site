import { FormEvent, useState } from 'react';
import { PageMeta } from '../components/PageMeta';
import { SectionIntro } from '../components/SectionIntro';
import { SiteShell } from '../components/SiteShell';

const roles = ['Admissions Director', 'Nursing Leadership', 'Compliance Officer', 'Executive Operations', 'IT / Security'];

type FormState = {
  fullName: string;
  email: string;
  organization: string;
  facilities: string;
  role: string;
  message: string;
};

const initialState: FormState = {
  fullName: '',
  email: '',
  organization: '',
  facilities: '',
  role: roles[0],
  message: '',
};

const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!SCRIPT_URL) {
      setError('Form is not configured. Set VITE_GOOGLE_SCRIPT_URL in your environment.');
      return;
    }
    setError(null);
    setLoading(true);
    const formData = {
      name: form.fullName,
      email: form.email,
      company: form.organization,
      phone: form.facilities,
      message: `Role: ${form.role}\nFacilities: ${form.facilities}\n\n${form.message}`,
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
      setForm(initialState);
    } catch {
      setError('Something went wrong. Please try again or email info@complycare.io.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageMeta
        title="Contact"
        description="Book a ComplyCare.io demo and discuss pricing for your post-acute care organization."
        path="/contact"
      />
      <SiteShell>
        <section className="section-pad border-b border-[#E4EDF5]">
          <div className="cc-container grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <SectionIntro
                eyebrow="Book a demo"
                title="See ComplyCare.io in your operational context"
                description="Share your current admission volume, facility footprint, and compliance priorities. We will tailor the walkthrough to your workflows."
              />

              <div className="mt-8 rounded-2xl border border-[#E4EDF5] bg-white p-6">
                <h2 className="font-display text-xl font-semibold text-[#2E4057]">What to expect</h2>
                <ul className="mt-4 grid gap-3 text-sm text-[#4E6478]">
                  <li>30-minute product walkthrough with role-specific flows</li>
                  <li>Integration and security discussion based on your environment</li>
                  <li>Implementation timeline and rollout considerations</li>
                </ul>
              </div>
            </div>

            <div className="rounded-3xl border border-[#E4EDF5] bg-white p-6 sm:p-8">
              <p className="mb-4 text-sm text-[#4E6478]">
                Contact us at{' '}
                <a href="mailto:info@complycare.io" className="font-semibold text-[#3DA882] hover:text-[#2E8E6D]">
                  info@complycare.io
                </a>
                {' '}for questions or to schedule a demo.
              </p>
              {submitted ? (
                <div className="rounded-2xl border border-[#5BBFA0]/50 bg-[#EAF7F2] p-5 text-sm text-[#3DA882]">
                  Thanks for reaching out. A ComplyCare.io specialist will contact you shortly.
                </div>
              ) : null}

              <form className="grid gap-4" onSubmit={onSubmit}>
                {error && (
                  <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                    {error}
                  </p>
                )}
                <label className="grid gap-1 text-sm text-[#4E6478]">
                  Full name
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={form.fullName}
                    onChange={(event) => setForm((current) => ({ ...current, fullName: event.target.value }))}
                    disabled={loading}
                    className="rounded-lg border border-[#E4EDF5] bg-white px-3 py-2 text-sm text-[#2E4057] focus:border-[#5BBFA0] focus:outline-none disabled:opacity-60"
                  />
                </label>
                <label className="grid gap-1 text-sm text-[#4E6478]">
                  Work email
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                    disabled={loading}
                    className="rounded-lg border border-[#E4EDF5] bg-white px-3 py-2 text-sm text-[#2E4057] focus:border-[#5BBFA0] focus:outline-none disabled:opacity-60"
                  />
                </label>
                <label className="grid gap-1 text-sm text-[#4E6478]">
                  Organization
                  <input
                    type="text"
                    name="organization"
                    required
                    value={form.organization}
                    onChange={(event) => setForm((current) => ({ ...current, organization: event.target.value }))}
                    disabled={loading}
                    className="rounded-lg border border-[#E4EDF5] bg-white px-3 py-2 text-sm text-[#2E4057] focus:border-[#5BBFA0] focus:outline-none disabled:opacity-60"
                  />
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-1 text-sm text-[#4E6478]">
                    Facilities
                    <input
                      type="text"
                      name="facilities"
                      required
                      value={form.facilities}
                      onChange={(event) => setForm((current) => ({ ...current, facilities: event.target.value }))}
                      disabled={loading}
                      className="rounded-lg border border-[#E4EDF5] bg-white px-3 py-2 text-sm text-[#2E4057] focus:border-[#5BBFA0] focus:outline-none disabled:opacity-60"
                    />
                  </label>
                  <label className="grid gap-1 text-sm text-[#4E6478]">
                    Role
                    <select
                      name="role"
                      value={form.role}
                      onChange={(event) => setForm((current) => ({ ...current, role: event.target.value }))}
                      disabled={loading}
                      className="rounded-lg border border-[#E4EDF5] bg-white px-3 py-2 text-sm text-[#2E4057] focus:border-[#5BBFA0] focus:outline-none disabled:opacity-60"
                    >
                      {roles.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="grid gap-1 text-sm text-[#4E6478]">
                  Message
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                    disabled={loading}
                    className="rounded-lg border border-[#E4EDF5] bg-white px-3 py-2 text-sm text-[#2E4057] focus:border-[#5BBFA0] focus:outline-none disabled:opacity-60"
                    placeholder="Tell us about your priorities: admissions throughput, audit prep, or multi-site operations."
                  />
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-xl bg-[#5BBFA0] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3DA882] disabled:opacity-60"
                >
                  {loading ? 'Sending…' : 'Submit request'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
