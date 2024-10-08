
import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <footer className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-white"
        >
          Kashmir
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-white"
        >
          Kerala
        </motion.button>
      </footer>
  )
}

export default Footer
