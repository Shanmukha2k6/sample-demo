import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';

export const Directors = () => {
  const directors = [
    {
      name: "Dr. Abdulla Saleem",
      role: "Founder & Chairman",
      image: "https://res.cloudinary.com/dx0rg0wvk/image/upload/v1780244902/Gemini_Generated_Image_9yrs3w9yrs3w9yrs_1_keeuaa.png",
      bio: "Over 25 years of experience in driving global sustainable energy initiatives and strategic investments."
    },
    {
      name: "Mr. Yashwanth Kumar Pasupulati",
      role: "Director",
      image: "https://res.cloudinary.com/dx0rg0wvk/image/upload/v1780245007/Gemini_Generated_Image_u1g0jnu1g0jnu1g0_1_dvulkd.png",
      bio: "Specializes in executing large-scale green hydrogen and solar energy infrastructure projects."
    }
  ];

  return (
    <section id="directors" className="py-24 bg-gray-50 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0A84D6]"></div>
            <span className="text-[#0A84D6] uppercase tracking-[0.2em] text-[11px] font-bold">Leadership</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#0A84D6]"></div>
          </div>
          <h2 className="text-[32px] lg:text-[40px] font-bold text-[#1f2937] leading-tight mb-4 tracking-tight">
            Board of Directors
          </h2>
          <p className="text-[16px] text-[#4b5563] leading-relaxed">
            Our visionary leaders are committed to accelerating industrial decarbonization and scaling green technologies globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {directors.map((director, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-[2rem] p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-6 bg-gray-100">
                <img 
                  src={director.image} 
                  alt={director.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 flex space-x-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0A84D6] hover:bg-[#0A84D6] hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0A84D6] hover:bg-[#0A84D6] hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="text-center px-4 pb-2">
                <h3 className="text-[20px] font-bold text-[#1f2937] tracking-tight">{director.name}</h3>
                <p className="text-[14px] text-[#0A84D6] font-semibold tracking-wide uppercase mt-1 mb-4">{director.role}</p>
                <p className="text-[14px] text-[#4b5563] leading-relaxed">
                  {director.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
