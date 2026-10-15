import { wpImage } from "@/lib/wp-images";

/**
 * Content for the general pages (About, Contact, FAQs, Gallery,
 * Acceptable & Prohibited Items, Privacy Policy), copied verbatim from the
 * public dallas-dumpster.com pages — including the source's own wording and typos.
 */
const SITE = "https://richardson-revamp-joy.lovable.app";

export const pageUrl = (path: string) => `${SITE}${path}`;

export function pageHead(path: string, title: string, description: string) {
  const url = pageUrl(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const aboutPage = {
  seo: {
    title: "About Us | Dallas Dumpster Rentals",
    description:
      "Dallas Dumpster Rentals is a family-owned and operated business providing high quality roll off dumpster rentals at competitive prices in Dallas, TX and surrounding areas.",
  },
  heading: "About us",
  heroImage: wpImage("about-hero.jpg"),
  whyBackgroundImage: wpImage("about-why-background.jpg"),
  paragraphs: [
    "Dallas Dumpster Rentals takes pride in providing high quality roll off dumpster rentals at competitive prices. Whether you own a home, run a business, or are directing a construction site, we have the debris hauling containers to make your job easier.we are a family-owned and operated business, proudly serving our community with dependable, affordable and hassle-free dumpster rental.",
    "Our team is dedicated to providing timely and efficient service, ensuring your project, big or small, progresses smoothly with the support of our top-quality dumpsters. Trust us to meet your needs with professionalism and expert care.We are dedicated to providing the best rolloff dumpster rental in Dallas,TX and Surrounding areas.We offer professional and reliable dumpster rental services.Our aim is to offer a five-star, best-in-class customer service experience, whether this is your first dumpster rental or you rent dumpsters every week! We are committed to making the process of renting a dumpster easy, affordable, hassle-free.",
  ],
  image: wpImage("20260316_093332-768x842.jpg"),
  eyebrow: "Locally Owned Reliable Service",
  whyHeading: "Why Choose Dallas Dumpster Rentals",
  why: [
    {
      title: "Reliable Rental Service​",
      text: "Dallas Dumpster rental have dumpster rentals of all sizes to handle your projects no matter how big or small. request quote or call today to get started.",
    },
    {
      title: "Affordable Rental Rates",
      text: "We strive to make renting a dumpster cost-effective and offer competitive rental rates. With complete pick up and drop off charges, we make cleaning up your projects simpler than ever.",
    },
    {
      title: "Flexible Rental Periods",
      text: "Dallas Dumpster rental offer variable rental periods, making it easier than ever to rent a dumpster without worrying about running out of time.",
    },
  ],
};

export interface FaqItem {
  q: string;
  a: string[];
}

/** FAQs as shown on the About page of the source site. */
export const aboutFaqs: FaqItem[] = [
  {
    q: "What are unacceptable items?",
    a: [
      "Hazardous waste, dirt, industrial waste, chemical products, oil filters, herbicides & pesticides, radioactive material, solvents, paint, other flammable liquids, aerosol cans, propane tanks, motor oil, transmission oil/lubricating/hydraulic oil/ oil filters, contaminated oils (mixed with solvents, gasoline, etc.), antifreeze, petroleum contaminated soil/lead paint chips, tires, batteries, computers, monitors, televisions, microwaves, fluorescent tubes, railroad ties, medical waste, asbestos, animals, barrels, all liquids. Material must be level at the top of the container; nothing can be sticking out of the top. Tires are not allowed in the dumpster. If tires are found in the dumpster, you will be charged $25 per tire.If for any reason our trucks are unable to haul off a dumpster you rented due to it being severely overloaded with restricted items, ie. concrete, dirt or bricks, you will be responsible to empty the dumpster and will get additional charges",
    ],
  },
  {
    q: "Can I get an extra day with dumpster ?",
    a: [
      "Hopefully! Extra days are based on availability, so give us a call. Changes to pickup dates must be made at least one day prior to your scheduled pickup",
      "Our rates include a 1-3 day rental for the 10-yard, 1-4 days for the 15-yard and 1-5 days for the 20-yard, which INCLUDE the drop-off day and the pickup day. If you would like to rent the dumpsters longer than the included days, a daily rate of $20 will be added to your bill.",
    ],
  },
  {
    q: "How high can I load my dumpster?",
    a: [
      "When the dumpster is picked up, the driver will put a tarp over the load for containment during transport. We ask that you don’t load any material above the top rails of the dumpster that will interfere with the tarp. Try to keep the load flat and distribute the weight as evenly as possible. If for any reason the dumpster is improperly loaded and cannot be transported safely, you will have to unload the dumpster to a safe level before we can remove it. If your dumpster is overfilled, we have the right to refuse pickup and you may incur a minimum $135 trip charge.",
    ],
  },
  {
    q: "My dumpster is full but I have more junk, what do I do?",
    a: [
      "If the dumpster is full but more waste needs to be disposed of, contact us for an early pickup and discuss the possibility of schedule a pickup and swap dumpster, we will remove the full dumpster and drop off a new, empty dumpster.",
    ],
  },
  {
    q: "Can you place the dumpster in my yard?",
    a: [
      "No, all dumpsters must be placed on concrete, asphalt, or gravel. Placing a dumpster in a yard can result in our vehicle or the dumpster becoming stuck. This will result in recovery fees and damage to your yard.",
    ],
  },
  {
    q: "Does dumpster rental include disposable fees?",
    a: [
      "Yes.When you rent a dumpster, we’ll provide you with an upfront, all-inclusive rate that includes delivery, pickup, a covered weight limit and disposal costs.",
    ],
  },
  {
    q: "What weight limits are include in my dumpster rental?",
    a: [
      "10 Yard Dumpster 2,000lbs",
      "15 Yard Dumpster 2,000lbs",
      "20 Yard Dumpster 4,000lbs",
      "If you go over these weights, there will be",
      "$ 37 per 1,000 lbs in overages charged, after the alloted weight. These average fees coverage our costs for the extra weight",
    ],
  },
  {
    q: "what payment options do you take?",
    a: [
      "We take all major credit cards, VISA, Mastercard. Please have your card in front of you when placing or adding to your order.",
    ],
  },
];

export const faqPage = {
  seo: {
    title: "FAQs | Dallas Dumpster Rentals",
    description:
      "Answers about dumpster rental in Dallas: unacceptable items, extra days, loading limits, placement, disposal fees, weight limits and payment options.",
  },
  heading: "FAQs",
  sectionHeading: "Frequently Asked Questions",
  ctaHeading: "Easy Online Ordering 24/7",
};

export const faqs: FaqItem[] = [
  {
    q: "What are unacceptable items?",
    a: [
      "Hazardous waste, dirt, concrete, bricks blocks, masonry, stone tile industrial waste, chemical products, oil filters, herbicides & pesticides, radioactive material, solvents, paint, other flammable liquids, aerosol cans, propane tanks, motor oil, transmission oil/lubricating/hydraulic oil/ oil filters, contaminated oils (mixed with solvents, gasoline, etc.), antifreeze, petroleum contaminated soil/lead paint chips, tires, batteries, fluorescent tubes, railroad ties, medical waste, asbestos, animals, barrels, all liquids. Material must be level at the top of the container; nothing can be sticking out of the top. Tires are not allowed in the dumpster. If tires are found in the dumpster, you will be charged $25 per tire. If for any reason our trucks are unable to haul off a dumpster you rented due to it being severely overloaded with restricted items, ie. concrete, dirt or bricks, you will be responsible to empty the dumpster and will get additional charges",
    ],
  },
  {
    q: "Can I get an extra day with dumpster ?",
    a: [
      "Hopefully! Extra days are based on availability, so give us a call. Changes to pickup dates must be made at least one day prior to your scheduled pickup, our rates include the drop-off day and the pickup day. If you would like to rent the dumpsters longer than the included days, a daily rate of $ 20 will be added to your bill.",
    ],
  },
  {
    q: "How high can I load my dumpster?",
    a: [
      "When the dumpster is picked up, the driver will put a tarp over the load for containment during transport. We ask that you don’t load any material above the top rails of the dumpster that will interfere with the tarp. Try to keep the load flat and distribute the weight as evenly as possible. If for any reason the dumpster is improperly loaded and cannot be transported safely, you will have to unload the dumpster to a safe level before we can remove it. If your dumpster is overfilled, we have the right to refuse pickup and you may incur a minimum $135 trip charge.",
    ],
  },
  aboutFaqs[3]!,
  aboutFaqs[4]!,
  aboutFaqs[5]!,
  {
    q: "What weight limits are include in my dumpster rental?",
    a: [
      "10 Yard Dumpster 2,000 lbs",
      "15 Yard Dumpster 2,000 lbs",
      "20 Yard Dumpster 4,000 lbs",
      "If you go over these weights, there will be",
      "$ 37 per 1,000 lbs in overages charged, after the alloted weight. These average fees coverage our costs for the extra weight",
    ],
  },
  aboutFaqs[7]!,
];

export const itemsPage = {
  seo: {
    title: "Acceptable & Prohibited Items | Dallas Dumpster Rentals",
    description:
      "What you can and can’t throw into a Dallas Dumpster Rentals roll-off dumpster: the full list of acceptable and prohibited materials.",
  },
  heading: "Acceptable & Prohibited items",
  sectionHeading: "Acceptable & Prohibited Materials",
  intro: [
    "Dallas Dumpster Rentals abide by the local guidelines about what can and cannot be disposed due to environmental reasons. Disposing of hazardous material is strictly prohibited. Please see the list below of acceptable and non-acceptable materials.",
    "This guide will answer the question of what you can and can’t throw into a dumpster.We did our best to make the below list as comprehensive as possible, but if you still need help determining what is accepted in your area, contact Dallas Dumpster rentals we’ll be happy to help.",
  ],
  acceptable: [
    "Refrigerator Disposal", "Garbage Removal", "Mattress Disposal", "Foreclosure Clean Outs",
    "Yard Waste Removal", "Remodeling Materials", "Shingles", "Plaster", "Bath and Kitchen Tear Outs",
    "Trash Removal", "Appliance Removal", "Television Disposal & Recycling", "Furniture Removal",
    "E-Waste Disposal", "Hot Tub Disposal",
  ],
  prohibited: [
    "Hazardous waste", "Dirts, Soil, Rocks, Bricks, Masonry or Concrete", "Industrial waste",
    "Liquid,Paints or Chemical products", "Herbicides", "Pesticides",
    "Contaminated oils (mixed with solvents gasoline etc.)", "Animals", "Liquids of Any Kind",
    "Antifreeze", "Tires", "Batteries", "Medical waste", "Asbestos",
  ],
};

export const galleryPage = {
  seo: {
    title: "Gallery | Dallas Dumpster Rentals",
    description:
      "Browse photos of Dallas Dumpster Rentals roll-off dumpster bookings across Dallas and surrounding areas — 10, 15 and 20-yard dumpsters.",
  },
  heading: "Gallery",
  images: [
    "2026/06/20260312_120841_resized.jpg",
    "2026/06/20251211_114521_resized.jpg",
    "2026/06/20250926_125829_resized.jpg",
    "2026/06/20250721_095731_resized.jpg",
    "2026/06/20250706_110221_resized.jpg",
    "2026/06/20260527_100747.jpg",
    "2026/06/20260525_100736.jpg",
    "2026/06/20260525_085330.jpg",
    "2026/06/20260423_121452.jpg",
    "2026/06/20260329_082433_resized.jpg",
  ].map((p, i) => ({
    src: wpImage(p.split("/").pop()!),
    alt: `Dallas dumpster rental gallery image ${i + 1}`,
  })),
  subHeading: "Dumpster Rental Gallery (Dallas and surrounding areas)",
  intro:
    "Browse our gallery and see examples from our Dallas Dumpster Rentals bookings across Dallas and surrounding areas. If you’d like to reserve a dumpster like the ones shown here, you can book online or contact our team during business hours.",
  needHeading: "Need a dumpster for your project?",
  needText:
    "We offer 10, 15, and 20-yard roll-off dumpsters with published dimensions, rental times, and included weight limits on our site:",
  sizes: [
    "10-yard:(1–3 day rental; 2,000 lbs included)",
    "15-yard: (1–4 day rental; 2,000 lbs included)",
    "20-yard: (1–5 day rental; 4,000 lbs included)",
  ],
  checklistHeading: "Before delivery: a quick checklist",
  checklist: [
    "Choose a placement spot on concrete, asphalt, or gravel (not grass/yard).",
    "Load material evenly and keep everything below the top rails.",
    "Review restricted items—your FAQ lists hazardous/regulated materials as unacceptable.",
    "If you need more time, your site notes additional days at $20/day and extra weight at $37 per 1,000 lbs (where applicable).",
  ],
  areaHeading: "Our service area",
  areaText:
    "We serve Dallas and surrounding cities, including Richardson, Plano, Garland, Carrollton, Addison, and more (see the full list on the website).",
};

export const contactPage = {
  seo: {
    title: "Contact Us | Dallas Dumpster Rentals",
    description:
      "Contact Dallas Dumpster Rentals at (972) 645-6731 or Info@dallas-dumpster.com. Mon–Fri 8:00 AM–7:00 PM, Sat 9:00 AM–1:00 PM.",
  },
  heading: "Contact Us",
  infoHeading: "Contact Information",
  formHeading: "Have Questions? Get in Touch!",
  consentTransactional:
    "By checking this box, I consent to receive transactional messages related to my account, orders, or services I have requested. These messages may include appointment reminders, order confirmations, and account notifications among others. Message frequency may vary. Message & Data rates may apply.Reply HELP for help or STOP to opt-out.",
  consentMarketing:
    "By checking this box, I consent to receive marketing and promotional messages, including special offers, discounts, new product updates among others. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.",
  body: [
    "f you have a question about scheduling, delivery timing, or which dumpster size makes the most sense, reach out and we’ll help you get it set up. We serve Dallas and surrounding areas, and we can confirm availability and recommend the right roll-off based on what you’re throwing away and how long you need the container.",
    "The fastest way to reach us is by phone at 972-645-6731. You can also email Info@dallas-dumpster.com. Our office address is 707 Opal Lane, Mesquite, TX 75149. Business hours are Monday–Friday 8:00 AM–7:00 PM and Saturday 9:00 AM–1:00 PM.",
    "We deliver across Dallas and the nearby cities listed on the site, including Richardson, Forney, Rowlett, Plano, Rockwall, Allen, Balch Springs, Wylie, Seagoville, Garland, Hutchins, Carrollton, Murphy, Sachse, Addison, Highland Park, and University Park.",
    "For a smooth pickup, make sure the container isn’t overfilled—keep debris level with the top—and place the dumpster on a solid surface like concrete, asphalt, or gravel (not in a yard). If you have any questions about acceptable materials, check the restrictions listed in the FAQ on the website or ask us when you call.",
  ],
};

export const privacyPage = {
  seo: {
    title: "Privacy Policy | Dallas Dumpster Rentals",
    description:
      "How Dallas Dumpster Rentals collects, uses and protects your personal information, including text messaging opt-in and opt-out.",
  },
  heading: "privacy policy",
  /** Blocks: string = paragraph, {h} = bold heading, {list} = bullet list. */
  blocks: [
    "At Dallas Dumpster, we are committed to protecting the privacy and security of our customers’ personal information",
    "This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service.",
    "We will not use or share your information with anyone except as described in this Privacy Policy.",
    "We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible at https://dallas-dumpster.com/.",
    { h: "Information Collection And Use" },
    "While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information (“Personal Information”) may include, but is not limited to:",
    { list: ["Name", "Email address", "Telephone number", "Address"] },
    { h: "Log Data" },
    "We collect information that your browser sends whenever you visit our Service (“Log Data”). This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.",
    { h: "Cookies" },
    "Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer’s hard drive.",
    "We use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.",
    { h: "Service Providers" },
    "We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.",
    "These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.",
    { h: "Security" },
    "The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.",
    { h: "Links To Other Sites" },
    "Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.",
    "We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites or services.",
    { h: "Children’s Privacy" },
    "Our Service does not address anyone under the age of 18 (“Children”).",
    "We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Information, please contact us. If we discover that a child under 18 has provided us with Personal Information, we will delete such information from our servers immediately.",
    { h: "Compliance With Laws" },
    "We will disclose your Personal Information where required to do so by law or subpoena.",
    { h: "Changes To This Privacy Policy" },
    "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
    "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
    "Dallas Dumpster will not share, sell ,or disclose your personal information or mobile opt-in data to third parties without your explicit consent, except where required by law. your information is kept confidential and used solely for the purposes you have agreed to. all the above categories exclude text messaging originator opt–in data and consent; this information will not be shared with third parties. text messaging opt-data is not being shared with third parties.",
    "Opting out of text messages:",
    "you  have the rights to opt out of receiving text messages from Dallas Dumpster Rentals at any time.to opt-out. you can reply stop to any text message you receive from us.",
    "Consent and Opt-in:",
    "By providing your phone number and opting in to receive text messages ,you consent to the collection and use of your personal information as described in this policy. we ensure that your consent is obtained explicitly and that you are informed about the types of messages you will receive.",
    { h: "Contact Us" },
    "If you have any questions about this Privacy Policy, please contact us at Info@dallas-dumpster.com",
  ] as Array<string | { h: string } | { list: string[] }>,
};
