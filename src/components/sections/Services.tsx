import { Home, Warehouse, Hammer, HardHat, Trees, Trash2 } from "lucide-react";
import serviceHomeCleanout from "@/assets/service-home-cleanout.jpg";
import serviceGarageCleanout from "@/assets/service-garage-cleanout.jpg";
import serviceRemodeling from "@/assets/service-remodeling.jpg";
import serviceRoofing from "@/assets/service-roofing.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";
import serviceYardCleanup from "@/assets/service-yard-cleanup.jpg";

const services = [
  {
    icon: Home,
    title: "Home Cleanouts in Richardson, TX",
    description: "Declutter bedrooms, basements, and living spaces during your Richardson home cleanout.",
    image: serviceHomeCleanout,
  },
  {
    icon: Warehouse,
    title: "Garage Cleanouts in Richardson, TX",
    description: "Clear out years of accumulated items from your Richardson garage quickly and easily.",
    image: serviceGarageCleanout,
  },
  {
    icon: Hammer,
    title: "Remodeling Debris in Richardson, TX",
    description: "Handle drywall, flooring, cabinets, and other renovation waste from your Richardson remodel.",
    image: serviceRemodeling,
  },
  {
    icon: HardHat,
    title: "Roofing Debris in Richardson, TX",
    description: "Safely dispose of shingles and roofing materials from your Richardson roof replacement.",
    image: serviceRoofing,
  },
  {
    icon: Trash2,
    title: "Construction Jobs in Richardson, TX",
    description: "Keep your Richardson construction site clean with reliable dumpster service.",
    image: serviceConstruction,
  },
  {
    icon: Trees,
    title: "Yard & Landscape Cleanup in Richardson, TX",
    description: "Remove branches, brush, and landscaping debris from your Richardson property.",
    image: serviceYardCleanup,
  },
];

const Services = () => {
  return (
    <section className="py-16 lg:py-24 bg-brand-surface">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Richardson, TX Dumpster Rentals for Every Project
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
              className="group bg-background rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Icon overlay */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
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