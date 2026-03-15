import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaHeart, FaHandHoldingHeart, FaShieldAlt, FaUserFriends, FaStar, FaArrowRight, FaPhone, FaQuoteLeft } from 'react-icons/fa';

const Home = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const isVisible = (id) => visibleSections.has(id);

  return (
    <div>
      {/* ===== SECTION 1: HERO ===== */}
      <section className="hero-gradient relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-green-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/4 text-6xl animate-butterfly opacity-20">🦋</div>
          <div className="absolute top-1/3 right-1/3 text-4xl animate-butterfly opacity-15" style={{ animationDelay: '2s' }}>🦋</div>
          {/* Leaf decorations */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 border border-white/20">
              <FaLeaf className="text-gold" />
              <span>Residential Treatment Center for Young Girls</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              A Safe Path to
              <span className="block text-gold mt-2">Healing & Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
              Empowering young girls to overcome challenges of abuse, neglect, and abandonment through
              compassionate, evidence-based care in a nurturing environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/admission"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-teal-dark font-bold px-8 py-4 rounded-full text-lg transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 pulse-glow"
              >
                Start the Journey <FaArrowRight />
              </Link>
              <a
                href="tel:8328831689"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full text-lg transition-all border-2 border-white/30 backdrop-blur-sm"
              >
                <FaPhone /> Call Now
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">24/7</div>
                <div className="text-sm text-gray-300">Care Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">100%</div>
                <div className="text-sm text-gray-300">Dedicated Staff</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">
                  <FaHeart className="inline" />
                </div>
                <div className="text-sm text-gray-300">Compassionate</div>
              </div>
            </div>
          </div>

          {/* Hero image / logo */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl scale-110"></div>
              <img
                src="/logo.png"
                alt="Sublime Pathways"
                className="relative w-[450px] h-auto drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ===== SECTION 2: MISSION PILLARS ===== */}
      <section id="pillars" data-animate className="py-20 bg-white">
        <div className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ${isVisible('pillars') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-gold font-semibold uppercase tracking-widest text-sm">Our Mission</span>
            <h2 className="text-4xl md:text-5xl font-bold text-teal-dark mt-3 mb-4">Heal &middot; Grow &middot; Thrive</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We provide a holistic approach to care, addressing every dimension of a young girl's well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHeart className="text-4xl" />,
                title: 'Heal',
                desc: 'Through evidence-based therapeutic interventions, individualized counseling, and trauma-informed care, we help young girls begin their healing journey.',
                color: 'from-teal-dark to-teal',
              },
              {
                icon: <FaLeaf className="text-4xl" />,
                title: 'Grow',
                desc: 'We equip residents with coping mechanisms, interpersonal skills, and problem-solving techniques that foster personal and educational growth.',
                color: 'from-green-dark to-sp-green',
              },
              {
                icon: <FaStar className="text-4xl" />,
                title: 'Thrive',
                desc: 'Our goal is to empower each young girl to thrive in less restrictive settings, building a brighter future filled with confidence and resilience.',
                color: 'from-gold to-gold-light',
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${pillar.color}`}></div>
                <div className="p-8 text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${pillar.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    {pillar.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-teal-dark mb-3">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: WHO WE SERVE ===== */}
      <section id="serve" data-animate className="py-20 bg-sage">
        <div className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ${isVisible('serve') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold font-semibold uppercase tracking-widest text-sm">Who We Serve</span>
              <h2 className="text-4xl md:text-5xl font-bold text-teal-dark mt-3 mb-6">
                A Safe Haven for <span className="text-green-dark">Young Girls</span>
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                We envision a future where children facing issues of abuse, neglect, and abandonment
                receive comprehensive care that transforms their lives. Our approach is multifaceted
                and personalized, tailored to meet the unique needs of each individual under our care.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Behavioral modification & life skills development',
                  'Social and educational support',
                  'Individualized counseling & group therapy',
                  'Family intervention services',
                  'Trauma-informed, evidence-based practices',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-teal-dark text-xs font-bold">&#10003;</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-green-dark hover:bg-teal-dark text-white font-bold px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                Explore Our Services <FaArrowRight />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-gold/20 rounded-3xl"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: <FaShieldAlt className="text-3xl text-sp-teal" />, label: 'Safe Environment' },
                    { icon: <FaHandHoldingHeart className="text-3xl text-green-dark" />, label: 'Compassionate Care' },
                    { icon: <FaUserFriends className="text-3xl text-gold" />, label: 'Family Support' },
                    { icon: <FaHeart className="text-3xl text-sp-green" />, label: 'Holistic Healing' },
                  ].map((item, i) => (
                    <div key={i} className="bg-sage rounded-2xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                      <div className="mb-3">{item.icon}</div>
                      <p className="font-semibold text-teal-dark text-sm">{item.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-gradient-to-r from-teal-dark to-green-dark rounded-2xl p-6 text-white text-center">
                  <FaQuoteLeft className="text-gold text-2xl mx-auto mb-3" />
                  <p className="italic text-sm leading-relaxed">
                    "Our approach is rooted in empathy, respect, and a deep commitment to supporting
                    adolescents on their journey towards healing, growth, and a brighter future."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: SERVICES OVERVIEW ===== */}
      <section id="services-overview" data-animate className="py-20 bg-white">
        <div className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ${isVisible('services-overview') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-gold font-semibold uppercase tracking-widest text-sm">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-teal-dark mt-3 mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive care designed to address every aspect of a young girl's well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Childcare Services',
                desc: 'Meeting basic needs including shelter, nutrition, nurturing environment, socialization, health and hygiene supervision.',
                icon: '🏠',
              },
              {
                title: 'Treatment Services',
                desc: 'Specialized care for youth with emotional disorders, including weekly individualized psychological and psychiatric care.',
                icon: '💚',
              },
              {
                title: 'Psychotherapy',
                desc: 'Individual and group therapy sessions to address trauma, behavioral challenges, and emotional healing.',
                icon: '🧠',
              },
              {
                title: 'Medication Management',
                desc: 'Careful monitoring and management of medications under professional medical supervision.',
                icon: '💊',
              },
              {
                title: 'Cognitive Behavioral Therapy',
                desc: 'Evidence-based CBT techniques to help develop healthy thought patterns and coping strategies.',
                icon: '🌱',
              },
              {
                title: 'Case Management',
                desc: 'Comprehensive assessments, service planning, and progress monitoring for each resident.',
                icon: '📋',
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-cream hover:bg-white rounded-2xl p-8 border-2 border-transparent hover:border-gold transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-teal-dark mb-3 group-hover:text-green-dark transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-teal-dark hover:bg-green-dark text-white font-bold px-8 py-3 rounded-full transition-all shadow-lg"
            >
              View All Services <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: CTA / CONTACT TEASER ===== */}
      <section id="cta" data-animate className="py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 text-6xl animate-butterfly opacity-15">🦋</div>
          <div className="absolute bottom-10 left-20 text-4xl animate-butterfly opacity-10" style={{ animationDelay: '3s' }}>🦋</div>
        </div>

        <div className={`relative max-w-4xl mx-auto px-4 text-center text-white transition-all duration-1000 ${isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-gold font-semibold uppercase tracking-widest text-sm">Take the First Step</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Every Journey Begins with a <span className="text-gold">Single Step</span>
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            If you're seeking help for a young girl in need, we're here to listen, support, and guide
            you through every step of the process.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-teal-dark font-bold px-10 py-4 rounded-full text-lg transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Contact Us Today <FaArrowRight />
            </Link>
            <Link
              to="/admission"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-4 rounded-full text-lg transition-all border-2 border-white/30"
            >
              Admission Process
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <FaPhone className="text-gold text-2xl mx-auto mb-2" />
              <p className="text-sm">Call us anytime</p>
              <p className="font-bold text-gold">(832) 883-1689</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <FaHeart className="text-gold text-2xl mx-auto mb-2" />
              <p className="text-sm">Compassionate care</p>
              <p className="font-bold text-gold">Always Here</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <FaShieldAlt className="text-gold text-2xl mx-auto mb-2" />
              <p className="text-sm">Safe environment</p>
              <p className="font-bold text-gold">Guaranteed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
