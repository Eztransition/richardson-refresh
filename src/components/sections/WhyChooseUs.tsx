import { Truck, DollarSign, Calendar, Headphones, Clock, MousePointerClick, CheckCircle } from "lucide-react";

interface WhyChooseUsProps {
  location?: string;
}

const WhyChooseUs = ({ location = "Richardson" }: WhyChooseUsProps) => {
  const features = [
    {
      icon: Truck,
      title: `Reliable ${location} Delivery`,
      description: `We maintain efficient routes throughout ${location} for fast, dependable service.`,
    },
    {
      icon: DollarSign,
      title: "Upfront Pricing",
      description: "No surprise fees—your quote includes delivery, pickup, weight, and disposal.",
    },
    {
      icon: Calendar,
      title: "Flexible Rental Periods",
      description: "Standard rentals with clear $20/day extra day pricing when you need more time.",
    },
    {
      icon: Headphones,
      title: "Responsive Support",
      description: "Reach us by phone or text—we're here to help with any questions.",
    },
    {
      icon: Clock,
      title: "On-Time Pickup",
      description: "Schedule your pickup and we'll be there—reliable service every time.",
    },
  ];

  const steps = [
    {
      number: "1",
      icon: MousePointerClick,
      title: "Choose Size & Book",
      description: "Select your dumpster size online and complete your booking in minutes.",
    },
    {
      number: "2",
      icon: Truck,
      title: "We Deliver",
      description: `We deliver your dumpster directly to your ${location} address.`,
    },
    {
      number: "3",
      icon: CheckCircle,
      title: "Fill & We Pick Up",
      description: "Load it up, then we handle pickup and proper disposal.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Features Column */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              Why Choose Dallas Dumpster Rentals in {location}?
            </h2>

            <div className="space-y-5">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4 animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works Column */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-brand-surface rounded-xl p-6 lg:p-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                How It Works
              </h3>

              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div
                    key={step.title}
                    className="relative flex gap-4 animate-fade-in"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-5 top-12 w-0.5 h-12 bg-border" />
                    )}

                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg">
                      {step.number}
                    </div>
                    <div className="pt-1">
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
