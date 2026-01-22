import { Link } from "react-router-dom";
import { Video, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Video,
    title: "Online Skin Consultation",
    description: "Connect with our specialists from anywhere via video call. Perfect for routine check-ins, initial assessments, and ongoing skin support.",
    duration: "30 mins",
    price: "£45",
    href: "/skin-clinic",
    bookingLink: "https://app.cal.eu/resknclinic/online-skin-consultation",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert skin consultations tailored to your lifestyle
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="service-card card-luxury p-8 flex flex-col hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6">
                <service.icon size={28} className="text-primary" />
              </div>

              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {service.description}
              </p>

              <div className="flex items-center gap-4 mb-6 text-sm">
                <span className="text-muted-foreground">{service.duration}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span className="font-semibold text-primary">{service.price}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  asChild 
                  className="btn-luxury text-white flex-1"
                >
                  <a href={service.bookingLink} target="_blank" rel="noopener noreferrer">
                    Book Now
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-primary/30">
                  <Link to={service.href}>
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/laser-hair-removal"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View Laser Hair Removal
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;