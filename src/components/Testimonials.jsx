import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Dr. Jagtap',
      property: 'Mount Castle, Ambedwet, Pirangut',
      date: 'April 2024',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      quote: 'Majestic Realties guided me through every step of my plot purchase with complete transparency. The overall experience was smooth, reliable, and highly professional.',
      hasVideo: true,
    },
    {
      id: 2,
      name: 'Mr. Aniket Awtani',
      property: 'Mount Castle, Ambedwet, Pirangut',
      date: 'April 2024',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      quote: 'The team was extremely supportive throughout the entire buying process. Their clarity, honest communication, and quick assistance made everything hassle-free.',
      hasVideo: true,
    },
    {
      id: 3,
      name: 'Mr. Utkarsh Ghate',
      property: 'Royal Greens, Supa, Morgain',
      date: 'March 2024',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      quote: 'Royal Greens is exactly what I was looking for—peaceful, scenic, and well-planned. The project offers great future potential and the staff was very cooperative.',
      hasVideo: false,
    },
    {
      id: 4,
      name: 'Mrs. Priya Sharma',
      property: 'Royal Vista, Pondhe',
      date: 'February 2024',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      quote: 'My experience with Majestic Realties was excellent. Their team ensured complete clarity in documentation and provided timely updates at every stage.',
      hasVideo: false,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
            324+ Happy Clients Shared
            <span className="block text-accent">Their Success Stories</span>
          </h2>
          <p className="text-primary/60 max-w-2xl mx-auto">
            We help Indians achieve their dream of land ownership with premium NA plots, 
            second home destinations, and farmhouse investments.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
          <Quote className="absolute top-8 right-8 w-24 h-24 text-accent/10" />

          <div className="grid md:grid-cols-5 gap-8 items-center">
            {/* Image */}
            <div className="md:col-span-2">
              <div className="relative">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover mx-auto shadow-xl"
                />
                {testimonials[activeIndex].hasVideo && (
                  <button className="absolute inset-0 m-auto w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-dark fill-current ml-1" />
                  </button>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-primary/80 font-serif italic mb-6">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              <div className="border-t border-gray-100 pt-6">
                <h4 className="text-lg font-semibold text-primary">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-primary/60 text-sm">
                  {testimonials[activeIndex].property}
                </p>
                <p className="text-accent text-sm font-medium mt-1">
                  {testimonials[activeIndex].date}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === activeIndex ? 'bg-accent w-8' : 'bg-gray-200 w-3 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-accent hover:text-dark transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-accent text-dark flex items-center justify-center hover:bg-accent-light transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              className={`p-4 rounded-2xl cursor-pointer transition-all hover:-translate-y-1 transform duration-200 ${
                index === activeIndex
                  ? 'bg-accent/10 border-2 border-accent'
                  : 'bg-white border-2 border-transparent hover:border-accent/30'
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-semibold text-primary text-sm">{testimonial.name}</h5>
                  <p className="text-primary/50 text-xs">{testimonial.property.split(',')[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
