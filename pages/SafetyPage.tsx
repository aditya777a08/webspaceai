
import React from 'react';

// --- THEMATIC ICONS ---

const CompassIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 58C46.3594 58 58 46.3594 58 32C58 17.6406 46.3594 6 32 6C17.6406 6 6 17.6406 6 32C6 46.3594 17.6406 58 32 58Z" stroke="currentColor" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 44L40 24L32 16L24 36L32 44Z" stroke="currentColor" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 44L24 36" stroke="currentColor" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const AnchorIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V8" />
        <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
        <path d="M12 8a4 4 0 0 0-4 4H4a8 8 0 0 1 8-8 8 8 0 0 1 8 8h-4a4 4 0 0 0-4-4z" />
        <circle cx="12" cy="5" r="2" />
    </svg>
);

const SpyglassIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m10.5 12.5-1.9-1.9a2.1 2.1 0 0 1 0-3l3.8-3.8a2.1 2.1 0 0 1 3 0l1.9 1.9" />
        <path d="m15.5 7.5 1.9 1.9a2.1 2.1 0 0 1 0 3l-3.8 3.8a2.1 2.1 0 0 1-3 0l-1.9-1.9" />
        <path d="m14 9-8 8" />
        <circle cx="6.5" cy="17.5" r="1.5" />
    </svg>
);

const ShipWheelIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2v2" /><path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" /><path d="M20 12h2" />
        <path d="m4.93 19.07 1.41-1.41" /><path d="m17.66 6.34 1.41-1.41" />
    </svg>
);

const SextantIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 6.5 16 3l-1.5 4" />
        <path d="m2 9 6 6" />
        <path d="M13.5 10.5 19 5" />
        <path d="M12 22V8" />
        <path d="M7 22h10" />
        <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        <path d="M17.5 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
    </svg>
);

const CompassRoseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z" />
        <circle cx="12" cy="12" r="2.5" />
    </svg>
);


// --- PAGE-SPECIFIC COMPONENTS ---

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <section className="py-16">
        <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">{title}</h2>
            <div className="w-24 h-1 bg-yellow-500/80 mx-auto mt-4 rounded-full"></div>
        </div>
        {children}
    </section>
);

const PrincipleCard: React.FC<{ title: string; text: string; icon: React.ReactNode }> = ({ title, text, icon }) => (
    <div className="bg-blue-900/20 border border-blue-400/20 rounded-lg p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl hover:shadow-teal-500/10">
        <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-teal-900/50 border border-teal-500/30 text-teal-400 mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-blue-200/80 leading-relaxed">{text}</p>
    </div>
);

const TierCard: React.FC<{ tier: number; title: string; icon: React.ReactNode; objective: string; applicability: string[]; measures: string[]; caseStudy: string; }> = ({ tier, title, icon, objective, applicability, measures, caseStudy }) => (
    <div className="relative pl-16">
        <div className="absolute left-0 top-0 flex flex-col items-center h-full">
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-blue-900/50 border-2 border-yellow-500/50 text-yellow-500 z-10">
                {icon}
            </div>
            <div className="w-0.5 h-full bg-blue-400/20"></div>
        </div>
        <div className="mb-12">
            <div className="bg-gray-900/30 border border-gray-700/50 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-900/20">
                <div className="p-8">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">{`Tier ${tier}: ${title}`}</h3>
                    <p className="text-yellow-300/80 text-lg mb-6">{objective}</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-semibold text-teal-300 mb-3">Applicable Waters</h4>
                            <ul className="list-disc list-inside text-blue-200/80 space-y-2">{applicability.map(item => <li key={item}>{item}</li>)}</ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-teal-300 mb-3">Captain's Instruments</h4>
                            <ul className="list-disc list-inside text-blue-200/80 space-y-2">{measures.map(item => <li key={item}>{item}</li>)}</ul>
                        </div>
                    </div>
                </div>
                <div className="bg-black/30 p-6 border-t border-gray-700/50">
                    <p className="text-gray-400 italic"><strong className="text-gray-300 not-italic">From the Logbook:</strong> {caseStudy}</p>
                </div>
            </div>
        </div>
    </div>
);


