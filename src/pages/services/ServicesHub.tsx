import { Link } from "react-router-dom";

const services = [
  { title: "Online Consultation", price: "£45", href: "/services/online-consultation" },
  { title: "In-Clinic Consultation", price: "£65", href: "/services/in-clinic-consultation" },
  { title: "Prescription Acne Pathway", price: "£35", href: "/services/prescription-acne" },
];

const ServicesHub = () => (
  <div className="pt-24 pb-16">
    <div className="container mx-auto px-4">
      <h1 className="font-serif text-4xl text-center mb-12">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {services.map((s) => (
          <Link key={s.title} to={s.href} className="card-luxury p-8 text-center">
            <h2 className="font-serif text-xl mb-2">{s.title}</h2>
            <p className="text-primary font-semibold">{s.price}</p>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default ServicesHub;
