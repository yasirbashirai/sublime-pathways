import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaHome, FaHeartbeat, FaBrain, FaPills, FaClipboardList, FaUsers } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaHome className="text-4xl" />,
      title: 'Childcare Services',
      tagline: 'Meeting Every Basic Need',
      description: 'Comprehensive services that meet a child\'s basic needs in a nurturing, supportive environment.',
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
      icon: <FaHeartbeat className="text-4xl" />,
      title: 'Treatment Services',
      tagline: 'Specialized Therapeutic Care',
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
      icon: <FaBrain className="text-4xl" />,
      title: 'Psychotherapy',
      tagline: 'Healing Through Therapeutic Connection',
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
      icon: <FaPills className="text-4xl" />,
      title: 'Medication Management',
      tagline: 'Careful & Compassionate Medical Oversight',
      description: 'Professional medical supervision ensuring safe and effective medication protocols tailored to each resident\'s needs.',
      features: [
        'Individualized medication plans',
        'Regular psychiatric evaluations',
        'Ongoing medication monitoring and adjustments',
        'Collaboration with treatment team',
        'Family education on medication protocols',
      ],
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: 'Cognitive Behavioral Therapy',
      tagline: 'Reshaping Thought Patterns',
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
      icon: <FaClipboardList className="text-4xl" />,
      title: 'Case Management Services',
      tagline: 'Coordinated & Comprehensive Support',
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
      {/* Hero Banner */}
      <section className="hero-gradient relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 text-6xl animate-butterfly opacity-15">🦋</div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <span className="text-gold font-semibold uppercase tracking-widest text-sm">What We Offer</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive, compassionate care tailored to meet the unique needs of every young girl in our program.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 80" fill="none"><path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 48C1200 48 1320 40 1380 36L1440 32V80H0Z" fill="white"/></svg>
        </div>
      </section>

      {/* Services Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-dark mb-4">A Holistic Approach to Care</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We offer a range of services including medication management, psychotherapy, and cognitive behavioral therapy.
              Our treatment is personalized, encompassing psychological, emotional, social, and educational dimensions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {services.map((service, i) => (
            <div
              key={i}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-dark to-green-dark text-white flex items-center justify-center shadow-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-teal-dark">{service.title}</h3>
                    <p className="text-gold font-semibold">{service.tagline}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <FaCheckCircle className="text-green shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="bg-gradient-to-br from-sage to-cream rounded-3xl p-10 text-center shadow-lg border border-green/10">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal-dark to-green text-white flex items-center justify-center shadow-xl text-5xl">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-teal-dark mb-2">{service.title}</h4>
                  <p className="text-gray-500 text-sm">{service.tagline}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-20 bg-sage">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-dark mb-4">Our Treatment Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We foster a safe and nurturing environment where adolescents feel heard, valued, and empowered.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Psychological', desc: 'Evidence-based mental health care' },
              { label: 'Emotional', desc: 'Nurturing emotional intelligence' },
              { label: 'Social', desc: 'Building healthy relationships' },
              { label: 'Educational', desc: 'Academic support and growth' },
            ].map((dim, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-gold">
                <h3 className="text-xl font-bold text-teal-dark mb-2">{dim.label}</h3>
                <p className="text-gray-600 text-sm">{dim.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need More Information?</h2>
          <p className="text-lg text-green-100 mb-8">
            Our team is ready to answer your questions and help you understand how our services can support your child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-teal-dark font-bold px-8 py-3 rounded-full transition-all shadow-lg">
              Contact Us <FaArrowRight />
            </Link>
            <Link to="/admission" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3 rounded-full transition-all border-2 border-white/30">
              Admission Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
