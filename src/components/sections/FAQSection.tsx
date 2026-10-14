import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getLocationFaqs } from "@/lib/faqs";

interface FAQSectionProps {
  location?: string;
}

const FAQSection = ({ location = "Richardson" }: FAQSectionProps) => {
  const faqs = getLocationFaqs(location);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              {location}, TX Dumpster Rental FAQs
            </h2>
            <p className="text-lg text-muted-foreground">
              Got questions about renting a dumpster in {location}? We've got answers.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card shadow-xs data-[state=open]:shadow-card animate-fade-in overflow-hidden"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
