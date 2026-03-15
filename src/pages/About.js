import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShieldAlt, FaHandHoldingHeart, FaStar, FaUsers, FaEye, FaBullseye, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-10 right-20 text-6xl animate-butterfly opacity-15">🦋</div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <span className="text-gold font-semibold uppercase tracking-widest text-sm">Who We Are</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-6">About Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Sublime Pathways is a residential treatment center dedicated to transforming the lives
            of young girls through compassionate, holistic care.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 80" fill="none"><path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 48C1200 48 1320 40 1380 36L1440 32V80H0Z" fill="white"/></svg>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold font-semibold uppercase tracking-widest text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-teal-dark mt-3 mb-6">
                Building Brighter Futures, <span className="text-green-dark">One Girl at a Time</span>
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Sublime Pathways LLC was founded with a profound vision: to create a safe haven where
                young girls facing the devastating effects of abuse, neglect, and abandonment can find
                hope, healing, and a path forward.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Our approach is multifaceted and personalized, tailored to meet the unique needs of each
                individual under our care. We prioritize a holistic model of healing, encompassing
                psychological, emotional, social, and educational dimensions.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Through evidence-based practices and compassionate support, we guide adolescents
                towards positive growth and development, empowering them to thrive in less restrictive settings.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full bg-gold/20 rounded-3xl"></div>
                <div className="relative bg-gradient-to-br from-teal-dark to-green-dark rounded-3xl p-10 text-white shadow-2xl">
                  <img src="/logo.png" alt="Sublime Pathways" className="w-48 mx-auto mb-6 drop-shadow-xl" />
                  <h3 className="text-2xl font-bold text-center mb-2">Sublime Pathways</h3>
                  <p className="text-gold text-center font-semibold tracking-wider mb-6">
                    Heal &middot; Grow &middot; Thrive
                  </p>
                  <div className="bg-white/10 rounded-2xl p-6">
                    <FaQuoteLeft className="text-gold text-xl mb-3" />
                    <p className="text-sm italic leading-relaxed">
                      "Central to our approach is fostering a safe and nurturing environment where
                      adolescents feel heard, valued, and empowered."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-sage">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all border-t-4 border-teal-dark">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-dark to-teal text-white flex items-center justify-center mb-6 shadow-lg">
                <FaEye className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-teal-dark mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                We envision a future where children facing issues of abuse, neglect, and abandonment
                receive comprehensive care. This includes behavioral modification, the acquisition of
                family living skills, and support for social and educational development. We are dedicated
                to equipping our residents with coping mechanisms, interpersonal abilities, and
                problem-solving techniques, empowering them to thrive in less restrictive settings.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all border-t-4 border-gold">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold-light text-teal-dark flex items-center justify-center mb-6 shadow-lg">
                <FaBullseye className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-teal-dark mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide comprehensive, compassionate residential treatment that addresses the
                psychological, emotional, social, and educational needs of young girls. Through
                evidence-based practices, individualized care plans, and a nurturing environment,
                we empower each resident to heal from trauma, build resilience, and develop the
                skills needed for a brighter, more independent future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold uppercase tracking-widest text-sm">What Guides Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-teal-dark mt-3 mb-4">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHeart className="text-3xl" />,
                title: 'Compassion',
                desc: 'Every interaction is guided by empathy and genuine care for each young girl\'s unique journey.',
              },
              {
                icon: <FaShieldAlt className="text-3xl" />,
                title: 'Safety',
                desc: 'We maintain a secure, protected environment where residents can feel safe to grow and heal.',
              },
              {
                icon: <FaHandHoldingHeart className="text-3xl" />,
                title: 'Respect',
                desc: 'We honor the dignity and individuality of every resident, valuing their voice and experiences.',
              },
              {
                icon: <FaStar className="text-3xl" />,
                title: 'Excellence',
                desc: 'We strive for the highest standards in clinical care, staff training, and therapeutic outcomes.',
              },
              {
                icon: <FaUsers className="text-3xl" />,
                title: 'Family-Centered',
                desc: 'We believe in the power of family involvement and provide interventions that strengthen family bonds.',
              },
              {
                icon: <FaBullseye className="text-3xl" />,
                title: 'Empowerment',
                desc: 'We equip young girls with skills and confidence to thrive independently beyond our program.',
              },
            ].map((value, i) => (
              <div key={i} className="group bg-cream hover:bg-white rounded-2xl p-8 border-2 border-transparent hover:border-gold transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-dark to-green text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-teal-dark mb-2">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-sage">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-dark mb-4">Our Therapeutic Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Rooted in empathy, respect, and commitment to every young girl's journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Therapeutic Relationships',
                desc: 'We emphasize the importance of building trust through consistent, caring relationships between staff and residents.',
              },
              {
                title: 'Individualized Counseling',
                desc: 'Each resident receives personalized counseling tailored to their specific needs, challenges, and goals.',
              },
              {
                title: 'Group Therapy Sessions',
                desc: 'Structured group therapy helps residents build social skills, peer support, and shared healing experiences.',
              },
              {
                title: 'Family Interventions',
                desc: 'We engage families in the treatment process, strengthening family bonds and preparing for successful transitions.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-gold-light text-teal-dark flex items-center justify-center font-bold text-xl shrink-0 shadow">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-teal-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Sublime Pathways Family</h2>
          <p className="text-lg text-gray-200 mb-8">
            If you believe a young girl in your life could benefit from our care, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admission" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-teal-dark font-bold px-8 py-3 rounded-full transition-all shadow-lg">
              Start Admission <FaArrowRight />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3 rounded-full transition-all border-2 border-white/30">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
