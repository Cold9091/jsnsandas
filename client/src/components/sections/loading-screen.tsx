import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logoPath from "@assets/286440570_3336173516614824_6308129545469397056_n - Editado_1749777094774.png";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 600);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, var(--jsn-accent) 0%, var(--jsn-primary) 25%, var(--jsn-primary-light) 50%, var(--jsn-secondary) 75%, var(--jsn-primary-light) 100%)',
          }}
        >
          <div className="text-center">
            {/* Logo/Brand */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-12 flex flex-col items-center"
            >
              <motion.img 
                src={logoPath} 
                alt="JSMSANDA Logo" 
                className="h-32 w-auto mb-8"
                style={{ 
                  filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5)) brightness(1.1)',
                }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <h1 
                className="text-6xl font-bold mb-4"
                style={{
                  fontSize: 'clamp(32px, 6vw, 64px)',
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  background: 'linear-gradient(135deg, #fef9e7 0%, rgba(254, 249, 231, 0.9) 50%, rgba(255, 255, 255, 0.8) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                JSMSANDA DESINFESTAÇÃO & DESINFECÇÃO
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xl opacity-90"
                style={{
                  fontSize: '21px',
                  fontWeight: 400,
                  letterSpacing: '-0.022em'
                }}
              >
                Serviços de Desinfestação
              </motion.p>
            </motion.div>

            {/* Loading Animation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="relative"
            >
              {/* Progress Circle */}
              <div className="relative w-24 h-24 mx-auto mb-8">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth="2"
                    fill="none"
                  />
                  {/* Progress Circle */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="rgba(255, 255, 255, 0.8)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={283}
                    strokeDashoffset={283 - (283 * progress) / 100}
                    transition={{ duration: 0.1, ease: "easeOut" }}
                  />
                </svg>
                
                {/* Progress Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    key={progress}
                    initial={{ scale: 0.8, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-lg font-semibold"
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      letterSpacing: '-0.022em'
                    }}
                  >
                    {Math.round(progress)}%
                  </motion.span>
                </div>
              </div>

              {/* Loading Dots */}
              <div className="flex justify-center space-x-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-white/60 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="mt-6 text-sm opacity-80"
                style={{
                  fontSize: '15px',
                  letterSpacing: '-0.022em'
                }}
              >
                Carregando experiência...
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}