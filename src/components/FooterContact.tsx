import { Send, MapPin, Phone, Mail, Instagram, Linkedin, Twitter } from 'lucide-react';

export const FooterContact = () => {
  return (
    <>
    {/* Contact Section */}
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#1A1A1A] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative">
          
          {/* Abstract Deco */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0A84D6]/20 blur-[100px] rounded-full pointer-events-none"></div>

          {/* Left Info Panel */}
          <div className="lg:w-5/12 p-10 lg:p-16 relative z-10 bg-gradient-to-br from-[#121212] to-[#1A1A1A] border-r border-white/5">
            <h2 className="text-4xl font-bold text-white mb-4">Connect with our Engineering Team</h2>
            <p className="text-gray-400 mb-12">Discuss your renewable energy requirements, EPC projects, or technical inquiries.</p>
            
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#0A84D6] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Corporate Headquarters</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Suite No.08, Plot B20, Sector 23,<br/>Darave Nerul, Thane, Maharashtra<br/>400706, India</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#0A84D6] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Direct Lines</h4>
                  <p className="text-gray-400 text-sm">+91 7997 246 333</p>
                  <p className="text-gray-400 text-sm">+91 72086 84257</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#0A84D6] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Connect</h4>
                  <p className="text-gray-400 text-sm">a.saleem@rabbhuahad.com</p>
                  <p className="text-gray-400 text-sm">yashwanth@rabbhuahad.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="lg:w-7/12 p-10 lg:p-16 relative z-10 bg-white/5">
             <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-white/70 tracking-wide">Full Name</label>
                     <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#0A84D6] focus:ring-1 focus:ring-[#0A84D6] transition" placeholder="John Doe" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-white/70 tracking-wide">Organization / Company</label>
                     <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#0A84D6] transition" placeholder="Your Company" />
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-white/70 tracking-wide">Email Address</label>
                     <input type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#0A84D6] transition" placeholder="john@example.com" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-white/70 tracking-wide">Project Category</label>
                     <select className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#0A84D6] transition appearance-none">
                       <option value="">Select Technology</option>
                       <option value="solar">Solar PV / CSP</option>
                       <option value="hydrogen">Green Hydrogen</option>
                       <option value="storage">Energy Storage (BESS)</option>
                       <option value="zld">Zero Liquid Discharge (ZLD)</option>
                       <option value="other">Other EPC Enquiry</option>
                     </select>
                   </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70 tracking-wide">Detailed Enquiry Message</label>
                  <textarea rows={4} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#0A84D6] transition resize-none" placeholder="Provide details regarding capacity, location, and timeline..."></textarea>
                </div>

                <button type="button" className="w-full lg:w-auto bg-[#0A84D6] hover:bg-blue-600 text-white px-10 py-4 rounded-xl font-bold transition flex items-center justify-center gap-3">
                  Submit Enquiry <Send className="w-4 h-4" />
                </button>
             </form>
          </div>
        </div>
      </div>
    </section>

    {/* Elegant Footer */}
    <footer className="bg-[#0A0F16] text-white pt-24 pb-12 border-t-2 border-[#0A84D6]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0A84D6] to-[#0066FF] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg border border-blue-400/30">RH</div>
                <div className="flex flex-col">
                  <span className="font-bold text-[15px] leading-tight text-white tracking-tight uppercase">Rabb Hu Aahad</span>
                  <span className="text-[0.55rem] text-gray-500 font-medium tracking-[0.2em] uppercase">Energy Industries</span>
                </div>
             </div>
             <p className="text-gray-400 text-sm leading-relaxed mb-6 pe-4">
               Accelerating integrated clean energy transitions for a sustainable tomorrow. <br/>LLPIN: AAV-6293
             </p>
             <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#0A84D6] hover:text-white hover:border-transparent transition"><Linkedin className="w-4 h-4" /></a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#0A84D6] hover:text-white hover:border-transparent transition"><Twitter className="w-4 h-4" /></a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#0A84D6] hover:text-white hover:border-transparent transition"><Instagram className="w-4 h-4" /></a>
             </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold tracking-widest text-[#B48B45] uppercase text-xs mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white text-sm transition">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white text-sm transition">Who We Are</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white text-sm transition">Core Technologies</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white text-sm transition">Global Projects</a></li>
            </ul>
          </div>

          {/* Tech Verticals */}
          <div>
            <h4 className="font-bold tracking-widest text-[#B48B45] uppercase text-xs mb-6">Key Verticals</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-400 text-sm">Solar PV & CSP Systems</span></li>
              <li><span className="text-gray-400 text-sm">Green Hydrogen & Power-to-X</span></li>
              <li><span className="text-gray-400 text-sm">BESS & Thermal Storage</span></li>
              <li><span className="text-gray-400 text-sm">Industrial ZLD Recovery</span></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-bold tracking-widest text-[#B48B45] uppercase text-xs mb-6">Stay Updated</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">Subscribe for strategic insights and renewable market updates.</p>
            <div className="flex border border-white/10 rounded-lg overflow-hidden focus-within:border-[#0A84D6] transition">
              <input type="email" placeholder="Your work email" className="bg-black/30 text-white px-4 py-3 text-sm w-full focus:outline-none" />
              <button className="bg-[#0A84D6] px-5 hover:bg-blue-600 transition flex items-center justify-center text-white"><Send className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500 tracking-wide">
          <p>© {new Date().getFullYear()} Rabb Hu Aahad New Energy Industries LLP. All Rights Reserved.</p>
          <div className="flex space-x-8">
             <a href="#" className="hover:text-white transition">Privacy Policy</a>
             <a href="#" className="hover:text-white transition">Terms of Architecture</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};
