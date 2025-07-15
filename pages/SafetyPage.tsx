import React, { useState, useEffect, useRef } from 'react';

// Stunning Icon Components with Animations
const ShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

const BrainIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>
);

const EyeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const ZapIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
  </svg>
);

const NetworkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="2"/>
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>
  </svg>
);

const LockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <circle cx="12" cy="16" r="1"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"/>
  </svg>
);

const RocketIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

// Animated Background Component
const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30"
      style={{ zIndex: 1 }}
    />
  );
};

// Floating Action Button
const FloatingActionButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-blue-500/25 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      onClick={scrollToTop}
    >
      <RocketIcon className="w-6 h-6 mx-auto" />
    </button>
  );
};

// Principle Card with Stunning Animations
interface PrincipleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  delay: number;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ icon, title, description, gradient, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
      } hover:scale-105 hover:-translate-y-2`}
      style={{
        background: `linear-gradient(135deg, ${gradient})`,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-16 h-16 mb-6 text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
          {icon}
        </div>
        <h4 className="font-bold text-2xl text-white mb-4 group-hover:text-yellow-200 transition-colors duration-300">
          {title}
        </h4>
        <p className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
          {description}
        </p>
      </div>
      <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-white/5 rounded-full transform group-hover:scale-150 transition-transform duration-700" />
    </div>
  );
};

// Level Card with Epic Animations
interface LevelCardProps {
  level: number;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  delay: number;
}

const LevelCard: React.FC<LevelCardProps> = ({ level, title, description, features, gradient, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden rounded-3xl transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      } ${isExpanded ? 'scale-105' : 'hover:scale-102'}`}
      style={{
        background: `linear-gradient(135deg, ${gradient})`,
        boxShadow: isExpanded ? '0 30px 60px rgba(0,0,0,0.3)' : '0 20px 40px rgba(0,0,0,0.1)',
      }}
    >
      <div className="p-8">
        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center justify-center w-20 h-20 text-3xl font-bold rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            {level}
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
            <p className="text-white/80">{description}</p>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <span className={`block transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
              ↓
            </span>
          </button>
        </div>
        
        <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="space-y-3 pt-4 border-t border-white/20">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm transform transition-all duration-300 hover:bg-white/20 hover:translate-x-2"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <span className="text-white/90">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Stats Counter Component
const StatsCounter: React.FC<{ end: number; duration: number; suffix?: string }> = ({ end, duration, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
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
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, isVisible]);

  return (
    <div ref={counterRef} className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      {count}{suffix}
    </div>
  );
};

const SafetyPage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative bg-[#111] text-gray-200 min-h-screen overflow-hidden">
      <AnimatedBackground />
      <FloatingActionButton />
      
      {/* Mouse Follower */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'scale(0.8)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 xl:px-24 py-16">
        {/* Epic Hero Section */}
        <div className="text-center mb-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-3xl transform scale-150" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 mb-12 transform hover:scale-105 transition-all duration-300">
              <ShieldIcon className="w-6 h-6 text-white animate-pulse" />
              <span className="text-white font-medium text-lg uppercase tracking-wider">Next-Gen AI Safety</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black tracking-tight mb-12 leading-none">
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                FUTURE
              </span>
              <span className="block text-white transform hover:scale-105 transition-transform duration-500">
                PROOF
              </span>
              <span className="block bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                SAFETY
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-16 transform hover:scale-105 transition-all duration-300">
              Revolutionary AI safety framework that adapts, evolves, and protects humanity's future through cutting-edge technology and uncompromising standards.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <button className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-6 px-12 rounded-full text-xl transform hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25">
                <span className="relative z-10">Launch Experience</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button className="group border-2 border-white/30 text-white font-bold py-6 px-12 rounded-full text-xl hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                Explore Framework
              </button>
            </div>
          </div>
        </div>

        {/* Mind-Blowing Stats */}
        <section className="mb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { number: 99, suffix: '%', label: 'Safety Accuracy', icon: <ShieldIcon className="w-12 h-12" /> },
              { number: 24, suffix: '/7', label: 'AI Monitoring', icon: <EyeIcon className="w-12 h-12" /> },
              { number: 1000, suffix: '+', label: 'Safety Protocols', icon: <LockIcon className="w-12 h-12" /> },
              { number: 5, suffix: '', label: 'Safety Levels', icon: <StarIcon className="w-12 h-12" /> }
            ].map((stat, i) => (
              <div key={i} className="text-center group transform hover:scale-110 transition-all duration-500">
                <div className="text-white mb-6 flex justify-center group-hover:rotate-12 transition-transform duration-500">
                  {stat.icon}
                </div>
                <StatsCounter end={stat.number} duration={2000} suffix={stat.suffix} />
                <div className="text-gray-400 font-medium text-xl mt-4 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Revolutionary Principles */}
        <section className="mb-32">
          <h2 className="text-6xl md:text-7xl font-black text-center mb-20">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Core Principles
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PrincipleCard
              icon={<ShieldIcon className="w-full h-full" />}
              title="Quantum Defense"
              description="Multi-dimensional protection layers that adapt in real-time to emerging threats and vulnerabilities."
              gradient="rgba(59, 130, 246, 0.8), rgba(147, 51, 234, 0.8)"
              delay={0}
            />
            <PrincipleCard
              icon={<BrainIcon className="w-full h-full" />}
              title="Neural Alignment"
              description="Advanced AI consciousness alignment ensuring perfect harmony between artificial and human intelligence."
              gradient="rgba(147, 51, 234, 0.8), rgba(219, 39, 119, 0.8)"
              delay={200}
            />
            <PrincipleCard
              icon={<EyeIcon className="w-full h-full" />}
              title="Omniscient Monitoring"
              description="360-degree awareness system that sees everything, predicts everything, protects everything."
              gradient="rgba(219, 39, 119, 0.8), rgba(239, 68, 68, 0.8)"
              delay={400}
            />
            <PrincipleCard
              icon={<ZapIcon className="w-full h-full" />}
              title="Lightning Response"
              description="Instantaneous threat neutralization with microsecond response times and zero tolerance for failure."
              gradient="rgba(239, 68, 68, 0.8), rgba(245, 158, 11, 0.8)"
              delay={600}
            />
            <PrincipleCard
              icon={<NetworkIcon className="w-full h-full" />}
              title="Infinite Scalability"
              description="Boundless expansion capabilities that grow stronger with every connected system and device."
              gradient="rgba(245, 158, 11, 0.8), rgba(34, 197, 94, 0.8)"
              delay={800}
            />
            <PrincipleCard
              icon={<LockIcon className="w-full h-full" />}
              title="Unbreakable Security"
              description="Fortress-level protection using quantum encryption and impossible-to-crack security protocols."
              gradient="rgba(34, 197, 94, 0.8), rgba(6, 182, 212, 0.8)"
              delay={1000}
            />
            <PrincipleCard
              icon={<StarIcon className="w-full h-full" />}
              title="Stellar Performance"
              description="Beyond perfection - achieving impossible standards that redefine what AI safety can accomplish."
              gradient="rgba(6, 182, 212, 0.8), rgba(99, 102, 241, 0.8)"
              delay={1200}
            />
            <PrincipleCard
              icon={<RocketIcon className="w-full h-full" />}
              title="Future Evolution"
              description="Self-improving systems that evolve beyond current limitations to protect tomorrow's challenges today."
              gradient="rgba(99, 102, 241, 0.8), rgba(59, 130, 246, 0.8)"
              delay={1400}
            />
          </div>
        </section>

        {/* Epic Safety Levels */}
        <section className="mb-32">
          <h2 className="text-6xl md:text-7xl font-black text-center mb-20">
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Safety Evolution
            </span>
          </h2>
          <div className="space-y-8">
            <LevelCard
              level={1}
              title="Foundation Level"
              description="Basic AI systems with fundamental safety protocols"
              features={[
                "Real-time threat detection and response",
                "Advanced input validation and sanitization",
                "Automated security monitoring and alerts",
                "Comprehensive audit trails and logging"
              ]}
              gradient="rgba(34, 197, 94, 0.6), rgba(59, 130, 246, 0.6)"
              delay={0}
            />
            <LevelCard
              level={2}
              title="Advanced Level"
              description="Sophisticated AI with enhanced safety mechanisms"
              features={[
                "Predictive threat analysis and prevention",
                "Dynamic bias detection and correction",
                "Intelligent performance optimization",
                "Advanced human oversight integration"
              ]}
              gradient="rgba(59, 130, 246, 0.6), rgba(147, 51, 234, 0.6)"
              delay={200}
            />
            <LevelCard
              level={3}
              title="Expert Level"
              description="Highly capable AI with comprehensive safety frameworks"
              features={[
                "Multi-dimensional safety verification",
                "Advanced alignment testing protocols",
                "Autonomous safety decision making",
                "Cross-system safety coordination"
              ]}
              gradient="rgba(147, 51, 234, 0.6), rgba(219, 39, 119, 0.6)"
              delay={400}
            />
            <LevelCard
              level={4}
              title="Master Level"
              description="Near-AGI systems with revolutionary safety standards"
              features={[
                "Quantum-level safety verification",
                "Consciousness alignment protocols",
                "Universal safety standard compliance",
                "Interdimensional threat protection"
              ]}
              gradient="rgba(219, 39, 119, 0.6), rgba(239, 68, 68, 0.6)"
              delay={600}
            />
            <LevelCard
              level={5}
              title="Transcendent Level"
              description="AGI and beyond with ultimate safety mastery"
              features={[
                "Perfect safety prediction and prevention",
                "Universal consciousness alignment",
                "Reality-level safety guarantees",
                "Infinite safety evolution capability"
              ]}
              gradient="rgba(239, 68, 68, 0.6), rgba(245, 158, 11, 0.6)"
              delay={800}
            />
          </div>
        </section>

        {/* Epic Call to Action */}
        <section className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl blur-3xl" />
          <div className="relative z-10 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-3xl p-16 md:p-24 border border-white/10">
            <div className="text-8xl mb-12 animate-bounce">
              🚀
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <br />
              <span className="text-white">The Future?</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Join the revolution that's redefining AI safety. Experience the impossible, achieve the unthinkable, and protect humanity's greatest adventure.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <button className="group relative overflow-hidden bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white font-black py-8 px-16 rounded-full text-2xl transform hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25">
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
              <button className="border-2 border-white/30 text-white font-black py-8 px-16 rounded-full text-2xl hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                Explore More
              </button>
            </div>
            <div className="mt-12 text-gray-400 italic text-xl">
              "The future belongs to those who dare to make it safe."
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SafetyPage;