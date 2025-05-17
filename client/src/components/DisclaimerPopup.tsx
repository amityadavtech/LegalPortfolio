import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the disclaimer has been shown before
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    
    if (!hasSeenDisclaimer) {
      // If not, show the disclaimer after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const closeDisclaimer = () => {
    // Mark that the user has seen the disclaimer
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
            className="bg-white rounded-lg shadow-2xl w-full max-w-lg relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <div className="bg-[#0A2463] h-2 w-full"></div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-serif font-bold text-[#0A2463]">
                  Legal Disclaimer
                </h2>
                <button 
                  onClick={closeDisclaimer}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              
              <div className="prose max-w-none mb-6">
                <p className="mb-4">
                  The Bar Council of India prohibits advocates from advertising or soliciting in any form. By accessing https://vakeel-saab.in/, you confirm that you are seeking information about Aftab Ali Ansari & Associates voluntarily, with no solicitation, advertisement, or inducement by the firm or its members. The site content is for informational purposes only and should not be viewed as solicitation or legal advice. Legal matters should be addressed with a practising legal expert. By continuing to browse, you agree to this and the full disclaimer on the website.
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
