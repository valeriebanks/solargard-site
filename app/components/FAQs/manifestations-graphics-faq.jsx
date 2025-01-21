import { Accordion, AccordionItem } from "@nextui-org/react";

const ManifestationsGraphicsFAQ = [
  {
    id: "01",
    question: "What are glass manifestations?",
    anwser:
      "Glass manifestations are visual designs or patterns applied to glass surfaces to ensure visibility and compliance with safety regulations, preventing accidental collisions while enhancing aesthetics.",
  },
  {
    id: "02",
    question: "Are glass manifestations required by law?",
    anwser:
      "In many regions, safety regulations mandate the use of glass manifestations on large glass panels in commercial spaces to make them more visible and reduce the risk of accidents.",
  },
  {
    id: "03",
    question: "What types of designs are available for manifestations?",
    anwser:
      "We offer a variety of designs, including geometric patterns, frosted bands, logos, and custom graphics tailored to your brand or aesthetic preferences.",
  },
  {
    id: "04",
    question: "Can manifestations be customised to match my branding?",
    anwser:
      "Yes, we can create bespoke designs, including logos, slogans, or unique patterns that align with your brand identity and complement your space.",
  },
  {
    id: "05",
    question: "Do glass manifestations block light?",
    anwser:
      "No, most manifestations, especially frosted or translucent designs, allow natural light to pass through while providing privacy and visibility.",
  },
  {
    id: "06",
    question: "Are manifestations permanent?",
    anwser:
      "Glass manifestations can be permanent or temporary, depending on your needs. They are easily removable and replaceable without damaging the glass.",
  },
  {
    id: "07",
    question: "Can CoverStyl' be removed?",
    anwser:
      "Yes, CoverStyl' can be removed without damaging the underlying surface, making it an excellent option for temporary or long-term projects.",
  },
  {
    id: "08",
    question: "What are glass graphics?",
    anwser:
      "Glass graphics are decorative or functional designs applied to glass surfaces, often used for branding, advertising, or aesthetic purposes in both residential and commercial spaces.",
  },
  {
    id: "09",
    question: "Can graphics be applied to all types of glass?",
    anwser:
      "CoverStyl' is professionally applied using a specialised technique to ensure a flawless, bubble-free finish. This process includes surface preparation, precise cutting, and adhesive application.",
  },
  {
    id: "10",
    question: "How durable are manifestations and graphics?",
    anwser:
      "High-quality materials ensure that manifestations and graphics are durable, resistant to scratches, and maintain their appearance for years.",
  },
  {
    id: "11",
    question: "Are glass manifestations and graphics easy to clean?",
    anwser:
      "Yes, they can be cleaned with a soft cloth and non-abrasive cleaning products. Proper care will keep them looking their best.",
  },
  {
    id: "12",
    question: "Are glass manifestations suitable for residential spaces?",
    anwser:
      "Yes, they are an excellent choice for residential spaces, offering privacy, safety, and decorative appeal for windows, shower screens, and glass doors.",
  },
];

export default function GraphicsManifestationsFAQs() {
  return (
    <div className="bg-grey lg:py-20">
      <div className="xxl:w-7/12 xl:w-7/12 lg:w-8/12 md:w-10/12 sm:w-11/12 mx-auto">
        <h3 className="text-center font-bold xxl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl mb-6">
          Manifestations & Graphics Questions & Answers
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
          {ManifestationsGraphicsFAQ.map((faq) => (
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
