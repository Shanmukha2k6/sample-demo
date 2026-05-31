import { motion } from 'motion/react';
import { Users, TrendingUp, Sprout } from 'lucide-react';

export const Impact = () => {
  return (
    <section id="impact" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#1A1A1A]"></div>
            <span className="text-[#1A1A1A] uppercase tracking-widest text-sm font-semibold">Our Values</span>
          </div>
          <h2 className="text-[34px] lg:text-[40px] font-bold text-[#1f2937] leading-tight mb-4">Social & Economic Impact</h2>
          <p className="text-[#4b5563] text-[17px] leading-[1.75] max-w-2xl mx-auto">
             Rabb Hu Aahad is fundamentally committed to empowering communities, creating green employment, and contributing to a circular, sustainable economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="w-8 h-8" />,
              title: "Community Empowerment",
              desc: "Integrating local workforces and providing equitable opportunities in clean energy zones."
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: "Economic Growth",
              desc: "Fostering local economies with over USD 6 billion in planned clean-energy investments."
            },
            {
              icon: <Sprout className="w-8 h-8" />,
              title: "Environmental Stewardship",
              desc: "Minimizing ecological footprints through long-term sustainable operating practices."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-blue-50 text-[#0A84D6] rounded-full flex items-center justify-center mb-6">
                 {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-4">{item.title}</h3>
              <p className="text-[#4b5563] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
