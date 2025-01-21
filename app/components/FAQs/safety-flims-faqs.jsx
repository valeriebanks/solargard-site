import { Accordion, AccordionItem } from "@nextui-org/react";

const SafetyFAQ = [
  {
    id: "01",
    question: "How do safety films work?",
    anwser:
      "Safety films are applied to glass surfaces to create a tough, tear-resistant layer. In the event of an impact, the film holds shattered glass together, reducing the risk of injury and damage.",
  },
  {
    id: "02",
    question: "Can safety films prevent break-ins?",
    anwser:
      "While safety films cannot completely prevent break-ins, they make it significantly harder for intruders to shatter and penetrate glass, buying valuable time and acting as a strong deterrent.",
  },
  {
    id: "03",
    question: "Can safety films protect against graffiti or vandalism?",
    anwser:
      "Yes, anti-graffiti films are designed to protect glass from scratches, paint, and other types of vandalism. They can be easily removed and replaced, saving you the cost of replacing the glass itself.",
  },
  {
    id: "04",
    question: "Are safety films suitable for all types of glass?",
    anwser:
      "Safety films can be applied to most glass surfaces, including windows, doors, and glass partitions. Our experts will assess your needs to ensure compatibility with your existing glass.",
  },
  {
    id: "05",
    question: "How long do safety films last?",
    anwser:
      "High-quality safety films can last 10 to 15 years or more, depending on the environment and maintenance.",
  },
  {
    id: "06",
    question:
      "Can safety films be applied to curved or irregularly shaped glass?",
    anwser:
      "Yes, safety films are flexible and can be applied to many types of glass surfaces, including curved or uniquely shaped windows.",
  },
  {
    id: "07",
    question: "How are safety films installed?",
    anwser:
      "Safety films are professionally applied to the interior surface of your glass. The process involves cleaning the glass, precisely cutting the film, and using a special adhesive to bond the film to the surface.",
  },
];

export default function SafetyFAQs() {
  return (
    <div className="bg-grey w-full xxl:py-56 xl:py-40 lg:py-24 sm:py-12">
      <div className="xxl:w-7/12 xl:w-7/12 lg:w-8/12 md:w-10/12 sm:w-11/12 mx-auto">
        <h3 className="text-center font-bold xxl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl mb-6">
          Safety Films Questions & Answers
        </h3>
        <Accordion
          classNames={{
            base: "gap-4",
            item: {
              base: "border-divider data-[open=true]:border-divider", // This ensures consistent border color
              content: "text-xl font-bold text-secondary",
            },
          }}
          itemClasses={{
            base: "border-b font-semibold border-faq-border antialiased", // This controls the separator line
            trigger:
              "px-2 py-0 text-2xl text-secondary rounded-lg h-16 flex items-center",
            indicator: "font-bold",
            content: "text-sm lg:w-11/12 pb-6 font-medium px-2",
          }}
        >
          {SafetyFAQ.map((faq) => (
            <AccordionItem
              key={faq.id}
              aria-label={faq.question}
              title={
                <div className="lg:text-lg md:text-lg sm:text-sm lg:font-semibold text-secondary">
                  {faq.question}
                </div>
              }
            >
              <div className="lg:text-base md:text-base sm:text-sm font-medium text-secondary pb-6">
                {faq.anwser}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
