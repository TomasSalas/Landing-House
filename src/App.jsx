import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Clock, Phone } from 'lucide-react'
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa6'
import Logo from './assets/LogoNew.png'

export default function Home () {
  const [scrollY, setScrollY] = useState(0)
  const [activeLocation, setActiveLocation] = useState(null)
  const locationsRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToLocations = () => {
    locationsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='relative overflow-x-hidden bg-white'>
      {/* Background elements */}
      <div className='fixed inset-0 z-0 opacity-10'>
        <div className='absolute top-20 left-10 w-64 h-64 rounded-full bg-[#F9C041] blur-3xl' />
        <div className='absolute bottom-40 right-10 w-80 h-80 rounded-full bg-[#852E2E] blur-3xl' />
      </div>

      {/* Navigation */}
      <motion.nav
        className={`w-full h-20 flex items-center justify-center fixed top-0 left-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-white/90 shadow-md backdrop-blur-md' : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className='relative h-12 w-[180px] mb-4'
        >
          <div className=' text-white font-bold text-xl px-4 py-2 rounded-lg'>
            <img src={Logo} width={180} />
          </div>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        id='inicio'
        className='min-h-screen flex flex-col justify-center items-center p-6 md:p-12 pt-24 relative z-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='absolute inset-0 z-0 overflow-hidden'>
          <div className='absolute top-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-[#F9C041]/10 blur-3xl' />
          <div className='absolute bottom-1/4 left-[-10%] w-[400px] h-[400px] rounded-full bg-[#852E2E]/10 blur-3xl' />
        </div>

        <div className='max-w-6xl mx-auto w-full flex flex-col items-center relative z-10'>
          <motion.h2
            className='text-[#852E2E] md:text-7xl text-5xl font-bold font-[chorine-large] text-center'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
          >
            Bienvenido a The House
          </motion.h2>

          <motion.h2
            className='text-[#F9C041] md:text-5xl text-3xl font-[baloo-2] text-center mt-4 mb-8'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
          >
            Si quieres probar la experiencia The House desliza y pide!
          </motion.h2>

          <motion.div
            className='flex flex-col sm:flex-row gap-4 mt-6'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6, ease: 'easeOut' }}
          >
            <motion.button
              className='px-8 py-4 bg-[#852E2E] rounded-2xl text-white text-lg font-medium hover:cursor-pointer'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={scrollToLocations}
            >
              Conocenos
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Locations Section */}
      <motion.section
        ref={locationsRef}
        id='ubicaciones'
        className='min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 relative z-10 bg-gradient-to-b from-white to-gray-50'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className='max-w-6xl mx-auto w-full'>
          <motion.div
            className='text-center mb-16'
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl md:text-5xl font-bold text-[#852E2E] font-[chorine-large] mb-4'>Nuestras Ubicaciones</h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>Encuentra el restaurante The House más cercano y disfruta de nuestra deliciosa comida</p>
          </motion.div>

          <div className='flex md:flex-row flex-col gap-8 max-w-4xl mx-auto'>
            <motion.div
              className='w-full md:w-1/2 rounded-2xl p-8 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden'
              initial={{ scale: 0.9, opacity: 0, x: -50 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setActiveLocation('San Felipe')}
              onHoverEnd={() => setActiveLocation(null)}
            >
              <div className='absolute top-0 right-0 w-32 h-32 bg-[#F9C041]/20 rounded-bl-full -mr-10 -mt-10' />

              <div className='relative z-10'>
                <div className='flex items-center mb-4'>
                  <MapPin className='text-[#852E2E] mr-2' size={24} />
                  <h3 className='text-2xl font-[baloo-2] text-[#852E2E]'>San Felipe</h3>
                </div>

                <p className='text-gray-600 mb-6'>Ramón Freire 161, San Felipe</p>

                <div className='flex items-center mb-4'>
                  <Clock className='text-[#852E2E] mr-2' size={20} />
                  <p className='text-gray-700'>Lun - Juev: 18:00 - 00:00</p>
                </div>
                <div className='flex items-center mb-4'>
                  <Clock className='text-[#852E2E] mr-2' size={20} />
                  <p className='text-gray-700'>Vie - Dom: 18:00 - 01:00</p>
                </div>

                <motion.button
                  className='px-6 py-3 bg-[#852E2E] rounded-xl text-white hover:cursor-pointer hover:bg-opacity-90 transition-colors w-full'
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => window.open('https://menu.fu.do/thehouseburgers&fries', '_blank')}

                >
                  Ver Carta
                </motion.button>
              </div>

              <AnimatePresence>
                {activeLocation === 'San Felipe' && (
                  <motion.div
                    className='absolute bottom-0 left-0 h-1 bg-[#F9C041]'
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    exit={{ width: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              className='w-full md:w-1/2 rounded-2xl p-8 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden'
              initial={{ scale: 0.9, opacity: 0, x: 50 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setActiveLocation('Los Andes')}
              onHoverEnd={() => setActiveLocation(null)}
            >
              <div className='absolute top-0 right-0 w-32 h-32 bg-[#F9C041]/20 rounded-bl-full -mr-10 -mt-10' />

              <div className='relative z-10'>
                <div className='flex items-center mb-4'>
                  <MapPin className='text-[#852E2E] mr-2' size={24} />
                  <h3 className='text-2xl font-[baloo-2] text-[#852E2E]'>Los Andes</h3>
                </div>

                <p className='text-gray-600 mb-6'>San Rafael 1720, Los Andes</p>

                <div className='flex items-center mb-4'>
                  <Clock className='text-[#852E2E] mr-2' size={20} />
                  <p className='text-gray-700'>Lun - Juev: 18:00 - 00:00</p>
                </div>
                <div className='flex items-center mb-4'>
                  <Clock className='text-[#852E2E] mr-2' size={20} />
                  <p className='text-gray-700'>Vie - Dom: 18:00 - 01:00</p>
                </div>

                <motion.button
                  className='px-6 py-3 bg-[#852E2E] rounded-xl text-white hover:cursor-pointer hover:bg-opacity-90 transition-colors w-full'
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => window.open('https://menu.fu.do/thehouselosandes', '_blank')}
                >
                  Ver Carta
                </motion.button>
              </div>

              <AnimatePresence>
                {activeLocation === 'Los Andes' && (
                  <motion.div
                    className='absolute bottom-0 left-0 h-1 bg-[#F9C041]'
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    exit={{ width: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className='py-20 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white relative z-10'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      {/* Call to Action */}
      <motion.section
        className='py-20 px-6 md:px-12 relative z-10'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className='max-w-6xl mx-auto'>
          <motion.div
            className='bg-[#852E2E] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden'
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className='absolute top-0 right-0 w-64 h-64 bg-[#F9C041]/20 rounded-full -mr-32 -mt-32' />
            <div className='absolute bottom-0 left-0 w-64 h-64 bg-[#F9C041]/10 rounded-full -ml-32 -mb-32' />

            <div className='relative z-10'>
              <h2 className='text-4xl md:text-5xl font-bold font-[chorine-large] mb-6'>¿Listo para probar The House?</h2>
              <p className='text-xl text-white/80 max-w-2xl mx-auto mb-8'>Haz tu pedido ahora y disfruta de la mejor experiencia gastronómica en la comodidad de tu hogar</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        id='contacto'
        className='bg-[#1F1F1F] text-white py-16 px-6 md:px-12 relative z-10'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
            <div className='col-span-1 md:col-span-1'>
              <div className='mb-6'>
                <div className='font-bold text-xl px-4 py-2 rounded-lg inline-block'>
                  <img src={Logo} />
                </div>
              </div>

              <p className='mb-6 text-white'>Disfruta de la mejor experiencia gastronómica con sabores únicos y un ambiente acogedor.</p>

              <div className='flex space-x-4'>
                <a
                  onClick={() => window.open('https://www.facebook.com/people/The-House-Burgers-and-Fries/61558592062046/', '_blank')}
                  className='w-10 h-10 rounded-full bg-[#852E2E] flex items-center justify-center hover:bg-[#F9C041] transition-colors'
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  onClick={() => window.open('https://www.instagram.com/thehouse_cl/', '_blank')}
                  className='w-10 h-10 rounded-full bg-[#852E2E] flex items-center justify-center hover:bg-[#F9C041] transition-colors'
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  onClick={() => window.open('https://wa.me/+56932642903', '_blank')}
                  className='w-10 h-10 rounded-full bg-[#852E2E] flex items-center justify-center hover:bg-[#F9C041] transition-colors'
                >
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className='text-xl font-bold mb-6 text-[#F9C041]'>San Felipe</h3>
              <ul className='space-y-3 text-gray-400'>
                <li className='flex items-start'>
                  <MapPin className='mr-2 mt-1 text-[#F9C041]' size={16} />
                  <span className='text-white'>Ramón Freire 161</span>
                </li>
                <li className='flex items-start'>
                  <Phone className='mr-2 mt-1 text-[#F9C041]' size={16} />
                  <span className='text-white'>+56 9 1234 5678</span>
                </li>
                <li className='flex items-start'>
                  <Clock className='mr-2 mt-1 text-[#F9C041]' size={16} />
                  <span className='text-white'>Lun - Dom: 12:00 - 23:00</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-xl font-bold mb-6 text-[#F9C041]'>Los Andes</h3>
              <ul className='space-y-3 text-gray-400'>
                <li className='flex items-start'>
                  <MapPin className='mr-2 mt-1 text-[#F9C041]' size={16} />
                  <span className='text-white'>San Rafael 1720</span>
                </li>
                <li className='flex items-start'>
                  <Phone className='mr-2 mt-1 text-[#F9C041]' size={16} />
                  <span className='text-white'>+56 9 8765 4321</span>
                </li>
                <li className='flex items-start'>
                  <Clock className='mr-2 mt-1 text-[#F9C041]' size={16} />
                  <span className='text-white'>Lun - Dom: 12:00 - 23:00</span>
                </li>
              </ul>
            </div>
          </div>

          <div className='border-t border-white/50 mt-12 pt-8 text-center text-white'>
            <p>© {new Date().getFullYear()} The House. Todos los derechos reservados.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
