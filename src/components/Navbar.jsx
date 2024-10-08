import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = ['DESTINATION', 'OUR ACTIVITY', 'ACCOMPANIED', 'TAILOR-MADE TRIPS', 'CRUISES', 'WHO WE ARE?'];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="relative p-1 text-white">
      <div className="absolute top-0 right-0 p-2 flex items-center space-x-4 text-sm">
        <a href="mailto:travelosales@gmail.com" className="hover:text-gray-300 flex items-center">
          <MailOutlineIcon className="mr-1" />
          <span className="hidden sm:inline">travelo@gmail.com</span>
        </a>
        <a href="tel:+919999999999" className="hover:text-gray-300 flex items-center">
          <PhoneAndroidIcon className="mr-1" />
          <span className="hidden sm:inline">+91 999 999 9999</span>
        </a>
      </div>
      <div className="flex justify-between items-center mt-8">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold"
        >
          TRAVALO
        </motion.h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {navItems.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href="#" className="hover:text-gray-300">{item}</a>
              </motion.li>
            ))}
          </ul>
        </nav>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <MenuIcon />
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <button className="absolute top-4 right-4 text-white" onClick={toggleMenu}>
                <CloseIcon />
              </button>
              <nav>
                <ul className="flex flex-col items-center space-y-4">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <a href="#" className="text-white text-xl hover:text-gray-300">{item}</a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;