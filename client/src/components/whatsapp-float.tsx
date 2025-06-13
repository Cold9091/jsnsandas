import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/244939103175", "_blank", "noopener noreferrer");
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl"
      style={{ 
        backgroundColor: 'var(--jsm-blue)',
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)"
      }}
      aria-label="Contactar via WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        delay: 2,
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      whileHover={{ 
        scale: 1.15,
        backgroundColor: "var(--jsm-blue-light)",
        boxShadow: "0 20px 40px rgba(18, 62, 114, 0.4)"
      }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{ 
          rotate: [0, 15, -15, 0],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3
        }}
      >
        <MessageSquare className="h-7 w-7 text-white" />
      </motion.div>
    </motion.button>
  );
}
