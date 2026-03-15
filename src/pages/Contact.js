import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-1/4 text-6xl animate-butterfly opacity-15">🦋</div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <span className="text-gold font-semibold uppercase tracking-widest text-sm">Get In Touch</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We're here to answer your questions and guide you through every step of the way.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 80" fill="none"><path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 48C1200 48 1320 40 1380 36L1440 32V80H0Z" fill="white"/></svg>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <FaPhone className="text-2xl" />,
                label: 'Phone',
                value: '(832) 883-1689',
                href: 'tel:8328831689',
                subtext: 'Call us anytime',
              },
              {
                icon: <FaEnvelope className="text-2xl" />,
                label: 'Email',
                value: 'abashir1@sublimepathways.com',
                href: 'mailto:abashir1@sublimepathways.com',
                subtext: 'We respond within 24 hours',
              },
              {
                icon: <FaMapMarkerAlt className="text-2xl" />,
                label: 'Location',
                value: '2127 Hackberry Bank Ln',
                subtext: 'Rosenberg, TX',
              },
              {
                icon: <FaClock className="text-2xl" />,
                label: 'Hours',
                value: '24/7 Residential Care',
                subtext: 'Always available',
              },
            ].map((info, i) => (
              <div key={i} className="bg-cream rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-gold group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-teal-dark to-green text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <h3 className="font-bold text-teal-dark text-lg mb-1">{info.label}</h3>
                {info.href ? (
                  <a href={info.href} className="text-green-dark font-semibold hover:text-gold transition-colors text-sm break-all">
                    {info.value}
                  </a>
                ) : (
                  <p className="text-green-dark font-semibold text-sm">{info.value}</p>
                )}
                <p className="text-gray-500 text-xs mt-1">{info.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-20 bg-sage">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-teal-dark mb-4">Send Us a Message</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Have questions about our program? Fill out the form and we'll get back to you promptly.
              </p>

              {submitted ? (
                <div className="bg-white rounded-3xl p-12 text-center shadow-lg">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green text-white flex items-center justify-center text-4xl">
                    <FaCheckCircle />
                  </div>
                  <h3 className="text-2xl font-bold text-teal-dark mb-4">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 shadow-lg">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-teal-dark mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-teal-dark mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-teal-dark mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors"
                        placeholder="(xxx) xxx-xxxx"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-teal-dark mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="services">Services Information</option>
                        <option value="general">General Question</option>
                        <option value="referral">Professional Referral</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-teal-dark mb-2">Your Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-dark to-green-dark hover:from-green-dark hover:to-teal-dark text-white font-bold py-4 rounded-full text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    Send Message <FaArrowRight className="inline ml-2" />
                  </button>
                </form>
              )}
            </div>

            {/* Map & Info */}
            <div>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg h-full flex flex-col">
                <div className="flex-1 min-h-[300px] bg-gray-200 relative">
                  <iframe
                    title="Sublime Pathways Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.5!2d-95.78!3d29.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDMzJzAwLjAiTiA5NcKwNDYnNDguMCJX!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '300px' }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-teal-dark mb-4">Visit Our Facility</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start gap-3">
                      <FaMapMarkerAlt className="text-gold mt-0.5 shrink-0" />
                      <span>2127 Hackberry Bank Ln, Rosenberg, TX</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaPhone className="text-gold mt-0.5 shrink-0" />
                      <a href="tel:8328831689" className="hover:text-gold transition-colors">(832) 883-1689</a>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaEnvelope className="text-gold mt-0.5 shrink-0" />
                      <a href="mailto:abashir1@sublimepathways.com" className="hover:text-gold transition-colors break-all">
                        abashir1@sublimepathways.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-dark mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Who can be admitted to Sublime Pathways?',
                a: 'We serve young girls facing challenges related to abuse, neglect, abandonment, and emotional disorders. Our program is designed for those who need residential treatment and structured therapeutic support.',
              },
              {
                q: 'What types of therapy do you offer?',
                a: 'We offer psychotherapy, cognitive behavioral therapy (CBT), individual counseling, group therapy, family interventions, and medication management — all tailored to each resident\'s needs.',
              },
              {
                q: 'How long does a typical stay last?',
                a: 'The length of stay varies depending on each resident\'s individual needs and treatment goals. Our team conducts quarterly reviews to assess progress and adjust care plans.',
              },
              {
                q: 'How can I refer a child to your program?',
                a: 'You can contact us by phone at (832) 883-1689 or submit an inquiry through our Admission page. Our admissions team will guide you through the process.',
              },
              {
                q: 'Do you involve families in the treatment process?',
                a: 'Absolutely. Family involvement is central to our approach. We offer family interventions and keep families informed and engaged throughout the treatment journey.',
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-cream rounded-2xl overflow-hidden border-2 border-transparent hover:border-gold/30 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-teal-dark text-lg hover:text-green-dark transition-colors list-none">
                  {faq.q}
                  <span className="text-gold text-2xl group-open:rotate-45 transition-transform ml-4 shrink-0">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-teal-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
          <p className="text-lg text-gray-300 mb-8">
            If a child is in immediate danger, please call 911. For non-emergency inquiries about our program, reach us directly.
          </p>
          <a
            href="tel:8328831689"
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-teal-dark font-bold px-10 py-4 rounded-full text-lg transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <FaPhone /> Call (832) 883-1689
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
