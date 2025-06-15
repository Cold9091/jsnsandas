import { MessageSquare, Facebook, Mail, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gray-900 dark:bg-gray-950 border-t border-gray-700 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4 text-white">JSM SANDA</h3>
          <p className="font-light opacity-90 mb-6 text-gray-300 dark:text-gray-400">
            Cuidando do seu espaço com segurança e profissionalismo
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://wa.me/244940354740"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-full hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110 text-white"
            >
              <MessageSquare className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/jsm_desinfestacao/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-full hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110 text-white"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/jsm-desinfestação-04673733b/?originalSubdomain=ao"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-full hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110 text-white"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://facebook.com/jsmsanda"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-full hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110 text-white"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="mailto:jortikisandas@gmail.com"
              className="p-3 glass-effect rounded-full hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110 text-white"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <div className="border-t border-gray-700 dark:border-gray-800 pt-8">
            <p className="font-light opacity-70 text-gray-300 dark:text-gray-400">
              &copy; 2024 JSM SANDA. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
