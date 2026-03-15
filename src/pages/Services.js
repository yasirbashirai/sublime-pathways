import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaHome, FaHeartbeat, FaBrain, FaPills, FaClipboardList, FaUsers } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaHome className="text-3xl" />,
      title: 'Childcare Services',
      tagline: 'Meeting Every Basic Need',
      image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80',
      description: 'Comprehensive services that meet a child\'s basic needs in a nurturing, supportive environment designed for growth and stability.',
      features: [
        'Safe shelter and housing',
        'Nutritious food and balanced meals',
        'Appropriate clothing and personal items',
        'Nurturing environment with dedicated staff',
        'Socialization and interpersonal skills development',
        'Personal health and hygiene care',
        'Ongoing supervision and mentoring',
        'Educational support and enrichment',
        'Individualized service planning',
      ],
    },
    {
      icon: <FaHeartbeat className="text-3xl" />,
      title: 'Treatment Services',
      tagline: 'Specialized Therapeutic Care',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
      description: 'Advanced therapeutic support designed for youth with emotional disorders, including mood disorders, psychotic disorders, and dissociative disorders.',
      features: [
        'Support for youth with a Global Assessment Functioning of 50 or below',
        'Care for those with current DSM diagnosis',
        'Intervention for self-injurious behaviors and suicide risk',
        'Support for youth presenting risk of harm to others',
        'Weekly individualized psychological/psychiatric care',
        'Quarterly treatment team review meetings',
        'Progress monitoring and service plan updates',
      ],
    },
    {
      icon: <FaBrain className="text-3xl" />,
      title: 'Psychotherapy',
      tagline: 'Healing Through Therapeutic Connection',
      image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&q=80',
      description: 'Individual and group therapy sessions guided by licensed professionals, helping young girls process trauma and develop emotional resilience.',
      features: [
        'Individual counseling sessions',
        'Group therapy programs',
        'Trauma-informed therapeutic approaches',
        'Emotional regulation skill building',
        'Safe and confidential therapeutic space',
      ],
    },
    {
      icon: <FaPills className="text-3xl" />,
      title: 'Medication Management',
      tagline: 'Careful & Compassionate Medical Oversight',
      image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80',
      description: 'Professional medical supervision ensuring safe and effective medication protocols tailored to each resident\'s unique needs.',
      features: [
        'Individualized medication plans',
        'Regular psychiatric evaluations',
        'Ongoing medication monitoring and adjustments',
        'Collaboration with treatment team',
        'Family education on medication protocols',
      ],
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: 'Cognitive Behavioral Therapy',
      tagline: 'Reshaping Thought Patterns',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
      description: 'Evidence-based CBT techniques that help young girls identify and change negative thought patterns, developing healthy coping strategies for life.',
      features: [
        'Identification of negative thought patterns',
        'Development of healthy coping strategies',
        'Behavioral modification techniques',
        'Goal-setting and problem-solving skills',
        'Relapse prevention planning',
      ],
    },
    {
      icon: <FaClipboardList className="text-3xl" />,
      title: 'Case Management Services',
      tagline: 'Coordinated & Comprehensive Support',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      description: 'Full-spectrum case management including assessments, service plan updates, service management, and monitoring to track each child\'s progress.',
      features: [
        'Comprehensive initial assessments',
        'Ongoing service plan development and updates',
        'Service management and coordination',
        'Progress tracking and documentation',
        'Transition planning for less restrictive settings',
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=80"
            alt="Professional care team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark/93 via-green-dark/88 to-teal-dark/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <span className="text-gold font-semibold uppercase tracking-[0.3em] text-sm">What We Offer</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive, compassionate care tailored to meet the unique needs of every young girl in our program.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-12 md:h-20"><path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 48C1200 48 1320 40 1380 36L1440 32V80H0Z" fill="white"/></svg>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-8">
            <img src="/logo.png" alt="Sublime Pathways" className="h-20 logo-glow" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-teal-dark mb-5">A Holistic Approach to Care</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We offer a range of services including medication management, psychotherapy, and cognitive behavioral therapy.
            Our treatment is personalized, encompassing psychological, emotional, social, and educational dimensions
            to support every young girl on her path to healing.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {services.map((service, i) => (
            <div
              key={i}
              className={`grid lg:grid-cols-2 gap-14 items-center`}
            >
              {/* Image - alternates side */}
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="rounded-2xl overflow-hidden shadow-xl relative group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-gold text-teal-dark flex items-center justify-center shadow-lg">
                      {service.icon}
                    </div>
                    <div className="text-white">
                      <p className="font-bold text-lg">{service.title}</p>
                      <p className="text-gold text-sm">{service.tagline}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-teal-dark mb-2">{service.title}</h3>
                <p className="text-gold font-semibold mb-4">{service.tagline}</p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <FaCheckCircle className="text-sp-green shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-20 bg-sage">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-dark mb-4">Our Treatment Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We foster a safe and nurturing environment where adolescents feel heard, valued, and empowered.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Psychological', desc: 'Evidence-based mental health care', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80' },
              { label: 'Emotional', desc: 'Nurturing emotional intelligence', image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&q=80' },
              { label: 'Social', desc: 'Building healthy relationships', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80' },
              { label: 'Educational', desc: 'Academic support and growth', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80' },
            ].map((dim, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all card-lift">
                <div className="h-36 overflow-hidden">
                  <img src={dim.image} alt={dim.label} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 text-center border-t-4 border-gold">
                  <h3 className="text-xl font-bold text-teal-dark mb-2">{dim.label}</h3>
                  <p className="text-gray-500 text-sm">{dim.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-green-dark/90"></div>
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Need More Information?</h2>
          <p className="text-lg text-gray-200 mb-8">
            Our team is ready to answer your questions and help you understand how our services can support your child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-teal-dark font-bold px-8 py-3.5 rounded-full transition-all shadow-lg">
              Contact Us <FaArrowRight />
            </Link>
            <Link to="/admission" className="inline-flex items-center justify-center gap-2 bg-white/12 hover:bg-white/20 text-white font-bold px-8 py-3.5 rounded-full transition-all border-2 border-white/25">
              Admission Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
