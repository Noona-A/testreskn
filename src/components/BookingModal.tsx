import { X, Video, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const bookingOptions = [
  {
    title: "Online Skin Consultation",
    description: "30-minute video consultation from the comfort of home",
    icon: Video,
    duration: "30 mins",
    price: "£45",
    href: "https://app.cal.eu/resknclinic/online-skin-consultation",
  },
  {
    title: "Laser Patch Test",
    description: "Free patch test before your laser hair removal treatment",
    icon: Sparkles,
    duration: "15 mins",
    price: "Free",
    href: "https://app.cal.eu/resknclinic/laser-patch-test",
  },
];

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-4 top-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-lg z-50"
          >
            <div className="bg-card rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="relative bg-paradise-gradient p-6">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-background/20 hover:bg-background/40 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} className="text-foreground" />
                </button>
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Book Your Appointment
                </h2>
                <p className="text-muted-foreground mt-1 text-sm">
                  Choose the consultation that's right for you
                </p>
              </div>

              {/* Options */}
              <div className="p-4 space-y-3 max-h-[60vh] overflow-y-auto">
                {bookingOptions.map((option, index) => (
                  <motion.a
                    key={option.title}
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-accent/30 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                        <option.icon size={24} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {option.title}
                          </h3>
                          <span className="text-primary font-semibold text-sm whitespace-nowrap">
                            {option.price}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm mt-1">
                          {option.description}
                        </p>
                        <span className="text-xs text-muted-foreground mt-2 inline-block">
                          {option.duration}
                        </span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Footer */}
              <div className="p-4 bg-muted/50 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  You'll complete a short pre-consultation questionnaire after booking.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
