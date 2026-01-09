import glowingSkinImage from "@/assets/glowing-skin.jpg";

const EscapeSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={glowingSkinImage}
                  alt="Healthy glowing skin"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/30 to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left">
              {/* Shimmer Line */}
              <div className="relative h-px w-full mb-8 bg-gradient-to-r from-transparent via-border to-transparent overflow-hidden">
                <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              </div>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 leading-relaxed">
                Escape to better skin
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                Picture your ideal skin — clear, calm, radiant. At ReSKN, we believe great skin starts with understanding yours. 
                Through personalised consultations and evidence-informed routines, we'll guide you to confidence that glows from within.
              </p>

              <p className="text-base text-muted-foreground/80 leading-relaxed">
                Whether you're tackling stubborn breakouts, evening out tone, or simply seeking that fresh, 
                dewy look — your journey begins with a conversation.
              </p>

              {/* Shimmer Line */}
              <div className="relative h-px w-full mt-8 bg-gradient-to-r from-transparent via-border to-transparent overflow-hidden">
                <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EscapeSection;
