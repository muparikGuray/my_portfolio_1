import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Send } from 'lucide-react';

interface WhatsAppWidgetProps {
  phoneNumber: string;
  message?: string;
  position?: 'bottom-right' | 'bottom-left';
}

const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ 
  phoneNumber, 
  message = "Hello! I'm interested in your services.",
  position = 'bottom-right'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState(message);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show widget after page loads
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const formatPhoneNumber = (phone: string) => {
    // Remove all non-numeric characters and ensure proper format
    return phone.replace(/\D/g, '');
  };

  const openWhatsApp = () => {
    const formattedPhone = formatPhoneNumber(phoneNumber);
    const encodedMessage = encodeURIComponent(customMessage);
    
    // Check if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    let whatsappUrl;
    if (isMobile) {
      // Mobile: Use WhatsApp app URL
      whatsappUrl = `whatsapp://send?phone=${formattedPhone}&text=${encodedMessage}`;
    } else {
      // Desktop: Use WhatsApp Web
      whatsappUrl = `https://web.whatsapp.com/send?phone=${formattedPhone}&text=${encodedMessage}`;
    }
    
    // Fallback to WhatsApp Web if app doesn't open
    const fallbackUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
    
    try {
      window.open(whatsappUrl, '_blank');
      // Fallback after 2 seconds if app doesn't open
      setTimeout(() => {
        window.open(fallbackUrl, '_blank');
      }, 2000);
    } catch (error) {
      // Direct fallback
      window.open(fallbackUrl, '_blank');
    }
    
    setIsOpen(false);
  };

  const positionClasses = position === 'bottom-right' 
    ? 'bottom-6 right-6' 
    : 'bottom-6 left-6';

  if (!isVisible) return null;

  return (
    <div className={`fixed ${positionClasses} z-50`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-green-200 dark:border-green-700 p-6 w-80 max-w-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    WhatsApp Chat
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Typically replies instantly
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Message:
              </label>
              <textarea
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                rows={3}
                placeholder="Type your message here..."
              />
            </div>
            
            <button
              onClick={openWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </button>
            
            <div className="mt-3 text-center">
              <a
                href={`tel:${phoneNumber}`}
                className="text-sm text-green-600 dark:text-green-400 hover:underline flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-1" />
                Or call {phoneNumber}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          scale: [1, 1.1, 1],
          boxShadow: [
            '0 10px 25px rgba(34, 197, 94, 0.3)',
            '0 15px 35px rgba(34, 197, 94, 0.4)',
            '0 10px 25px rgba(34, 197, 94, 0.3)'
          ]
        }}
        transition={{ 
          scale: { repeat: Infinity, duration: 2 },
          boxShadow: { repeat: Infinity, duration: 2 }
        }}
      >
        {isOpen ? (
          <X className="w-8 h-8" />
        ) : (
          <MessageCircle className="w-8 h-8" />
        )}
      </motion.button>
    </div>
  );
};

export default WhatsAppWidget;