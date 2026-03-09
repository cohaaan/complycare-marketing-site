import { useEffect, useRef } from 'react';
import { PageMeta } from '../components/PageMeta';
import { SiteShell } from '../components/SiteShell';

const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/7sYfZh9nF8VQeXl39U6wE04';
const PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
const BUY_BUTTON_ID = import.meta.env.VITE_STRIPE_BUY_BUTTON_ID;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'buy-button-id'?: string;
          'publishable-key'?: string;
        },
        HTMLElement
      >;
    }
  }
}

export function PaymentsPage() {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (!PUBLISHABLE_KEY || !BUY_BUTTON_ID) return;
    if (scriptLoaded.current) return;

    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/buy-button.js';
    script.async = true;
    script.onload = () => {
      scriptLoaded.current = true;
    };
    document.body.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  const useEmbeddedButton = Boolean(PUBLISHABLE_KEY && BUY_BUTTON_ID);

  return (
    <>
      <PageMeta
        title="Payments"
        description="Complete your payment securely with ComplyCare.io."
        path="/payments"
      />
      <SiteShell>
        <section className="section-pad">
          <div className="cc-container">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-display text-3xl font-semibold text-[#2E4057] sm:text-4xl">
                Complete your payment
              </h1>
              <p className="mt-3 text-[#4E6478]">
                Securely process your payment below. All transactions are handled by Stripe.
              </p>
            </div>

            <div className="mx-auto mt-10 flex max-w-md justify-center">
              {useEmbeddedButton ? (
                <stripe-buy-button
                  buy-button-id={BUY_BUTTON_ID}
                  publishable-key={PUBLISHABLE_KEY}
                />
              ) : (
                <a
                  href={STRIPE_PAYMENT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[#5BBFA0] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#3DA882] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5BBFA0]"
                >
                  Pay now
                </a>
              )}
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
