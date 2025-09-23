import React from 'react';

// --- NEW, Topic-Matched SVG Icons for Features ---
const AiIcon = () => (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);
const AnalyticsIcon = () => (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
    </svg>
);
const MultiPlatformIcon = () => (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 21V5a2 2 0 00-2-2H3a2 2 0 00-2 2v14a2 2 0 002 2h5" />
    </svg>
);
const SecurityIcon = () => (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917L12 22l9-1.083A12.02 12.02 0 0020.618 5.984z" />
    </svg>
);
// --- ✨ NEW, IMPROVED Alumni Network Icon ---
const AlumniIcon = () => (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);
const ChatbotIcon = () => (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-4 4z" />
    </svg>
);


const FeatureCard = ({ icon, title, description, isSpecial }) => {
  const cardClasses = isSpecial
    ? "flex flex-col text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    : "flex flex-col text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2";

  const iconContainerClasses = "bg-blue-100 text-blue-600 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6";

  return (
    <div className={cardClasses}>
      <div className="flex-grow">
        <div className={iconContainerClasses}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  const featuresData = [
    {
      icon: <AiIcon />,
      title: 'AI-Powered Guidance',
      description: 'Smart portfolio generation and career path suggestions powered by advanced AI.',
    },
    {
      icon: <AnalyticsIcon />,
      title: 'Accreditation Analytics',
      description: 'Generate comprehensive, real-time reports for NAAC, AICTE, and NIRF.',
    },
    {
      icon: <MultiPlatformIcon />,
      title: 'Multi-Platform Access',
      description: 'Accessible on web and mobile, ensuring your data is always within reach.',
    },
    {
      icon: <SecurityIcon />,
      title: 'Secure & Verified',
      description: 'Enterprise-grade security with immutable, blockchain-verified academic records.',
    },
    {
      icon: <AlumniIcon />,
      title: 'Alumni Network',
      description: 'Connect students with accomplished alumni for mentorship and career opportunities.',
    },
    {
      icon: <ChatbotIcon />,
      title: 'Smart Career Chatbot',
      description: 'Personalized AI assistant for career guidance, skill gap analysis, and more.',
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-24 bg-slate-50">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Platform Features
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            A centralized hub for every stakeholder in education, built for the future.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              isSpecial={feature.title === 'Accreditation Analytics'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

