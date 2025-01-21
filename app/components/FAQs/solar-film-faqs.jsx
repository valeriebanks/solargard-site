import { Accordion, AccordionItem } from "@nextui-org/react";

const SolarFilmsFAQ = [
  {
    id: "01",
    question: "What are solar films, and how do they work?",
    answer:
      "Solar films are thin, multi-layered coatings applied to windows to manage sunlight and heat. They work by reflecting or absorbing solar energy, helping to reduce heat, glare, and UV exposure indoors. This creates a more comfortable environment and helps protect interiors from sun damage.",
  },
  {
    id: "02",
    question: "Can solar films help reduce my energy bills?",
    answer:
      "Yes, solar films can significantly lower energy costs. By blocking a large portion of heat from the sun, they reduce the need for air conditioning, especially during warmer months. This helps to keep interiors cooler, ultimately lowering energy consumption and utility bills.",
  },
  {
    id: "03",
    question: "Will solar films darken my windows or obstruct the view?",
    answer:
      "Solar films are designed to reduce glare without obstructing visibility. Depending on the type chosen, some films may add a slight tint, but they generally allow natural light to flow through and maintain clear views.",
  },
  {
    id: "04",
    question: "Are solar films effective in all seasons?",
    question: "How long do solar films last?",
    answer:
      "Solar films are highly durable and can last anywhere from 10 to 20 years, depending on the product quality, installation, and exposure conditions. They are designed for long-lasting performance, with many films also backed by warranties.",
  },
  {
    id: "05",
    question: "Can solar films be applied to any type of window?",
    answer:
      "Solar films can be applied to most types of windows, including single-pane, double-pane, and tempered glass. However, certain low-E or coated glass types may require specialized films. A professional assessment is recommended to ensure compatibility and performance.",
  },
  {
    id: "06",
    question: "Are solar films easy to clean and maintain?",
    answer:
      "Yes, solar films are very low-maintenance. They can be cleaned using a soft cloth, mild soap, and water. It’s best to avoid abrasive cleaning tools or harsh chemicals to protect the film’s surface and ensure longevity.",
  },
  {
    id: "07",
    question: "Will solar films affect the appearance of my building?",
    answer:
      "Solar films can enhance the appearance of your building by giving windows a uniform, polished look. Most films are available in clear or tinted options, allowing you to choose a style that best complements your building’s design without compromising visibility.",
  },
  {
    id: "08",
    question: "Are solar films environmentally friendly?",
    answer:
      "Yes, solar films are an eco-friendly solution. By reducing the need for air conditioning and heating, they help lower energy consumption, which reduces your carbon footprint. Additionally, solar films protect interior furnishings from sun damage, extending their lifespan and reducing waste.",
  },
  {
    id: "09",
    question: "How do I know which solar film is right for me?",
    answer:
      "The right solar film depends on your needs—whether it's reducing heat, glare, UV rays, or enhancing privacy. Our experts can assess your space, discuss your goals, and recommend the most suitable options to help you achieve your desired results effectively.",
  },
];

export default function SolarFilmsFAQs() {
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
            Solar Film Questions & Answers
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
            {SolarFilmsFAQ.map((faq) => (
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
