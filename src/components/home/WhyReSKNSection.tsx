import { Shield, BookOpen, Heart, MapPin } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Medical Professional Led", description: "Pharmacy-informed expertise you can trust" },
  { icon: BookOpen, title: "Evidence-Informed", description: "Routines backed by clinical research" },
  { icon: Heart, title: "Tailored Plans", description: "Personalised care with ongoing support" },
  { icon: MapPin, title: "Luxury Local Experience", description: "Premium clinic in Windsor, Berkshire" },
];

const WhyReSKNSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">Why ReSKN</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent flex items-center justify-center"><r.icon size={24} className="text-primary" /></div>
              <h3 className="font-semibold mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyReSKNSection;
