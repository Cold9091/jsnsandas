import { MessageSquare } from "lucide-react";

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/244939103175", "_blank", "noopener noreferrer");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
      aria-label="Contactar via WhatsApp"
    >
      <MessageSquare className="h-6 w-6 text-white" />
    </button>
  );
}
