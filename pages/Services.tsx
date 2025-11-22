import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, ShoppingBag, Wheat, ChevronRight, Package, MapPin, Anchor, ShieldCheck, Settings, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-white font-sans text-brand-blue">
      {/* 1. Hero Section */}
      <section className="relative py-32 md:py-40 bg-brand-blue text-white overflow-hidden">
        <div className="absolute inset-0">
             <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop" 
                alt="Shipping Containers" 
                className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-brand-green font-bold tracking-widest uppercase text-xs mb-4 block">Our Expertise</span>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tighter leading-none mb-6">
              END-TO-END<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">SUPPLY CHAIN SOLUTIONS.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl font-light border-l-2 border-brand-green pl-6">
              From the port to your warehouse, and from the farm to the market. We handle the heavy lifting so you can focus on growth.
            </p>
        </div>
      </section>

      {/* 2. Service Navigation / Overview */}
      <section className="bg-brand-light border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-3 shadow-lg">
                <a href="#logistics" className="bg-white p-8 border-r border-gray-100 hover:bg-brand-green hover:text-white transition-all group">
                    <Truck size={32} className="text-brand-green mb-4 group-hover:text-white" />
                    <h3 className="font-heading font-bold text-xl mb-2">Logistics & Haulage</h3>
                    <p className="text-sm text-brand-slate group-hover:text-white/90">Nationwide transport & port services.</p>
                </a>
                <a href="#agriculture" className="bg-white p-8 border-r border-gray-100 hover:bg-brand-blue hover:text-white transition-all group">
                    <Wheat size={32} className="text-brand-blue mb-4 group-hover:text-brand-green" />
                    <h3 className="font-heading font-bold text-xl mb-2">Commercial Agriculture</h3>
                    <p className="text-sm text-brand-slate group-hover:text-white/90">Sustainable farming & food supply.</p>
                </a>
                <a href="#trading" className="bg-white p-8 hover:bg-gray-900 hover:text-white transition-all group">
                    <ShoppingBag size={32} className="text-gray-700 mb-4 group-hover:text-white" />
                    <h3 className="font-heading font-bold text-xl mb-2">General Trading</h3>
                    <p className="text-sm text-brand-slate group-hover:text-white/90">Procurement & distribution.</p>
                </a>
            </div>
        </div>
      </section>

      {/* 3. Logistics Deep Dive */}
      <section id="logistics" className="py-24 md:py-32">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-16">
                {/* Left: Sticky Title */}
                <div className="md:w-1/3">
                    <div className="sticky top-32">
                        <span className="text-brand-green font-bold tracking-widest uppercase text-xs mb-2 block">01. Core Service</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-blue mb-6">Logistics & Haulage</h2>
                        <p className="text-brand-slate text-lg mb-8">
                            We understand the Nigerian terrain. Our fleet is optimized for reliability, ensuring your cargo moves safely from point A to B.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-brand-blue border-b-2 border-brand-green pb-1 hover:text-brand-green transition-colors">
                            Request a Logistics Quote <ArrowRight size={16}/>
                        </Link>
                    </div>
                </div>

                {/* Right: Features Grid */}
                <div className="md:w-2/3">
                    <div className="grid grid-cols-1 gap-8">
                        {/* Card 1 */}
                        <div className="bg-brand-light p-8 flex gap-6 border-l-4 border-brand-blue group hover:bg-white hover:shadow-xl transition-all duration-300">
                            <div className="bg-white p-4 h-fit shadow-sm text-brand-blue group-hover:text-brand-green transition-colors">
                                <Anchor size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3 font-heading">Port Logistics</h3>
                                <p className="text-brand-slate leading-relaxed text-sm mb-4">
                                    Seamless movement of containers from Apapa and Tin Can Island ports. We handle the complexities of port clearance coordination and immediate transport.
                                </p>
                                <ul className="text-xs font-bold uppercase tracking-wide text-brand-blue space-y-2">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-green rounded-full"></div> Container Haulage (20ft & 40ft)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-green rounded-full"></div> Terminal Pickup</li>
                                </ul>
                            </div>
                        </div>

                         {/* Card 2 */}
                        <div className="bg-brand-light p-8 flex gap-6 border-l-4 border-brand-green group hover:bg-white hover:shadow-xl transition-all duration-300">
                            <div className="bg-white p-4 h-fit shadow-sm text-brand-blue group-hover:text-brand-green transition-colors">
                                <Truck size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3 font-heading">Inter-State Distribution</h3>
                                <p className="text-brand-slate leading-relaxed text-sm mb-4">
                                    Reliable long-haul trucking services connecting Lagos to the North, East, and South-South regions. GPS tracked for peace of mind.
                                </p>
                                <ul className="text-xs font-bold uppercase tracking-wide text-brand-blue space-y-2">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-green rounded-full"></div> Dedicated Charter</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-green rounded-full"></div> Waybill Tracking</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-brand-light p-8 flex gap-6 border-l-4 border-gray-300 group hover:bg-white hover:shadow-xl transition-all duration-300">
                            <div className="bg-white p-4 h-fit shadow-sm text-brand-blue group-hover:text-brand-green transition-colors">
                                <Settings size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3 font-heading">Supply Chain Advisory</h3>
                                <p className="text-brand-slate leading-relaxed text-sm">
                                    We don't just drive trucks; we help optimize your routes and load planning to save costs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* 4. Agriculture Section - Dark Theme */}
      <section id="agriculture" className="py-24 md:py-32 bg-brand-blue text-white relative overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 transform origin-bottom-left pointer-events-none"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                     <img 
                        src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop" 
                        alt="Agriculture Field" 
                        className="shadow-2xl border-8 border-white/10"
                    />
                </div>
                <div>
                    <div className="inline-block p-3 bg-brand-green mb-6">
                        <Wheat size={32} className="text-white" />
                    </div>
                    <span className="text-brand-green font-bold tracking-widest uppercase text-xs mb-2 block">02. Agriculture</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6">Feeding the Nation.</h2>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        Our agricultural division is focused on sustainability and scale. We bridge the gap between rural production and urban consumption.
                    </p>
                    
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 font-bold text-brand-green">01</div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">Crop Production</h4>
                                <p className="text-gray-400 text-sm">Cultivating high-yield crops using modern farming techniques on our managed farmlands.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 font-bold text-brand-green">02</div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">Commodity Trading</h4>
                                <p className="text-gray-400 text-sm">Sourcing and supplying bulk grains, tubers, and raw materials to processing factories and markets.</p>
                            </div>
                        </div>
                         <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 font-bold text-brand-green">03</div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">Agro-Logistics</h4>
                                <p className="text-gray-400 text-sm">Specialized transport for perishable goods to reduce post-harvest losses.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* 5. General Trading Section - Clean */}
      <section id="trading" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center max-w-3xl mx-auto mb-16">
                 <span className="text-brand-green font-bold tracking-widest uppercase text-xs mb-2 block">03. Commerce</span>
                <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-blue mb-4">General Trading</h2>
                <p className="text-brand-slate">
                    Our trading arm handles procurement and distribution for general merchandise, leveraging our logistics backbone for efficiency.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Service Box */}
                <div className="border border-gray-100 p-8 hover:border-brand-blue transition-colors group text-center">
                    <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-blue transition-colors">
                        <ShoppingBag size={28} className="text-brand-blue group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-blue mb-3">Procurement</h3>
                    <p className="text-brand-slate text-sm">Sourcing quality goods for businesses and government contracts.</p>
                </div>

                 {/* Service Box */}
                <div className="border border-gray-100 p-8 hover:border-brand-blue transition-colors group text-center">
                    <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-blue transition-colors">
                        <Package size={28} className="text-brand-blue group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-blue mb-3">Wholesale Supply</h3>
                    <p className="text-brand-slate text-sm">Bulk distribution of essential commodities to retailers.</p>
                </div>

                 {/* Service Box */}
                <div className="border border-gray-100 p-8 hover:border-brand-blue transition-colors group text-center">
                    <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-blue transition-colors">
                        <ShieldCheck size={28} className="text-brand-blue group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-blue mb-3">Quality Assurance</h3>
                    <p className="text-brand-slate text-sm">Ensuring all traded goods meet Nigerian Standards Organization (SON) requirements.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="bg-brand-green py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
                <h2 className="text-3xl font-heading font-bold mb-2">Have a custom request?</h2>
                <p className="opacity-90">We specialize in tailoring solutions for complex requirements.</p>
            </div>
            <div>
                <Link to="/contact" className="bg-white text-brand-blue px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-brand-blue hover:text-white transition-colors shadow-lg">
                    Contact Us
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Services;