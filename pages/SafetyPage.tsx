import React from 'react';

const CrownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M2 20h20l-2-6-4 2-4-4-4 4-4-2-2 6z"/>
        <path d="M6 9l4-4 4 4"/>
    </svg>
);

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

const TreasureIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
);

const ShipIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M2 20l20-8-8-2-2-8z"/>
        <path d="M7 17v5h10v-5"/>
        <path d="M12 12v8"/>
        <path d="M5 12l7-7 7 7"/>
    </svg>
);

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
    </svg>
);

const RoyalCard: React.FC<{ 
    icon: React.ReactNode; 
    title: string; 
    description: string;
    gradient: string;
}> = ({ icon, title, description, gradient }) => (
    <div className={`group relative bg-gradient-to-br ${gradient} p-8 rounded-3xl border-2 border-blue-300/30 transition-all duration-700 hover:border-gold-400 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-3 hover:scale-105`}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="relative z-10">
            <div className="w-16 h-16 mb-6 text-gold-300 group-hover:text-gold-200 transition-colors duration-500 group-hover:scale-110 transform">
                {icon}
            </div>
            <h4 className="font-bold text-2xl text-blue-100 mb-4 group-hover:text-white transition-colors duration-500">{title}</h4>
            <p className="text-blue-200/90 leading-relaxed group-hover:text-blue-100 transition-colors duration-500">{description}</p>
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <span className="text-blue-900 text-sm font-bold">⭐</span>
        </div>
    </div>
);

