import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomepageContent = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
            Expert Skin Care & Laser Hair Removal in Windsor
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Welcome to ReSKN Clinic, Windsor's trusted destination for personalised skin consultations 
            and professional laser hair removal. Led by a UK-registered pharmacist, we combine clinical 
            expertise with evidence-based treatments to help you achieve your skin goals safely and effectively.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether you're seeking clearer skin, targeted solutions for acne, pigmentation, or sensitivity, 
            or looking for long-lasting hair-free results, our bespoke approach ensures every treatment 
            is tailored specifically to your unique needs.
          </p>
        </motion.div>

        {/* Why Choose ReSKN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground text-center mb-12">
            Why Choose ReSKN Clinic?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-medium mb-2">Pharmacist-Led Care</h3>
              <p className="text-muted-foreground text-sm">
                All consultations delivered by a GPhC-registered pharmacist with advanced training in dermatology and aesthetics.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-medium mb-2">Personalised Plans</h3>
              <p className="text-muted-foreground text-sm">
                No one-size-fits-all solutions. Every skin plan is customised based on your skin type, concerns, and lifestyle.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-medium mb-2">Professional Results</h3>
              <p className="text-muted-foreground text-sm">
                Access professional-grade skincare and targeted treatments for visible, lasting results.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-medium mb-2">Flexible Appointments</h3>
              <p className="text-muted-foreground text-sm">
                Book online video consultations at your convenience. Same-week appointments often available.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          {/* Skin Clinic */}
          <div className="bg-muted/30 rounded-2xl p-8">
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
              Skin Clinic Windsor
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Our comprehensive online skin consultations address a wide range of concerns including acne, 
              pigmentation, rosacea, eczema, and anti-ageing. Using evidence-informed protocols, 
              we create personalised treatment plans that include medical-grade skincare 
              and targeted product recommendations.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Based in Windsor, Berkshire, ReSKN Clinic offers convenient online video consultations, 
              making expert skin care accessible wherever you are.
            </p>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link to="/skin-clinic">Learn About Skin Consultations</Link>
            </Button>
          </div>

          {/* Laser Hair Removal */}
          <div className="bg-muted/30 rounded-2xl p-8">
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
              Laser Hair Removal Windsor
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Say goodbye to waxing, shaving, and ingrown hairs with our professional laser hair 
              removal treatments. Using advanced diode laser technology safe for all skin types, 
              we deliver smooth, long-lasting results for face and body areas.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Each session includes a thorough consultation, patch test (for new clients), 
              and aftercare guidance. Experience comfortable treatments and noticeable reduction 
              from your very first session.
            </p>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link to="/laser-hair-removal">Explore Laser Hair Removal</Link>
            </Button>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-primary/5 rounded-2xl p-10"
        >
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
            Ready to Start Your Skin Journey?
          </h2>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Take our free skin quiz to discover your personalised treatment recommendations, 
            or book a consultation to speak directly with our pharmacist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-luxury text-white">
              <Link to="/quiz">Take the Skin Quiz</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link to="/booking">Book a Consultation</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomepageContent;
