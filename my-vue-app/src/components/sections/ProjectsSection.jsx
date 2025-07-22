import React from 'react';
import { projects } from '../../constants/projects';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-white to-orange-50 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent mb-6">
            Culinary Masterpieces
          </h3>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Explore my signature creations and culinary journey through this interactive gallery
          </p>
        </div>
        
        {/* Horizontal scrolling gallery */}
        <div className="relative mb-16">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {projects.map((project, index) => (
              <div 
                key={project.title} 
                className="group relative min-w-[350px] h-[500px] bg-white rounded-3xl shadow-2xl hover:shadow-orange-500/20 transition-all duration-700 overflow-hidden border border-gray-100 hover:border-orange-200"
                style={{ 
                  transform: `translateY(${index % 2 === 0 ? '0' : '20px'})`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Image section */}
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Floating category */}
                  <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-orange-600 text-sm font-bold shadow-lg">
                    {project.category}
                  </div>
                  
                  {/* Hover overlay with icon */}
                  <div className="absolute inset-0 bg-orange-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-200">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Content section */}
                <div className="p-6 h-60 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 rounded-full text-xs font-medium border border-orange-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action button */}
                  <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1">
                    View Recipe
                  </button>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-orange-400 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-300"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-amber-400 rounded-full opacity-40 group-hover:scale-125 transition-transform duration-300 delay-100"></div>
              </div>
            ))}
          </div>
          
          {/* Scroll indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center space-x-2 text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l4-4m0 0l4-4m-4 4v12" />
              </svg>
              <span className="text-sm">Scroll to explore more</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                10+
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                5+
              </div>
              <div className="text-gray-600 font-medium">New Dishes Created</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                20%
              </div>
              <div className="text-gray-600 font-medium">Waste Reduction</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-gray-600 font-medium">Customer Satisfaction</div>
            </div>
          </div>
        </div>
        
        {/* Call-to-action */}
        <div className="text-center">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-orange-200">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
                Ready to Experience Culinary Excellence?
              </h4>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Discover my complete portfolio including behind-the-scenes moments, team collaborations, and signature dish presentations
              </p>
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-2xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 group">
                <span className="mr-3"> <Link to='/gallary'>View Full Gallery</Link></span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;