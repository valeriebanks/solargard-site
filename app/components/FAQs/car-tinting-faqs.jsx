import { Accordion, AccordionItem } from "@nextui-org/react";

const CarTintFAQ = [
  {
    id: "01",
    question: "Will tinting my windows help with heat reduction?",
    anwser:
      "Yes, window tinting significantly reduces heat inside your vehicle by blocking solar energy. Higher-quality tints like metalized or ceramic films offer superior heat rejection compared to basic dyed films.",
  },
  {
    id: "02",
    question: "How long does vehicle tinting take?",
    anwser:
      "The process typically takes 2 to 4 hours, depending on the size of the vehicle and the number of windows being tinted.",
  },
  {
    id: "03",
    question: "How long do I have to wait before rolling down my windows?",
    anwser:
      "You should wait at least 3 to 5 days to allow the tint to fully adhere to the glass. The drying time may vary depending on weather conditions",
  },
  {
    id: "04",
    question: "Will there be bubbles or haze after tinting?",
    anwser:
      "It is normal to see some bubbles or haze immediately after installation due to water under the film. These will usually disappear as the film cures, which can take a few days to a couple of weeks.",
  },
  {
    id: "05",
    question: "Does window tinting affect my rear defroster?",
    anwser:
      "No, professionally installed tint will not damage or interfere with your rear defroster. High-quality films are designed to work seamlessly with defrosters.",
  },
  {
    id: "06",
    question: "Can window tinting damage my windows?",
    anwser:
      "No, window tinting does not damage your windows when installed by professionals. However, poor-quality films or incorrect installation can lead to issues.",
  },
  {
    id: "07",
    question: "Is vehicle window tinting legal?",
    anwser:
      "Yes, but legal limits on tint darkness (Visible Light Transmission or VLT) vary by state or country. Be sure to check local regulations to ensure compliance.",
  },
  {
    id: "08",
    question: "How long will the tint warranty?",
    anwser:
      "The lifespan depends on the type of film: Glue Dyed: 2 years, HP Metalized: 15 years, Nano Ceramic: Lifetime (with proper care)",
  },
  {
    id: "09",
    question: "How do I clean my tinted windows?",
    anwser:
      "Use a soft microfiber cloth and a mild, ammonia-free cleaner. Avoid abrasive materials or chemicals that can damage the film.",
  },
];

export default function CarTintingFAQs() {
  return (
    <div>
      <div className="bg-grey w-full xxl:py-56 xl:py-40 lg:py-24 sm:py-12">
        <div className="xxl:w-8/12 xl:w-8/12 lg:w-8/12 md:w-10/12 sm:w-11/12 mx-auto">
          <h3 className="text-center font-bold text-3xl mb-6">
            Vehicle Tinting Questions & Answers
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
            {CarTintFAQ.map((faq) => (
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
