import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShieldAlt, FaHandHoldingHeart, FaStar, FaUsers, FaEye, FaBullseye, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80"
            alt="Peaceful sunrise in nature"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark/93 via-green-dark/85 to-teal-dark/88"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <span className="text-gold font-semibold uppercase tracking-[0.3em] text-sm">Who We Are</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">About Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Sublime Pathways is a residential treatment center dedicated to transforming the lives
            of young girls through compassionate, holistic care.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-12 md:h-20"><path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 48C1200 48 1320 40 1380 36L1440 32V80H0Z" fill="white"/></svg>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold font-semibold uppercase tracking-[0.3em] text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-teal-dark mt-3 mb-6">
                Building Brighter Futures, <span className="text-green-dark">One Girl at a Time</span>
              </h2>
              <p className="text-gray-600 text-lg mb-5 leading-relaxed">
                Sublime Pathways LLC was founded with a profound vision: to create a safe haven where
                young girls facing the devastating effects of abuse, neglect, and abandonment can find
                hope, healing, and a path forward.
              </p>
              <p className="text-gray-600 text-lg mb-5 leading-relaxed">
                Our approach is multifaceted and personalized, tailored to meet the unique needs of each
                individual under our care. We prioritize a holistic model of healing, encompassing
                psychological, emotional, social, and educational dimensions.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Through evidence-based practices and compassionate support, we guide adolescents
                towards positive growth and development, empowering them to thrive in less restrictive settings.
              </p>
            </div>

            {/* Right side - logo + image collage */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-teal-dark to-green-dark rounded-2xl p-8 text-white shadow-2xl text-center">
                <img src="/logo.png" alt="Sublime Pathways" className="w-44 mx-auto mb-5 drop-shadow-xl logo-glow" />
                <h3 className="text-2xl font-bold mb-1">Sublime Pathways LLC</h3>
                <p className="text-gold font-semibold tracking-[0.3em] text-sm uppercase mb-5">
                  Heal &middot; Grow &middot; Thrive
                </p>
                <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm border border-white/10">
                  <FaQuoteLeft className="text-gold text-lg mb-2" />
                  <p className="text-sm italic leading-relaxed text-gray-200">
                    "Central to our approach is fostering a safe and nurturing environment where
                    adolescents feel heard, valued, and empowered."
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg h-40 img-zoom">
                  <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&q=80" alt="Compassionate care" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-40 img-zoom">
                  <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80" alt="Educational support" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80" alt="Vision" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-teal-dark/60"></div>
                <div className="absolute bottom-5 left-5 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gold text-teal-dark flex items-center justify-center shadow-lg">
                    <FaEye className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed">
                  We envision a future where children facing issues of abuse, neglect, and abandonment
                  receive comprehensive care. This includes behavioral modification, the acquisition of
                  family living skills, and support for social and educational development. We are dedicated
                  to equipping our residents with coping mechanisms, interpersonal abilities, and
                  problem-solving techniques, empowering them to thrive in less restrictive settings.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80" alt="Mission" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-green-dark/60"></div>
                <div className="absolute bottom-5 left-5 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gold text-teal-dark flex items-center justify-center shadow-lg">
                    <FaBullseye className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed">
                  To provide comprehensive, compassionate residential treatment that addresses the
                  psychological, emotional, social, and educational needs of young girls. Through
                  evidence-based practices, individualized care plans, and a nurturing environment,
                  we empower each resident to heal from trauma, build resilience, and develop the
                  skills needed for a brighter, more independent future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold uppercase tracking-[0.3em] text-sm">What Guides Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-teal-dark mt-3 mb-4">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FaHeart className="text-2xl" />, title: 'Compassion', desc: 'Every interaction is guided by empathy and genuine care for each young girl\'s unique journey toward healing.' },
              { icon: <FaShieldAlt className="text-2xl" />, title: 'Safety', desc: 'We maintain a secure, protected environment where residents can feel safe to grow, heal, and explore.' },
              { icon: <FaHandHoldingHeart className="text-2xl" />, title: 'Respect', desc: 'We honor the dignity and individuality of every resident, valuing their voice and lived experiences.' },
              { icon: <FaStar className="text-2xl" />, title: 'Excellence', desc: 'We strive for the highest standards in clinical care, staff training, and therapeutic outcomes every day.' },
              { icon: <FaUsers className="text-2xl" />, title: 'Family-Centered', desc: 'We believe in the power of family involvement and provide interventions that strengthen family bonds.' },
              { icon: <FaBullseye className="text-2xl" />, title: 'Empowerment', desc: 'We equip young girls with skills and confidence to thrive independently beyond our program.' },
            ].map((value, i) => (
              <div key={i} className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-gold/40 transition-all duration-300 shadow-sm hover:shadow-xl card-lift">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-dark to-green-dark text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-teal-dark mb-3">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Approach */}
      <section className="py-24 bg-sage">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-dark mb-4">Our Therapeutic Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Rooted in empathy, respect, and commitment to every young girl's journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Therapeutic Relationships', desc: 'Building trust through consistent, caring relationships between staff and residents.', image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&q=80' },
              { title: 'Individualized Counseling', desc: 'Personalized counseling tailored to specific needs, challenges, and goals.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80' },
              { title: 'Group Therapy Sessions', desc: 'Structured group therapy for social skills, peer support, and shared healing.', image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&q=80' },
              { title: 'Family Interventions', desc: 'Engaging families in treatment, strengthening bonds and preparing for transitions.', image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col md:flex-row card-lift">
                <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-center">
                  <div className="w-10 h-10 rounded-lg bg-gold text-teal-dark flex items-center justify-center font-bold text-lg mb-3 shadow">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-teal-dark mb-2">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1920&q=80" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark/93 via-green-dark/88 to-teal-dark/90"></div>
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
          <img src="/logo.png" alt="Sublime Pathways" className="h-20 mx-auto mb-6 logo-glow" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Sublime Pathways Family</h2>
          <p className="text-lg text-gray-200 mb-8">
            If you believe a young girl in your life could benefit from our care, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admission" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-teal-dark font-bold px-8 py-3.5 rounded-full transition-all shadow-lg">
              Start Admission <FaArrowRight />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white/12 hover:bg-white/20 text-white font-bold px-8 py-3.5 rounded-full transition-all border-2 border-white/25">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
