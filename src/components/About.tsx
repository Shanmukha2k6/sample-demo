import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      {/* Minimal background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[80px] pointer-events-none -z-10"></div>
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-6 lg:p-10 mx-auto w-full max-w-[500px] lg:max-w-none"
          >
            {/* Minimal solid background accent */}
            <div className="absolute top-0 left-0 w-4/5 h-4/5 bg-gray-50 rounded-3xl -z-10"></div>
            
            {/* Image itself */}
            <div className="relative z-10 w-full aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80" 
                alt="Solar Energy Infrastructure" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 object-center" 
              />
            </div>
            
            {/* Small subtle accent */}
            <div className="absolute bottom-4 right-4 lg:bottom-0 lg:right-0 w-24 h-24 bg-[#0A84D6]/5 rounded-full blur-xl -z-10"></div>
          </motion.div>

          {/* Right Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-4 lg:pr-10"
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]"></div>
              <span className="text-[#1A1A1A] uppercase tracking-[0.2em] text-[11px] font-bold">Company Profile</span>
            </div>
            
            <h2 className="text-[32px] lg:text-[40px] font-bold text-[#1f2937] leading-[1.2] mb-2 tracking-tight">
              About Rabb Hu Aahad
            </h2>
            
            <p className="text-[16px] text-[#4b5563] leading-[1.8]">
              Rabb Hu Aahad New Energy Industries LLP is a clean-energy company established to develop green hydrogen and sustainable fuel infrastructure projects. We aim to support industrial decarbonization and the transition toward low-carbon energy systems.
            </p>

            <p className="text-[16px] text-[#4b5563] leading-[1.8]">
              We focus on building integrated clean-energy solutions by combining advanced technology, infrastructure expertise, and strategic partnerships. As part of our long-term vision, we plan to explore sustainability-focused infrastructure opportunities, including:
            </p>

            <ul className="space-y-4 pt-4 pb-4">
              {[
                "Desalination plants",
                "Maritime clean-fuel solutions",
                "Renewable-energy-linked infrastructure",
                "Smart urban infrastructure (e.g. robotic parking)"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start group">
                  <div className="mt-1 mr-4 text-[#0A84D6] flex-shrink-0 transition-transform group-hover:scale-110">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0A84D6]"></div>
                  </div>
                  <span className="text-[#374151] font-medium text-[15px] block">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mt-2">
              <p className="text-[15px] text-[#4b5563] leading-relaxed">
                Rabb Hu Aahad has outlined a <strong className="font-semibold text-[#1f2937]">planned investment of over USD 6 billion over the next five years</strong> toward clean-energy project development.
              </p>
            </div>

            {/* Vision and Mission Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0A84D6]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg>
                  </div>
                  <h3 className="text-[18px] font-bold text-[#1f2937] tracking-tight">Our Vision</h3>
                </div>
                <p className="text-[14px] text-[#4b5563] leading-relaxed">
                  To be a global leader in clean-energy transitions by investing in resilient infrastructure and advancing the scale of green technologies. 
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  </div>
                  <h3 className="text-[18px] font-bold text-[#1f2937] tracking-tight">Our Mission</h3>
                </div>
                <p className="text-[14px] text-[#4b5563] leading-relaxed">
                  To accelerate industrial decarbonization through robust partnerships, sustainable fuel pathways, and strategic global investments.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
