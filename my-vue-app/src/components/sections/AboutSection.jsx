import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-orange-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-300 rounded-full opacity-15 blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
            About Me
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-white text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    👨‍🍳
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800">Chef de Partie</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  With over a decade of culinary mastery, I blend traditional techniques with cutting-edge innovation. 
                  Specializing in high-volume kitchen operations, I craft exceptional dishes while optimizing efficiency 
                  and maintaining uncompromising quality standards.
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    🍽️
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800">Culinary Innovator</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Passionate about creating memorable dining experiences through innovative dish development and 
                  meticulous presentation. I drive profitability through smart cost optimization while leading 
                  teams to deliver outstanding gastronomic excellence.
                </p>
              </div>
            </div>
          </div>
          
          {/* Achievement stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 hover:bg-white/80 transition-all duration-300">
                <div className="text-3xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform">10+</div>
                <div className="text-gray-700 font-medium">Years Experience</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 hover:bg-white/80 transition-all duration-300">
                <div className="text-3xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform">20%</div>
                <div className="text-gray-700 font-medium">Waste Reduction</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 hover:bg-white/80 transition-all duration-300">
                <div className="text-3xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform">10%</div>
                <div className="text-gray-700 font-medium">Customer Satisfaction Increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;