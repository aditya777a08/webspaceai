import React from 'react';

// Icon Components with Caribbean-inspired styling
const CompassIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="10" stroke="#FFD700"/>
    <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" fill="#FFD700"/>
  </svg>
);

const AnchorIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="5" r="3" stroke="#8B0000"/>
    <line x1="12" y1="22" x2="12" y2="8" stroke="#8B0000"/>
    <path d="M5 12H2a10 10 0 0 0 20 0h-3" stroke="#8B0000"/>
  </svg>
);

const CrownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M2 20h20l-2-6-4 2-4-4-4 4-4-2-2 6z" stroke="#FFD700"/>
    <path d="M6 9l4-4 4 4" stroke="#FFD700"/>
  </svg>
);

const TreasureIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="#4682B4"/>
    <line x1="3" y1="6" x2="21" y2="6" stroke="#4682B4"/>
    <path d="M16 10a4 4 0 0 1-8 0" stroke="#4682B4"/>
  </svg>
);

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke="#FFD700"/>
  </svg>
);

interface PrincipleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ icon, title, description }) => (
  <div className="group bg-[#1C2526]/80 rounded-xl p-6 border border-[#FFD700]/30 hover:border-[#FFD700]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#FFD700]/20">
    <div className="w-12 h-12 mb-4 text-[#FFD700] group-hover:text-[#FFD700]/80 transition-colors duration-300">
      {icon}
    </div>
    <h4 className="font-semibold text-xl text-white mb-3">{title}</h4>
    <p className="text-[#B0C4DE] leading-relaxed group-hover:text-[#B0C4DE]/80 transition-colors duration-300">{description}</p>
  </div>
);

interface LevelCardProps {
  level: number;
  title: string;
  rank: string;
  description: string;
  duties: string[];
  benefits: string[];
  story: string;
}

