"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

const FAQ = [
  {
    id: "01",
    Question: "What is Casper Cloaking Film, and how does it work?",
    Answer:
      "Casper Cloaking Film is an innovative privacy film designed for glass walls. It selectively obscures LED and LCD screens from outside view while keeping the glass clear and transparent, ensuring privacy without sacrificing the open feel of a space.",
  },
  {
    id: "02",
    Question: "Can Casper Cloaking Film be applied to any type of glass?",
    Answer:
      "Yes, Casper Cloaking Film can be applied to most types of flat glass surfaces commonly used in offices and modern workspaces. Our team will assess your glass type to ensure compatibility before installation.",
  },
  {
    id: "03",
    Question:
      "Does Casper Cloaking Film affect the overall transparency of the glass?",
    Answer:
      "No, the film does not affect the transparency of the glass. It allows light to pass through and maintains the glass’s clear appearance while obscuring only the digital screens.",
  },
  {
    id: "04",
    Question: "Is Casper Cloaking Film effective for all screen types?",
    Answer:
      "The film works specifically with LED and LCD screens, blocking their light emissions from external views. It may not be as effective with other types of displays, so it’s important to verify the compatibility of your screens.",
  },
  {
    id: "05",
    Question: "Where is Casper Cloaking Film most commonly used?",
    Answer:
      "It’s ideal for: Meeting rooms and conference rooms, Offices and workstations, Healthcare facilities for patient privacy, and Financial institutions for securing sensitive data",
  },
  {
    id: "06",
    Question: "Can Casper Cloaking Film be installed on existing glass walls?",
    Answer:
      "Yes, the film can be retrofitted to existing glass walls, making it a convenient solution for upgrading privacy without replacing glass panels.",
  },
  {
    id: "07",
    Question: "How durable is Casper Cloaking Film?",
    Answer:
      "The film is highly durable and designed to withstand daily wear and tear. With proper care and cleaning, it will provide long-lasting performance.",
  },
  {
    id: "08",
    Question:
      "How do I maintain and clean the glass with Casper Cloaking Film?",
    Answer:
      "Cleaning is simple! Use a soft cloth and a mild glass cleaner. Avoid abrasive cleaners or tools that could scratch the film.",
  },
  {
    id: "09",
    Question: "Does Casper Cloaking Film provide privacy at night?",
    Answer:
      "The film works by blocking the light emitted from LED and LCD screens, so its privacy functionality is consistent regardless of the time of day.",
  },
  {
    id: "10",
    Question: "How can I request a sample or schedule an installation?",
    Answer:
      "You can contact us via phone or email to request a sample or schedule a consultation. Our team will guide you through the options and provide tailored solutions for your space.",
  },
];

export default function CloakingFAQS() {
  return (
    <div className="bg-grey xxl:py-44 xl:py-36 lg:py-24 md:py-16 sm:py-12">
      <div className="xxl:w-7/12 xl:w-7/12 lg:w-8/12 md:w-10/12 sm:w-11/12 mx-auto">
        <h3 className="text-center font-bold text-secondary xxl:text-6xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl lg:mb-6">
          Cloaking Questions & Answers
        </h3>
        <Accordion
          classNames={{
            base: "gap-4",
            item: {
              base: "border-divider data-[open=true]:border-divider", // This ensures consistent border color
              content: "font-semibold text-secondary", // Removed Tailwind sizes
              title: "font-bold", // Removed Tailwind sizes
            },
          }}
          itemClasses={{
            base: "border-b font-semibold border-faq-border antialiased", // This controls the separator line
            trigger:
              "px-3 py-0 text-secondary rounded-lg h-16 flex items-center", // Removed Tailwind sizes
            indicator: "font-bold text-2xl",
            content: "text-secondary font-medium px-2", // Removed Tailwind sizes
          }}
        >
          {FAQ.map((faq) => (
            <AccordionItem
              key={faq.id}
              aria-label={faq.Question}
              title={
                <div className="lg:text-lg md:text-lg sm:text-sm lg:font-semibold text-secondary">
                  {faq.Question}
                </div>
              }
            >
              <div className="lg:text-base md:text-base sm:text-sm font-medium text-secondary pb-6">
                {faq.Answer}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
