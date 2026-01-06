import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => (
  <div className="pt-24 pb-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="font-serif text-4xl mb-8">Contact Us</h1>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <MapPin className="text-primary" />
          <span>Windsor, Berkshire, UK</span>
        </div>
        <div className="flex items-center gap-4">
          <Mail className="text-primary" />
          <a href="mailto:hello@resknclinic.co.uk" className="hover:text-primary">hello@resknclinic.co.uk</a>
        </div>
        <div className="flex items-center gap-4">
          <Phone className="text-primary" />
          <a href="tel:+441234567890" className="hover:text-primary">+44 (0) 1234 567 890</a>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
