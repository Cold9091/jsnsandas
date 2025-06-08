import { MessageSquare, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-black/20 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">JSN SANDA</h3>
          <p className="font-light opacity-90 mb-6">
            Cuidando do seu espaço com segurança e profissionalismo
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://wa.me/244939103175"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <MessageSquare className="h-6 w-6" />
            </a>
            <a
              href="https://facebook.com/jsmsanda"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="mailto:jortikisandas@gmail.com"
              className="p-3 glass-effect rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="font-light opacity-70">
              &copy; 2024 JSN SANDA. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
