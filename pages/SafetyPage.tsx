import React from 'react';

// Professional Icon Components
const ShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="20,6 9,17 4,12"/>
  </svg>
);

const AlertIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

const TargetIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const EyeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const BookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);

const CogIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

interface PrincipleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ icon, title, description }) => (
  <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-[1.02]">
    <div className="w-12 h-12 mb-4 text-white">
      {icon}
    </div>
    <h4 className="font-semibold text-xl text-white mb-3">{title}</h4>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

interface LevelCardProps {
  level: number;
  title: string;
  description: string;
  requirements: string[];
  safeguards: string[];
}

const LevelCard: React.FC<LevelCardProps> = ({ level, title, description, requirements, safeguards }) => (
  <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300 mb-8">
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 border-b border-gray-800">
      <div className="flex items-center gap-6 mb-4">
        <div className="flex items-center justify-center w-16 h-16 text-2xl font-bold rounded-full bg-white text-gray-900">
          {level}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-gray-400 mt-2">{description}</p>
        </div>
      </div>
    </div>
    <div className="p-6">
      <div className="grid lg:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-green-400" />
            Requirements
          </h4>
          <div className="space-y-3">
            {requirements.map((req, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 text-sm">{req}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
            <ShieldIcon className="w-5 h-5 text-blue-400" />
            Safeguards
          </h4>
          <div className="space-y-3">
            {safeguards.map((safeguard, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 text-sm">{safeguard}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

interface ImplementationStepProps {
  step: number;
  title: string;
  description: string;
}

const ImplementationStep: React.FC<ImplementationStepProps> = ({ step, title, description }) => (
  <div className="flex items-start gap-6">
    <div className="flex-shrink-0 w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center font-bold text-lg">
      {step}
    </div>
    <div className="flex-1 pt-2">
      <h4 className="text-xl font-semibold text-white mb-3">{title}</h4>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

const SafetyPage: React.FC = () => {
  return (
    <main className="bg-[#111] text-gray-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 xl:px-24 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-6 py-2 mb-8">
            <ShieldIcon className="w-5 h-5 text-white" />
            <span className="text-gray-300 font-medium text-sm uppercase tracking-wider">AI Safety Framework</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            <span className="text-white">Comprehensive</span>
            <br />
            <span className="text-white">AI Safety</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
            A systematic approach to ensuring AI systems operate safely, reliably, and in alignment with human values across all capability levels.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors">
              Get Started
            </button>
            <button className="border border-gray-700 text-gray-300 font-semibold py-3 px-8 rounded-full hover:border-gray-600 hover:bg-gray-900 transition-colors">
              View Documentation
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { number: '5', label: 'Safety Levels', icon: <ShieldIcon className="w-8 h-8" /> },
            { number: '8', label: 'Core Principles', icon: <TargetIcon className="w-8 h-8" /> },
            { number: '24/7', label: 'Monitoring', icon: <EyeIcon className="w-8 h-8" /> },
            { number: '100%', label: 'Coverage', icon: <CheckIcon className="w-8 h-8" /> }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-white mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Introduction */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            Safety-First Approach
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-gray-400 leading-relaxed">
                Our AI Safety Framework provides a comprehensive methodology for developing, deploying, and maintaining AI systems that prioritize safety at every level of capability.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                From basic automation to advanced AI systems, our framework ensures consistent safety standards and risk mitigation strategies.
              </p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <TargetIcon className="w-6 h-6 text-white" />
                Framework Pillars
              </h4>
              <div className="space-y-4">
                {[
                  'Risk assessment and mitigation',
                  'Continuous monitoring and evaluation',
                  'Robust testing and validation',
                  'Transparent governance and oversight'
                ].map((pillar, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span className="text-gray-300">{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            Core Safety Principles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PrincipleCard
              icon={<ShieldIcon className="w-full h-full" />}
              title="Defense in Depth"
              description="Multiple layers of protection ensure system resilience against various failure modes."
            />
            <PrincipleCard
              icon={<AlertIcon className="w-full h-full" />}
              title="Fail-Safe Design"
              description="Systems default to safe states when encountering unexpected conditions or errors."
            />
            <PrincipleCard
              icon={<EyeIcon className="w-full h-full" />}
              title="Continuous Monitoring"
              description="Real-time observation and analysis of system behavior and performance metrics."
            />
            <PrincipleCard
              icon={<UsersIcon className="w-full h-full" />}
              title="Human Oversight"
              description="Meaningful human control and intervention capabilities at all operational levels."
            />
            <PrincipleCard
              icon={<TargetIcon className="w-full h-full" />}
              title="Alignment Verification"
              description="Regular validation that AI behavior aligns with intended objectives and values."
            />
            <PrincipleCard
              icon={<BookIcon className="w-full h-full" />}
              title="Transparency"
              description="Clear documentation and explainability of system decisions and processes."
            />
            <PrincipleCard
              icon={<CogIcon className="w-full h-full" />}
              title="Robustness Testing"
              description="Comprehensive evaluation under diverse conditions and edge cases."
            />
            <PrincipleCard
              icon={<CheckIcon className="w-full h-full" />}
              title="Continuous Improvement"
              description="Iterative enhancement based on monitoring data and safety research."
            />
          </div>
        </section>

        {/* Safety Levels */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            AI Safety Levels
          </h2>
          <p className="text-xl text-gray-400 text-center max-w-4xl mx-auto mb-16">
            Our framework defines five distinct safety levels, each with specific requirements and safeguards appropriate for different AI capabilities and risk profiles.
          </p>

          <LevelCard
            level={1}
            title="Basic AI Systems"
            description="Simple automation and rule-based systems with limited decision-making capabilities."
            requirements={[
              "Input validation and sanitization",
              "Basic access controls and authentication",
              "Error handling and logging mechanisms",
              "Regular security updates and patches"
            ]}
            safeguards={[
              "Automated monitoring dashboards",
              "Basic anomaly detection",
              "Manual override capabilities",
              "Standard backup and recovery procedures"
            ]}
          />

          <LevelCard
            level={2}
            title="Intermediate AI Systems"
            description="Machine learning models with moderate autonomy in specific domains."
            requirements={[
              "Advanced input filtering and validation",
              "Bias detection and mitigation testing",
              "Performance monitoring and alerting",
              "Regular model retraining and validation"
            ]}
            safeguards={[
              "Real-time performance monitoring",
              "Automated bias detection systems",
              "Human review processes for decisions",
              "Comprehensive audit trails"
            ]}
          />

          <LevelCard
            level={3}
            title="Advanced AI Systems"
            description="Sophisticated AI with significant autonomy and decision-making authority."
            requirements={[
              "Comprehensive safety testing protocols",
              "Advanced alignment verification methods",
              "Multi-stakeholder governance frameworks",
              "Formal safety certification processes"
            ]}
            safeguards={[
              "Advanced monitoring and intervention systems",
              "Multi-layer safety controls",
              "Expert safety review boards",
              "Comprehensive risk assessment protocols"
            ]}
          />

          <LevelCard
            level={4}
            title="Highly Capable AI Systems"
            description="AI systems approaching or exceeding human-level performance in multiple domains."
            requirements={[
              "Advanced interpretability and explainability",
              "Comprehensive capability assessment",
              "Multi-institutional oversight and governance",
              "International safety standard compliance"
            ]}
            safeguards={[
              "Advanced containment and control measures",
              "Multi-stakeholder monitoring consortiums",
              "Emergency shutdown capabilities",
              "Comprehensive safety research programs"
            ]}
          />

          <LevelCard
            level={5}
            title="Artificial General Intelligence"
            description="AI systems with general intelligence capabilities across all cognitive domains."
            requirements={[
              "Comprehensive alignment verification",
              "Advanced containment protocols",
              "Global governance and oversight mechanisms",
              "Extensive safety research and validation"
            ]}
            safeguards={[
              "Multi-layered containment systems",
              "Global monitoring and coordination",
              "Advanced intervention capabilities",
              "Comprehensive safety research infrastructure"
            ]}
          />
        </section>

        {/* Implementation Guide */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            Implementation Roadmap
          </h2>
          <p className="text-xl text-gray-400 text-center max-w-4xl mx-auto mb-16">
            Follow this systematic approach to implement comprehensive AI safety measures across your organization.
          </p>
          <div className="max-w-4xl mx-auto space-y-12">
            <ImplementationStep
              step={1}
              title="Assessment and Classification"
              description="Evaluate your AI systems and classify them according to capability levels and risk profiles."
            />
            <ImplementationStep
              step={2}
              title="Gap Analysis"
              description="Identify current safety measures and determine gaps relative to framework requirements."
            />
            <ImplementationStep
              step={3}
              title="Safety Plan Development"
              description="Create comprehensive safety implementation plans tailored to each system's classification."
            />
            <ImplementationStep
              step={4}
              title="Governance Structure"
              description="Establish oversight committees and decision-making processes for safety-critical issues."
            />
            <ImplementationStep
              step={5}
              title="Monitoring Infrastructure"
              description="Deploy comprehensive monitoring and alerting systems for continuous safety oversight."
            />
            <ImplementationStep
              step={6}
              title="Training and Education"
              description="Educate teams on safety principles and ensure organization-wide safety culture adoption."
            />
            <ImplementationStep
              step={7}
              title="Continuous Improvement"
              description="Regularly review and update safety measures based on new research and operational experience."
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gray-900 rounded-2xl p-12 md:p-16 border border-gray-800">
            <div className="text-6xl mb-8 text-white">
              <ShieldIcon className="w-16 h-16 mx-auto" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Implement AI Safety?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Our comprehensive AI Safety Framework provides the structure and guidance needed to develop, deploy, and maintain safe AI systems at any scale.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-gray-900 font-semibold py-4 px-10 rounded-full text-lg hover:bg-gray-200 transition-colors">
                Get Started Today
              </button>
              <button className="border border-gray-700 text-gray-300 font-semibold py-4 px-10 rounded-full text-lg hover:border-gray-600 hover:bg-gray-900 transition-colors">
                Contact Our Experts
              </button>
            </div>
            <div className="mt-8 text-gray-400 italic">
              "Safety is not a destination, but a continuous journey of vigilance and improvement."
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SafetyPage;