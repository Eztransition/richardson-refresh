export interface Faq {
  question: string;
  answer: string;
}

export const getLocationFaqs = (location: string): Faq[] => [
  {
    question: `How fast can you deliver in ${location}?`,
    answer: `We offer fast delivery throughout ${location}, TX! In most cases, we can deliver your dumpster within 24–48 hours of booking. Same-day delivery may be available depending on schedule—contact us to check availability for your ${location} address.`,
  },
  {
    question: `What size dumpster do I need for a ${location} home cleanout?`,
    answer: `For a typical ${location} home cleanout, a 10-yard or 15-yard dumpster works well. If you're clearing out an entire house or have bulky furniture, consider the 15-yard or 20-yard option. Our team can help you choose the right size based on your specific project.`,
  },
  {
    question: "Can you place the dumpster in my driveway?",
    answer: `Yes, we regularly place dumpsters in driveways throughout ${location}. The dumpster must be placed on concrete, asphalt, or gravel—not on grass or soft surfaces. Make sure you have adequate space (typically 60+ feet of clearance for the delivery truck) and no overhead obstructions.`,
  },
  {
    question: "How long is the rental and how do extra days work?",
    answer:
      "Our rates include up to 7 days, which includes both the drop-off day and pickup day. Need more time? Extra days are just $20/day, subject to availability. Contact us at least one day before your scheduled pickup to extend.",
  },
  {
    question: "What items are prohibited?",
    answer:
      "For safety and environmental reasons, we cannot accept hazardous materials including: chemicals, paints and solvents, propane tanks, oils, batteries, tires, asbestos, and any liquids. Visit our Acceptable & Prohibited Items page for a complete list.",
  },
  {
    question: "Do I need to be home for delivery?",
    answer: `No, you don't need to be present for delivery as long as you've provided clear instructions for placement. Just make sure the delivery area is accessible and free of obstacles. We'll text or call to confirm once your ${location} delivery is complete.`,
  },
];
