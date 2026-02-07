import { ChevronDown, Play, MapPin, Home, Building2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
          alt="Luxury Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Since 2014 • 11+ Years of Excellence
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              The Best Investment
              <span className="block text-accent mt-2">On Earth Is Earth</span>
            </h1>

            <p className="text-lg text-white/70 mb-8 max-w-lg">
              Premium farmhouse & bungalow plots on serene hilltop tableland with panoramic views. 
              Secure your dream plot near Pune – a blend of nature, lifestyle, and legacy.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#contact" className="btn-primary flex items-center gap-2">
                Explore Properties
              </a>
              <button className="btn-secondary flex items-center gap-2">
                <Play size={20} className="fill-current" />
                Watch Video
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Home, value: '15+', label: 'Projects' },
                { icon: Building2, value: '324+', label: 'Happy Clients' },
                { icon: MapPin, value: '500+', label: 'Property Deals' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Property Card */}
          <div className="hidden lg:block relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:-translate-y-2 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Featured Property"
                className="w-full h-64 object-cover rounded-2xl mb-4"
              />
              <div className="space-y-3">
                <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                  Featured
                </span>
                <h3 className="text-xl font-serif font-semibold text-white">
                  Mount Castle
                </h3>
                <p className="text-white/60 flex items-center gap-2">
                  <MapPin size={16} className="text-accent" />
                  Ambedwet, Pirangut
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-accent font-semibold">Farm House Plots</span>
                  <a href="#projects" className="text-white/80 hover:text-accent transition-colors text-sm">
                    View Details →
                  </a>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-accent text-dark px-6 py-3 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-accent transition-colors animate-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
