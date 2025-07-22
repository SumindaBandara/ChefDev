import React, { useState, useEffect } from 'react';
import { Camera, MapPin, Calendar, Users, Award, ChefHat, X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const ChefGallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Gallery categories
  const categories = [
    { id: 'all', name: 'All Memories', icon: Camera },
    { id: 'restaurants', name: 'Restaurant Life', icon: ChefHat },
    { id: 'events', name: 'Special Events', icon: Award },
    { id: 'team', name: 'Team & Friends', icon: Users },
    { id: 'dishes', name: 'Signature Dishes', icon: Filter }
  ];

  // Mock gallery data - in real app, this would come from a database
  const galleryItems = [
    {
      id: 1,
      category: 'restaurants',
      title: 'Head Chef at Le Bernardin',
      location: 'New York, NY',
      year: '2019-2022',
      description: 'Leading the kitchen team during our Michelin 3-star journey',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=400&fit=crop',
      tags: ['Fine Dining', 'Michelin Star', 'Leadership']
    },
    {
      id: 2,
      category: 'dishes',
      title: 'Signature Wagyu Wellington',
      location: 'Private Event',
      year: '2023',
      description: 'My signature dish that won the National Culinary Championship',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop',
      tags: ['Signature', 'Award Winning', 'Wagyu']
    },
    {
      id: 3,
      category: 'team',
      title: 'Kitchen Brigade Celebration',
      location: 'Grand Hotel Kitchen',
      year: '2022',
      description: 'Celebrating our team after winning Restaurant of the Year',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      tags: ['Teamwork', 'Victory', 'Brotherhood']
    },
    {
      id: 4,
      category: 'events',
      title: 'James Beard Foundation Gala',
      location: 'Chicago, IL',
      year: '2023',
      description: 'Honored to cook for 500 guests at this prestigious culinary event',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      tags: ['James Beard', 'Gala', 'Prestige']
    },
    {
      id: 5,
      category: 'restaurants',
      title: 'Sous Chef Days at Noma',
      location: 'Copenhagen, Denmark',
      year: '2018-2019',
      description: 'Learning innovative Nordic cuisine techniques',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop',
      tags: ['Nordic', 'Innovation', 'Learning']
    },
    {
      id: 6,
      category: 'dishes',
      title: 'Farm-to-Table Tasting Menu',
      location: 'Seasonal Restaurant',
      year: '2023',
      description: 'Complete 12-course tasting menu using local ingredients',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
      tags: ['Farm-to-Table', 'Seasonal', 'Tasting Menu']
    },
    {
      id: 7,
      category: 'team',
      title: 'Mentoring Young Chefs',
      location: 'Culinary Academy',
      year: '2022',
      description: 'Teaching the next generation of culinary artists',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      tags: ['Mentoring', 'Education', 'Future Chefs']
    },
    {
      id: 8,
      category: 'events',
      title: 'Celebrity Chef Charity Cook-off',
      location: 'Los Angeles, CA',
      year: '2023',
      description: 'Competing against top chefs to raise funds for culinary education',
      image: 'https://images.unsplash.com/photo-1556909114-4f6e38996b87?w=600&h=400&fit=crop',
      tags: ['Charity', 'Competition', 'Celebrity']
    },
    {
      id: 9,
      category: 'dishes',
      title: 'Deconstructed Bouillabaisse',
      location: 'Pop-up Restaurant',
      year: '2023',
      description: 'Modern interpretation of the classic French seafood stew',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop',
      tags: ['French', 'Modern', 'Seafood']
    },
    {
      id: 10,
      category: 'restaurants',
      title: 'Opening Night at Atelier',
      location: 'Paris, France',
      year: '2020',
      description: 'The night we opened our own restaurant in the heart of Paris',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      tags: ['Opening Night', 'Paris', 'Dream Come True']
    },
    {
      id: 11,
      category: 'team',
      title: 'International Culinary Exchange',
      location: 'Tokyo, Japan',
      year: '2021',
      description: 'Cultural exchange with Japanese master chefs',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop',
      tags: ['Cultural Exchange', 'Japan', 'Learning']
    },
    {
      id: 12,
      category: 'events',
      title: 'Food & Wine Festival Finale',
      location: 'Aspen, CO',
      year: '2022',
      description: 'Grand finale performance at the prestigious food festival',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      tags: ['Festival', 'Performance', 'Mountain High']
    }
  ];

  // Filter gallery items based on selected category
  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 py-16 px-4">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div 
          className={`text-center transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent mb-6">
            Culinary Journey
          </h2>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Two decades of culinary excellence captured through memorable moments, 
            prestigious restaurants, award-winning dishes, and the incredible people who made it all possible.
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="max-w-7xl mx-auto mb-12">
        <div 
          className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}
          style={{ transitionDelay: '0.3s' }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-2xl shadow-amber-400/30'
                  : 'bg-slate-800/50 text-amber-200 hover:bg-slate-700/50 border border-amber-400/20'
              }`}
            >
              <category.icon size={20} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          <div className="text-center p-6 bg-slate-800/30 rounded-xl backdrop-blur-sm border border-amber-400/20">
            <div className="text-3xl font-bold text-amber-400 mb-2">20+</div>
            <div className="text-amber-200">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-slate-800/30 rounded-xl backdrop-blur-sm border border-amber-400/20">
            <div className="text-3xl font-bold text-amber-400 mb-2">15</div>
            <div className="text-amber-200">Restaurants</div>
          </div>
          <div className="text-center p-6 bg-slate-800/30 rounded-xl backdrop-blur-sm border border-amber-400/20">
            <div className="text-3xl font-bold text-amber-400 mb-2">50+</div>
            <div className="text-amber-200">Awards Won</div>
          </div>
          <div className="text-center p-6 bg-slate-800/30 rounded-xl backdrop-blur-sm border border-amber-400/20">
            <div className="text-3xl font-bold text-amber-400 mb-2">1000+</div>
            <div className="text-amber-200">Dishes Created</div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto">
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '0.7s' }}
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl bg-slate-800 shadow-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-amber-400/20"
              onClick={() => openModal(item)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Image */}
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-bold text-lg mb-1 text-amber-300">{item.title}</h3>
                <div className="flex items-center gap-2 text-sm text-amber-200 mb-2">
                  <MapPin size={14} />
                  <span>{item.location}</span>
                  <Calendar size={14} className="ml-2" />
                  <span>{item.year}</span>
                </div>
                <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.tags.slice(0, 2).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-amber-500/80 text-white text-xs rounded-full backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-4xl mx-4 bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Modal content */}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
              <div className="md:w-1/3 p-6 text-white">
                <h3 className="text-2xl font-bold text-amber-300 mb-4">{selectedImage.title}</h3>
                <div className="flex items-center gap-2 text-amber-200 mb-4">
                  <MapPin size={16} />
                  <span>{selectedImage.location}</span>
                </div>
                <div className="flex items-center gap-2 text-amber-200 mb-4">
                  <Calendar size={16} />
                  <span>{selectedImage.year}</span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{selectedImage.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedImage.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-amber-500 text-white text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto text-center mt-16">
        <div 
          className={`transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}
          style={{ transitionDelay: '1s' }}
        >
          <h3 className="text-3xl font-bold text-amber-300 mb-4">Ready to Create New Memories?</h3>
          <p className="text-xl text-amber-200 mb-8">Let's work together to craft extraordinary culinary experiences</p>
          <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:from-amber-400 hover:to-orange-500 transform hover:scale-105 transition-all duration-300">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefGallerySection;