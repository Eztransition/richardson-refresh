import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How fast can you deliver in Richardson?",
    answer:
      "We offer fast delivery throughout Richardson, TX! In most cases, we can deliver your dumpster within 24–48 hours of booking. Same-day delivery may be available depending on schedule—contact us to check availability for your Richardson address.",
  },
  {
    question: "What size dumpster do I need for a Richardson home cleanout?",
    answer:
      "For a typical Richardson home cleanout, a 10-yard or 15-yard dumpster works well. If you're clearing out an entire house or have bulky furniture, consider the 15-yard or 20-yard option. Our team can help you choose the right size based on your specific project.",
  },
  {
    question: "Can you place the dumpster in my driveway?",
    answer:
      "Yes, we regularly place dumpsters in driveways throughout Richardson. The dumpster must be placed on concrete, asphalt, or gravel—not on grass or soft surfaces. Make sure you have adequate space (typically 60+ feet of clearance for the delivery truck) and no overhead obstructions.",
  },
  {
    question: "How long is the rental and how do extra days work?",
    answer:
      "Our 10-yard and 15-yard dumpsters include 1–4 day rentals, while the 20-yard includes 1–5 days. Need more time? Extra days are just $20/day, subject to availability. Contact us at least one day before your scheduled pickup to extend.",
  },
  {
    question: "What items are prohibited?",
    answer:
      "For safety and environmental reasons, we cannot accept hazardous materials including: chemicals, paints and solvents, propane tanks, oils, batteries, tires, asbestos, and any liquids. Visit our Acceptable & Prohibited Items page for a complete list.",
  },
  {
    question: "Do I need to be home for delivery?",
    answer:
      "No, you don't need to be present for delivery as long as you've provided clear instructions for placement. Just make sure the delivery area is accessible and free of obstacles. We'll text or call to confirm once your Richardson delivery is complete.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Richardson, TX Dumpster Rental FAQs
            </h2>
            <p className="text-lg text-muted-foreground">
              Got questions about renting a dumpster in Richardson? We've got answers.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card shadow-sm data-[state=open]:shadow-card animate-fade-in overflow-hidden"
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