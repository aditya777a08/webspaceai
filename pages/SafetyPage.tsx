import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
    <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mt-24 mb-12 text-center ${className}`}>{children}</h2>
);

const Subheading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="text-2xl font-semibold text-gray-100 mt-12 mb-6">{children}</h3>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
            <div className="w-16 h-16 mb-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                {icon}
            </div>
            <h4 className="font-bold text-xl text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">{title}</h4>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{description}</p>
        </div>
    </div>
);

const LevelCard: React.FC<{ 
    level: number; 
    title: string; 
    objective: string; 
    applicability: string[]; 
    measures: string[]; 
    caseStudy: string;
    color: string;
}> = ({ level, title, objective, applicability, measures, caseStudy, color }) => (
    <div className="group relative mb-16 overflow-hidden">
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
        
        {/* Main card */}
        <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden transition-all duration-500 group-hover:border-gray-600/70 group-hover:shadow-2xl">
            {/* Header section */}
            <div className="relative p-8 pb-6">
                <div className="flex items-center gap-6 mb-6">
                    <div className={`flex items-center justify-center w-20 h-20 text-3xl font-black rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg`}>
                        {level}
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
                        <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${color}`}></div>
                            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Level {level}</span>
                        </div>
                    </div>
                </div>
                
                {/* Objective */}
                <div className="bg-gray-800/50 rounded-2xl p-6 mb-6">
                    <h4 className="font-semibold text-gray-200 mb-3 text-lg flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Objective
                    </h4>
                    <p className="text-gray-300 leading-relaxed">{objective}</p>
                </div>
            </div>

            {/* Content grid */}
            <div className="px-8 pb-6">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Applicability */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-gray-200 text-lg flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            Applicability
                        </h4>
                        <div className="space-y-3">
                            {applicability.map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg">
                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${color} mt-2 flex-shrink-0`}></div>
                                    <span className="text-gray-300 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Key Measures */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-gray-200 text-lg flex items-center gap-2">
                            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            Key Measures
                        </h4>
                        <div className="space-y-3">
                            {measures.map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg">
                                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-300 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Case study footer */}
            <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-8 border-t border-gray-700/50">
                <h4 className="font-semibold text-gray-200 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Case Study Example
                </h4>
                <p className="text-gray-300 leading-relaxed italic border-l-4 border-yellow-400/30 pl-4">{caseStudy}</p>
            </div>
        </div>
    </div>
);

const StepCard: React.FC<{ step: number; title: string; description: string }> = ({ step, title, description }) => (
    <div className="group relative">
        <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/25 transition-all duration-300">
                {step}
            </div>
            <div className="flex-1 pt-2">
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">{title}</h4>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{description}</p>
            </div>
        </div>
        {step < 7 && (
            <div className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
        )}
    </div>
);

const SafetyPage: React.FC = () => {
    const levelColors = [
        'from-green-500 to-emerald-600',
        'from-blue-500 to-cyan-600', 
        'from-purple-500 to-violet-600',
        'from-orange-500 to-red-600',
        'from-red-600 to-pink-600'
    ];

    return (
        <main className="relative min-h-screen">
            {/* Background elements */}
            <div className="fixed inset-0 bg-[#111] -z-10"></div>
            <div className="fixed inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-pink-900/5 -z-10"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                {/* Hero Section */}
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-2 mb-8">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-blue-300 font-medium text-sm">AI Safety Framework</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                            Safe AI
                        </span>
                        <br />
                        <span className="text-white">by Design</span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                        A comprehensive, scalable framework for managing AI risks—designed to evolve alongside AI capabilities and ensure responsible development at every stage.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-4 mt-12">
                        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1">
                            Download Framework
                        </button>
                        <button className="border border-gray-600 text-gray-300 font-semibold py-4 px-8 rounded-2xl hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300">
                            View Documentation
                        </button>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
                    {[
                        { number: '5', label: 'Safety Levels', color: 'text-blue-400' },
                        { number: '8', label: 'Core Principles', color: 'text-purple-400' },
                        { number: '100+', label: 'Safety Measures', color: 'text-green-400' },
                        { number: '∞', label: 'Scalability', color: 'text-pink-400' }
                    ].map((stat, i) => (
                        <div key={i} className="text-center group">
                            <div className={`text-4xl md:text-5xl font-black ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                                {stat.number}
                            </div>
                            <div className="text-gray-400 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Introduction */}
                <section className="mb-24">
                    <SectionTitle>Why This Framework Matters</SectionTitle>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                As AI capabilities rapidly advance, the stakes for getting safety right have never been higher. From simple automation to potentially transformative AGI, each leap forward demands proportional increases in our safety measures.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                This framework provides a structured, scalable approach to AI safety—ensuring that as your systems become more capable, your safeguards evolve to match. No more guesswork, no more reactive measures.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
                            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
                                <h4 className="text-xl font-bold text-white mb-6">Framework Benefits</h4>
                                <div className="space-y-4">
                                    {[
                                        'Proactive risk management',
                                        'Clear implementation roadmap',
                                        'Scalable safety measures',
                                        'Industry-standard compliance'
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-300">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Principles */}
                <section className="mb-24">
                    <SectionTitle>Core Principles</SectionTitle>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            }
                            title="Capability-Risk Alignment"
                            description="Safety requirements automatically scale with model capability, ensuring protection grows with power."
                        />
                        <FeatureCard
                            icon={
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            }
                            title="Clear Thresholds"
                            description="Measurable triggers and benchmarks signal when to transition to the next safety tier."
                        />
                        <FeatureCard
                            icon={
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            }
                            title="Layered Safeguards"
                            description="Multiple complementary defense mechanisms work together to prevent failures."
                        />
                        <FeatureCard
                            icon={
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            }
                            title="Rigorous Evaluation"
                            description="Comprehensive testing including adversarial probes and expert red teaming."
                        />
                        <FeatureCard
                            icon={
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            }
                            title="Accountable Governance"
                            description="Clear oversight bodies with defined roles and decision-making authority."
                        />
                        <FeatureCard
                            icon={
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            }
                            title="Continuous Monitoring"
                            description="Real-time telemetry and automated alerts track model behavior in production."
                        />
                        <FeatureCard
                            icon={
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            }
                            title="Transparent Reporting"
                            description="Comprehensive documentation of assessments, incidents, and mitigation steps."
                        />
                        <FeatureCard
                            icon={
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            }
                            title="Research Integration"
                            description="Stay current with latest AI safety research and incorporate new findings."
                        />
                    </div>
                </section>

                {/* The Five Levels */}
                <section className="mb-24">
                    <SectionTitle>The Five Safety Levels</SectionTitle>
                    <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
                        Each level builds upon the previous, creating a comprehensive safety ecosystem that scales with AI capability.
                    </p>

                    <LevelCard 
                        level={1} 
                        title="Foundational Safety" 
                        objective="Implement basic controls to prevent trivial failures and obvious misuse in narrow, low-impact systems." 
                        applicability={["Rule-based classification APIs", "Simple Q&A bots with closed knowledge bases", "Recommendation engines with limited scope"]} 
                        measures={["Input Validation & Output Constraints", "Access Controls & Authentication", "Unit Tests & Manual Reviews", "Documentation & Onboarding"]} 
                        caseStudy="A retail company deploys a Level 1 sentiment analysis API to filter customer reviews. By enforcing profanity filters, logging every API call, and limiting access to internal clients, the team prevents both malicious inputs and accidental leakage of user data."
                        color={levelColors[0]}
                    />

                    <LevelCard 
                        level={2} 
                        title="Enhanced Safety for Interactive Systems" 
                        objective="Introduce moderate adversarial defenses and basic monitoring to address common risks in interactive, generative, or conversational applications." 
                        applicability={["Entry‑level chatbots with domain constraints", "Constrained virtual assistants", "Simple generative tools"]} 
                        measures={["Robust Filtering & Refusal Triggers", "Sandboxing & Anomaly Detection", "Basic Red Teaming", "Incident Response Planning"]} 
                        caseStudy="A financial services chatbot at Level 2 employs semantic detection to refuse queries requesting investment advice. All code snippets are sandboxed, and alerts notify security if anomalous resource consumption occurs. Basic red teaming uncovers a prompt bypass; the fix is rolled out within 48 hours."
                        color={levelColors[1]}
                    />

                    <LevelCard 
                        level={3} 
                        title="Substantial Safety for Capable Systems" 
                        objective="Defend against sophisticated misuse, integrate human oversight for high‑stakes actions, and deepen adversarial resilience." 
                        applicability={["Advanced conversational agents", "Media and code generation tools", "Systems accessing external data"]} 
                        measures={["Constitutional‑Style Jailbreak Defenses", "Behavioral Monitoring", "Expert Red Teaming & Ethical Review", "Formal Safety Cases"]} 
                        caseStudy="A healthcare assistant at Level 3 provides medical literature summaries. Using a constitutional AI approach, it refuses requests for personalized diagnoses. An external panel of medical and AI safety experts reviews test logs and endorses the system's safety case before it goes live."
                        color={levelColors[2]}
                    />

                    <LevelCard 
                        level={4} 
                        title="Advanced Safety for Near‑Frontier Systems" 
                        objective="Anticipate and mitigate emergent behaviors in general‑purpose systems nearing human‑level performance." 
                        applicability={["Multi‑modal models (text, vision, audio)", "Large foundation models", "Experimental agentic systems"]} 
                        measures={["Scaled Constitutional AI & RLHF", "Mechanistic Interpretability", "External Expert Validation", "Regulatory Coordination"]} 
                        caseStudy="A lab's multimodal reasoning engine reaches near-human benchmarks. Mechanistic interpretability reveals potential corruption of planning circuits; predictive detectors flag these cases. After an external AI safety audit, the team updates RLHF policies and secures compliance certification."
                        color={levelColors[3]}
                    />

                    <LevelCard 
                        level={5} 
                        title="AGI‑Level Safety" 
                        objective="Manage existential and systemic risks posed by systems at or beyond human intelligence—ensuring provable control and global governance." 
                        applicability={["Experimental AGI prototypes", "Agentic systems with strategic planning", "Large-scale multi‑agent ecosystems"]} 
                        measures={["Provably Robust Alignment", "Hardware & Network Failsafes", "AI‑Assisted Oversight", "Global Governance"]} 
                        caseStudy="A consortium collaborates on an AGI testbed. Formal methods verify the system cannot override shutdown commands. Red team exercises simulate strategic scenarios, revealing hidden incentives that are then mathematically neutralized. A global governance council reviews logs, ensuring transparency."
                        color={levelColors[4]}
                    />
                </section>

                {/* Implementation Guide */}
                <section className="mb-24">
                    <SectionTitle>Implementation Roadmap</SectionTitle>
                    <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
                        Follow these steps to implement the framework in your organization, from initial assessment to full deployment.
                    </p>
                    
                    <div className="max-w-4xl mx-auto space-y-12">
                        <StepCard 
                            step={1}
                            title="Capability Assessment"
                            description="Catalog your AI projects and map each to the corresponding safety level based on capability and risk profile."
                        />
                        <StepCard 
                            step={2}
                            title="Gap Analysis"
                            description="Identify required safety measures that are not yet implemented and prioritize them by risk level and implementation complexity."
                        />
                        <StepCard 
                            step={3}
                            title="Roadmap Development"
                            description="Create a detailed timeline for implementing missing safeguards, starting with the highest-risk projects and critical dependencies."
                        />
                        <StepCard 
                            step={4}
                            title="Governance Structure"
                            description="Establish safety review committees with clear roles, responsibilities, and decision-making authority for each safety level."
                        />
                        <StepCard 
                            step={5}
                            title="Measurement & Monitoring"
                            description="Build comprehensive dashboards to track key safety metrics and set up automated alerting for threshold breaches."
                        />
                        <StepCard 
                            step={6}
                            title="Training & Culture"
                            description="Educate all teams on the framework principles and foster a culture of 'safety by design' throughout the organization."
                        />
                        <StepCard 
                            step={7}
                            title="Iterate & Evolve"
                            description="Review framework thresholds and measures quarterly, incorporating new safety research and lessons learned from incidents."
                        />
                    </div>
                </section>

                {/* Conclusion */}
                <section className="text-center">
                    <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-12 md:p-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Build Safer AI?</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                            The Five-Level AI Safety Framework empowers organizations to navigate the advancing frontier of AI responsibly. By aligning safety requirements with capability, this framework ensures that technological progress remains firmly in service of human well-being.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1">
                                Start Implementation
                            </button>
                            <button className="border border-gray-600 text-gray-300 font-semibold py-4 px-8 rounded-2xl hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300">
                                Contact Our Team
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default SafetyPage;