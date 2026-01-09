import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-banner.png";
import logo from "@/assets/reskn-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Skin consultation and laser hair removal at ReSKN Clinic"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>

      {/* Soft gradient overlay for logo readability */}
      <div className="absolute inset-0 bg-white/30" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Logo with fade-in animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-16"
        >
          <img
            src={logo}
            alt="ReSKN Clinic"
            className="w-64 md:w-80 lg:w-96 h-auto"
          />
        </motion.div>

        {/* Two Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 sm:gap-12 w-full max-w-2xl justify-center"
        >
          <Button
            asChild
            size="lg"
            className="btn-luxury text-white px-12 py-7 text-lg font-medium min-w-[200px]"
          >
            <Link to="/services">
              Skin Clinic
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            className="btn-luxury text-white px-12 py-7 text-lg font-medium min-w-[200px]"
          >
            <Link to="/laser-hair-removal">
              Laser Clinic
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;