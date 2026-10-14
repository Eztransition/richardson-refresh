import { useEffect } from "react";

interface LocalBusinessSchemaProps {
  location: string;
  state: string;
}

const LocalBusinessSchema = ({ location, state }: LocalBusinessSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://dallas-dumpster.com/#localbusiness",
      "name": "Dallas Dumpster Rentals",
      "image": "https://local.dallas-dumpster.com/__l5e/assets-v1/9d03ff1d-7589-41ee-a28a-9e53018e4b24/logo.png",
      "logo": "https://local.dallas-dumpster.com/__l5e/assets-v1/9d03ff1d-7589-41ee-a28a-9e53018e4b24/logo.png",
      "description": `Professional dumpster rental services in ${location}, ${state}. We offer 10, 15, and 20-yard roll-off dumpsters for residential and commercial projects.`,
      "url": "https://dallas-dumpster.com",
      "telephone": "+1-972-645-6731",
      "email": "service@dallas-dumpster.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1609 Greenville Ave",
        "addressLocality": "Dallas",
        "addressRegion": "TX",
        "postalCode": "75206",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.8328,
        "longitude": -96.7678
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "13:00"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Dallas", "sameAs": "https://en.wikipedia.org/wiki/Dallas" },
        { "@type": "City", "name": "Richardson" },
        { "@type": "City", "name": "Plano" },
        { "@type": "City", "name": "Garland" },
        { "@type": "City", "name": "Allen" },
        { "@type": "City", "name": "Rockwall" },
        { "@type": "City", "name": "Rowlett" },
        { "@type": "City", "name": "Forney" },
        { "@type": "City", "name": "Wylie" },
        { "@type": "City", "name": "Murphy" },
        { "@type": "City", "name": "Sachse" },
        { "@type": "City", "name": "Sunnyvale" },
        { "@type": "City", "name": "Balch Springs" },
        { "@type": "City", "name": "Seagoville" },
        { "@type": "City", "name": "Hutchins" },
        { "@type": "City", "name": "Lancaster" },
        { "@type": "City", "name": "Cedar Hill" },
        { "@type": "City", "name": "DeSoto" },
        { "@type": "City", "name": "Duncanville" },
        { "@type": "City", "name": "Addison" },
        { "@type": "City", "name": "Highland Park" },
        { "@type": "City", "name": "University Park" }
      ],
      "priceRange": "$$",
      "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
      "currenciesAccepted": "USD",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dumpster Rental Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "10-Yard Dumpster Rental",
              "description": "Ideal for small cleanouts, garage decluttering, and minor renovation projects."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "15-Yard Dumpster Rental",
              "description": "Perfect for medium-sized projects like kitchen remodels and landscaping."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "20-Yard Dumpster Rental",
              "description": "Best for large renovations, construction debris, and whole-home cleanouts."
            }
          }
        ]
      },
      "sameAs": [
        "https://www.facebook.com/dallasdumpsterrentals",
        "https://www.instagram.com/dallasdumpsterrentals"
      ]
    };

    // Remove existing schema if present
    const existingScript = document.querySelector('script[data-schema="local-business"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new schema
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-schema", "local-business");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[data-schema="local-business"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [location, state]);

  return null;
};

export default LocalBusinessSchema;