const LevelCard: React.FC<LevelCardProps> = ({ level, title, rank, description, duties, benefits, story }) => (
  <div className="group relative mb-16">
    <div className="bg-[#1C2526]/80 rounded-xl border border-[#FFD700]/30 overflow-hidden hover:border-[#FFD700]/50 transition-all duration-300">
      <div className="bg-gradient-to-r from-[#4682B4]/30 to-[#1C2526]/80 p-6 border-b border-[#FFD700]/20">
        <div className="flex items-center gap-6 mb-4">
          <div className="flex items-center justify-center w-16 h-16 text-2xl font-bold rounded-full bg-[#FFD700] text-[#1C2526]">
            {level}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <CrownIcon className="w-5 h-5 text-[#FFD700]" />
              <span className="text-[#B0C4DE] font-medium text-sm uppercase tracking-wider">{rank}</span>
            </div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>
        </div>
        <div className="bg-[#4682B4]/10 rounded-xl p-4 border border-[#FFD700]/20">
          <p className="text-[#B0C4DE] leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <AnchorIcon className="w-5 h-5 text-[#FFD700]" />
              Duties of the Crew
            </h4>
            <div className="space-y-3">
              {duties.map((duty, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-[#4682B4]/10 rounded-lg border border-[#FFD700]/20">
                  <div className="w-2 h-2 rounded-full bg-[#FFD700] mt-2 flex-shrink-0"></div>
                  <span className="text-[#B0C4DE] text-sm">{duty}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <TreasureIcon className="w-5 h-5 text-[#FFD700]" />
              Riches of the Rank
            </h4>
            <div className="space-y-3">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-[#4682B4]/10 rounded-lg border border-[#FFD700]/20">
                  <div className="w-2 h-2 rounded-full bg-[#FFD700] mt-2 flex-shrink-0"></div>
                  <span className="text-[#B0C4DE] text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#4682B4]/10 rounded-xl p-4 border border-[#FFD700]/20">
          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
            <StarIcon className="w-5 h-5 text-[#FFD700]" />
            A Pirate's Tale
          </h4>
          <p className="text-[#B0C4DE] leading-relaxed italic">"{story}"</p>
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
  <div className="group flex items-start gap-6">
    <div className="flex-shrink-0 w-12 h-12 bg-[#FFD700] text-[#1C2526] rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
      {step}
    </div>
    <div className="flex-1 pt-2">
      <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-[#FFD700]/80 transition-colors duration-300">{title}</h4>
      <p className="text-[#B0C4DE] leading-relaxed group-hover:text-[#B0C4DE]/80 transition-colors duration-300">{description}</p>
    </div>
  </div>
);

const SafetyPage: React.FC = () => {
  return (
    <main className="bg-[#0A1A2F] text-[#B0C4DE] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 xl:px-24 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#1C2526]/80 border border-[#FFD700]/50 rounded-full px-6 py-2 mb-8">
            <CrownIcon className="w-5 h-5 text-[#FFD700]" />
            <span className="text-[#B0C4DE] font-medium text-sm uppercase tracking-wider">The Eternal Code</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            <span className="text-white">The Captain</span>
            <br />
            <span className="text-[#FFD700]">Never Sinks</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#B0C4DE] max-w-4xl mx-auto leading-relaxed mb-12">
            Like Captain Jack Sparrow's unyielding spirit, our AI Safety Code sails eternal—guiding through tempests, ensuring safety never falters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#FFD700] text-[#1C2526] font-semibold py-3 px-8 rounded-full hover:bg-[#FFD700]/80 transition-colors">
              Embark on the Voyage
            </button>
            <button className="border border-[#FFD700]/50 text-[#B0C4DE] font-semibold py-3 px-8 rounded-full hover:border-[#FFD700] hover:bg-[#1C2526]/80 transition-colors">
              Discover the Code
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { number: '5', label: 'Mastery Ranks', icon: '⚓' },
            { number: '7', label: 'Sacred Tenets', icon: '🧭' },
            { number: '∞', label: 'Endless Watch', icon: '🌟' },
            { number: '1', label: 'Immortal Code', icon: '👑' }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-4xl mb-3 text-[#FFD700] group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-[#B0C4DE] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Introduction */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            The Pirate's Covenant
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-[#B0C4DE] leading-relaxed">
                Across the boundless seas of artificial intelligence, where storms of chaos brew, one truth holds fast: the Captain never sinks.
              </p>
              <p className="text-xl text-[#B0C4DE] leading-relaxed">
                Our AI Safety Code, inspired by Captain Jack Sparrow's cunning and resilience, is a beacon through the darkest waters—a covenant that endures.
              </p>
            </div>
            <div className="bg-[#1C2526]/80 rounded-xl p-8 border border-[#FFD700]/30">
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <TreasureIcon className="w-6 h-6 text-[#FFD700]" />
                Pillars of the Code
              </h4>
              <div className="space-y-4">
                {[
                  'Unyielding safety tenets',
                  'Cunning navigational wisdom',
                  'Stalwart protective measures',
                  'Legendary pirate\'s honor'
                ].map((pillar, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFD700]"></div>
                    <span className="text-[#B0C4DE]">{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            Seven Sacred Tenets
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PrincipleCard
              icon={<CompassIcon className="w-full h-full" />}
              title="Sail by the Stars"
              description="Navigate with capability and risk as your guiding constellations, ensuring a safe course."
            />
            <PrincipleCard
              icon={<AnchorIcon className="w-full h-full" />}
              title="Drop Anchor Swiftly"
              description="Know when to pause and secure your ship—clear signals steer you from peril."
            />
            <PrincipleCard
              icon={<TreasureIcon className="w-full h-full" />}
              title="Fortify Your Hold"
              description="Build layered defenses like a pirate's fortress, never relying on a single bulwark."
            />
            <PrincipleCard
              icon={<StarIcon className="w-full h-full" />}
              title="Test in Calm Seas"
              description="Prove your ship's mettle in safe waters before braving the open ocean."
            />
            <PrincipleCard
              icon={<CrownIcon className="w-full h-full" />}
              title="Gather the Crew"
              description="Convene the wisest pirates to steer decisions and uphold the sacred code."
            />
            <PrincipleCard
              icon={<CompassIcon className="w-full h-full" />}
              title="Keep a Sharp Lookout"
              description="Maintain constant vigilance, watching for storms and hidden dangers."
            />
            <PrincipleCard
              icon={<StarIcon className="w-full h-full" />}
              title="Chart Every Voyage"
              description="Record each adventure—knowledge is the greatest treasure of all."
            />
          </div>
        </section>

        {/* Safety Levels */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            Five Ranks of Mastery
          </h2>
          <p className="text-xl text-[#B0C4DE] text-center max-w-4xl mx-auto mb-16">
            From lowly deckhand to immortal Captain—each rank forges greater wisdom and stronger defenses.
          </p>

          <LevelCard
            level={1}
            title="Deckhand"
            rank="Greenhorn Rank"
            description="Learn the pirate's code and tend to simple tasks—basic skills for AI with minimal risk."
            duties={[
              "Scrub inputs clean and true",
              "Guard the ship's access ports",
              "Log all comings and goings",
              "Study the sacred code"
            ]}
            benefits={[
              "Sturdy operational decks",
              "Safe data harbors",
              "Reliable basic defenses",
              "Clear sailing charts"
            ]}
            story="Young Jack, a deckhand on the Sentiment Sloop, mastered input scrubbing and access locks, saving the crew from tainted data storms."
          />

          <LevelCard
            level={2}
            title="Boatswain"
            rank="Seaworthy Rank"
            description="Man the ship's defenses and parley with outsiders—skills for AI that speaks with the world."
            duties={[
              "Raise advanced content shields",
              "Watch for rogue waves and threats",
              "Conduct regular ship inspections",
              "Prepare for emergency maneuvers"
            ]}
            benefits={[
              "Storm-proof defenses",
              "Keen threat detection",
              "Crew training scrolls",
              "Swift response readiness"
            ]}
            story="Boatswain Maria sailed the Chatbot Brigantine, using sharp filtering to fend off data pirates seeking to plunder secrets."
          />

          <LevelCard
            level={3}
            title="First Mate"
            rank="Officer Rank"
            description="Command ship operations and rally defenses—advanced skills for AI crafting powerful artifacts."
            duties={[
              "Enforce the pirate's constitution",
              "Oversee ship performance and tuning",
              "Lead expert defense drills",
              "Draft formal safety charters"
            ]}
            benefits={[
              "Robust governance codes",
              "Performance tuning maps",
              "Expert defense counsel",
              "Official safety logs"
            ]}
            story="First Mate Liam, aboard the Code Galleon, upheld constitutional AI, refusing dangerous orders and earning the Pirate Council's nod."
          />

          <LevelCard
            level={4}
            title="Quartermaster"
            rank="Master Rank"
            description="Navigate uncharted seas and command fleets—expert skills for near-legendary AI."
            duties={[
              "Use advanced navigation tools",
              "Coordinate multi-ship operations",
              "Consult the Pirate Safety Council",
              "Secure royal sea charters"
            ]}
            benefits={[
              "Master navigation instruments",
              "Fleet command authority",
              "Council endorsements",
              "Official sea licenses"
            ]}
            story="Quartermaster Eliza's reasoning fleet uncovered tainted charts. Her sharp tools revealed the flaws, earning the Council's golden seal."
          />

          <LevelCard
            level={5}
            title="Immortal Captain"
            rank="Legendary Rank"
            description="Rule the seas with eternal cunning—legendary skills for AI rivaling the greatest pirate lords."
            duties={[
              "Wield the Crown of True Alignment",
              "Command the Kraken of failsafes",
              "Seek the Oracle's oversight",
              "Unite all fleets under the code"
            ]}
            benefits={[
              "Divine alignment proofs",
              "Kraken-powered safeguards",
              "Oracle-guided wisdom",
              "Universal pirate law"
            ]}
            story="The Immortal Captain's AGI armada, blessed by the Sea Oracle, wielded the Crown of Alignment, ensuring no ship could defy the eternal code."
          />
        </section>

        {/* Implementation Guide */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            The Pirate's Quest
          </h2>
          <p className="text-xl text-[#B0C4DE] text-center max-w-4xl mx-auto mb-16">
            Follow this sacred map to forge your fleet into an immortal force of AI safety.
          </p>
          <div className="max-w-4xl mx-auto space-y-12">
            <ImplementationStep
              step={1}
              title="Chart Your Armada"
              description="Take stock of your AI ships and assign each its rank based on power and peril."
            />
            <ImplementationStep
              step={2}
              title="Spy Weak Planks"
              description="Seek out gaps in your defenses and fortify them against the fiercest storms."
            />
            <ImplementationStep
              step={3}
              title="Plot the Course"
              description="Craft a map to strengthen each ship's defenses, starting with the mightiest."
            />
            <ImplementationStep
              step={4}
              title="Call the Council"
              description="Gather wise pirates with authority to make critical calls for the fleet."
            />
            <ImplementationStep
              step={5}
              title="Raise the Lanterns"
              description="Build a network of beacons to spot dangers and warn the fleet of storms."
            />
            <ImplementationStep
              step={6}
              title="Drill the Crew"
              description="Teach all hands the Eternal Code, making safety the heart of every pirate."
            />
            <ImplementationStep
              step={7}
              title="Sail Ever Vigilant"
              description="Review the Code with each tide, learning from voyages and fellow captains."
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-[#1C2526]/80 rounded-xl p-12 md:p-16 border border-[#FFD700]/30">
            <div className="text-6xl mb-8 text-[#FFD700]">🧭</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Sail the Eternal Seas?</h2>
            <p className="text-xl text-[#B0C4DE] max-w-3xl mx-auto mb-10 leading-relaxed">
              The Captain's Eternal Code of AI Safety is your compass through uncharted waters. With this covenant, you'll conquer any storm and find safe harbor.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-[#FFD700] text-[#1C2526] font-semibold py-4 px-10 rounded-full text-lg hover:bg-[#FFD700]/80 transition-colors">
                Set Sail Now
              </button>
              <button className="border border-[#FFD700]/50 text-[#B0C4DE] font-semibold py-4 px-10 rounded-full text-lg hover:border-[#FFD700] hover:bg-[#1C2526]/80 transition-colors">
                Parley with the Council
              </button>
            </div>
            <div className="mt-8 text-[#B0C4DE] italic">
              "The seas are wild, but with the Eternal Code, every captain sails true—and never sinks."
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SafetyPage;