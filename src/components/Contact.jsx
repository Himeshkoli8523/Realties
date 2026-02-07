import { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, User, Home, IndianRupee, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    budget: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess('');

    try {
      const response = await fetch('http://localhost/backend/contact_submit.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit enquiry');
      }

      setSubmitSuccess('Thank you for your enquiry! We will contact you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        budget: '',
        message: '',
      });
      window.alert('Thank you for your enquiry! We will contact you shortly.');
    } catch (error) {
      setSubmitError(error.message || 'Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['3rd Floor, Bandal Spaces,', 'Paud Rd., Kothrud, Pune'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 78430 77794'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['zakki@majesticrealties.com'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Tue - Sun: 9:30 AM - 6:30 PM', 'Monday - CLOSED'],
    },
  ];

  return (
    <section id="contact" className="section-padding bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            Ready to Find Your
            <span className="block text-accent">Dream Property?</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Get in touch with us today. Our team of experts is ready to help you 
            find the perfect property that matches your lifestyle and investment goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-serif font-semibold text-white mb-6">
                Send Us a Message
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Contact Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="relative">
                  <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white appearance-none focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="" className="bg-primary">Property Type</option>
                    <option value="na-plots" className="bg-primary">N.A. Plots</option>
                    <option value="farmhouse" className="bg-primary">Farm House Plots</option>
                    <option value="residential" className="bg-primary">Residential</option>
                    <option value="commercial" className="bg-primary">Commercial</option>
                  </select>
                </div>

                <div className="relative md:col-span-2">
                  <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white appearance-none focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="" className="bg-primary">Budget Range</option>
                    <option value="10-25" className="bg-primary">₹10 Lac - ₹25 Lac</option>
                    <option value="25-50" className="bg-primary">₹25 Lac - ₹50 Lac</option>
                    <option value="50-75" className="bg-primary">₹50 Lac - ₹75 Lac</option>
                    <option value="75-100" className="bg-primary">₹75 Lac - ₹1 Cr</option>
                    <option value="100+" className="bg-primary">Above ₹1 Cr</option>
                  </select>
                </div>

                <div className="relative md:col-span-2">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-white/40" />
                  <textarea
                    name="message"
                    placeholder="Your Message (Optional)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary w-full mt-6 flex items-center justify-center gap-2">
                Submit Enquiry <Send size={18} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                    <info.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{info.title}</h4>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-white/60 text-sm">{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10 overflow-hidden h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.6789!2d73.8078!3d18.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMwJzI2LjYiTiA3M8KwNDgnMjguMSJF!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
