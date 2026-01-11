import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-banner.png";
import logo from "@/assets/reskn-logo.png";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Skin consultation and laser hair removal at ReSKN Clinic" className="w-full h-full object-cover" loading="eager" decoding="async" fetchPriority="high" />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/40" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Logo with fade-in animation */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1.2,
        ease: "easeOut"
      }} className="mb-8">
          <img src={logo} alt="ReSKN Clinic" className="w-56 md:w-72 lg:w-80 h-auto" />
        </motion.div>

        {/* Headline */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        delay: 0.3,
        ease: "easeOut"
      }} className="text-center mb-10 max-w-3xl">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-foreground leading-tight mb-4">
            Medical-grade skin & laser care, tailored to you
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">Personalised skin consultations and safe, effective laser hair removal  delivered by a UK-registered pharmacist in Windsor.</p>
        </motion.div>

        {/* Two CTA Buttons */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 0.8,
        ease: "easeOut"
      }} className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-lg justify-center">
          <Button asChild size="lg" className="btn-luxury text-white px-10 py-6 text-base font-medium min-w-[180px]">
            <Link to="/skin-clinic">
              Skin Clinic
            </Link>
          </Button>

          <Button asChild size="lg" className="btn-luxury text-white px-10 py-6 text-base font-medium min-w-[180px]">
            <Link to="/laser-hair-removal">
              Laser Hair Removal
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;