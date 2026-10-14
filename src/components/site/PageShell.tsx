import type { ReactNode } from "react";
import { Check, X } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import { SizeHero } from "@/components/sizes/SizePageParts";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { FaqItem } from "@/config/site-pages";

export const PageShell = ({
  title,
  variant = "book",
  children,
}: {
  title: string;
  variant?: "book" | "call";
  children: ReactNode;
}) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <SizeHero title={title} variant={variant} />
      {children}
    </main>
    <Footer />
    <MobileStickyCTA />
  </div>
);

export const FaqAccordion = ({ items }: { items: FaqItem[] }) => (
  <Accordion type="single" collapsible className="space-y-3">
    {items.map((f, i) => (
      <AccordionItem
        key={f.q}
        value={`faq-${i}`}
        className="bg-background border border-border rounded-xl px-6 shadow-card"
      >
        <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
          {f.q}
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground leading-relaxed space-y-2 pb-5">
          {f.a.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export const ItemList = ({ items, ok }: { items: string[]; ok: boolean }) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span
          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
            ok ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"
          }`}
        >
          {ok ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
        </span>
        <span className="text-foreground">{item}</span>
      </li>
    ))}
  </ul>
);
