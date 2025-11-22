import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, Smile, Activity, Heart, TrendingUp, Target, Anchor, CheckCircle, ArrowRight, Award, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white font-sans text-brand-blue">
      
      {/* 1. Hero Section: Impactful Industrial Header */}
      <section className="relative py-32 md:py-48 bg-brand-blue overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1580674285054-bed31e140f5b?q=80&w=2940&auto=format&fit=crop" 
            alt="Industrial Warehouse Logistics" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block py-1 px-3 border border-brand-green text-brand-green text-xs font-bold uppercase tracking-widest mb-6">
              Since 2006
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tighter leading-none mb-8">
              INTEGRITY.<br/>
              PRECISION.<br/>
              <span className="text-brand-green">EXCELLENCE.</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl border-l-4 border-brand-green pl-6">
              W.A. Lawal Investment Nigeria Limited is a leading indigenous company bridging the gap between agricultural production and industrial logistics.
            </p>
          </div>
        </div>
      </section>

      {/* 2. The Firm: Introduction with Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div>
              <h2 className="text-sm font-bold text-brand-green uppercase tracking-widest mb-2">Who We Are</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-blue mb-6">
                More than just a service provider—we are your strategic partner.
              </h3>
              <div className="prose prose-lg text-brand-slate leading-loose">
                <p className="mb-6">
                  Established in 2006, W.A. Lawal Investment began with a singular vision: to bring reliability and professionalism to the Nigerian logistics sector. Over the nearly two decades since, we have expanded our portfolio to include commercial agriculture and general merchandise trading.
                </p>
                <p>
                  Our strength lies in our local expertise combined with global best practices. Whether we are hauling containers from Apapa Port or harvesting crops in the hinterlands, our commitment to "Safety, Speed, and Integrity" remains unwavering.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 p-4 bg-brand-light border border-gray-100 rounded-sm">
                    <div className="bg-brand-green/10 p-2 rounded-full">
                        <Award className="text-brand-green" size={24} />
                    </div>
                    <div>
                        <p className="text-xs text-brand-slate uppercase tracking-wide">Experience</p>
                        <p className="text-xl font-bold text-brand-blue">19+ Years</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-brand-light border border-gray-100 rounded-sm">
                    <div className="bg-brand-green/10 p-2 rounded-full">
                        <Briefcase className="text-brand-green" size={24} />
                    </div>
                    <div>
                        <p className="text-xs text-brand-slate uppercase tracking-wide">Projects</p>
                        <p className="text-xl font-bold text-brand-blue">500+ Done</p>
                    </div>
                </div>
              </div>
            </div>

            {/* Image/Visual */}
            <div className="relative">
               <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-light -z-10"></div>
               <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-blue -z-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2076&auto=format&fit=crop" 
                 alt="Team discussion at warehouse" 
                 className="w-full h-auto shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Cards */}
      <section className="py-24 bg-brand-light relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision */}
              <div className="bg-white p-10 md:p-12 border-t-4 border-brand-blue shadow-sm hover:-translate-y-2 transition-transform duration-300 group">
                 <div className="mb-6 inline-block p-4 bg-brand-light rounded-full group-hover:bg-brand-blue transition-colors">
                    <Target size={32} className="text-brand-blue group-hover:text-white transition-colors" />
                 </div>
                 <h3 className="text-2xl font-heading font-bold text-brand-blue mb-4">Our Vision</h3>
                 <p className="text-brand-slate leading-relaxed">
                    To be recognized as the undisputed leader in logistics reliability and agricultural sustainability across West Africa, creating value that endures for generations.
                 </p>
              </div>

              {/* Mission */}
              <div className="bg-brand-blue p-10 md:p-12 border-t-4 border-brand-green shadow-sm hover:-translate-y-2 transition-transform duration-300 group relative overflow-hidden">
                 <div className="absolute top-0 right-0 opacity-5 transform translate-x-10 -translate-y-10">
                    <Anchor size={200} />
                 </div>
                 <div className="mb-6 inline-block p-4 bg-white/10 rounded-full group-hover:bg-brand-green transition-colors relative z-10">
                    <Anchor size={32} className="text-white" />
                 </div>
                 <h3 className="text-2xl font-heading font-bold text-white mb-4 relative z-10">Our Mission</h3>
                 <p className="text-gray-300 leading-relaxed relative z-10">
                    To simplify the supply chain for Nigerian businesses through transparent, safe, and efficient haulage solutions, while contributing to national food security through modern farming.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* 4. Core Values Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-4xl font-heading font-bold text-brand-blue mb-4">Our Core Values</h2>
                <p className="text-brand-slate">The non-negotiable principles that guide our daily operations and decision-making process.</p>
            </div>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: "Integrity First", text: "We believe that honest communication is the foundation of logistics. No hidden fees, no excuses.", icon: Shield },
                    { title: "Safety Obsessed", text: "From driver training to vehicle maintenance, we prioritize the safety of lives and cargo.", icon: Heart },
                    { title: "Reliability", text: "We understand that 'on time' means everything in business. We deliver as promised.", icon: Clock },
                    { title: "Customer Centric", text: "We view our clients as partners. Your success is our success.", icon: Smile },
                    { title: "Resilience", text: "We navigate the challenges of the terrain so you don't have to.", icon: Activity },
                    { title: "Continuous Growth", text: "We constantly upgrade our fleet and techniques to serve you better.", icon: TrendingUp },
                ].map((value, index) => (
                    <div key={index} className="p-8 border border-gray-100 bg-white hover:border-brand-green/50 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300 group">
                        <value.icon size={36} className="text-brand-slate mb-6 group-hover:text-brand-green transition-colors" />
                        <h4 className="text-lg font-bold font-heading text-brand-blue mb-3">{value.title}</h4>
                        <p className="text-brand-slate leading-relaxed text-sm">{value.text}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. History / Milestones */}
      <section className="py-24 bg-brand-blue text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
             <div className="absolute top-10 left-10 w-96 h-96 bg-brand-green rounded-full blur-[150px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4">
                    <h2 className="text-4xl font-heading font-bold mb-6">Our Journey</h2>
                    <p className="text-gray-300 leading-relaxed mb-8">
                        From a small haulage startup in 2006 to a diversified company in 2024. Every year has been a step forward in capacity and trust.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-brand-green font-bold uppercase tracking-widest hover:text-white transition-colors">
                        Join our future <ArrowRight size={16} />
                    </Link>
                </div>
                <div className="lg:col-span-8">
                    <div className="space-y-12 border-l border-brand-green/30 pl-8 md:pl-12 py-4">
                        <div className="relative">
                            <span className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 bg-brand-green rounded-full border-4 border-brand-blue"></span>
                            <span className="text-brand-green font-bold text-sm tracking-widest block mb-2">2006</span>
                            <h3 className="text-2xl font-bold mb-2">Inception</h3>
                            <p className="text-gray-400 text-sm max-w-md">W.A. Lawal Investment Nigeria Limited was incorporated, starting with a focused fleet for local Lagos distribution.</p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 bg-white rounded-full border-4 border-brand-blue"></span>
                            <span className="text-brand-green font-bold text-sm tracking-widest block mb-2">2012</span>
                            <h3 className="text-2xl font-bold mb-2">Expansion</h3>
                            <p className="text-gray-400 text-sm max-w-md">Expanded operations to include inter-state haulage, covering Northern and Eastern Nigeria.</p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 bg-white rounded-full border-4 border-brand-blue"></span>
                            <span className="text-brand-green font-bold text-sm tracking-widest block mb-2">2018</span>
                            <h3 className="text-2xl font-bold mb-2">Diversification</h3>
                            <p className="text-gray-400 text-sm max-w-md">Entered the Agricultural sector, acquiring farmland for sustainable crop production to support the food supply chain.</p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 bg-white rounded-full border-4 border-brand-blue"></span>
                            <span className="text-brand-green font-bold text-sm tracking-widest block mb-2">Today</span>
                            <h3 className="text-2xl font-bold mb-2">Market Leader</h3>
                            <p className="text-gray-400 text-sm max-w-md">Recognized as a trusted partner for major importers and distributors across the federation.</p>
                        </div>
                    </div>
                </div>
             </div>
          </div>
      </section>

      {/* 6. CTA Bar */}
      <section className="bg-brand-green py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">Ready to partner with a company that cares?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="bg-white text-brand-blue px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-brand-blue hover:text-white transition-colors">
                    Contact Us Today
                </Link>
                <Link to="/services" className="bg-brand-blue/20 border border-white/30 text-white px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-brand-blue transition-colors">
                    View Services
                </Link>
            </div>
        </div>
      </section>

    </div>
  );
};

export default About;