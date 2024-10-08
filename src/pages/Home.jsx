import { useState } from 'react'
import { motion } from 'framer-motion'
import { TextField, Button, Menu, MenuItem, useMediaQuery } from '@mui/material'
import { Search, Place, AccessTime, AttachMoney } from '@mui/icons-material'
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import Navbar from '../components/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';

const destinations = [
  { name: 'HIMALAYA', image: 'https://images.unsplash.com/photo-1615415772324-d235a656a9e8?q=80&w=1833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'KERALA', image: 'https://images.unsplash.com/photo-1714489896584-233675ee2f62?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'LADAKH', image: 'https://images.unsplash.com/photo-1566323124620-d22adb71d2a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'KASHMIR', image: 'https://images.unsplash.com/photo-1587482779731-7a9ef63bd286?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'GOA', image: 'https://images.unsplash.com/photo-1652820330085-82a0c2b88d78?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'UDAIPUR', image: 'https://images.unsplash.com/photo-1724947053227-2335bf21d0ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isBlurring, setIsBlurring] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSlideChange = (newIndex) => {
    setIsBlurring(true); // Start the blur effect
    setTimeout(() => {
      setSelectedIndex(newIndex); // Change the slide
      setIsBlurring(false); // End the blur effect
    }, 500); // This duration matches the animation duration
  };

  return (
    <div
      className="h-screen bg-cover bg-center relative px-8"
      style={{ backgroundImage: `url(${destinations[selectedIndex].image})` }}
    >
      <Navbar />

      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center">
        <ArrowCircleLeftTwoToneIcon
          className="cursor-pointer"
          onClick={() =>
            handleSlideChange(selectedIndex > 0 ? selectedIndex - 1 : destinations.length - 1)
          }
        />
        <ArrowCircleRightTwoToneIcon
          className="text-8xl cursor-pointer"
          onClick={() =>
            handleSlideChange(selectedIndex < destinations.length - 1 ? selectedIndex + 1 : 0)
          }
        />
      </div>

         {isBlurring && (
        <motion.div
          initial={{ opacity: 0, filter: 'blur(0px)' }}
          animate={{ opacity: 1, filter: 'blur(10px)' }}
          exit={{ opacity: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-black/30 z-10"
        />
      )}

      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 py-8">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl text-white mb-4 font-ceda text-center"
        >
          Explore Beautiful
        </motion.h2>

        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-9xl font-bold text-white"
          >
            {destinations[selectedIndex].name}
          </motion.h1>
        </div>

      
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`
            backdrop-blur-md bg-white/50
            ${isMobile ? 'rounded-xl' : 'rounded-full'}
            p-2 flex flex-col md:flex-row items-center
            space-y-4 md:space-y-0 md:space-x-4 w-full max-w-4xl
          `}
        >
         <TextField
                  variant="outlined"
                  placeholder="Destination"
                  fullWidth
                  InputProps={{
                    startAdornment: <Place className="text-white" />,
                  }}
                  sx={{ 
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '9999px', 
                      borderColor: 'white',
                      color: 'white',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: 'white',
                      opacity: 0.7,
                    },
                  }}
                />
                <TextField
                  variant="outlined"
                  placeholder="Kind of Trip"
                  fullWidth
                  InputProps={{
                    startAdornment: <AccessTime className="text-white" />,
                  }}
                  sx={{ 
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '9999px', 
                      borderColor: 'white',
                      color: 'white',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: 'white',
                      opacity: 0.7,
                    },
                  }}
                  
                />
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      backdropFilter: 'blur(8px)',
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      position: 'fixed',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    },
                  }}
                >
                  {['Adventure', 'Relaxation', 'Cultural', 'Beach'].map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
                <TextField
                  variant="outlined"
                  placeholder="Activities & Themes"
                  fullWidth
                  InputProps={{
                    startAdornment: <AccessTime className="text-white" />,
                  }}
                  sx={{ 
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '9999px', 
                      borderColor: 'white',
                      color: 'white',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: 'white',
                      opacity: 0.7,
                    },
                  }}
                />
                <TextField
                  variant="outlined"
                  placeholder="Average Price"
                  fullWidth
                  InputProps={{
                    startAdornment: <AttachMoney className="text-white" />,
                  }}
                  sx={{ 
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '9999px', 
                      borderColor: 'white',
                      color: 'white',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: 'white',
                      opacity: 0.7,
                    },
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Search />}
                  fullWidth={isMobile}
                  sx={{
                    borderRadius: '9999px',
                    backgroundColor: '#90EE90',
                    color: 'white',
                    
                    border: '1px solid',
                    '&:hover': {
                      backgroundColor: '#7CCD7C',
                    },
                  }}
                 />
        </motion.div>
      </main>

      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        {destinations.map((destination, index) => (
          <SwiperSlide key={index}></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
