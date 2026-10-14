import photo10 from "@/assets/dumpster-10-yard-photo.jpg.asset.json";
import photo15 from "@/assets/dumpster-15-yard-photo.png.asset.json";
import photo20 from "@/assets/dumpster-20-yard-photo.png.asset.json";

/**
 * Content copied verbatim from the public dallas-dumpster.com size pages.
 * Do not rewrite wording, prices, or SEO text here — it mirrors the source site.
 */

export const BOOKING_URL = "https://link.eztransition.com/booking/dallas-dumpster-rentals-mj6zf8sxcb";

export interface DumpsterSizePage {
  slug: "10-yard-dumpster-rentals" | "15-yard-dumpster-rentals" | "20-yard-dumpster-rentals";
  title: string;
  image: string;
  imageAlt: string;
  /** Detail page values */
  price: string;
  size: string;
  days: string;
  extension: string;
  tons: string;
  extraWeight: string;
  description: string;
  /** Dumpster Size overview card values */
  overview: {
    price: string;
    dimensions: string;
    rentalTime: string;
    includedHeading: string;
    includedText: string;
    additionalDays: string;
    extraWeight: string;
  };
  seo: { title: string; description: string };
}

export const dumpsterSizePages: DumpsterSizePage[] = [
  {
    slug: "10-yard-dumpster-rentals",
    title: "10-Yard Dumpster Rentals",
    image: photo10.url,
    imageAlt: "10-Yard Dumpster Rentals",
    price: "$355.00",
    size: "14’L x 7’W x 4’H",
    days: "1-3 Day Rental",
    extension: "20 Per Additional Day",
    tons: "1 Included",
    extraWeight: "$37/1000 lbs",
    description:
      "The 10 yard dumpster is the perfect size for smaller projects or limited spaces. With dimensions measuring around 14 feet long, 7 feet wide, and 4 feet tall, this compact dumpster can accommodate a variety of debris, such as construction waste, household clutter, or yard trimmings. Whether you are doing a garage clean out, small construction project, or decluttering your home, a 10 yard dumpster provides ample space for your needs.",
    overview: {
      price: "$355.00",
      dimensions: "14’L x 7’W x 4’H",
      rentalTime: "1-3 Day Rental",
      includedHeading: "2,000 Ibs Included",
      includedText: "2,000 Ibs. included",
      additionalDays: "$20/day",
      extraWeight: "$37/1000 lbs",
    },
    seo: {
      title: "10-Yard Dumpster Rentals - Dallas Dumpster",
      description:
        "10-yard dumpster rental: $340, 14’L x 7’W x 4’H, 1–4 day rental, 2,000 lbs included. Dallas and surrounding areas. Call 972-645-6731.",
    },
  },
  {
    slug: "15-yard-dumpster-rentals",
    title: "15-Yard Dumpster Rentals",
    image: photo15.url,
    imageAlt: "15-Yard Dumpster Rentals",
    price: "$375.00",
    size: "14’L x 7’W x 4’H",
    days: "1-4 Day Rental",
    extension: "$20 Per Additional Day",
    tons: "1 Included",
    extraWeight: "$37/1000 lbs",
    description:
      "The 15 yard dumpster is the perfect size for your medium-sized projects. Whether you’re tackling a small remodel, doing a roof tear off, or a landscaping job, this dumpster is designed to handle the debris with ease. With dimensions measuring 14 feet long, 7 feet wide, and 4 feet tall it is compact enough to fit into driveways, but still large enough to handle the majority of residential projects.",
    overview: {
      price: "$375.00",
      dimensions: "14’L x 7’W x 4’H",
      rentalTime: "1-4 Day Rental",
      includedHeading: "2,000 Ibs Included",
      includedText: "2,000 Ibs. included",
      additionalDays: "$20/day",
      extraWeight: "$37/1000 lbs",
    },
    seo: {
      title: "15 Yard Dumpster Rentals - Dallas Dumpster",
      description:
        "15-yard dumpster rental: $350, 14’L x 7’W x 4’H, 1–4 day rental, 2,000 lbs included. Dallas and surrounding areas. Call 972-645-6731.",
    },
  },
  {
    slug: "20-yard-dumpster-rentals",
    title: "20-Yard Dumpster Rentals",
    image: photo20.url,
    imageAlt: "20-Yard Dumpster Rentals",
    price: "$450.00",
    size: "14’L x 7’W x 5’H",
    days: "1-5 Day Rental",
    extension: "$20 Per Additional Day",
    tons: "2 Included",
    extraWeight: "$37/1000 lbs",
    description:
      "The size is approximately 14′ feet long x 7′feet wide x 5 feet tall.our 20 cubic yard roll off dumpster rental in Dallas,Texas, provides the ideal waste management solution for large-scale home cleanouts and renovations, as well as construction projects and extensive landscaping or cleanup.It has a door on the back to open up.",
    overview: {
      price: "$450.00",
      dimensions: "14’L x 7’W x 5’H",
      rentalTime: "1-5 Day Rental",
      includedHeading: "4,000 Ibs Included",
      includedText: "4,000 Ibs. included",
      additionalDays: "$20/day",
      extraWeight: "$37/1000 lbs",
    },
    seo: {
      title: "20 Yard Dumpster Rentals - Dallas Dumpster",
      description:
        "20-yard dumpster rental: $410, 14’L x 7’W x 5’H, 1–5 day rental, 4,000 lbs included. Dallas and surrounding areas. Call 972-645-6731.",
    },
  },
];

