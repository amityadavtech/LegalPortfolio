import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    if (!hasSeenDisclaimer) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeDisclaimer = () => {
    localStorage.setItem('hasSeenDisclaimer', 'true');
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-2xl w-full max-w-sm sm:max-w-md relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <div className="bg-[#0A2463] h-2 w-full"></div>
            <div className="p-5 sm:p-6">
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0A2463]">
                  Legal Disclaimer
                </h2>
                <button
                  onClick={closeDisclaimer}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <i className="fas fa-times text-lg sm:text-xl"></i>
                </button>
              </div>

              <div className="prose max-w-none mb-5 text-sm sm:text-base">
                <p className="mb-4">
                  By visiting this site, you confirm that you're seeking information about Aftab Ali Ansari & Associates voluntarily. This website does not advertise or solicit legal services. All content is for informational use only and not legal advice. For legal matters, consult a qualified lawyer. Continuing use means you accept this disclaimer.
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={closeDisclaimer}
                  className="bg-[#E6AF2E] hover:bg-yellow-500 text-[#0A2463] font-bold py-2 px-6 rounded-md transition-colors duration-300 shadow-md"
                >
                  I Understand
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerPopup;
