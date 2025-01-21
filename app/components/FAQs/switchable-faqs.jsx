"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

const SwitchableFAQ = [
  {
    id: "01",
    question: "What is switchable glass?",
    answer:
      "Switchable glass, also known as smart glass or privacy glass, is a type of glass that can change its transparency from clear to frosted (opaque) with the flip of a switch or via remote control. This technology allows for on-demand privacy and versatile functionality.",
  },
  {
    id: "02",
    question: "How does switchable glass work?",
    answer:
      "Switchable glass operates using liquid crystal technology embedded within the glass. When an electrical current is applied, the crystals align to make the glass transparent. When the current is turned off, the crystals scatter, causing the glass to become frosted and opaque.",
  },
  {
    id: "03",
    question: "Can switchable glass be installed in existing windows?",
    answer:
      "YYes, switchable glass contributes to energy efficiency by controlling light and heat transmission. It reduces the need for blinds or curtains, minimises glare, and helps regulate indoor temperatures, potentially lowering heating and cooling costs.",
  },
  {
    id: "04",
    question: "Is switchable glass energy efficient?",
    answer:
      "Yes, switchable glass contributes to energy efficiency by controlling light and heat transmission. It reduces the need for blinds or curtains, minimizes glare, and helps regulate indoor temperatures, potentially lowering heating and cooling costs.",
  },
  {
    id: "05",
    question:
      "Can switchable glass be used in bathrooms or humid environments?",
    answer:
      "Yes, switchable glass is ideal for bathrooms and other humid environments. It is moisture-resistant and provides an elegant privacy solution for showers, partitions, and windows.",
  },
  {
    id: "06",
    question: "Is switchable glass easy to clean?",
    answer:
      "Yes, switchable glass is easy to maintain. It can be cleaned with a soft cloth and non-abrasive glass cleaner, just like regular glass. Its smooth surface also minimizes dust and dirt buildup.",
  },
  {
    id: "07",
    question: "How much does switchable glass cost?",
    answer:
      "The cost of switchable glass depends on factors such as size, type, and installation requirements. While it is an investment, its benefits in functionality, energy efficiency, and aesthetics often outweigh the initial costs.",
  },
  {
    id: "08",
    question: "What happens if the power goes out?",
    answer:
      "In most cases, switchable glass defaults to its frosted (opaque) state when the power is off. However, customized configurations are available to suit specific needs.",
  },
  {
    id: "09",
    question: "What are the power requirements for switchable glass?",
    answer:
      "Switchable glass uses very low power—typically less than 5 watts per square meter—making it an energy-efficient option for modern spaces.",
  },
];

export default function SwitchableFAQs() {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-base",
    trigger: "px-2 py-0 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2",
  };
  return (
    <div>
      <div className="w-full bg-grey py-40 antialiased">
        <div className="xxl:w-7/12 xl:w-7/12 lg:w-8/12 md:w-10/12 sm:w-11/12 mx-auto">
          <h3 className="text-center font-bold xxl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl mb-6">
            Switchable Glass Questions & Answers
          </h3>
          <Accordion
            classNames={{
              base: "gap-4",
              item: {
                base: "border-divider data-[open=true]:border-divider", // This ensures consistent border color
                content: "font-semibold text-secondary",
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
            {SwitchableFAQ.map((faq) => (
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
                  {faq.answer}
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
