import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 pb-12 flex items-center bg-white overflow-hidden">
      {/* Clean Minimal Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0A84D6]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 lg:ml-12"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center space-x-3 pt-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#0A84D6]"></div>
              <span className="text-[#0A84D6] uppercase tracking-[0.2em] text-[11px] font-bold">Sustainable Energy Innovation</span>
            </motion.div>
            
            <h1 className="text-[42px] md:text-[52px] lg:text-[60px] font-bold text-[#111827] leading-[1.1] tracking-tight">
              Powering the future<br/>
              through <span className="text-[#0A84D6]">renewable</span><br/>
              innovation.
            </h1>
            
            <p className="text-[16px] md:text-[18px] text-[#4b5563] max-w-[500px] leading-[1.7]">
              Integrated renewable energy solutions covering Solar PV, CSP, Green Hydrogen, Energy Storage, and Sustainable Technologies.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#services" className="px-8 py-3.5 bg-[#0A84D6] text-white rounded-xl font-medium shadow-sm hover:shadow-md hover:bg-blue-700 transition flex items-center gap-2 group text-sm">
                Explore Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-8 py-3.5 bg-white text-[#111827] border border-gray-200 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-300 transition text-sm">
                Contact Us
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-gray-100 mt-2">
              <div>
                <div className="text-2xl font-bold text-[#1A1A1A]">25+</div>
                <div className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-wider">Years Exp.</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0A84D6]">500<span className="text-sm text-[#0A84D6] font-medium">GW</span></div>
                <div className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-wider">Target Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#B48B45]">5M<span className="text-sm text-[#B48B45] font-medium">T</span></div>
                <div className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-wider">Green Hydrogen</div>
              </div>
            </div>
          </motion.div>

          {/* Right Clean Image Layout */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative py-10 lg:py-0 w-full flex items-center justify-center lg:justify-end"
          >
             <div className="relative w-full max-w-[480px] lg:max-w-[520px] aspect-[4/3.5] lg:aspect-square z-10 group">
               
               {/* Main Image */}
               <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl bg-gray-100 border border-white/50">
                 <img 
                   src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80" 
                   alt="Solar Energy Facility" 
                   className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/30 to-transparent"></div>
               </div>
               
               {/* Floating Badge */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.8, duration: 0.5 }}
                 className="absolute -bottom-6 -left-6 lg:bottom-12 lg:-left-12 bg-white/90 backdrop-blur-md p-4 lg:p-5 rounded-2xl shadow-xl border border-gray-100/50 flex items-center gap-3"
               >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 font-bold border border-green-100 text-sm lg:text-base">
                     100%
                  </div>
                  <div>
                    <p className="text-sm lg:text-base font-bold text-gray-900 leading-tight">Clean Energy</p>
                    <p className="text-[11px] lg:text-xs text-gray-500 font-medium tracking-wide">Zero Emissions Target</p>
                  </div>
               </motion.div>
             </div>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
};
