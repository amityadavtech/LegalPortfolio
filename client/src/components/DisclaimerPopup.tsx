import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    if (!hasSeenDisclaimer) {
      const timer = setTimeout(() => setIsOpen(true), 1500);
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
          className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-2 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <div className="bg-[#0A2463] h-2 w-full"></div>
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4">
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
              <div className="text-sm sm:text-base text-gray-700 mb-6">
                <p className="mb-4">
                  The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website, https://vakeel-saab.in/, you acknowledge and confirm that you are seeking information relating to Aftab Ali Ansari & Associates of your own accord and that there has been no form of solicitation, advertisement or inducement by Aftab Ali Ansari & Associates or its members.
                </p>
                <p className="mb-4">
                  The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. No material/information provided on this website should be construed as legal advice. Legal issues are important decisions and must be taken after consulting a practising legal expert.
                </p>
                <p className="mb-4">
                  By not exiting this website and continuing to explore same you agree with above and the detailed disclaimer available on this website.
                </p>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={closeDisclaimer}
                  className="bg-[#E6AF2E] hover:bg-yellow-500 text-[#0A2463] font-bold py-2 px-4 sm:px-6 rounded-md transition-colors duration-300 shadow-md text-sm sm:text-base"
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
