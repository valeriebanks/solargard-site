import { Accordion, AccordionItem } from "@nextui-org/react";

const CoverStylFAQ = [
  {
    id: "01",
    question: "What is CoverStyl'?",
    anwser:
      "CoverStyl' is a self-adhesive vinyl solution designed to transform walls, furniture, and other surfaces with over 500 stylish finishes, including wood, marble, and metallic textures.",
  },
  {
    id: "02",
    question:
      "How does CoverStyl' compare to traditional refurbishment methods?",
    anwser:
      "CoverStyl' is more cost-effective and time-efficient than traditional refurbishments, requiring less downtime and offering a wide range of high-quality finishes without the need for extensive labor or materials.",
  },
  {
    id: "03",
    question: "Can CoverStyl' be applied to any surface?",
    anwser:
      "CoverStyl' is highly durable, resistant to scratches, stains, and UV rays, making it an ideal choice for both residential and commercial applications.",
  },
  {
    id: "04",
    question: "How durable is CoverStyl'?",
    anwser:
      "Safety films can be applied to most glass surfaces, including windows, doors, and glass partitions. Our experts will assess your needs to ensure compatibility with your existing glass.",
  },
  {
    id: "05",
    question: "Is CoverStyl' environmentally friendly?",
    anwser:
      "Yes, CoverStyl' is an eco-friendly alternative to traditional refurbishment, as it reduces waste, requires fewer resources, and extends the life of existing surfaces.",
  },
  {
    id: "06",
    question: "How long does CoverStyl' last?",
    anwser:
      "With proper care, CoverStyl' can last for over 10 years, maintaining its appearance and durability throughout.",
  },
  {
    id: "07",
    question: "Can CoverStyl' be removed?",
    anwser:
      "Yes, CoverStyl' can be removed without damaging the underlying surface, making it an excellent option for temporary or long-term projects.",
  },
  {
    id: "08",
    question: "Is CoverStyl' suitable for high-traffic areas?",
    anwser:
      "Absolutely! CoverStyl' is designed to withstand high traffic and heavy usage, making it perfect for commercial spaces like offices, hotels, and retail stores.",
  },
  {
    id: "09",
    question: "How is CoverStyl' applied?",
    anwser:
      "CoverStyl' is professionally applied using a specialised technique to ensure a flawless, bubble-free finish. This process includes surface preparation, precise cutting, and adhesive application.",
  },
  {
    id: "10",
    question: "Can I clean CoverStyl' surfaces?",
    anwser:
      "Yes, CoverStyl' surfaces are easy to clean. Use a soft cloth and mild cleaning solution to maintain their appearance and durability.",
  },
  {
    id: "11",
    question: "Can I use CoverStyl' in wet or humid areas like bathrooms?",
    anwser:
      "Yes, CoverStyl' is water-resistant, making it suitable for wet or humid environments. However, proper installation is key to ensure longevity in such areas.",
  },
  {
    id: "12",
    question: "Can I see the styles before deciding?",
    anwser:
      "Yes, you can browse the extensive range of CoverStyl' finishes on our partner's website or request a consultation to see samples and discuss your options.",
  },
];

export default function CoverStylFAQs() {
  return (
    <div className="bg-grey py-40">
      <div className="xxl:w-7/12 xl:w-7/12 lg:w-8/12 md:w-10/12 sm:w-11/12 mx-auto">
        <h3 className="text-center font-bold xxl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl mb-6">
          CoverStyl&rsquo; Questions & Answers
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
          {CoverStylFAQ.map((faq) => (
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
