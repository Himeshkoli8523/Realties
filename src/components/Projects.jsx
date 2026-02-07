import { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'N.A. Plots', 'Farm House', 'Residential'];

  const projects = [
    {
      id: 1,
      title: 'Mount Castle',
      location: 'Ambedwet, Pirangut',
      type: 'Farm House',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'Starting ₹45 Lac',
      featured: true,
      description: 'Premium farmhouse & bungalow plots on serene hilltop tableland with panoramic views.',
    },
    {
      id: 2,
      title: 'Royal Vista',
      location: 'Pondhe, Maharashtra',
      type: 'N.A. Plots',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'Starting ₹25 Lac',
      featured: false,
      description: 'Well-planned NA plots in a prime location with excellent connectivity.',
    },
    {
      id: 3,
      title: 'Royal Casa',
      location: 'Yavat-Saswad Rd, Purandar, Pune',
      type: 'N.A. Plots',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'Starting ₹18 Lac',
      featured: false,
      description: 'Affordable NA plots perfect for investment and future development.',
    },
    {
      id: 4,
      title: 'Royal Greens',
      location: 'Supa, Morgain',
      type: 'Farm House',
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'Starting ₹35 Lac',
      featured: true,
      description: 'Peaceful, scenic, and well-planned farmhouse plots with great future potential.',
    },
    {
      id: 5,
      title: 'Majestic Heights',
      location: 'Kothrud, Pune',
      type: 'Residential',
      image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'Starting ₹85 Lac',
      featured: false,
      description: 'Premium residential apartments with modern amenities in the heart of Pune.',
    },
    {
      id: 6,
      title: 'Green Valley',
      location: 'Mulshi, Pune',
      type: 'Farm House',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'Starting ₹55 Lac',
      featured: false,
      description: 'Exclusive farmhouse plots surrounded by lush greenery and natural beauty.',
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.type === activeCategory);

  return (
    <section id="projects" className="section-padding bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Our Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            The Best Marketplace to
            <span className="block text-accent">Find Homes for Sale</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Explore our exclusive listings of premium flats, luxurious bungalows, modern farmhouses, 
            and more. Whether you want to buy or invest – we've got your next property waiting.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-accent text-dark'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  
                  {project.featured && (
                    <span className="absolute top-4 left-4 bg-accent text-dark px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  )}
                  
                  <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                    {project.type}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/50 flex items-center gap-2 text-sm mb-3">
                    <MapPin size={14} className="text-accent" />
                    {project.location}
                  </p>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-accent font-semibold">{project.price}</span>
                    <button className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm">
                      View Details <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            View All Properties <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
