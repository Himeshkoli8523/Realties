import { Shield, Users, Award, TrendingUp, Clock, HeartHandshake } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'Complete clarity in documentation and honest communication at every step.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'A passionate team with decades of combined real estate experience.',
    },
    {
      icon: Award,
      title: '11+ Years Excellence',
      description: 'Redefining real estate excellence since 2014 with quality and innovation.',
    },
    {
      icon: TrendingUp,
      title: 'Future-Ready',
      description: 'Creating vibrant, future-ready communities that deliver lasting value.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Committed to delivering projects on time with superior quality.',
    },
    {
      icon: HeartHandshake,
      title: 'Customer First',
      description: 'Your dream property is our priority. Personalized service always.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              Welcome to
              <span className="block text-accent">Majestic Realties</span>
            </h2>
            <p className="text-lg text-primary/70 mb-6">
              Since 2014, Majestic Realties has been redefining real estate excellence with a focus on quality, 
              innovation, and integrity. We specialize in creating vibrant, future-ready communities that deliver 
              lasting value and a superior lifestyle.
            </p>
            <p className="text-primary/70 mb-8">
              With a decade of experience and a passionate team, we turn land into legacy. Our projects are 
              designed to inspire, endure, and elevate everyday living through thoughtful architecture and 
              sustainable development.
            </p>

            <div className="flex flex-wrap gap-8 mb-8">
              {[
                { value: '15+', label: 'Projects Delivered' },
                { value: '324+', label: 'Happy Clients' },
                { value: '11+', label: 'Years Experience' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-accent">{stat.value}</div>
                  <div className="text-sm text-primary/60">{stat.label}</div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary inline-block bg-primary text-white hover:bg-secondary">
              Get in Touch
            </a>
          </div>

          {/* Right - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Property"
                  className="rounded-2xl shadow-xl w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Property"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Property"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Property"
                  className="rounded-2xl shadow-xl w-full h-48 object-cover"
                />
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-accent text-dark px-8 py-4 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">11+</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group hover:-translate-y-1 transform duration-300"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-primary/60 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
