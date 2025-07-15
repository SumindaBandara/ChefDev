import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ChefHat, Sparkles } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-br from-[#fffdf7] via-orange-50 to-amber-50 overflow-hidden"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-amber-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-amber-200/30 to-yellow-200/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 opacity-10">
        <ChefHat className="w-32 h-32 text-orange-400 animate-pulse" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <Sparkles className="w-24 h-24 text-amber-400 animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header with Chef Comment */}
        <div className="text-center mb-20">
          {/* Chef's Eye-catching Comment */}
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-6 py-3 mb-6 shadow-lg backdrop-blur-sm border border-orange-200/50">
            <ChefHat className="w-5 h-5 text-orange-600 mr-2" />
            <span className="text-orange-800 font-medium text-sm">
              "From farm to table, let's create culinary magic together!"
            </span>
            <Sparkles className="w-4 h-4 text-amber-600 ml-2 animate-pulse" />
          </div>

          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase">
              Get In Touch
            </div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Let's Create
            <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 text-transparent bg-clip-text">
              Culinary Masterpieces
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your dining experience? From intimate private dinners to collaborative culinary adventures, let's bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Main Contact Card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-orange-200/50 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mr-4">
                  <ChefHat className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Let's Connect</h3>
              </div>
              
              <p className="text-gray-600 mb-8 text-lg">
                Whether it's a private dining experience, catering event, or culinary collaboration, I'm here to make it exceptional.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center group cursor-pointer">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-500 text-sm font-medium">Phone</p>
                    <a href="tel:+94770339481" className="text-gray-800 text-lg font-semibold hover:text-orange-600 transition-colors">
                      +94 770 339 481
                    </a>
                  </div>
                </div>

                <div className="flex items-center group cursor-pointer">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-500 text-sm font-medium">Email</p>
                    <a href="mailto:deshandevinda2@gmail.com" className="text-gray-800 text-lg font-semibold hover:text-amber-600 transition-colors">
                      deshandevinda2@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center group cursor-pointer">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-500 text-sm font-medium">Location</p>
                    <a 
                      href="https://www.google.com/maps/place/Lewla,+Sri+Lanka" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-800 text-lg font-semibold hover:text-yellow-600 transition-colors"
                    >
                      Lewla, Sri Lanka
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Chef's Philosophy Card */}
            <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 backdrop-blur-xl rounded-3xl p-8 border border-orange-300/30 shadow-lg">
              <div className="flex items-start">
                <div className="text-6xl text-orange-600 leading-none mr-4 font-serif">"</div>
                <div>
                  <p className="text-gray-800 text-lg italic leading-relaxed mb-4">
                    Every ingredient tells a story, every dish creates a memory. Let's craft your perfect culinary experience, one flavor at a time.
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mr-3">
                      <ChefHat className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-orange-700 font-semibold">Chef Deshan</div>
                      <div className="text-orange-600 text-sm">Culinary Artist</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-orange-200/50 shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center mb-6">
              <Sparkles className="w-6 h-6 text-amber-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Send a Message</h3>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-orange-50/50 border border-orange-200 rounded-xl text-gray-800 placeholder-gray-500 focus:bg-orange-50 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 outline-none transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-orange-50/50 border border-orange-200 rounded-xl text-gray-800 placeholder-gray-500 focus:bg-orange-50 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Your Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-orange-50/50 border border-orange-200 rounded-xl text-gray-800 placeholder-gray-500 focus:bg-orange-50 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 outline-none transition-all duration-300 resize-none"
                    placeholder="Tell me about your culinary vision, event details, or any special requirements..."
                  ></textarea>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting || isSubmitted}
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg hover:shadow-xl"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Message Sent Successfully!</span>
                  </>
                ) : isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending Your Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;