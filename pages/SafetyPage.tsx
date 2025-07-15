import React from 'react';

const ShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
);

const CompassIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <circle cx="12" cy="12" r="10"/>
        <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88"/>
    </svg>
);

const AnchorIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <circle cx="12" cy="5" r="3"/>
        <line x1="12" y1="22" x2="12" y2="8"/>
        <path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
    </svg>
);

const CrownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M2 20h20l-2-6-4 2-4-4-4 4-4-2-2 6z"/>
        <path d="M6 9l4-4 4 4"/>
    </svg>
);

const TreasureIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
);

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
    </svg>
);

const PrincipleCard: React.FC<{ 
    icon: React.ReactNode; 
    title: string; 
    description: string;
}> = ({ icon, title, description }) => (
    <div className="group bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
        <div className="w-12 h-12 mb-4 text-gray-400 group-hover:text-white transition-colors duration-300">
            {icon}
        </div>
        <h4 className="font-semibold text-xl text-white mb-3">{title}</h4>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{description}</p>
    </div>
);

const LevelCard: React.FC<{ 
    level: number; 
    title: string; 
    rank: string;
    description: string; 
    duties: string[]; 
    benefits: string[]; 
    story: string;
}> = ({ level, title, rank, description, duties, benefits, story }) => (
    <div className="group relative mb-16">
        <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 border-b border-gray-800">
                <div className="flex items-center gap-6 mb-4">
                    <div className="flex items-center justify-center w-16 h-16 text-2xl font-bold rounded-full bg-white text-black">
                        {level}
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <CrownIcon className="w-5 h-5 text-gray-400" />
                            <span className="text-gray-400 font-medium text-sm uppercase tracking-wider">{rank}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">{title}</h3>
                    </div>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                    <p className="text-gray-300 leading-relaxed">{description}</p>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                    {/* Responsibilities */}
                    <div>
                        <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                            <ShieldIcon className="w-5 h-5 text-gray-400" />
                            Core Responsibilities
                        </h4>
                        <div className="space-y-3">
                            {duties.map((duty, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-300 text-sm">{duty}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Benefits */}
                    <div>
                        <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                            <TreasureIcon className="w-5 h-5 text-gray-400" />
                            Key Benefits
                        </h4>
                        <div className="space-y-3">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                                    <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-300 text-sm">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Story */}
                <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50">
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <StarIcon className="w-5 h-5 text-gray-400" />
                        Captain's Tale
                    </h4>
                    <p className="text-gray-300 leading-relaxed italic">"{story}"</p>
                </div>
            </div>
        </div>
    </div>
);

const ImplementationStep: React.FC<{ step: number; title: string; description: string }> = ({ step, title, description }) => (
    <div className="group flex items-start gap-6">
        <div className="flex-shrink-0 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
            {step}
        </div>
        <div className="flex-1 pt-2">
            <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors duration-300">{title}</h4>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{description}</p>
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
                        <CrownIcon className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-400 font-medium text-sm uppercase tracking-wider">AI Safety Framework</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        <span className="text-white">The Captain</span>
                        <br />
                        <span className="text-gray-400">Never Dies</span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
                        Like the legendary Captain Jack Sparrow, true AI safety is immortal—a framework that endures through every challenge, every evolution of technology.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors">
                            Begin the Journey
                        </button>
                        <button className="border border-gray-600 text-gray-300 font-semibold py-3 px-8 rounded-full hover:border-gray-500 hover:bg-gray-900 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {[
                        { number: '5', label: 'Safety Levels', icon: '🛡️' },
                        { number: '8', label: 'Core Principles', icon: '⚓' },
                        { number: '∞', label: 'Eternal Vigilance', icon: '👁️' },
                        { number: '1', label: 'Immortal Code', icon: '⭐' }
                    ].map((stat, i) => (
                        <div key={i} className="text-center group">
                            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
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
                        The Eternal Framework
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-xl text-gray-300 leading-relaxed">
                                In the vast oceans of artificial intelligence, where storms of complexity rage and uncharted waters stretch beyond the horizon, one truth remains constant: the Captain never dies.
                            </p>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Like Captain Jack Sparrow's legendary immortality, our AI Safety Framework transcends time, technology, and challenge. It is not merely a set of rules—it is an eternal covenant.
                            </p>
                        </div>
                        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                            <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                                <TreasureIcon className="w-6 h-6 text-gray-400" />
                                Framework Pillars
                            </h4>
                            <div className="space-y-4">
                                {[
                                    'Immortal safety principles',
                                    'Timeless navigation wisdom', 
                                    'Unbreakable protective measures',
                                    'Legendary operational standards'
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
                        Eight Core Principles
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <PrincipleCard
                            icon={<CompassIcon className="w-full h-full" />}
                            title="Navigate by Stars"
                            description="Chart your course using capability and risk as guiding constellations for safe passage."
                        />
                        <PrincipleCard
                            icon={<AnchorIcon className="w-full h-full" />}
                            title="Drop Anchor When Needed"
                            description="Know when to halt and secure your vessel—clear warning signals guide you away from danger."
                        />
                        <PrincipleCard
                            icon={<ShieldIcon className="w-full h-full" />}
                            title="Layer Your Defenses"
                            description="Never rely on single protection—build multiple shields like a wise admiral fortifies their fleet."
                        />
                        <PrincipleCard
                            icon={<CompassIcon className="w-full h-full" />}
                            title="Test in Safe Waters"
                            description="Prove your vessel's worth against controlled challenges before sailing unknown territories."
                        />
                        <PrincipleCard
                            icon={<TreasureIcon className="w-full h-full" />}
                            title="Convene the Council"
                            description="Gather the wisest captains to guide decisions and maintain the sacred code."
                        />
                        <PrincipleCard
                            icon={<CrownIcon className="w-full h-full" />}
                            title="Maintain Vigilance"
                            description="Post sentries day and night—constant watchfulness protects from unforeseen threats."
                        />
                        <PrincipleCard
                            icon={<StarIcon className="w-full h-full" />}
                            title="Chronicle Every Voyage"
                            description="Record every battle and discovery—wisdom is the most precious treasure."
                        />
                        <PrincipleCard
                            icon={<CompassIcon className="w-full h-full" />}
                            title="Share the Knowledge"
                            description="Spread discoveries across the seas—together we make all waters safer to sail."
                        />
                    </div>
                </section>

                {/* Safety Levels */}
                <section className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
                        The Five Levels of Mastery
                    </h2>
                    <p className="text-xl text-gray-400 text-center max-w-4xl mx-auto mb-16">
                        From humble ship's apprentice to immortal Captain—each level embodies greater wisdom and stronger defenses.
                    </p>

                    <LevelCard 
                        level={1} 
                        title="Ship's Apprentice" 
                        rank="Foundation Level"
                        description="Learn the sacred ways and tend to basic duties—foundational skills for simple AI tasks that pose minimal risk." 
                        duties={[
                            "Master basic input validation and cleansing",
                            "Implement fundamental access controls", 
                            "Establish simple logging and monitoring",
                            "Follow established safety documentation"
                        ]} 
                        benefits={[
                            "Clean operational foundations",
                            "Protected data sanctuaries", 
                            "Basic but reliable defenses",
                            "Clear navigational charts"
                        ]} 
                        story="Young Marina began as an apprentice on Captain Blackwater's sentiment analysis vessel. By mastering input cleansing and access control, she prevented corruption of precious customer insights."
                    />

                    <LevelCard 
                        level={2} 
                        title="Skilled Navigator" 
                        rank="Intermediate Level"
                        description="Handle the ship's defenses and engage with the outside world—skills for interactive AI that communicates with users." 
                        duties={[
                            "Deploy advanced filtering and content shields",
                            "Monitor for anomalous patterns and threats",
                            "Conduct regular security assessments", 
                            "Maintain emergency response protocols"
                        ]} 
                        benefits={[
                            "Battle-tested defensive systems",
                            "Threat detection capabilities",
                            "Crew training programs",
                            "Emergency response readiness"
                        ]} 
                        story="Navigator Elena sailed with the Royal Chatbot Fleet, where her mastery of semantic filtering and anomaly detection saved the day when adversaries attempted to extract strategic secrets."
                    />

                    <LevelCard 
                        level={3} 
                        title="Royal Officer" 
                        rank="Advanced Level"
                        description="Command ship operations and coordinate defenses—advanced skills for capable AI that can generate powerful artifacts." 
                        duties={[
                            "Implement constitutional AI governance",
                            "Oversee performance monitoring and optimization",
                            "Lead expert security assessments",
                            "Establish formal safety charters"
                        ]} 
                        benefits={[
                            "Advanced governance frameworks",
                            "Performance optimization insights", 
                            "Expert security consultations",
                            "Formal safety documentation"
                        ]} 
                        story="Commander Thorne led the HMS Code Forge, where constitutional AI principles helped the vessel refuse dangerous requests, earning commendation from the Royal Academy of Ethics."
                    />

                    <LevelCard 
                        level={4} 
                        title="Admiral of the Fleet" 
                        rank="Expert Level"
                        description="Navigate uncharted waters and command multiple vessels—master-level skills for near-legendary AI approaching ancient powers." 
                        duties={[
                            "Navigate using advanced interpretability tools",
                            "Coordinate multi-system fleet operations",
                            "Consult with the Royal Safety Council",
                            "Secure approval from maritime authorities"
                        ]} 
                        benefits={[
                            "Advanced navigation instruments",
                            "Fleet coordination capabilities",
                            "Royal council endorsements", 
                            "Official maritime licenses"
                        ]} 
                        story="Admiral Stormwind's multimodal reasoning fleet discovered corrupted navigation charts. Using advanced interpretability tools, they detected the corruption and earned the Royal Safety Council's blessing."
                    />

                    <LevelCard 
                        level={5} 
                        title="Immortal Captain" 
                        rank="Legendary Level"
                        description="Rule the seven seas with eternal wisdom—legendary skills for AI that rivals the greatest human captains, yet never dies." 
                        duties={[
                            "Wield the Crown of Provable Alignment",
                            "Command the Leviathan of hardware failsafes", 
                            "Consult with the Oracle of AI-assisted oversight",
                            "Unite all fleets under the eternal code"
                        ]} 
                        benefits={[
                            "Divine mathematical proofs",
                            "Leviathan-powered emergency systems",
                            "Oracle-guided oversight",
                            "Universal maritime law"
                        ]} 
                        story="The Immortal Captain's AGI fleet required blessing from all sea gods. With Poseidon's Crown ensuring no vessel could override shutdown commands, the fleet earned the right to sail the most dangerous waters under eternal watch."
                    />
                </section>

                {/* Implementation Guide */}
                <section className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
                        The Eternal Quest
                    </h2>
                    <p className="text-xl text-gray-400 text-center max-w-4xl mx-auto mb-16">
                        Follow this sacred map to transform your fleet into an immortal force of AI safety.
                    </p>
                    
                    <div className="max-w-4xl mx-auto space-y-12">
                        <ImplementationStep 
                            step={1}
                            title="Survey Your Fleet"
                            description="Take inventory of all your AI vessels and assign each to its proper level based on capability and potential impact."
                        />
                        <ImplementationStep 
                            step={2}
                            title="Identify Vulnerable Waters"
                            description="Discover which defenses are missing and prioritize reinforcements based on the greatest threats."
                        />
                        <ImplementationStep 
                            step={3}
                            title="Chart the Course"
                            description="Create a detailed plan showing when and how to upgrade each vessel's defenses, starting with the most powerful."
                        />
                        <ImplementationStep 
                            step={4}
                            title="Convene the Council"
                            description="Assemble a council of wise admirals and safety experts with clear authority to make critical decisions."
                        />
                        <ImplementationStep 
                            step={5}
                            title="Raise the Beacons"
                            description="Build a monitoring network to detect danger signals and alert the fleet when storms approach."
                        />
                        <ImplementationStep 
                            step={6}
                            title="Train the Crew"
                            description="Teach all sailors the Eternal Code and build a culture where safety is every crew member's honor."
                        />
                        <ImplementationStep 
                            step={7}
                            title="Sail with Vigilance"
                            description="Review your Code with each tide, learning from new voyages and the wisdom of fellow captains."
                        />
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center">
                    <div className="bg-gray-900 rounded-2xl p-12 md:p-16 border border-gray-800">
                        <div className="text-6xl mb-8">⚓</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Begin Your Journey?</h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                            The Captain's Eternal Code of AI Safety is your compass through infinite seas ahead. With this immortal framework, you can navigate any storm and reach the safest harbors.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button className="bg-white text-black font-semibold py-4 px-10 rounded-full text-lg hover:bg-gray-200 transition-colors">
                                Begin the Journey
                            </button>
                            <button className="border border-gray-600 text-gray-300 font-semibold py-4 px-10 rounded-full text-lg hover:border-gray-500 hover:bg-gray-900 transition-colors">
                                Contact the Council
                            </button>
                        </div>
                        <div className="mt-8 text-gray-500 italic">
                            "The sea is vast and full of wonders, but with the eternal code, every captain finds their way home—and never truly dies."
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default SafetyPage;