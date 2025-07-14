import React from 'react';

const PirateIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
        <path d="M12 6l-2 2h4l-2-2z"/>
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

const TreasureIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
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

const CannonIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v6m0 6v6"/>
        <path d="M1 12h6m6 0h6"/>
    </svg>
);

const PirateCard: React.FC<{ 
    icon: React.ReactNode; 
    title: string; 
    description: string;
    color: string;
}> = ({ icon, title, description, color }) => (
    <div className={`group relative bg-gradient-to-br ${color} p-8 rounded-3xl border-4 border-amber-600/30 transition-all duration-500 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2 hover:rotate-1`}>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-red-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
            <div className="w-16 h-16 mb-6 text-amber-300 group-hover:text-amber-200 transition-colors duration-300 group-hover:scale-110 transform">
                {icon}
            </div>
            <h4 className="font-bold text-2xl text-amber-100 mb-4 group-hover:text-white transition-colors duration-300">{title}</h4>
            <p className="text-amber-200/80 leading-relaxed group-hover:text-amber-100 transition-colors duration-300">{description}</p>
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-amber-900 text-sm font-bold">⚡</span>
        </div>
    </div>
);

const CrewLevelCard: React.FC<{ 
    level: number; 
    title: string; 
    rank: string;
    description: string; 
    duties: string[]; 
    treasures: string[]; 
    tale: string;
    shipColor: string;
}> = ({ level, title, rank, description, duties, treasures, tale, shipColor }) => (
    <div className="group relative mb-20 overflow-hidden">
        {/* Treasure map background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-red-900/10 to-amber-800/10 rounded-3xl"></div>
        
        {/* Main ship card */}
        <div className="relative bg-gradient-to-br from-amber-900/80 to-red-900/60 backdrop-blur-xl border-4 border-amber-600/50 rounded-3xl overflow-hidden transition-all duration-500 group-hover:border-amber-400 group-hover:shadow-2xl group-hover:shadow-amber-500/20">
            {/* Ship header */}
            <div className="relative p-8 pb-6 bg-gradient-to-r from-amber-800/50 to-red-800/50">
                <div className="flex items-center gap-8 mb-6">
                    <div className={`flex items-center justify-center w-24 h-24 text-4xl font-black rounded-full bg-gradient-to-br ${shipColor} text-amber-100 shadow-2xl border-4 border-amber-400/50 group-hover:scale-110 transition-transform duration-300`}>
                        {level}
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <ShipIcon className="w-8 h-8 text-amber-400" />
                            <span className="text-amber-300 font-bold text-lg uppercase tracking-wider">{rank}</span>
                        </div>
                        <h3 className="text-4xl font-black text-amber-100 mb-2">{title}</h3>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse"></div>
                            <span className="text-amber-200 font-medium">Crew Level {level}</span>
                        </div>
                    </div>
                </div>
                
                {/* Mission description */}
                <div className="bg-amber-900/40 rounded-2xl p-6 mb-6 border-2 border-amber-600/30">
                    <h4 className="font-bold text-amber-200 mb-3 text-xl flex items-center gap-3">
                        <CompassIcon className="w-6 h-6 text-amber-400" />
                        The Mission
                    </h4>
                    <p className="text-amber-100 leading-relaxed text-lg">{description}</p>
                </div>
            </div>

            {/* Content treasure chests */}
            <div className="px-8 pb-6">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Crew Duties */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-amber-200 text-xl flex items-center gap-3">
                            <AnchorIcon className="w-6 h-6 text-red-400" />
                            Crew Duties
                        </h4>
                        <div className="space-y-3">
                            {duties.map((duty, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 bg-red-900/30 rounded-xl border border-red-600/30 hover:bg-red-900/50 transition-colors duration-300">
                                    <div className="w-3 h-3 rounded-full bg-red-400 mt-2 flex-shrink-0 animate-pulse"></div>
                                    <span className="text-amber-100">{duty}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Treasure Rewards */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-amber-200 text-xl flex items-center gap-3">
                            <TreasureIcon className="w-6 h-6 text-amber-400" />
                            Treasure Rewards
                        </h4>
                        <div className="space-y-3">
                            {treasures.map((treasure, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 bg-amber-900/30 rounded-xl border border-amber-600/30 hover:bg-amber-900/50 transition-colors duration-300">
                                    <div className="w-3 h-3 rounded-full bg-amber-400 mt-2 flex-shrink-0 animate-pulse"></div>
                                    <span className="text-amber-100">{treasure}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Pirate tale footer */}
            <div className="bg-gradient-to-r from-red-900/60 to-amber-900/60 backdrop-blur-sm p-8 border-t-4 border-amber-600/50">
                <h4 className="font-bold text-amber-200 mb-4 flex items-center gap-3 text-xl">
                    <PirateIcon className="w-6 h-6 text-amber-400" />
                    A Pirate's Tale
                </h4>
                <p className="text-amber-100 leading-relaxed italic text-lg border-l-4 border-amber-400/50 pl-6">"{tale}"</p>
            </div>
        </div>
    </div>
);

const QuestStep: React.FC<{ step: number; title: string; description: string }> = ({ step, title, description }) => (
    <div className="group relative">
        <div className="flex items-start gap-8">
            <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-2xl border-4 border-amber-400/50 group-hover:shadow-amber-500/50 group-hover:scale-110 transition-all duration-300">
                {step}
            </div>
            <div className="flex-1 pt-4">
                <h4 className="text-2xl font-black text-amber-100 mb-4 group-hover:text-white transition-colors duration-300">{title}</h4>
                <p className="text-amber-200 leading-relaxed text-lg group-hover:text-amber-100 transition-colors duration-300">{description}</p>
            </div>
        </div>
        {step < 7 && (
            <div className="absolute left-10 top-24 w-1 h-16 bg-gradient-to-b from-amber-500/70 to-transparent"></div>
        )}
    </div>
);

const SafetyPage: React.FC = () => {
    const shipColors = [
        'from-emerald-600 to-green-700',
        'from-blue-600 to-cyan-700', 
        'from-purple-600 to-violet-700',
        'from-orange-600 to-red-700',
        'from-red-700 to-pink-700'
    ];

    return (
        <main className="relative min-h-screen overflow-hidden">
            {/* Pirate ship background */}
            <div className="fixed inset-0 bg-gradient-to-br from-amber-900/20 via-red-900/30 to-amber-800/20 -z-10"></div>
            <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23d97706" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] -z-10"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                {/* Pirate Hero Section */}
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-3 bg-amber-600/20 border-2 border-amber-500/40 rounded-full px-8 py-3 mb-8">
                        <PirateIcon className="w-6 h-6 text-amber-400" />
                        <span className="text-amber-300 font-bold text-lg uppercase tracking-wider">Pirate's Code of AI Safety</span>
                    </div>
                    
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-red-500 to-amber-600">
                            Ahoy Matey!
                        </span>
                        <br />
                        <span className="text-amber-100">Safe Seas Ahead</span>
                    </h1>
                    
                    <p className="text-2xl md:text-3xl text-amber-200 max-w-4xl mx-auto leading-relaxed mb-12">
                        Navigate the treacherous waters of AI with our legendary Pirate's Code—a treasure map to safe harbors and protected shores, savvy?
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-6">
                        <button className="bg-gradient-to-r from-amber-500 to-red-600 text-white font-black py-4 px-10 rounded-full text-xl hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-4 border-amber-400/50">
                            ⚓ Chart Your Course
                        </button>
                        <button className="border-4 border-amber-600 text-amber-300 font-black py-4 px-10 rounded-full text-xl hover:border-amber-400 hover:bg-amber-900/30 transition-all duration-300 hover:scale-105">
                            🗺️ View Treasure Map
                        </button>
                    </div>
                </div>

                {/* Pirate Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
                    {[
                        { number: '5', label: 'Crew Ranks', icon: '⚓', color: 'text-amber-400' },
                        { number: '8', label: 'Sacred Laws', icon: '📜', color: 'text-red-400' },
                        { number: '100+', label: 'Safety Treasures', icon: '💎', color: 'text-emerald-400' },
                        { number: '∞', label: 'Adventure Awaits', icon: '🏴‍☠️', color: 'text-purple-400' }
                    ].map((stat, i) => (
                        <div key={i} className="text-center group">
                            <div className="text-6xl mb-2 group-hover:scale-125 transition-transform duration-300">
                                {stat.icon}
                            </div>
                            <div className={`text-5xl md:text-6xl font-black ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                                {stat.number}
                            </div>
                            <div className="text-amber-200 font-bold text-lg">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Pirate's Code Introduction */}
                <section className="mb-24">
                    <h2 className="text-5xl md:text-6xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">
                        The Pirate's Code
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <p className="text-2xl text-amber-200 leading-relaxed">
                                Arrr! Every good pirate knows that the seas be dangerous, and the same be true for the waters of artificial intelligence, savvy?
                            </p>
                            <p className="text-2xl text-amber-200 leading-relaxed">
                                Our legendary Code ensures that as yer AI ship grows more powerful, yer defenses grow stronger too. No scurvy dog wants their vessel to run aground on the rocks of reckless AI!
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-red-500/30 rounded-3xl blur-2xl"></div>
                            <div className="relative bg-gradient-to-br from-amber-900/80 to-red-900/60 backdrop-blur-xl border-4 border-amber-600/50 rounded-3xl p-8">
                                <h4 className="text-2xl font-black text-amber-100 mb-8 flex items-center gap-3">
                                    <TreasureIcon className="w-8 h-8 text-amber-400" />
                                    Pirate's Treasures
                                </h4>
                                <div className="space-y-6">
                                    {[
                                        '🏴‍☠️ Fearless risk navigation',
                                        '🗺️ Clear treasure map to safety',
                                        '⚓ Scalable ship defenses',
                                        '🏆 Legendary crew standards'
                                    ].map((treasure, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="text-2xl">{treasure.split(' ')[0]}</div>
                                            <span className="text-amber-200 text-lg">{treasure.substring(2)}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pirate Principles */}
                <section className="mb-24">
                    <h2 className="text-5xl md:text-6xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">
                        Sacred Laws of the Sea
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <PirateCard
                            icon={<CompassIcon className="w-full h-full" />}
                            title="Navigate by the Stars"
                            description="Chart yer course with capability and risk as yer guiding stars, ensuring safe passage through treacherous waters."
                            color="from-blue-800 to-cyan-900"
                        />
                        <PirateCard
                            icon={<AnchorIcon className="w-full h-full" />}
                            title="Drop Anchor When Needed"
                            description="Know when to stop and secure yer ship—clear warning signals tell ye when danger lurks ahead."
                            color="from-emerald-800 to-green-900"
                        />
                        <PirateCard
                            icon={<CannonIcon className="w-full h-full" />}
                            title="Multiple Cannons Ready"
                            description="Never rely on a single defense—layer yer protections like a seasoned captain layers his armor."
                            color="from-purple-800 to-violet-900"
                        />
                        <PirateCard
                            icon={<ShipIcon className="w-full h-full" />}
                            title="Test Yer Ship's Mettle"
                            description="Battle-test yer vessel against the fiercest storms and craftiest enemies before setting sail."
                            color="from-red-800 to-pink-900"
                        />
                        <PirateCard
                            icon={<TreasureIcon className="w-full h-full" />}
                            title="Captain's Council"
                            description="Assemble a crew of wise captains to guide yer decisions and keep ye on the righteous path."
                            color="from-amber-800 to-orange-900"
                        />
                        <PirateCard
                            icon={<PirateIcon className="w-full h-full" />}
                            title="Keep Watch Always"
                            description="Post lookouts day and night—constant vigilance keeps yer ship safe from unexpected threats."
                            color="from-indigo-800 to-blue-900"
                        />
                        <PirateCard
                            icon={<CompassIcon className="w-full h-full" />}
                            title="Log Every Adventure"
                            description="Record every battle, every storm, every lesson learned—knowledge be the greatest treasure."
                            color="from-teal-800 to-cyan-900"
                        />
                        <PirateCard
                            icon={<AnchorIcon className="w-full h-full" />}
                            title="Share the Bounty"
                            description="Share yer discoveries with fellow pirates—together we make the seas safer for all."
                            color="from-rose-800 to-red-900"
                        />
                    </div>
                </section>

                {/* The Five Crew Ranks */}
                <section className="mb-24">
                    <h2 className="text-5xl md:text-6xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">
                        The Five Crew Ranks
                    </h2>
                    <p className="text-2xl text-amber-200 text-center max-w-4xl mx-auto mb-20">
                        From lowly deck swabber to legendary Pirate King—each rank brings greater responsibility and mightier defenses for yer AI vessel.
                    </p>

                    <CrewLevelCard 
                        level={1} 
                        title="Deck Swabber" 
                        rank="Cabin Boy"
                        description="Learn the ropes and keep the ship tidy—basic duties for simple AI tasks that won't sink the ship if they go awry." 
                        duties={["Swab the decks with input validation", "Tie down loose cannons with access controls", "Keep watch with basic logging", "Follow the ship's rules and documentation"]} 
                        treasures={["Clean ship operations", "Protected cargo holds", "Simple but effective defenses", "Clear sailing instructions"]} 
                        tale="Young Billy started as a deck swabber on Captain Morgan's sentiment analysis ship. By keeping the decks clean of profanity and logging every visitor, he prevented scurvy pirates from corrupting the ship's precious cargo of customer reviews."
                        shipColor={shipColors[0]}
                    />

                    <CrewLevelCard 
                        level={2} 
                        title="Able Seaman" 
                        rank="Crew Member"
                        description="Handle the rigging and defend against boarding parties—moderate skills for interactive AI that talks back to landlubbers." 
                        duties={["Man the defensive cannons with robust filtering", "Watch for enemy ships with anomaly detection", "Practice sword fighting with red team exercises", "Prepare for battle with incident response plans"]} 
                        treasures={["Battle-tested defenses", "Enemy detection systems", "Crew combat training", "Emergency battle protocols"]} 
                        tale="Seaman Sarah sailed with the Chatbot Revenge, where her quick thinking with semantic filters saved the day when crafty pirates tried to trick the ship into giving away the captain's treasure map of investment secrets."
                        shipColor={shipColors[1]}
                    />

                    <CrewLevelCard 
                        level={3} 
                        title="Quartermaster" 
                        rank="Ship's Officer"
                        description="Manage the crew and coordinate defenses—seasoned skills for capable AI that can generate powerful magic (code and content)." 
                        duties={["Command defensive formations with constitutional AI", "Monitor crew behavior and ship performance", "Lead expert boarding parties for red team attacks", "Write the ship's safety charter and battle plans"]} 
                        treasures={["Advanced battle formations", "Crew performance insights", "Expert warrior consultations", "Formal ship safety documentation"]} 
                        tale="Quartermaster Quinn commanded the HMS Code Generator, where constitutional AI principles helped the ship refuse dangerous requests for personalized medical spells, earning praise from the Royal Navy of Medical Experts."
                        shipColor={shipColors[2]}
                    />

                    <CrewLevelCard 
                        level={4} 
                        title="First Mate" 
                        rank="Ship's Commander"
                        description="Navigate uncharted waters and command the fleet—master-level skills for near-legendary AI approaching the power of the ancient sea gods." 
                        duties={["Navigate by the mystical stars of interpretability", "Command multi-ship fleets with coordination protocols", "Consult with the Admiralty for external validation", "Negotiate with port authorities for regulatory approval"]} 
                        treasures={["Mystical navigation tools", "Fleet command capabilities", "Admiralty endorsements", "Royal port permissions"]} 
                        tale="First Mate Blackbeard's multimodal reasoning fleet discovered corrupted planning charts in their navigation system. Using mystical interpretability tools, they detected the corruption and earned the blessing of the AI Safety Admiralty."
                        shipColor={shipColors[3]}
                    />

                    <CrewLevelCard 
                        level={5} 
                        title="Pirate King" 
                        rank="Legendary Captain"
                        description="Rule the seven seas and command the power of Poseidon himself—godlike skills for AI that rivals or surpasses the greatest human captains." 
                        duties={["Wield the Trident of Provable Alignment", "Command the Kraken of hardware failsafes", "Consult with Poseidon's AI-assisted oracle", "Unite all pirate fleets under one code"]} 
                        treasures={["Divine mathematical proofs", "Kraken-powered emergency stops", "Oracle-guided oversight", "Universal pirate law"]} 
                        tale="The legendary Pirate King's AGI fleet required the blessing of all sea gods. With Poseidon's Trident ensuring no ship could override the sacred shutdown command, and the Oracle revealing hidden strategic plots, the fleet earned the right to sail the most dangerous waters under the watchful eye of the Global Pirate Council."
                        shipColor={shipColors[4]}
                    />
                </section>

                {/* Quest Implementation */}
                <section className="mb-24">
                    <h2 className="text-5xl md:text-6xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">
                        Your Epic Quest
                    </h2>
                    <p className="text-2xl text-amber-200 text-center max-w-4xl mx-auto mb-20">
                        Follow this treasure map to transform yer scurvy crew into legendary AI safety pirates, step by step.
                    </p>
                    
                    <div className="max-w-5xl mx-auto space-y-16">
                        <QuestStep 
                            step={1}
                            title="Survey Yer Fleet"
                            description="Take inventory of all yer AI ships and map each vessel to its proper crew rank based on power and danger."
                        />
                        <QuestStep 
                            step={2}
                            title="Spot the Weak Points"
                            description="Identify which defenses be missing from yer ships and prioritize repairs based on the greatest threats to yer treasure."
                        />
                        <QuestStep 
                            step={3}
                            title="Chart the Course"
                            description="Create a detailed treasure map showing when and how to upgrade each ship's defenses, starting with the most dangerous vessels."
                        />
                        <QuestStep 
                            step={4}
                            title="Assemble Yer Council"
                            description="Gather a crew of wise captains and safety experts with clear roles and the authority to make life-or-death decisions."
                        />
                        <QuestStep 
                            step={5}
                            title="Hoist the Warning Flags"
                            description="Build a crow's nest dashboard to watch for danger signals and sound the alarm when trouble approaches."
                        />
                        <QuestStep 
                            step={6}
                            title="Train the Crew"
                            description="Teach all hands the Pirate's Code and build a culture where safety be every pirate's sacred duty."
                        />
                        <QuestStep 
                            step={7}
                            title="Sail and Adapt"
                            description="Review yer Code with each full moon, learning from new adventures and the wisdom of fellow pirates across the seven seas."
                        />
                    </div>
                </section>

                {/* Final Call to Adventure */}
                <section className="text-center">
                    <div className="bg-gradient-to-br from-amber-900/80 to-red-900/80 backdrop-blur-xl border-4 border-amber-600/50 rounded-3xl p-16 md:p-20">
                        <div className="text-8xl mb-8">🏴‍☠️</div>
                        <h2 className="text-4xl md:text-5xl font-black text-amber-100 mb-8">Ready to Sail the Seven Seas?</h2>
                        <p className="text-2xl text-amber-200 max-w-4xl mx-auto mb-12 leading-relaxed">
                            The Pirate's Code of AI Safety be yer compass through the treacherous waters ahead. With this legendary framework, ye can navigate any storm and reach the safest harbors, no matter how powerful yer AI ship becomes.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8">
                            <button className="bg-gradient-to-r from-amber-500 to-red-600 text-white font-black py-6 px-12 rounded-full text-2xl hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-4 border-amber-400/50">
                                ⚓ Begin the Adventure
                            </button>
                            <button className="border-4 border-amber-600 text-amber-300 font-black py-6 px-12 rounded-full text-2xl hover:border-amber-400 hover:bg-amber-900/30 transition-all duration-300 hover:scale-105">
                                🗺️ Contact the Crew
                            </button>
                        </div>
                        <div className="mt-12 text-amber-300 text-lg italic">
                            "The sea be vast and full of wonders, but with the right code, every pirate can find their way home." - Captain AI Safety
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default SafetyPage;