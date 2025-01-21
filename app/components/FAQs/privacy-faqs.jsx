import { Accordion, AccordionItem } from "@nextui-org/react";

const PrivacyFAQ = [
  {
    id: "01",
    question:
      "What is the difference between frosted films and solar films for privacy?",
    anwser:
      "Frosted films provide 24/7 privacy by obscuring visibility on both sides of the glass while still allowing natural light to pass through. Solar films, on the other hand, offer privacy only during the daytime by creating a mirrored effect when viewed from the outside. At night, their privacy effect diminishes when indoor lights are on.",
  },
  {
    id: "02",
    question: "Can solar privacy films work at night?",
    anwser:
      "Solar privacy films are designed to reflect light, which makes them effective for privacy during the day. However, they do not provide privacy at night when indoor lights are on, as the reflective properties are reversed.",
  },
  {
    id: "03",
    question: "Are frosted films suitable for external windows?",
    anwser:
      "Yes, frosted films can be used on external windows, but they are better suited for areas where permanent, all-day privacy is required, such as bathrooms or offices. They do not allow outward visibility, unlike solar films.",
  },
  {
    id: "04",
    question: "Do privacy films block natural light?",
    anwser:
      "No, both frosted and solar privacy films allow natural light to enter your space. Frosted films diffuse light for a softer ambiance, while solar films reflect sunlight while maintaining brightness indoors..",
  },

  {
    id: "05",
    question: "Can I customise the look of frosted films?",
    anwser:
      "Yes, frosted films can be customized with patterns, designs, or logos to add a decorative or branded touch to your space.",
  },
  {
    id: "06",
    question: "Are privacy films easy to maintain?",
    anwser:
      "Yes, privacy films are low-maintenance. They can be cleaned with non-abrasive cleaning solutions and a soft cloth. Regular cleaning helps maintain their appearance and effectiveness.",
  },
  {
    id: "07",
    question: "Are solar privacy films energy-efficient?",
    anwser:
      "Absolutely! Solar privacy films not only enhance daytime privacy but also reduce heat, glare, and UV exposure, helping to lower energy costs by keeping interiors cooler.",
  },
  {
    id: "08",
    question: "How long do privacy films last?",
    anwser:
      "Privacy films are highly durable and can last for several years, depending on the type and quality of the film as well as the conditions of use.",
  },
  {
    id: "09",
    question: "Can privacy films be removed or replaced?",
    anwser:
      "Yes, privacy films can be removed without damaging the glass. This makes them a flexible solution if you want to change or upgrade the film in the future.",
  },
  {
    id: "10",
    question: "How do I decide which privacy film is best for my needs?",
    anwser:
      "Consider your privacy requirements, lighting preferences, and aesthetic goals. Frosted films are ideal for all-day privacy, while solar films are great for daytime use with added benefits like heat and glare reduction. Our experts can help you choose the best option for your space.",
  },
];

export default function PrivacyFAQs() {
  return (
    <div>
      <div className="bg-grey py-40">
        <div className="xxl:w-7/12 xl:w-7/12 lg:w-8/12 md:w-10/12 sm:w-11/12 mx-auto">
          <h3 className="text-center font-bold xxl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl mb-6">
            Privacy Films Questions & Answers
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
            {PrivacyFAQ.map((faq) => (
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
    </div>
  );
}
