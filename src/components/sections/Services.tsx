import { Home, Warehouse, Hammer, HardHat, Trees, Trash2 } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Home Cleanouts",
    description: "Declutter bedrooms, basements, and living spaces during your Richardson home cleanout.",
  },
  {
    icon: Warehouse,
    title: "Garage Cleanouts",
    description: "Clear out years of accumulated items from your Richardson garage quickly and easily.",
  },
  {
    icon: Hammer,
    title: "Remodeling Debris",
    description: "Handle drywall, flooring, cabinets, and other renovation waste from your Richardson remodel.",
  },
  {
    icon: HardHat,
    title: "Roofing Debris",
    description: "Safely dispose of shingles and roofing materials from your Richardson roof replacement.",
  },
  {
    icon: Trash2,
    title: "Construction Jobs",
    description: "Keep your Richardson construction site clean with reliable dumpster service.",
  },
  {
    icon: Trees,
    title: "Yard & Landscape Cleanup",
    description: "Remove branches, brush, and landscaping debris from your Richardson property.",
  },
];

const Services = () => {
  return (
    <section className="py-16 lg:py-24 bg-brand-surface">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Dumpster Rentals for Every Project
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From small home cleanouts to major construction projects, we've got the right dumpster for your Richardson job.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-background rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Driveway Note */}
        <div className="mt-10 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Driveway-friendly delivery:</span> Our roll-off dumpsters are designed to be placed on concrete, asphalt, or gravel—plan your space accordingly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;