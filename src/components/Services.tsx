import { motion } from 'motion/react';
import { Sun, Wind, Droplets, BatteryCharging, Factory, Zap, Shield, ArrowRight } from 'lucide-react';

export const Technology = () => {
  const services = [
    {
      title: "Green Hydrogen Framework",
      desc: "Advanced architectures for scalable hydrogen generation, driving deep industrial decarbonization.",
      icon: <Droplets className="w-8 h-8" />,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100 hover:border-emerald-200"
    },
    {
      title: "Sustainable Desalination",
      desc: "Energy-efficient water purification technologies leveraging renewable power sources.",
      icon: <Droplets className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600 border-blue-100 hover:border-blue-200"
    },
    {
      title: "Maritime Clean-Fuel",
      desc: "Optimized green-fuel supply chains serving next-generation sustainable maritime logistics.",
      icon: <Factory className="w-8 h-8" />,
      color: "bg-cyan-50 text-cyan-600 border-cyan-100 hover:border-cyan-200"
    },
    {
      title: "Smart Robotics Infrastructure",
      desc: "Automated urban solutions, including intelligent robotic parking systems.",
      icon: <Zap className="w-8 h-8" />,
      color: "bg-purple-50 text-purple-600 border-purple-100 hover:border-purple-200"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0A84D6]"></div>
              <span className="text-[#0A84D6] uppercase tracking-[0.2em] text-[11px] font-bold">Innovation</span>
            </div>
            <h2 className="text-[32px] lg:text-[40px] font-bold text-[#1f2937] leading-tight mb-2 tracking-tight">
              Technology Integration
            </h2>
          </div>
          <p className="text-[16px] text-[#4b5563] max-w-md pb-2 leading-relaxed">
            Combining advanced technological frameworks with strategic engineering to develop low-carbon solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white cursor-pointer group flex flex-col h-full`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors bg-gray-50 text-[#0A84D6] group-hover:bg-[#0A84D6] group-hover:text-white`}>
                {svc.icon}
              </div>
              <h3 className="text-[18px] font-bold text-[#1f2937] mb-3 tracking-tight">{svc.title}</h3>
              <p className="text-[#4b5563] text-[14px] leading-relaxed mb-6 flex-grow">{svc.desc}</p>
              
              <div className="flex items-center text-[13px] font-bold text-[#1f2937] group-hover:text-[#0A84D6] mt-auto uppercase tracking-wide">
                Discover <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