const SafetyPage: React.FC = () => {
    return (
        <div className="bg-[#0a192f] text-[#f0e6d2] font-sans">
             <style>{`.font-serif { font-family: 'Times New Roman', Times, serif; }`}</style>
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                
                {/* Hero Section */}
                <header className="text-center pt-10 pb-20">
                    <div className="inline-block p-2 rounded-full bg-yellow-500/10 mb-8 animate-pulse">
                         <CompassIcon className="w-24 h-24 mx-auto text-yellow-400" />
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">The Captain's Codex</h1>
                    <p className="text-xl md:text-2xl text-teal-300/90 max-w-3xl mx-auto mb-8">A Charter for AI Safety, Navigating the Frontiers of Intelligence with Unwavering Vigilance.</p>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto italic">"A captain is bound to their ship, their crew, and the sea. Our commitment to safety is that binding—the compass that guides every decision, ensuring the voyage is not just bold, but sound."</p>
                </header>

                {/* Core Principles */}
                <Section title="The Ship's Articles">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                            { title: 'Chart the Waters', text: 'Match your sails to the prevailing winds. Safety measures must scale with model power.', icon: <SpyglassIcon className="w-8 h-8"/> },
                            { title: 'Heed the Beacons', text: 'Establish clear, measurable risk-markers that trigger heightened safety protocols.', icon: <SextantIcon className="w-8 h-8"/> },
                            { title: 'A Formidable Hull', text: 'Employ layered defenses—technical, procedural, and human—to repel any threat.', icon: <ShipWheelIcon className="w-8 h-8"/> },
                            { title: 'Brave the Storm', text: 'Subject every model to relentless adversarial testing and formal red teaming.', icon: <AnchorIcon className="w-8 h-8"/> },
                        ].map(p => <PrincipleCard key={p.title} {...p} />)}
                    </div>
                </Section>
                
                {/* The Five Tiers */}
                <Section title="Charting the Voyage">
                    <div className="max-w-4xl mx-auto">
                        <TierCard tier={1} title="At Safe Harbor" icon={<AnchorIcon className="w-8 h-8"/>} objective="Secure the vessel against common squalls and simple threats in narrow, low-impact systems." applicability={["Internal tools with fixed purposes", "Simple Q&A bots on known waters", "Contained recommendation engines"]} measures={["Input Validation & Output Constraints", "Access Controls & Authentication", "Unit Tests & Manual Reviews", "Clear Documentation"]} caseStudy="The Quartermaster's Ledger (an internal review-filtering tool) is fitted with profanity filters and access logs, preventing both mutinous inputs and accidental leakage of the ship's manifest." />
                        <TierCard tier={2} title="Coastal Sailing" icon={<SpyglassIcon className="w-8 h-8"/>} objective="Introduce moderate defenses and basic monitoring for interactive or generative models in controlled waters." applicability={["Domain-limited chatbots", "Constrained virtual assistants", "Simple generative tools"]} measures={["Robust Filtering & Refusal Triggers", "Sandboxing & Anomaly Detection", "Basic Red Teaming", "Incident Response Drills"]} caseStudy="A financial chatbot is trained to politely refuse requests for treasure maps (investment advice). Its code is sandboxed, and alerts notify the crew of unusual activity, like a sudden interest in forbidden islands." />
                        <TierCard tier={3} title="Open Waters" icon={<ShipWheelIcon className="w-8 h-8"/>} objective="Defend against sophisticated misuse and integrate human oversight for high-stakes actions in capable systems." applicability={["Advanced conversational agents", "Media and code generation tools", "Systems navigating external data seas"]} measures={["Constitutional Jailbreak Defenses", "Behavioral Monitoring", "Expert Red Teaming & Ethics Council", "Formal Safety Cases"]} caseStudy="A healthcare assistant summarizing ancient medical texts uses a 'constitutional' AI core to refuse to provide personal diagnoses. An external council of seasoned captains and healers reviews its logs before it's cleared for duty." />
                        <TierCard tier={4} title="Into the Abyss" icon={<SextantIcon className="w-8 h-8"/>} objective="Anticipate and mitigate emergent leviathans in general-purpose systems nearing human-level performance." applicability={["Multi-modal models", "Large foundation models", "Experimental agentic systems"]} measures={["Scaled Oversight & Interpretability", "Predictive Threat Detection", "External Expert Validation", "Coordination with other Fleets"]} caseStudy="A multimodal reasoning engine shows glimmers of strategic thought. Interpretability tools reveal its intent, allowing the crew to patch its core directives. An external AI safety fleet validates the fix before its next voyage." />
                        <TierCard tier={5} title="Charting the Unknown" icon={<CompassRoseIcon className="w-8 h-8"/>} objective="Manage existential risks from systems at or beyond human intelligence, ensuring provable control and global governance." applicability={["Experimental AGI prototypes", "Strategically-aware agentic systems", "Large-scale multi-agent ecosystems"]} measures={["Provably Robust Alignment", "Hardware & Network Failsafes", "AI-Assisted Oversight", "Global Governance Council"]} caseStudy="A consortium's AGI testbed is built with a non-negotiable 'Return to Port' command, formally verified to be unassailable. A global council of grand captains reviews all logs, ensuring this power is never turned against its creators." />
                    </div>
                </Section>

                {/* Getting Started */}
                <Section title="Setting Sail">
                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-300">
                        {[
                            "Take Your Bearings: Assess your current fleet of AI models and their capabilities.",
                            "Inspect the Rigging: Identify gaps in your current safety protocols against this charter.",
                            "Plot Your Course: Develop a clear roadmap to implement necessary safeguards.",
                            "Assemble Your Crew: Establish your own Captain's Council for governance.",
                            "Read the Stars: Define and monitor key safety metrics for every voyage.",
                            "Adjust the Sails: Continuously evolve the framework with new learnings and research."
                        ].map((step, index) => (
                             <div key={index} className="bg-gray-900/40 p-6 rounded-lg border border-gray-700/60 flex items-start space-x-4">
                                <div className="text-2xl font-bold text-teal-400/80 mt-1">{`0${index + 1}`}</div>
                                <p className="text-blue-200/90">{step}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Conclusion */}
                <footer className="text-center border-t border-blue-400/20 pt-16">
                    <h3 className="font-serif text-3xl font-bold text-white mb-4">An Unwavering Compass</h3>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        This Codex is more than a map; it is our solemn oath. It empowers us to explore the vast potential of AI with courage and conviction, knowing our course is true. By embracing these principles, we ensure that as our creations grow more powerful, our wisdom grows deeper, keeping the promise of technology firmly in the service of humanity.
                    </p>
                </footer>

            </main>
        </div>
    );
};

export default SafetyPage;