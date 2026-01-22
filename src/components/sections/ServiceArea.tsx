import { MapPin, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { getOtherServiceAreas, getLocationByName } from "@/config/locations";

interface ServiceAreaProps {
  location?: string;
  description?: string;
}

const ServiceArea = ({ location = "Richardson", description }: ServiceAreaProps) => {
  const nearbyAreas = getOtherServiceAreas(location);
  
  const defaultDescription = `Dallas Dumpster Rentals provides fast and reliable roll-off dumpster delivery throughout ${location}, TX and the greater Dallas-Fort Worth metropolitan area. Whether you're tackling a home renovation, clearing out a property, or managing a construction project in ${location}, we've got you covered.`;

  return (
    <section className="py-16 lg:py-24 bg-brand-surface">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-heading font-semibold text-sm mb-4">
              <MapPin className="h-4 w-4" />
              Local Service
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Serving {location} and Surrounding DFW Communities
            </h2>
          </div>

          <div className="bg-background rounded-xl p-6 lg:p-8 shadow-card animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <p className="text-muted-foreground mb-6 text-center">
              {description || defaultDescription}
            </p>

            <div className="border-t border-border pt-6">
              <p className="text-sm text-muted-foreground text-center mb-4">
                We also serve these nearby communities:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {nearbyAreas.map((area, index) => {
                  const locationData = getLocationByName(area);
                  const href = locationData ? `/dumpster-rental-${locationData.slug}` : "#";
                  
                  return (
                    <Link
                      key={area}
                      to={href}
                      className="inline-flex items-center gap-1.5 bg-brand-surface px-3 py-1.5 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors animate-fade-in"
                      style={{ animationDelay: `${0.2 + index * 0.03}s` }}
                    >
                      <Check className="h-3.5 w-3.5 text-secondary" />
                      {area}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