export const getDumpsterSizePage = (slug: DumpsterSizePage["slug"]) =>
  dumpsterSizePages.find((p) => p.slug === slug)!;

export const dumpsterSizeOverview = {
  heading: "Dumpsters Sizes",
  servicesHeading: "Our Services",
  guideHeading: "Affordable Dumpster Rentals in Dallas - Your Ultimate Guide",
  guideText:
    "Dallas dumpster rentals provides 10, 15 and 20 yard roll off dumpsters to residential and commercial customers in Dallas,TX and surrounding areas. Whether it’s a garage or basement cleanout, yard clean up, home remodel, new built home we have a dumpster to fit your needs.Our dumpster rentals are designed to make your project easy and affordable. We have the solution for any project you can imagine.We know that the most important thing to our customers is meeting their project deadlines, and we are here to help you.We pride ourselves on outstanding customer service and will do what it takes to help our customers be successful. Give us a call today so we can help you with your next project.",
  howToHeading: "how to rent dumpsters",
  howToText:
    "Dallas dumpster rentals provides 10,15 and 20 yard roll off dumpsters to residential and commercial customers in Dallas,TX and surrounding areas. Whether it’s a garage or basement cleanout, yard clean up, home remodel, new built home we have a dumpster to fit your needs.Our dumpster rentals are designed to make your project easy and affordable. We have the solution for any project you can imagine.We know that the most important thing to our customers is meeting their project deadlines, and we are here to help you.We pride ourselves on outstanding customer service and will do what it takes to help our customers be successful. Give us a call today so we can help you with your next project.",
  seo: {
    title: "Dumpster Size - Dallas Dumpster",
    description:
      "Compare 10, 15 & 20-yard dumpsters with posted prices, dimensions, rental times, and included weight. Reserve online or call 972-645-6731.",
  },
};

export const rentalSteps = {
  heading: "How to Rent Our Dumpsters In 3 Easy Steps",
  steps: [
    {
      title: "Choose & Reserve",
      text: "Choose the perfect dumpster size for your project and reserve it easily online or with a quick call. We streamline the process, ensuring you get the right container exactly when you need it, so your project runs smoothly.",
    },
    {
      title: "Fill at Your Pace",
      text: "Take your time loading the dumpster as your project progresses. Whether it’s a quick cleanout or a lengthy renovation, you have the flexibility to fill the container at a pace that suits your schedule, without any pressure.",
    },
    {
      title: "Swift Pickup & Disposal",
      text: "Once your dumpster is full, simply let us know, and we’ll handle the rest. Our team will quickly pick up the dumpster and take care of all the disposal, ensuring your waste is managed responsibly and efficiently.",
    },
  ],
};
