import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Globe, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Logistics & Haulage',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert(`Thank you ${formData.name}. We have received your inquiry regarding ${formData.service} and will contact you at ${formData.phone} shortly.`);
    setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        service: 'Logistics & Haulage',
        message: ''
    })
  };

  return (
    <div className="bg-white font-sans text-brand-blue">
       {/* 1. Hero Section */}
       <section className="relative py-32 md:py-40 bg-brand-blue overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
             <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop" 
                alt="Corporate Building" 
                className="w-full h-full object-cover opacity-20"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/90 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <span className="text-brand-green font-bold tracking-widest uppercase text-xs mb-4 block">Contact Us</span>
             <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tighter leading-none mb-6">
                LET'S START A<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">CONVERSATION.</span>
             </h1>
             <p className="text-xl text-gray-300 max-w-2xl font-light border-l-2 border-brand-green pl-6">
                Whether you need a logistics quote, want to discuss an agricultural partnership, or have a general inquiry, our team is ready to assist.
             </p>
          </div>
       </section>

       {/* 2. Main Content Grid */}
       <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                
                {/* Left Column: Info & Context */}
                <div className="lg:col-span-5 space-y-12">
                   <div>
                      <h2 className="text-3xl font-heading font-bold mb-6">Headquarters</h2>
                      <p className="text-brand-slate leading-relaxed mb-8">
                         Our operational base is strategically located in Amuwo Odofin, providing easy access to both Apapa and Tin Can Island ports for rapid response.
                      </p>
                      
                      <div className="space-y-8">
                         <div className="flex items-start gap-4">
                            <div className="bg-brand-green/10 p-3 rounded-sm text-brand-green shrink-0">
                               <MapPin size={24} />
                            </div>
                            <div>
                               <h4 className="font-bold text-lg mb-1">Visit Us</h4>
                               <p className="text-brand-slate text-sm leading-relaxed">3253, Uche Eneanya Street,<br/>Amuwo Odofin, Lagos, Nigeria.</p>
                            </div>
                         </div>
                         
                         <div className="flex items-start gap-4">
                            <div className="bg-brand-green/10 p-3 rounded-sm text-brand-green shrink-0">
                               <Clock size={24} />
                            </div>
                            <div>
                               <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                               <p className="text-brand-slate text-sm">Mon - Fri: 8:00 AM - 6:00 PM</p>
                               <p className="text-brand-slate text-sm">Sat: 9:00 AM - 2:00 PM</p>
                            </div>
                         </div>

                         <div className="flex items-start gap-4">
                            <div className="bg-brand-green/10 p-3 rounded-sm text-brand-green shrink-0">
                               <Mail size={24} />
                            </div>
                            <div>
                               <h4 className="font-bold text-lg mb-1">Email Us</h4>
                               <p className="text-brand-slate text-sm">contact@walawalinvestment.com</p>
                               <p className="text-brand-slate text-sm">logistics@walawalinvestment.com</p>
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="border-t border-gray-100 pt-12">
                      <h2 className="text-2xl font-heading font-bold mb-6">Direct Lines</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <a href="tel:09126428088" className="border border-gray-200 p-6 hover:border-brand-blue hover:shadow-lg transition-all group block">
                              <Phone size={24} className="text-brand-slate mb-4 group-hover:text-brand-green transition-colors"/>
                              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">General Inquiry</p>
                              <p className="text-lg font-bold text-brand-blue">09126428088</p>
                          </a>
                          <a href="https://wa.me/2349126428088" className="border border-gray-200 p-6 hover:border-brand-green hover:shadow-lg transition-all group block">
                              <MessageSquare size={24} className="text-brand-slate mb-4 group-hover:text-brand-green transition-colors"/>
                              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">WhatsApp Support</p>
                              <p className="text-lg font-bold text-brand-blue">Chat Now</p>
                          </a>
                      </div>
                   </div>
                </div>

                {/* Right Column: B2B Form */}
                <div className="lg:col-span-7">
                   <div className="bg-brand-light p-8 md:p-12 border-t-4 border-brand-green shadow-xl relative">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/50 rounded-bl-full -mr-10 -mt-10 hidden md:block"></div>
                      
                      <h3 className="text-2xl font-heading font-bold mb-2">Send a Message</h3>
                      <p className="text-brand-slate mb-8 text-sm">Fields marked with * are required.</p>
                      
                      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                               <label className="text-xs font-bold uppercase tracking-widest text-brand-blue">Full Name *</label>
                               <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full p-4 bg-white border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors rounded-none text-sm" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                               <label className="text-xs font-bold uppercase tracking-widest text-brand-blue">Company Name</label>
                               <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full p-4 bg-white border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors rounded-none text-sm" placeholder="Your Business Ltd" />
                            </div>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                               <label className="text-xs font-bold uppercase tracking-widest text-brand-blue">Phone Number *</label>
                               <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full p-4 bg-white border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors rounded-none text-sm" placeholder="+234..." />
                            </div>
                            <div className="space-y-2">
                               <label className="text-xs font-bold uppercase tracking-widest text-brand-blue">Email Address</label>
                               <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-4 bg-white border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors rounded-none text-sm" placeholder="john@company.com" />
                            </div>
                         </div>

                         <div className="space-y-2">
                             <label className="text-xs font-bold uppercase tracking-widest text-brand-blue">Department</label>
                             <div className="relative">
                                <select name="service" value={formData.service} onChange={handleChange} className="w-full p-4 bg-white border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors appearance-none rounded-none text-sm cursor-pointer">
                                    <option>Logistics & Haulage</option>
                                    <option>Agricultural Supply</option>
                                    <option>General Inquiry</option>
                                    <option>Partnership Proposal</option>
                                </select>
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <ArrowRight size={16} className="text-gray-400 rotate-90" />
                                </div>
                             </div>
                         </div>

                         <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-brand-blue">Message *</label>
                            <textarea name="message" rows={4} required value={formData.message} onChange={handleChange} className="w-full p-4 bg-white border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors rounded-none text-sm" placeholder="Tell us about your requirements..."></textarea>
                         </div>

                         <button type="submit" className="w-full bg-brand-blue text-white font-bold uppercase tracking-widest py-5 hover:bg-brand-green transition-colors flex items-center justify-center gap-2 rounded-none text-sm">
                            Send Message <Send size={16} />
                         </button>
                      </form>
                   </div>
                </div>

             </div>
          </div>
       </section>

       {/* 3. Map Section */}
        <section className="h-[500px] w-full relative bg-gray-200 border-t border-white/20">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3323097155097!2d3.2965!3d6.4795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b88b0b1c0c0ad%3A0x10a6234567890abc!2sAmuwo%20Odofin%2C%20Lagos!5e0!3m2!1sen!2sng!4v1625123456789!5m2!1sen!2sng" 
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                style={{ border: 0 }}
                title="Office Location Map"
            ></iframe>
            {/* Floating Location Card (Desktop Only) */}
            <div className="absolute bottom-8 left-8 bg-white p-8 max-w-sm shadow-2xl border-l-4 border-brand-green hidden lg:block animate-fade-in-up">
                <h4 className="font-bold text-xl font-heading text-brand-blue mb-2">W.A. Lawal Investment</h4>
                <p className="text-sm text-brand-slate mb-4">Strategically positioned for rapid deployment across Lagos and nationwide.</p>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest text-brand-green flex items-center gap-2 hover:underline">
                    Get Directions <ArrowRight size={14} />
                </a>
            </div>
        </section>
    </div>
  );
}

export default Contact;