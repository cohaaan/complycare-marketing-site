import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ faqs, headline = "Frequently Asked Questions" }: { faqs: FAQItem[], headline?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate the JSON-LD FAQPage schema dynamically
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <div className="mx-auto max-w-3xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="text-center mb-8">
        <h2 className="font-display text-3xl font-semibold text-[#2E4057]">{headline}</h2>
      </div>

      <div className="grid gap-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className={`overflow-hidden rounded-2xl border transition-colors ${
                isOpen ? 'border-[#3DA882] bg-[#EAF7F2]/50' : 'border-[#E4EDF5] bg-white hover:border-[#C7DAF0]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-[#2E4057] pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-[#8FA3B5] transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180 text-[#3DA882]' : ''}`}
                />
              </button>
              <div
                className={`grid transition-all duration-200 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-[#4E6478]">{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
