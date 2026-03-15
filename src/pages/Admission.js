import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaClipboardCheck, FaUserCheck, FaHandshake, FaHome, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const Admission = () => {
  const [formData, setFormData] = useState({
    parentName: '', email: '', phone: '', childAge: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const steps = [
    { icon: <FaPhone className="text-2xl" />, step: '01', title: 'Initial Contact', desc: 'Reach out by phone or inquiry form. Our admissions team will listen and answer your initial questions.' },
    { icon: <FaClipboardCheck className="text-2xl" />, step: '02', title: 'Assessment', desc: 'We conduct a comprehensive assessment to understand the young girl\'s needs, history, and best approach to care.' },
    { icon: <FaUserCheck className="text-2xl" />, step: '03', title: 'Clinical Review', desc: 'Our clinical team reviews the assessment to determine fit and develops a preliminary treatment plan.' },
    { icon: <FaHandshake className="text-2xl" />, step: '04', title: 'Intake & Orientation', desc: 'We guide the family through intake paperwork, facility orientation, and transition into our care.' },
    { icon: <FaHome className="text-2xl" />, step: '05', title: 'Begin the Journey', desc: 'The resident settles into our nurturing environment and begins their personalized treatment program.' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1920&q=80"
            alt="Pathway through nature"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark/93 via-green-dark/88 to-teal-dark/85"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <span className="text-gold font-semibold uppercase tracking-[0.3em] text-sm">Join Our Program</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">Admission Process</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Taking the first step can feel overwhelming. We're here to make the process as smooth and supportive as possible.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-12 md:h-20"><path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 48C1200 48 1320 40 1380 36L1440 32V80H0Z" fill="white"/></svg>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <img src="/logo.png" alt="Sublime Pathways" className="h-16 mx-auto mb-6 logo-glow" />
            <h2 className="text-3xl md:text-4xl font-bold text-teal-dark mb-4">How It Works</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Our admission process is welcoming, transparent, and stress-free for families.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all card-lift border border-gray-100 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-dark to-green-dark text-white flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>
                <div className="text-gold font-bold text-xs tracking-widest mb-2">STEP {step.step}</div>
                <h3 className="text-base font-bold text-teal-dark mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                {i < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 text-gold text-xl transform -translate-y-1/2 z-10">&rarr;</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-gold font-semibold uppercase tracking-[0.3em] text-sm">Eligibility</span>
              <h2 className="text-3xl md:text-4xl font-bold text-teal-dark mt-3 mb-6">Who We Can Help</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our residential treatment program is designed for young girls who may be experiencing:
              </p>
              <ul className="space-y-4">
                {[
                  'Emotional disorders including mood, psychotic, or dissociative disorders',
                  'A Global Assessment Functioning (GAF) score of 50 or below',
                  'A current DSM diagnosis requiring structured treatment',
                  'Self-injurious behaviors or suicide risk',
                  'Behavioral challenges presenting risk of harm',
                  'History of abuse, neglect, or abandonment',
                  'Need for behavioral modification and life skills development',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-sp-green shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side image + info */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80"
                  alt="Supportive community environment"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-gold">
                <h3 className="text-xl font-bold text-teal-dark mb-4">What to Expect</h3>
                <div className="space-y-3">
                  {[
                    'Weekly individualized psychological/psychiatric care',
                    'Quarterly treatment team reviews',
                    'Personalized service plan development',
                    'Ongoing progress monitoring',
                    'Family intervention and support',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-cream rounded-xl p-3">
                      <div className="w-7 h-7 rounded-full bg-gold flex items-center justify-center text-teal-dark font-bold text-xs shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-dark mb-4">Start the Admission Process</h2>
            <p className="text-gray-500 text-lg">
              Fill out the form below and our admissions team will reach out within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="bg-sage rounded-3xl p-12 text-center shadow-lg">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-sp-green text-white flex items-center justify-center text-4xl">
                <FaCheckCircle />
              </div>
              <h3 className="text-2xl font-bold text-teal-dark mb-4">Thank You!</h3>
              <p className="text-gray-600 text-lg">
                We've received your inquiry. Our admissions team will contact you within 24 hours.
                For immediate assistance, call <strong>(832) 883-1689</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-cream rounded-3xl p-8 md:p-12 shadow-lg border border-gold/20">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-teal-dark mb-2">Parent/Guardian Name *</label>
                  <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} required className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors bg-white" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-teal-dark mb-2">Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors bg-white" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-teal-dark mb-2">Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors bg-white" placeholder="(xxx) xxx-xxxx" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-teal-dark mb-2">Child's Age</label>
                  <input type="text" name="childAge" value={formData.childAge} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors bg-white" placeholder="Age of the child" />
                </div>
              </div>
              <div className="mb-8">
                <label className="block text-sm font-semibold text-teal-dark mb-2">Tell Us About Your Situation</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="5" className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors bg-white resize-none" placeholder="Please share any relevant details about the child's needs..."></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-teal-dark to-green-dark hover:from-green-dark hover:to-teal-dark text-white font-bold py-4 rounded-full text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                Submit Inquiry <FaArrowRight className="inline ml-2" />
              </button>
              <p className="text-center text-gray-400 text-sm mt-4">All information is kept strictly confidential.</p>
            </form>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-teal-dark/92"></div>
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Prefer to Talk?</h2>
          <p className="text-lg text-gray-300 mb-8">Our team is available to answer questions and walk you through the process.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8328831689" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-teal-dark font-bold px-8 py-3.5 rounded-full transition-all shadow-lg">
              <FaPhone /> (832) 883-1689
            </a>
            <a href="mailto:abashir1@sublimepathways.com" className="inline-flex items-center justify-center gap-2 bg-white/12 hover:bg-white/20 text-white font-bold px-8 py-3.5 rounded-full transition-all border-2 border-white/25">
              <FaEnvelope /> Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
