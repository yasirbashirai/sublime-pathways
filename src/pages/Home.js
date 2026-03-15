import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaHeart, FaHandHoldingHeart, FaShieldAlt, FaUserFriends, FaStar, FaArrowRight, FaPhone, FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';

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
      { threshold: 0.1 }
    );
    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const isVisible = (id) => visibleSections.has(id);

  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1920&q=80"
            alt="Peaceful garden pathway"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark/92 via-green-dark/85 to-teal-dark/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full text-sm mb-8 border border-white/20">
              <FaLeaf className="text-gold" />
              <span className="tracking-wide">Residential Treatment Center for Young Girls</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              A Safe Path to
              <span className="block text-gold mt-2">Healing & Growth</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl">
              Empowering young girls to overcome challenges of abuse, neglect, and abandonment through
              compassionate, evidence-based care in a nurturing environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/admission"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-teal-dark font-bold px-9 py-4 rounded-full text-lg transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 pulse-glow"
              >
                Start the Journey <FaArrowRight />
              </Link>
              <a
                href="tel:8328831689"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-9 py-4 rounded-full text-lg transition-all border-2 border-white/25 backdrop-blur-sm"
              >
                <FaPhone /> Call Now
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex gap-10">
              <div>
                <div className="text-3xl font-bold text-gold">24/7</div>
                <div className="text-sm text-gray-300 mt-1">Care Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold">100%</div>
                <div className="text-sm text-gray-300 mt-1">Dedicated Staff</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold">
                  <FaShieldAlt className="inline" />
                </div>
                <div className="text-sm text-gray-300 mt-1">Safe & Secure</div>
              </div>
            </div>
          </div>

          {/* Hero right - Logo prominent display */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/15 rounded-full blur-3xl scale-125"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-[2rem] p-12 border border-white/20 shadow-2xl">
                <img
                  src="/logo.png"
                  alt="Sublime Pathways - Heal, Grow, Thrive"
                  className="w-[350px] h-auto drop-shadow-2xl"
                />
                <div className="text-center mt-6">
                  <p className="text-white/90 text-lg font-semibold tracking-wide">Sublime Pathways LLC</p>
                  <p className="text-gold text-sm tracking-[0.3em] uppercase mt-1">Heal &middot; Grow &middot; Thrive</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0 100L48 87.5C96 75 192 50 288 41.7C384 33.3 480 41.7 576 50C672 58.3 768 66.7 864 62.5C960 58.3 1056 41.7 1152 37.5C1248 33.3 1344 41.7 1392 45.8L1440 50V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ===== MISSION PILLARS ===== */}
      <section id="pillars" data-animate className="py-24 bg-white">
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible('pillars') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-gold font-semibold uppercase tracking-[0.3em] text-sm">Our Foundation</span>
            <h2 className="text-4xl md:text-5xl font-bold text-teal-dark mt-3 mb-5">Heal &middot; Grow &middot; Thrive</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              A holistic approach to care, addressing every dimension of a young girl's well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHeart className="text-3xl" />,
                title: 'Heal',
                desc: 'Through evidence-based therapeutic interventions, individualized counseling, and trauma-informed care, we help young girls begin their healing journey from abuse, neglect, and abandonment.',
                image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80',
                color: 'from-teal-dark to-green-dark',
              },
              {
                icon: <FaLeaf className="text-3xl" />,
                title: 'Grow',
                desc: 'We equip residents with coping mechanisms, interpersonal skills, and problem-solving techniques that foster personal and educational growth toward independence.',
                image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
                color: 'from-green-dark to-sp-green',
              },
              {
                icon: <FaStar className="text-3xl" />,
                title: 'Thrive',
                desc: 'Our goal is to empower each young girl to thrive in less restrictive settings, building a brighter future filled with confidence, resilience, and hope.',
                image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
                color: 'from-gold to-gold-light',
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100 card-lift"
              >
                {/* Image */}
                <div className="h-52 overflow-hidden relative">
                  <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${pillar.color} opacity-60`}></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm text-white flex items-center justify-center border border-white/30">
                      {pillar.icon}
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-bold text-teal-dark mb-3">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-[15px]">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHO WE SERVE ===== */}
      <section id="serve" data-animate className="py-24 bg-cream">
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible('serve') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold font-semibold uppercase tracking-[0.3em] text-sm">Who We Serve</span>
              <h2 className="text-4xl md:text-5xl font-bold text-teal-dark mt-3 mb-6">
                A Safe Haven for <span className="text-green-dark">Young Girls</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We envision a future where children facing issues of abuse, neglect, and abandonment
                receive comprehensive care that transforms their lives. Our approach is personalized,
                tailored to meet the unique needs of each individual.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Behavioral modification & life skills development',
                  'Social and educational support programs',
                  'Individualized counseling & group therapy',
                  'Family intervention and reunification services',
                  'Trauma-informed, evidence-based practices',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-sp-green shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-green-dark hover:bg-teal-dark text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                Explore Our Services <FaArrowRight />
              </Link>
            </div>

            {/* Image grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg h-48 img-zoom">
                  <img
                    src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&q=80"
                    alt="Group support and connection"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg h-64 img-zoom">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80"
                    alt="Professional counselor"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg h-64 img-zoom">
                  <img
                    src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80"
                    alt="Educational learning environment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-gradient-to-br from-teal-dark to-green-dark rounded-2xl p-6 text-white shadow-lg h-48 flex flex-col justify-center">
                  <FaQuoteLeft className="text-gold text-xl mb-3" />
                  <p className="italic text-sm leading-relaxed text-gray-200">
                    "Our approach is rooted in empathy, respect, and a deep commitment to supporting
                    adolescents on their journey towards healing."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES OVERVIEW ===== */}
      <section id="services-overview" data-animate className="py-24 bg-white">
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible('services-overview') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-gold font-semibold uppercase tracking-[0.3em] text-sm">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-teal-dark mt-3 mb-5">Our Core Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Comprehensive care designed to address every aspect of a young girl's well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Childcare Services',
                desc: 'Meeting basic needs including shelter, nutrition, nurturing environment, socialization, health and hygiene supervision.',
                icon: <FaHandHoldingHeart className="text-2xl" />,
                image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80',
              },
              {
                title: 'Treatment Services',
                desc: 'Specialized care for youth with emotional disorders, including weekly individualized psychological and psychiatric care.',
                icon: <FaHeart className="text-2xl" />,
                image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
              },
              {
                title: 'Psychotherapy',
                desc: 'Individual and group therapy sessions to address trauma, behavioral challenges, and promote emotional healing.',
                icon: <FaUserFriends className="text-2xl" />,
                image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&q=80',
              },
              {
                title: 'Medication Management',
                desc: 'Careful monitoring and management of medications under professional medical supervision and care.',
                icon: <FaShieldAlt className="text-2xl" />,
                image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80',
              },
              {
                title: 'Cognitive Behavioral Therapy',
                desc: 'Evidence-based CBT techniques to help develop healthy thought patterns and coping strategies for life.',
                icon: <FaLeaf className="text-2xl" />,
                image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
              },
              {
                title: 'Case Management',
                desc: 'Comprehensive assessments, service planning, and progress monitoring for each resident in our care.',
                icon: <FaStar className="text-2xl" />,
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 bg-white border border-gray-100 card-lift"
              >
                <div className="h-44 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/70 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-gold text-teal-dark flex items-center justify-center shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-teal-dark mb-2 group-hover:text-green-dark transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-teal-dark hover:bg-green-dark text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-lg"
            >
              View All Services <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section id="cta" data-animate className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80"
            alt="Peaceful sunrise over nature"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-dark/90 via-green-dark/85 to-teal-dark/90"></div>
        </div>

        <div className={`relative max-w-4xl mx-auto px-6 text-center text-white transition-all duration-1000 ${isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <img src="/logo.png" alt="Sublime Pathways" className="h-24 mx-auto mb-8 logo-glow animate-float" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Every Journey Begins with a <span className="text-gold">Single Step</span>
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            If you're seeking help for a young girl in need, we're here to listen, support, and guide
            you through every step of the process.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-teal-dark font-bold px-10 py-4 rounded-full text-lg transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Contact Us Today <FaArrowRight />
            </Link>
            <Link
              to="/admission"
              className="inline-flex items-center justify-center gap-2 bg-white/12 hover:bg-white/20 text-white font-bold px-10 py-4 rounded-full text-lg transition-all border-2 border-white/25 backdrop-blur-sm"
            >
              Admission Process
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { icon: <FaPhone className="text-xl" />, label: 'Call us anytime', value: '(832) 883-1689' },
              { icon: <FaHeart className="text-xl" />, label: 'Compassionate care', value: 'Always Here' },
              { icon: <FaShieldAlt className="text-xl" />, label: 'Safe environment', value: 'Guaranteed' },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                <div className="text-gold mb-2">{item.icon}</div>
                <p className="text-sm text-gray-300">{item.label}</p>
                <p className="font-bold text-gold text-lg">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
