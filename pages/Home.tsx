import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Wheat, Package, CheckCircle, ShieldCheck, Users, Map, ArrowRight, Anchor, Timer } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2940&auto=format&fit=crop" 
            alt="Heavy duty truck on highway"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 blue-steel-overlay"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Typography */}
            <div className="lg:col-span-7 animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tighter leading-none mb-6">
                MOVING NIGERIAN<br/>
                <span className="text-brand-green">BUSINESS FORWARD.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-light max-w-xl leading-relaxed mb-10 border-l-2 border-brand-green pl-6">
                Reliable Port-to-Warehouse Logistics & Agricultural Supply Since 2006.
              </p>
              <div className="flex gap-4">
                  <Link to="/services" className="hidden md:inline-flex items-center gap-2 border border-white text-white px-8 py-3 text-sm font-bold tracking-widest hover:bg-white hover:text-brand-blue transition-colors">
                    EXPLORE SERVICES <ArrowRight size={16} />
                  </Link>
              </div>
            </div>

            {/* Right: Glassmorphism UX Action */}
            <div className="lg:col-span-5">
               <div className="glass-panel p-8 md:p-10 rounded-none relative">
                  <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-brand-green"></div>
                  <h3 className="text-2xl font-heading font-bold mb-6">Request a Quote</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-wider text-gray-300">Pickup Location</label>
                            <input type="text" placeholder="Lagos Port" className="w-full bg-black/20 border border-white/20 text-white p-3 text-sm focus:border-brand-green focus:outline-none" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-wider text-gray-300">Destination</label>
                            <input type="text" placeholder="Warehouse City" className="w-full bg-black/20 border border-white/20 text-white p-3 text-sm focus:border-brand-green focus:outline-none" />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs uppercase tracking-wider text-gray-300">Phone Number</label>
                        <input type="tel" placeholder="080..." className="w-full bg-black/20 border border-white/20 text-white p-3 text-sm focus:border-brand-green focus:outline-none" />
                    </div>
                    <button className="w-full bg-brand-green text-white font-bold uppercase tracking-widest py-4 hover:bg-green-600 transition-colors mt-4">
                        Get Estimate
                    </button>
                  </form>
               </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
            <ArrowRight size={24} className="rotate-90" />
        </div>
      </section>

      {/* 2. Trust & Authority Bar */}
      <section className="bg-brand-light border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between gap-6 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {["Registered Company (RC)", "19+ Years Experience", "GPS Tracked Fleet", "Licensed Export Partners"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-widest">
                    <CheckCircle size={16} className="text-brand-green" /> {item}
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services: Bento Grid Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-blue mb-4">Our Operations</h2>
                <div className="w-20 h-1 bg-brand-green"></div>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-2 text-brand-slate hover:text-brand-green transition-colors font-bold text-sm uppercase tracking-widest">
                View All Services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
            {/* Large Card - Left */}
            <Link to="/services" className="md:col-span-2 row-span-2 relative group overflow-hidden border border-gray-100">
               <img 
                src="https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=2072&auto=format&fit=crop" 
                alt="Logistics Port" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               />
               <div className="absolute inset-0 bg-brand-blue/60 group-hover:bg-brand-blue/40 transition-colors"></div>
               <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                  <div className="mb-4 text-brand-green bg-white/10 w-fit p-3 backdrop-blur-sm border border-white/10">
                    <Anchor size={32} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">Logistics & Haulage</h3>
                  <p className="text-gray-300 max-w-md border-l border-brand-green pl-4 text-sm md:text-base">Port-to-Warehouse delivery, container haulage, and inter-state trucking.</p>
                  <div className="absolute right-8 bottom-8 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-brand-blue p-3 rounded-full">
                      <ArrowRight size={24} />
                  </div>
               </div>
            </Link>

            {/* Medium Card - Top Right */}
            <Link to="/services" className="relative group overflow-hidden border border-gray-100">
                <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop" 
                alt="Agriculture" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               />
               <div className="absolute inset-0 bg-brand-blue/50 group-hover:bg-brand-blue/30 transition-colors"></div>
               <div className="absolute bottom-0 left-0 p-8 w-full">
                  <Wheat className="text-brand-green mb-4" size={28} />
                  <h3 className="text-2xl font-heading font-bold text-white">Commercial Agriculture</h3>
               </div>
            </Link>

            {/* Medium Card - Bottom Right */}
            <Link to="/services" className="relative group overflow-hidden bg-brand-light border border-gray-100 flex flex-col justify-center p-8 hover:bg-brand-blue hover:text-white transition-colors duration-300">
               <div className="flex justify-between items-start mb-6">
                  <Timer size={32} className="text-brand-blue group-hover:text-brand-green" />
                  <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
               </div>
               <h3 className="text-2xl font-heading font-bold text-brand-blue group-hover:text-white mb-2">Dedicated Truck Charter</h3>
               <p className="text-brand-slate group-hover:text-gray-400 text-sm">Exclusive fleet access for high-priority cargo.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. The "Why Us" Data Visualization */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-gray-200">
                <div className="px-4 py-8 md:py-0">
                    <span className="block text-6xl md:text-8xl font-heading font-extrabold text-brand-blue tracking-tighter mb-2">2006</span>
                    <span className="text-sm font-bold text-brand-green uppercase tracking-widest block mb-2">Established</span>
                    <p className="text-brand-slate">Over 19 years of consistent operational excellence in Nigeria.</p>
                </div>
                <div className="px-4 py-8 md:py-0 pl-8">
                    <span className="block text-6xl md:text-8xl font-heading font-extrabold text-brand-blue tracking-tighter mb-2">100%</span>
                    <span className="text-sm font-bold text-brand-green uppercase tracking-widest block mb-2">Safety Record Focus</span>
                    <p className="text-brand-slate">Strict protocols ensuring your cargo arrives intact, every time.</p>
                </div>
                <div className="px-4 py-8 md:py-0 pl-8">
                    <span className="block text-6xl md:text-8xl font-heading font-extrabold text-brand-blue tracking-tighter mb-2">36</span>
                    <span className="text-sm font-bold text-brand-green uppercase tracking-widest block mb-2">States Covered</span>
                    <p className="text-brand-slate">Nationwide network reaching every corner of the federation.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 5. Call to Action */}
      <section className="bg-brand-blue py-24 relative overflow-hidden">
         <div className="absolute right-0 top-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top"></div>
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">Ready to move?</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Experience the difference of a logistics partner that prioritizes precision and integrity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/contact" className="bg-brand-green text-white px-10 py-5 font-bold tracking-widest uppercase hover:bg-green-600 transition-all text-sm">
                    Start Your Project
                </Link>
                <a href="tel:09126428088" className="bg-transparent border border-white/20 text-white px-10 py-5 font-bold tracking-widest uppercase hover:bg-white hover:text-brand-blue transition-all text-sm">
                    Call 09126428088
                </a>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;