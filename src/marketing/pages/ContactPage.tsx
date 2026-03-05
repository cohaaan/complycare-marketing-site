import { FormEvent, useState } from 'react';
import { CTAButton } from '../components/CTAButton';
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

export function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialState);
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
                <div className="mt-6">
                  <CTAButton to="/pricing" variant="secondary">
                    Prefer pricing first?
                  </CTAButton>
                </div>
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
                <label className="grid gap-1 text-sm text-[#4E6478]">
                  Full name
                  <input
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(event) => setForm((current) => ({ ...current, fullName: event.target.value }))}
                    className="rounded-lg border border-[#E4EDF5] bg-white px-3 py-2 text-sm text-[#2E4057] focus:border-[#5BBFA0] focus:outline-none"
                  />
                </label>
                <label className="grid gap-1 text-sm text-[#4E6478]">
                  Work email
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                    className="rounded-lg border border-[#E4EDF5] bg-white px-3 py-2 text-sm text-[#2E4057] focus:border-[#5BBFA0] focus:outline-none"
                  />
                </label>
                <label className="grid gap-1 text-sm text-[#4E6478]">
                  Organization
                  <input
                    type="text"
                    required
                    value={form.organization}
                    onChange={(event) => setForm((current) => ({ ...current, organization: event.target.value }))}
                    className="rounded-lg border border-[#E4EDF5] bg-white px-3 py-2 text-sm text-[#2E4057] focus:border-[#5BBFA0] focus:outline-none"
                  />
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-1 text-sm text-[#4E6478]">
                    Facilities
                    <input
                      type="text"
                      required
                      value={form.facilities}
                      onChange={(event) => setForm((current) => ({ ...current, facilities: event.target.value }))}
                      className="rounded-lg border border-[#E4EDF5] bg-white px-3 py-2 text-sm text-[#2E4057] focus:border-[#5BBFA0] focus:outline-none"
                    />
                  </label>
                  <label className="grid gap-1 text-sm text-[#4E6478]">
                    Role
                    <select
                      value={form.role}
                      onChange={(event) => setForm((current) => ({ ...current, role: event.target.value }))}
                      className="rounded-lg border border-[#E4EDF5] bg-white px-3 py-2 text-sm text-[#2E4057] focus:border-[#5BBFA0] focus:outline-none"
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
                    rows={4}
                    value={form.message}
                    onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                    className="rounded-lg border border-[#E4EDF5] bg-white px-3 py-2 text-sm text-[#2E4057] focus:border-[#5BBFA0] focus:outline-none"
                    placeholder="Tell us about your priorities: admissions throughput, audit prep, or multi-site operations."
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-[#5BBFA0] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3DA882]"
                >
                  Submit request
                </button>
              </form>
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
