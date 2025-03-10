"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

const FAQ = [
  {
    id: "01",
    Question: "What is vehicle wrapping?",
    Answer:
      "Vehicle wrapping is the process of applying a high-quality vinyl film to the exterior of a vehicle to change its appearance or add branding. It can be a full wrap or a partial wrap, depending on the design and coverage needed.",
  },
  {
    id: "02",
    Question: "How long does a vehicle wrap last?",
    Answer:
      "A professionally installed vehicle wrap can last between 5 to 7 years, depending on factors like maintenance, exposure to the elements, and the quality of the wrap material used.",
  },
  {
    id: "03",
    Question: "Will wrapping my car damage the paint?",
    Answer:
      "No, a vehicle wrap actually protects your car’s paint from UV rays, minor scratches, and environmental damage. When installed and removed properly, it does not cause any harm to the original paintwork.",
  },
  {
    id: "04",
    Question: "Can I wash my wrapped vehicle?",
    Answer:
      "Yes, but hand washing is recommended to prolong the lifespan of the wrap. Avoid using high-pressure washers, abrasive brushes, or strong chemicals, as they may damage the vinyl.",
  },
  {
    id: "05",
    Question: "Can a vehicle wrap be removed?",
    Answer:
      "Yes, vehicle wraps can be removed safely by professionals without causing damage to the original paint, as long as the paint was in good condition before installation.",
  },
  {
    id: "06",
    Question: "How much does a vehicle wrap cost?",
    Answer:
      "The cost of a vehicle wrap depends on factors such as the size of the vehicle, the complexity of the design, and whether it is a full or partial wrap. Contact us for a quote tailored to your needs.",
  },
  {
    id: "07",
    Question: "Can I choose any colour or design for my wrap?",
    Answer:
      "Yes! Vehicle wraps are available in a wide variety of colors, textures, and finishes, including matte, gloss, satin, metallic, carbon fiber, and custom printed graphics.",
  },
  {
    id: "08",
    Question: "Does a wrap provide paint protection?",
    Answer:
      "Yes, a vehicle wrap acts as a protective layer, shielding the original paint from sun damage, minor scratches, road debris, and weather conditions.",
  },
  {
    id: "09",
    Question:
      "Can I wrap specific parts of my vehicle instead of the whole car?",
    Answer:
      "Absolutely! Many customers choose to wrap only certain areas like the roof, hood, mirrors, or trim to achieve a unique look.",
  },
  {
    id: "10",
    Question: "Does the wrap fade or peel over time?",
    Answer:
      "With proper care and maintenance, a high-quality wrap should not fade or peel prematurely. However, prolonged exposure to harsh sunlight and extreme weather conditions can impact its longevity.",
  },
  {
    id: "11",
    Question: "How long does it take to wrap a vehicle?",
    Answer:
      "The installation process typically takes between 1 to 3 days, depending on the complexity of the wrap and the condition of the vehicle.",
  },
  {
    id: "12",
    Question: "Can I apply graphics or branding to my vehicle wrap?",
    Answer:
      "Yes! Custom graphics, business logos, and promotional messages can be printed on wraps, making them a great option for commercial branding and advertising.",
  },
  {
    id: "13",
    Question: "What happens if my wrap gets damaged?",
    Answer:
      "If a section of your wrap gets scratched or damaged, it can be replaced without needing to redo the entire wrap.",
  },
  {
    id: "14",
    Question: "How do I book a vehicle wrap appointment?",
    Answer:
      "You can contact us via phone or email to discuss your vehicle wrap needs and schedule an appointment.",
  },
];

export default function VehicleWrappingFAQS() {
  return (
    <div className="bg-grey xxl:py-44 xl:py-36 lg:py-24 md:py-16 sm:py-12">
      <div className="xxl:w-7/12 xl:w-7/12 lg:w-8/12 md:w-10/12 sm:w-11/12 mx-auto">
        <h3 className="text-center font-bold text-secondary xxl:text-6xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl lg:mb-6">
          Vehicle Wrapping Questions & Answers
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
