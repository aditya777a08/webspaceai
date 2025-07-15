import React, { useState, useEffect, useRef } from 'react';

// Elegant, timeless icons
const ShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

const EyeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <polyline points="20,6 9,17 4,12"/>
  </svg>
);

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"/>
  </svg>
);

const HeartIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const LockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <circle cx="12" cy="16" r="1"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const TrendingUpIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/>
    <polyline points="17,6 23,6 23,12"/>
  </svg>
);

const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

// Elegant reveal animation hook
const useRevealOnScroll = (delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return { ref, isVisible };
};

// Elegant principle card
interface PrincipleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ icon, title, description, delay = 0 }) => {
  const { ref, isVisible } = useRevealOnScroll(delay);

  return (
    <div
      ref={ref}
      className={`group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-700 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="w-16 h-16 mb-6 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
        {description}
      </p>
    </div>
  );
};

// Elegant level component
interface SafetyLevelProps {
  level: number;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

const SafetyLevel: React.FC<SafetyLevelProps> = ({ level, title, description, features, delay = 0 }) => {
  const { ref, isVisible } = useRevealOnScroll(delay);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      }`}
    >
      <div className="group p-8 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:from-white/10 hover:to-white/15 hover:border-white/20 transition-all duration-500">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/20 text-2xl font-bold text-white">
              {level}
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-gray-300">{description}</p>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
          >
            <span className={`block transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
              ↓
            </span>
          </button>
        </div>
        
        <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pt-6 border-t border-white/10">
            <div className="grid gap-3">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Elegant stats counter
const StatCounter: React.FC<{ end: number; suffix?: string; duration?: number }> = ({ 
  end, 
  suffix = '', 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const { ref, isVisible } = useRevealOnScroll();

  useEffect(() => {
    if (isVisible && !hasStarted) {
      setHasStarted(true);
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    }
  }, [isVisible, hasStarted, end, duration]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-light text-white">
      {count}{suffix}
    </div>
  );
};

const SafetyPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative bg-[#111] text-gray-200 min-h-screen overflow-hidden">
      {/* Subtle background texture */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-transparent via-white/[0.01] to-transparent"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 xl:px-24">
        {/* Breathtaking hero section */}
        <section ref={heroRef} className="min-h-screen flex items-center justify-center text-center py-20">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-12 hover:bg-white/20 transition-all duration-500">
              <ShieldIcon className="w-5 h-5 text-white" />
              <span className="text-white font-medium tracking-wide">AI Safety Framework</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin tracking-tight mb-8 leading-none">
              <span className="block text-white mb-4">The Future</span>
              <span className="block text-white/60">of Safety</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12 font-light">
              Pioneering comprehensive AI safety standards through elegant frameworks, 
              rigorous testing, and unwavering commitment to human-centered design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span>Explore Framework</span>
              </button>
              <button className="group px-8 py-4 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                <span>Documentation</span>
              </button>
            </div>
          </div>
        </section>

        {/* Elegant statistics */}
        <section className="py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
            {[
              { number: 99, suffix: '%', label: 'Safety Accuracy', icon: <ShieldIcon className="w-8 h-8 mx-auto mb-4 text-white/60" /> },
              { number: 24, suffix: '/7', label: 'Monitoring', icon: <EyeIcon className="w-8 h-8 mx-auto mb-4 text-white/60" /> },
              { number: 500, suffix: '+', label: 'Safety Checks', icon: <CheckIcon className="w-8 h-8 mx-auto mb-4 text-white/60" /> },
              { number: 5, suffix: '', label: 'Safety Levels', icon: <StarIcon className="w-8 h-8 mx-auto mb-4 text-white/60" /> }
            ].map((stat, i) => (
              <div key={i} className="group hover:scale-110 transition-all duration-500">
                {stat.icon}
                <StatCounter end={stat.number} suffix={stat.suffix} />
                <div className="text-gray-400 font-light text-lg mt-2 group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Elegant principles */}
        <section className="py-24">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-thin text-white mb-6">
              Core Principles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Eight foundational pillars that guide our approach to AI safety, 
              ensuring responsible development and deployment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PrincipleCard
              icon={<ShieldIcon className="w-full h-full" />}
              title="Security First"
              description="Comprehensive protection against threats, vulnerabilities, and misuse through proactive security measures."
              delay={0}
            />
            <PrincipleCard
              icon={<HeartIcon className="w-full h-full" />}
              title="Human-Centered"
              description="Designing AI systems that enhance human capabilities while respecting human values and autonomy."
              delay={100}
            />
            <PrincipleCard
              icon={<EyeIcon className="w-full h-full" />}
              title="Transparency"
              description="Clear, explainable AI behavior with comprehensive monitoring and auditing capabilities."
              delay={200}
            />
            <PrincipleCard
              icon={<CheckIcon className="w-full h-full" />}
              title="Reliability"
              description="Consistent, predictable performance with robust testing and validation protocols."
              delay={300}
            />
            <PrincipleCard
              icon={<LockIcon className="w-full h-full" />}
              title="Privacy Protection"
              description="Safeguarding personal data and ensuring user privacy through advanced encryption and access controls."
              delay={400}
            />
            <PrincipleCard
              icon={<TrendingUpIcon className="w-full h-full" />}
              title="Continuous Improvement"
              description="Iterative enhancement based on feedback, research, and evolving safety standards."
              delay={500}
            />
            <PrincipleCard
              icon={<UsersIcon className="w-full h-full" />}
              title="Collaborative Governance"
              description="Multi-stakeholder approach involving experts, users, and communities in safety decisions."
              delay={600}
            />
            <PrincipleCard
              icon={<StarIcon className="w-full h-full" />}
              title="Excellence"
              description="Commitment to the highest standards of quality, ethics, and responsible AI development."
              delay={700}
            />
          </div>
        </section>

        {/* Elegant safety levels */}
        <section className="py-24">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-thin text-white mb-6">
              Safety Maturity Levels
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              A progressive framework for AI safety implementation, from foundational 
              measures to advanced autonomous systems.
            </p>
          </div>
          
          <div className="space-y-8">
            <SafetyLevel
              level={1}
              title="Foundation"
              description="Essential safety measures for basic AI systems"
              features={[
                "Input validation and sanitization",
                "Basic monitoring and logging",
                "Human oversight requirements",
                "Standard security protocols"
              ]}
              delay={0}
            />
            <SafetyLevel
              level={2}
              title="Enhanced"
              description="Advanced safety controls for production systems"
              features={[
                "Automated threat detection",
                "Bias monitoring and mitigation",
                "Performance optimization safeguards",
                "Enhanced audit capabilities"
              ]}
              delay={100}
            />
            <SafetyLevel
              level={3}
              title="Advanced"
              description="Comprehensive safety framework for critical applications"
              features={[
                "Multi-layer security validation",
                "Real-time safety assessment",
                "Adaptive response mechanisms",
                "Cross-system safety coordination"
              ]}
              delay={200}
            />
            <SafetyLevel
              level={4}
              title="Expert"
              description="Sophisticated safety measures for high-stakes environments"
              features={[
                "Predictive safety modeling",
                "Advanced alignment verification",
                "Autonomous safety decisions",
                "Comprehensive risk management"
              ]}
              delay={300}
            />
            <SafetyLevel
              level={5}
              title="Mastery"
              description="Ultimate safety standards for AGI and beyond"
              features={[
                "Perfect safety prediction",
                "Universal alignment verification",
                "Absolute safety guarantees",
                "Evolutionary safety adaptation"
              ]}
              delay={400}
            />
          </div>
        </section>

        {/* Elegant call to action */}
        <section className="py-32 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-thin text-white mb-8">
              Join the Safety Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-12 font-light leading-relaxed">
              Be part of the movement that's shaping the future of AI safety. 
              Together, we can build technology that serves humanity's best interests.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-10 py-5 bg-white text-black rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span>Get Started</span>
              </button>
              <button className="group px-10 py-5 border border-white/30 text-white rounded-full font-medium text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                <span>Learn More</span>
              </button>
            </div>
            <p className="text-gray-400 mt-12 font-light italic text-lg">
              "The future belongs to those who build it safely."
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SafetyPage;