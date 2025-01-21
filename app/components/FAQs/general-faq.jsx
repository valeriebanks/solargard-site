import { Accordion, AccordionItem } from "@nextui-org/react";

const FAQ = [
  {
    id: "01",
    Question: "What services do you offer?",
    Answer:
      "We specialise in a variety of innovative glass and surface solutions, including solar films, privacy films, anti-heat and anti-glare films, safety films, vehicle tinting, car wrapping, CoverStyl' self-adhesive vinyl, and manifestations & graphics.",
  },
  {
    id: "02",
    Question: "How do I book an appointment for car tinting or wrapping?",
    Answer:
      "You can easily book an appointment by giving us a call or reaching out via email. We’ll collect important details such as your vehicle’s make and model, and whether you want tinting for the front, rear, or all windows.",
  },
  {
    id: "03",
    Question: "What are the benefits of solar films?",
    Answer:
      "Solar films help reduce heat, glare, and UV exposure in your home, office, or vehicle. They keep interiors cooler, reduce energy costs, protect furnishings from fading, and offer a more comfortable environment.",
  },
  {
    id: "04",
    Question: "How long does it take to install window films or vinyl wraps?",
    Answer:
      "Installation times vary depending on the size of the project. Vehicle tinting typically takes a few hours, while larger surface projects like CoverStyl' applications or building window films may take a day or two. We strive to complete installations quickly and efficiently with minimal disruption.",
  },
  {
    id: "05",
    Question: "Are your films and wraps eco-friendly?",
    Answer:
      "Yes, many of our products, including CoverStyl', are eco-friendly. They allow you to renovate existing surfaces without replacing them, reducing waste and the environmental impact of traditional refurbishment.",
  },
  {
    id: "06",
    Question: "Can your privacy films completely block visibility?",
    Answer:
      "Our privacy films are designed to obscure visibility from outside while maintaining natural light flow. We offer a range of options from partial to complete privacy, depending on your needs.",
  },
  {
    id: "07",
    Question: "Do you offer custom designs for glass graphics or wraps?",
    Answer:
      "Yes! We provide fully customisable solutions for manifestations & graphics, as well as car wraps. Our team will work with you to create a design that matches your vision and brand.",
  },
  {
    id: "08",
    Question: "What areas do you serve?",
    Answer:
      "We serve a wide range of areas across Ireland, including residential, commercial, and industrial projects. Contact us to confirm service availability in your location.",
  },
];

export default function GeneralFaqs() {
  return (
    <div className="bg-grey xxl:py-44 xl:py-36 lg:py-24 md:py-16 sm:py-12">
      <div className="xxl:w-7/12 xl:w-7/12 lg:w-8/12 md:w-10/12 sm:w-11/12 mx-auto">
        <h3 className="text-center font-bold text-secondary xxl:text-6xl xl:text-5xl lg:text-5xl md:text-3xl sm:text-2xl lg:mb-6">
          Questions & Answers
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