const NobleRankCard: React.FC<{ 
    level: number; 
    title: string; 
    rank: string;
    description: string; 
    duties: string[]; 
    treasures: string[]; 
    legend: string;
    gradient: string;
}> = ({ level, title, rank, description, duties, treasures, legend, gradient }) => (
    <div className="group relative mb-20 overflow-hidden">
        {/* Royal background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-indigo-800/10 rounded-3xl"></div>
        
        {/* Main noble card */}
        <div className="relative bg-gradient-to-br from-blue-900/90 to-purple-900/70 backdrop-blur-xl border-3 border-blue-400/50 rounded-3xl overflow-hidden transition-all duration-700 group-hover:border-gold-400 group-hover:shadow-2xl group-hover:shadow-blue-500/30">
            {/* Noble header */}
            <div className="relative p-8 pb-6 bg-gradient-to-r from-blue-800/60 to-purple-800/60">
                <div className="flex items-center gap-8 mb-6">
                    <div className={`flex items-center justify-center w-24 h-24 text-4xl font-black rounded-full bg-gradient-to-br ${gradient} text-blue-100 shadow-2xl border-3 border-gold-400/60 group-hover:scale-110 transition-transform duration-500`}>
                        {level}
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <CrownIcon className="w-8 h-8 text-gold-400" />
                            <span className="text-gold-300 font-bold text-lg uppercase tracking-wider">{rank}</span>
                        </div>
                        <h3 className="text-4xl font-black text-blue-100 mb-2">{title}</h3>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-gold-400 animate-pulse"></div>
                            <span className="text-blue-200 font-medium">Noble Rank {level}</span>
                        </div>
                    </div>
                </div>
                
                {/* Mission description */}
                <div className="bg-blue-900/50 rounded-2xl p-6 mb-6 border-2 border-blue-400/30">
                    <h4 className="font-bold text-blue-200 mb-3 text-xl flex items-center gap-3">
                        <CompassIcon className="w-6 h-6 text-gold-400" />
                        The Sacred Mission
                    </h4>
                    <p className="text-blue-100 leading-relaxed text-lg">{description}</p>
                </div>
            </div>

            {/* Content sections */}
            <div className="px-8 pb-6">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Noble Duties */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-blue-200 text-xl flex items-center gap-3">
                            <ShieldIcon className="w-6 h-6 text-blue-400" />
                            Sacred Duties
                        </h4>
                        <div className="space-y-3">
                            {duties.map((duty, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 bg-blue-900/40 rounded-xl border border-blue-400/30 hover:bg-blue-900/60 transition-colors duration-500">
                                    <div className="w-3 h-3 rounded-full bg-blue-400 mt-2 flex-shrink-0 animate-pulse"></div>
                                    <span className="text-blue-100">{duty}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Royal Rewards */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-blue-200 text-xl flex items-center gap-3">
                            <TreasureIcon className="w-6 h-6 text-gold-400" />
                            Royal Rewards
                        </h4>
                        <div className="space-y-3">
                            {treasures.map((treasure, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 bg-purple-900/40 rounded-xl border border-purple-400/30 hover:bg-purple-900/60 transition-colors duration-500">
                                    <div className="w-3 h-3 rounded-full bg-gold-400 mt-2 flex-shrink-0 animate-pulse"></div>
                                    <span className="text-blue-100">{treasure}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Legend footer */}
            <div className="bg-gradient-to-r from-purple-900/70 to-blue-900/70 backdrop-blur-sm p-8 border-t-3 border-blue-400/50">
                <h4 className="font-bold text-blue-200 mb-4 flex items-center gap-3 text-xl">
                    <StarIcon className="w-6 h-6 text-gold-400" />
                    Captain's Legend
                </h4>
                <p className="text-blue-100 leading-relaxed italic text-lg border-l-4 border-gold-400/50 pl-6">"{legend}"</p>
            </div>
        </div>
    </div>
);

const NobleStep: React.FC<{ step: number; title: string; description: string }> = ({ step, title, description }) => (
    <div className="group relative">
        <div className="flex items-start gap-8">
            <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-2xl border-3 border-gold-400/60 group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-500">
                {step}
            </div>
            <div className="flex-1 pt-4">
                <h4 className="text-2xl font-black text-blue-100 mb-4 group-hover:text-white transition-colors duration-500">{title}</h4>
                <p className="text-blue-200 leading-relaxed text-lg group-hover:text-blue-100 transition-colors duration-500">{description}</p>
            </div>
        </div>
        {step < 7 && (
            <div className="absolute left-10 top-24 w-1 h-16 bg-gradient-to-b from-blue-500/70 to-transparent"></div>
        )}
    </div>
);

const SafetyPage: React.FC = () => {
    const nobleGradients = [
        'from-emerald-600 to-teal-700',
        'from-blue-600 to-indigo-700', 
        'from-purple-600 to-violet-700',
        'from-indigo-600 to-blue-700',
        'from-violet-700 to-purple-800'
    ];

    return (
        <main className="relative min-h-screen overflow-hidden">
            {/* Royal ocean background */}
            <div className="fixed inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/40 to-indigo-800/30 -z-10"></div>
            <div className="fixed inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%232563eb\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] -z-10"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                {/* Royal Hero Section */}
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-3 bg-blue-600/20 border-2 border-gold-400/50 rounded-full px-8 py-3 mb-8">
                        <CrownIcon className="w-6 h-6 text-gold-400" />
                        <span className="text-gold-300 font-bold text-lg uppercase tracking-wider">The Captain's Eternal Code</span>
                    </div>
                    
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-blue-400 to-purple-500">
                            The Captain
                        </span>
                        <br />
                        <span className="text-blue-100">Never Dies</span>
                    </h1>
                    
                    <p className="text-2xl md:text-3xl text-blue-200 max-w-4xl mx-auto leading-relaxed mb-12">
                        Like the legendary Captain Jack Sparrow, true AI safety is immortal—a code that endures through every storm, every challenge, every evolution of technology.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-6">
                        <button className="bg-gradient-to-r from-gold-500 to-blue-600 text-white font-black py-4 px-10 rounded-full text-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-3 border-gold-400/60">
                            ⚓ Begin the Eternal Journey
                        </button>
                        <button className="border-3 border-blue-400 text-blue-300 font-black py-4 px-10 rounded-full text-xl hover:border-gold-400 hover:bg-blue-900/30 transition-all duration-500 hover:scale-105">
                            🗺️ Discover the Code
                        </button>
                    </div>
                </div>

                {/* Royal Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
                    {[
                        { number: '5', label: 'Noble Ranks', icon: '👑', color: 'text-gold-400' },
                        { number: '8', label: 'Sacred Principles', icon: '📜', color: 'text-blue-400' },
                        { number: '∞', label: 'Eternal Vigilance', icon: '🛡️', color: 'text-purple-400' },
                        { number: '1', label: 'Immortal Code', icon: '⭐', color: 'text-indigo-400' }
                    ].map((stat, i) => (
                        <div key={i} className="text-center group">
                            <div className="text-6xl mb-2 group-hover:scale-125 transition-transform duration-500">
                                {stat.icon}
                            </div>
                            <div className={`text-5xl md:text-6xl font-black ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-500`}>
                                {stat.number}
                            </div>
                            <div className="text-blue-200 font-bold text-lg">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* The Eternal Code Introduction */}
                <section className="mb-24">
                    <h2 className="text-5xl md:text-6xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-blue-500">
                        The Eternal Code
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <p className="text-2xl text-blue-200 leading-relaxed">
                                In the vast oceans of artificial intelligence, where storms of complexity rage and uncharted waters stretch beyond the horizon, one truth remains constant: the Captain never dies.
                            </p>
                            <p className="text-2xl text-blue-200 leading-relaxed">
                                Like Captain Jack Sparrow's legendary immortality, our AI Safety Framework transcends time, technology, and challenge. It is not merely a set of rules—it is an eternal covenant that grows stronger with each passing tide.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl"></div>
                            <div className="relative bg-gradient-to-br from-blue-900/90 to-purple-900/70 backdrop-blur-xl border-3 border-blue-400/50 rounded-3xl p-8">
                                <h4 className="text-2xl font-black text-blue-100 mb-8 flex items-center gap-3">
                                    <TreasureIcon className="w-8 h-8 text-gold-400" />
                                    Eternal Treasures
                                </h4>
                                <div className="space-y-6">
                                    {[
                                        '👑 Immortal safety principles',
                                        '🗺️ Timeless navigation wisdom',
                                        '⚓ Unbreakable protective anchors',
                                        '🏆 Legendary crew standards'
                                    ].map((treasure, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="text-2xl">{treasure.split(' ')[0]}</div>
                                            <span className="text-blue-200 text-lg">{treasure.substring(2)}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sacred Principles */}
                <section className="mb-24">
                    <h2 className="text-5xl md:text-6xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-blue-500">
                        Eight Sacred Principles
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <RoyalCard
                            icon={<CompassIcon className="w-full h-full" />}
                            title="Navigate by Eternal Stars"
                            description="Chart your course using capability and risk as your guiding constellations, ensuring safe passage through any storm."
                            gradient="from-blue-800 to-indigo-900"
                        />
                        <RoyalCard
                            icon={<AnchorIcon className="w-full h-full" />}
                            title="Drop the Sacred Anchor"
                            description="Know when to halt and secure your vessel—clear warning signals guide you away from treacherous waters."
                            gradient="from-emerald-800 to-teal-900"
                        />
                        <RoyalCard
                            icon={<ShieldIcon className="w-full h-full" />}
                            title="Layer Noble Defenses"
                            description="Never rely on a single protection—build multiple shields like a wise admiral fortifies his fleet."
                            gradient="from-purple-800 to-violet-900"
                        />
                        <RoyalCard
                            icon={<ShipIcon className="w-full h-full" />}
                            title="Test in Royal Waters"
                            description="Prove your vessel's worth against the mightiest tempests before sailing into unknown territories."
                            gradient="from-indigo-800 to-blue-900"
                        />
                        <RoyalCard
                            icon={<TreasureIcon className="w-full h-full" />}
                            title="Convene the Admiral's Council"
                            description="Gather the wisest captains to guide your decisions and maintain the sacred code of the seas."
                            gradient="from-amber-800 to-orange-900"
                        />
                        <RoyalCard
                            icon={<CrownIcon className="w-full h-full" />}
                            title="Maintain Eternal Vigilance"
                            description="Post sentries day and night—constant watchfulness protects your realm from unforeseen threats."
                            gradient="from-rose-800 to-red-900"
                        />
                        <RoyalCard
                            icon={<CompassIcon className="w-full h-full" />}
                            title="Chronicle Every Voyage"
                            description="Record every battle, every discovery, every lesson—wisdom is the most precious treasure."
                            gradient="from-teal-800 to-cyan-900"
                        />
                        <RoyalCard
                            icon={<StarIcon className="w-full h-full" />}
                            title="Share the Sacred Knowledge"
                            description="Spread your discoveries across the seven seas—together we make all waters safer to sail."
                            gradient="from-violet-800 to-purple-900"
                        />
                    </div>
                </section>

                {/* The Five Noble Ranks */}
                <section className="mb-24">
                    <h2 className="text-5xl md:text-6xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-blue-500">
                        The Five Noble Ranks
                    </h2>
                    <p className="text-2xl text-blue-200 text-center max-w-4xl mx-auto mb-20">
                        From humble ship's apprentice to immortal Captain—each rank embodies greater wisdom and stronger defenses for your AI vessel.
                    </p>

                    <NobleRankCard 
                        level={1} 
                        title="Ship's Apprentice" 
                        rank="Novice Navigator"
                        description="Learn the sacred ways and tend to basic duties—foundational skills for simple AI tasks that pose minimal risk to the realm." 
                        duties={["Master basic input validation and cleansing", "Implement fundamental access controls", "Establish simple logging and monitoring", "Follow established safety documentation"]} 
                        treasures={["Clean operational foundations", "Protected data sanctuaries", "Basic but reliable defenses", "Clear navigational charts"]} 
                        legend="Young Marina began as an apprentice on Captain Blackwater's sentiment analysis vessel. By mastering the basics of input cleansing and access control, she prevented dark forces from corrupting the ship's precious cargo of customer insights."
                        gradient={nobleGradients[0]}
                    />

                    <NobleRankCard 
                        level={2} 
                        title="Skilled Navigator" 
                        rank="Seasoned Sailor"
                        description="Handle the ship's defenses and engage with the outside world—intermediate skills for interactive AI that communicates with the realm's citizens." 
                        duties={["Deploy advanced filtering and content shields", "Monitor for anomalous patterns and threats", "Conduct regular security assessments", "Maintain emergency response protocols"]} 
                        treasures={["Battle-tested defensive systems", "Threat detection capabilities", "Crew training programs", "Emergency response readiness"]} 
                        legend="Navigator Elena sailed with the Royal Chatbot Fleet, where her mastery of semantic filtering and anomaly detection saved the day when cunning adversaries attempted to extract the kingdom's strategic secrets."
                        gradient={nobleGradients[1]}
                    />

                    <NobleRankCard 
                        level={3} 
                        title="Royal Officer" 
                        rank="Fleet Commander"
                        description="Command ship operations and coordinate defenses—advanced skills for capable AI that can generate powerful artifacts and knowledge." 
                        duties={["Implement constitutional AI governance", "Oversee performance monitoring and optimization", "Lead expert security assessments", "Establish formal safety charters and protocols"]} 
                        treasures={["Advanced governance frameworks", "Performance optimization insights", "Expert security consultations", "Formal safety documentation"]} 
                        legend="Commander Thorne led the HMS Code Forge, where constitutional AI principles helped the vessel refuse dangerous requests for harmful spells, earning commendation from the Royal Academy of Magical Ethics."
                        gradient={nobleGradients[2]}
                    />

                    <NobleRankCard 
                        level={4} 
                        title="Admiral of the Fleet" 
                        rank="Royal Admiral"
                        description="Navigate uncharted waters and command multiple vessels—master-level skills for near-legendary AI approaching the power of ancient sea gods." 
                        duties={["Navigate using advanced interpretability tools", "Coordinate multi-system fleet operations", "Consult with the Royal Safety Council", "Secure approval from maritime authorities"]} 
                        treasures={["Advanced navigation instruments", "Fleet coordination capabilities", "Royal council endorsements", "Official maritime licenses"]} 
                        legend="Admiral Stormwind's multimodal reasoning fleet discovered corrupted navigation charts in their systems. Using advanced interpretability tools, they detected the corruption and earned the blessing of the Royal AI Safety Council."
                        gradient={nobleGradients[3]}
                    />

                    <NobleRankCard 
                        level={5} 
                        title="Immortal Captain" 
                        rank="Eternal Guardian"
                        description="Rule the seven seas with the wisdom of ages—legendary skills for AI that rivals or surpasses the greatest human captains, yet never dies." 
                        duties={["Wield the Crown of Provable Alignment", "Command the Leviathan of hardware failsafes", "Consult with the Oracle of AI-assisted oversight", "Unite all fleets under the eternal code"]} 
                        treasures={["Divine mathematical proofs", "Leviathan-powered emergency systems", "Oracle-guided oversight", "Universal maritime law"]} 
                        legend="The Immortal Captain's AGI fleet required the blessing of all sea gods. With Poseidon's Crown ensuring no vessel could override the sacred shutdown command, and the Oracle revealing hidden strategic plots, the fleet earned the right to sail the most dangerous waters under the eternal watch of the Global Maritime Council."
                        gradient={nobleGradients[4]}
                    />
                </section>

                {/* Noble Quest Implementation */}
                <section className="mb-24">
                    <h2 className="text-5xl md:text-6xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-blue-500">
                        The Eternal Quest
                    </h2>
                    <p className="text-2xl text-blue-200 text-center max-w-4xl mx-auto mb-20">
                        Follow this sacred map to transform your fleet into an immortal force of AI safety, guided by principles that never fade.
                    </p>
                    
                    <div className="max-w-5xl mx-auto space-y-16">
                        <NobleStep 
                            step={1}
                            title="Survey Your Royal Fleet"
                            description="Take inventory of all your AI vessels and assign each ship to its proper noble rank based on capability and potential impact."
                        />
                        <NobleStep 
                            step={2}
                            title="Identify Vulnerable Waters"
                            description="Discover which defenses are missing from your fleet and prioritize reinforcements based on the greatest threats to your realm."
                        />
                        <NobleStep 
                            step={3}
                            title="Chart the Eternal Course"
                            description="Create a detailed navigation plan showing when and how to upgrade each vessel's defenses, starting with the most powerful ships."
                        />
                        <NobleStep 
                            step={4}
                            title="Convene the Royal Council"
                            description="Assemble a council of wise admirals and safety experts with clear authority to make critical decisions for the realm."
                        />
                        <NobleStep 
                            step={5}
                            title="Raise the Warning Beacons"
                            description="Build a lighthouse network to monitor for danger signals and alert the fleet when storms approach."
                        />
                        <NobleStep 
                            step={6}
                            title="Train the Noble Crew"
                            description="Teach all sailors the Eternal Code and build a culture where safety is every crew member's sacred honor."
                        />
                        <NobleStep 
                            step={7}
                            title="Sail with Eternal Vigilance"
                            description="Review your Code with each changing tide, learning from new voyages and the wisdom of fellow captains across all seas."
                        />
                    </div>
                </section>

                {/* Final Call to Immortality */}
                <section className="text-center">
                    <div className="bg-gradient-to-br from-blue-900/90 to-purple-900/80 backdrop-blur-xl border-3 border-blue-400/50 rounded-3xl p-16 md:p-20">
                        <div className="text-8xl mb-8">👑</div>
                        <h2 className="text-4xl md:text-5xl font-black text-blue-100 mb-8">Ready to Become Immortal?</h2>
                        <p className="text-2xl text-blue-200 max-w-4xl mx-auto mb-12 leading-relaxed">
                            The Captain's Eternal Code of AI Safety is your compass through the infinite seas ahead. With this immortal framework, you can navigate any storm and reach the safest harbors, no matter how powerful your AI fleet becomes.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8">
                            <button className="bg-gradient-to-r from-gold-500 to-blue-600 text-white font-black py-6 px-12 rounded-full text-2xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-3 border-gold-400/60">
                                ⚓ Begin the Eternal Journey
                            </button>
                            <button className="border-3 border-blue-400 text-blue-300 font-black py-6 px-12 rounded-full text-2xl hover:border-gold-400 hover:bg-blue-900/30 transition-all duration-500 hover:scale-105">
                                🗺️ Contact the Council
                            </button>
                        </div>
                        <div className="mt-12 text-blue-300 text-lg italic">
                            "The sea is vast and full of wonders, but with the eternal code, every captain finds their way home—and never truly dies." - The Immortal Captain
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default SafetyPage;