import { Mail, MapPin, Phone, MessageSquare, Sparkles, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full pt-32 pb-24 bg-black min-h-screen">
      
      {/* Contact Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center relative overflow-hidden">
        {/* Spotlight backgrounds */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none"></div>

        {/* Glowing Capsule Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-8 rounded-full border border-white/5 bg-white/5 text-xs font-semibold uppercase tracking-wider text-blue-400 relative z-10">
          <Sparkles size={11} />
          Connect
        </div>

        {/* Gradient Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 relative z-10 tracking-tight leading-[1.05] selection:bg-blue-500/30">
          Let's start a <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 filter drop-shadow-[0_2px_8px_rgba(59,130,246,0.25)]">
            conversation.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto relative z-10 selection:bg-blue-500/30 leading-relaxed">
          Whether you have a fully formed vision or just a spark of an idea, we have the engineering and artistry to bring it to life.
        </p>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-3xl font-black text-white mb-5 tracking-tight">Get in Touch</h2>
              <p className="text-gray-400 text-base leading-relaxed max-w-md">
                Fill out the design request panel and our engineering team will get back to you within 24 hours. Or connect directly.
              </p>
            </div>

            {/* Studio Headquarters Widget */}
            <div className="group relative w-full h-56 rounded-2xl overflow-hidden border border-white/5 bg-white/[0.01] backdrop-blur-xl hover:border-cyan-500/20 hover:shadow-[0_15px_30px_rgba(6,182,212,0.1)] transition-all duration-500">
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10"></div>
              
              {/* Image */}
              <img 
                src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80" 
                alt="Aether SF Labs Studio Headquarters" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Absolute Tag: "Aether SF Labs" */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-[10px] font-bold uppercase tracking-widest text-cyan-400 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                Aether SF Labs
              </div>

              {/* Caption at the bottom */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider block mb-1">Headquarters</span>
                <p className="text-white text-sm font-semibold">Our architectural creative innovation hub in San Francisco.</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Card 1 */}
              <div className="group flex items-start gap-5 p-6 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-xl hover:border-cyan-500/20 hover:shadow-[0_10px_30px_rgba(6,182,212,0.05)] transition-all duration-300 transform hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/10 border border-cyan-500/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Us</h4>
                  <p className="text-gray-400 text-sm font-medium hover:text-cyan-300 transition-colors">hello@aetherstudio.com</p>
                  <p className="text-gray-500 text-xs mt-0.5">Support: support@aetherstudio.com</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group flex items-start gap-5 p-6 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-xl hover:border-purple-500/20 hover:shadow-[0_10px_30px_rgba(168,85,247,0.05)] transition-all duration-300 transform hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-xl bg-purple-950/10 border border-purple-500/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Visit Our Studio</h4>
                  <p className="text-gray-400 text-sm font-medium">100 Innovation Drive</p>
                  <p className="text-gray-500 text-xs mt-0.5">San Francisco, CA 94103</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group flex items-start gap-5 p-6 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-xl hover:border-blue-500/20 hover:shadow-[0_10px_30px_rgba(59,130,246,0.05)] transition-all duration-300 transform hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-xl bg-blue-950/10 border border-blue-500/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Call Us</h4>
                  <p className="text-gray-400 text-sm font-medium">+1 (555) 123-4567</p>
                  <p className="text-gray-500 text-xs mt-0.5">Mon-Fri, 9am - 6pm PST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7 bg-[#050505]/60 border border-white/5 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden backdrop-blur-2xl shadow-2xl hover:border-blue-500/10 transition-all duration-700">
            {/* Spotlights */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-cyan-950/10 border border-cyan-500/10">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
              </div>
              Send a Message
            </h3>

            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-wider">First Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-black/60 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10 transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full bg-black/60 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10 transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-black/60 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-black/60 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10 transition-all duration-300"
                  placeholder="How can Aether help?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-black/60 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project or core strategy..."
                ></textarea>
              </div>

              <button 
                type="button" 
                className="relative group overflow-hidden w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-[0_4px_20px_rgba(59,130,246,0.2)] hover:shadow-[0_4px_30px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 mt-6 cursor-pointer"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative flex items-center justify-center gap-2">
                  Send Message <Send size={15} />
                </span>
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
