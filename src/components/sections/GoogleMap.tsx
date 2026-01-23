interface GoogleMapProps {
  location: string;
}

const GoogleMap = ({ location }: GoogleMapProps) => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Find Us Near {location}
        </h2>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.7275343371466!2d-96.5901416!3d32.772963499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaeb7b4dd59c2b1cf%3A0xb4bcdbdb885d98ed!2sDallas%20Dumpster%20Rentals!5e0!3m2!1sen!2spt!4v1769174676876!5m2!1sen!2spt"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Dallas Dumpster Rentals location serving ${location}`}
          />
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;
