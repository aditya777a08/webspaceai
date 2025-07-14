
import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold tracking-tight mt-20 mb-8 border-b border-gray-800 pb-4">{children}</h2>
);

const Subheading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="text-2xl font-semibold text-gray-100 mt-10 mb-4">{children}</h3>
);

const LevelCard: React.FC<{ level: number; title: string; objective: string; applicability: string[]; measures: string[]; caseStudy: string; }> = ({ level, title, objective, applicability, measures, caseStudy }) => (
    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl my-10 relative overflow-hidden transition-all duration-300 hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-900/10">
        <div className="absolute top-0 right-0 text-[12rem] font-extrabold text-white/5 -z-0 select-none -mt-4 -mr-4">{level}</div>
        <div className="p-8 relative z-10">
            <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center justify-center w-12 h-12 text-2xl font-bold rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/30">{level}</span>
                <h3 className="text-2xl font-bold text-white">{title}</h3>
            </div>
            <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-3">
                    <h4 className="font-semibold text-gray-200 mt-4 mb-3 text-lg">Objective</h4>
                    <p className="text-gray-400 leading-relaxed">{objective}</p>
                    <h4 className="font-semibold text-gray-200 mt-6 mb-3 text-lg">Applicability</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-2 pl-1">
                        {applicability.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
                <div className="md:col-span-2">
                    <h4 className="font-semibold text-gray-200 mt-4 mb-3 text-lg">Key Measures</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-2 pl-1">
                        {measures.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
            </div>
        </div>
        <div className="bg-black/20 backdrop-blur-sm p-8 border-t border-gray-800 mt-4">
            <h4 className="font-semibold text-gray-200 mb-2">Illustrative Case Study</h4>
            <p className="text-gray-400 leading-relaxed italic">{caseStudy}</p>
        </div>
    </div>
);


const SafetyPage: React.FC = () => {
    return (
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">The AI Safety Framework</h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    A comprehensive, scalable model for managing AI risks—designed to evolve alongside AI capabilities.
                </p>
            </div>

            <SectionTitle>Introduction</SectionTitle>
            <div className="text-gray-300 text-lg leading-relaxed space-y-6">
                <p>Artificial intelligence (AI) continues to transform industries, drive innovation, and reshape the way we live and work. From personalized recommendations on e‑commerce sites to sophisticated autonomous agents assisting with complex tasks, AI’s potential is vast. Yet, as capability grows, so too do risks—ranging from benign malfunctions to adversarial exploitation and, in the extreme, existential threats to humanity. Organizations that lead in AI development must therefore embrace a safety-first mindset, ensuring that every new model, tool, or deployment includes appropriate guardrails.</p>
                <p>This Five-Level AI Safety Framework offers a structured approach to scaling safety measures in lockstep with AI capabilities. Rather than a one-size-fits-all checklist, it provides explicit thresholds, layered safeguards, and governance processes that grow more rigorous as AI systems become more powerful. Whether you are launching a simple classifier, integrating a generative assistant into customer service, or developing near-human-level general-purpose models, this framework delivers clear guidance on what controls, monitoring, and oversight are required.</p>
            </div>
            
            <SectionTitle>Core Principles</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {[
                    { title: 'Capability‑Risk Alignment', text: 'Safety requirements scale with model capability.' },
                    { title: 'Clear Thresholds', text: 'Measurable triggers signal transitions to the next safety tier.' },
                    { title: 'Layered Safeguards', text: 'Combine technical, procedural, and organizational measures.' },
                    { title: 'Rigorous Evaluation', text: 'Formalize testing, including adversarial probes and red teaming.' },
                    { title: 'Accountable Governance', text: 'Establish oversight bodies to review and approve deployments.' },
                    { title: 'Continuous Monitoring', text: 'Deploy real‑time telemetry to track model behavior.' },
                    { title: 'Transparent Reporting', text: 'Document assessments, incidents, and mitigation steps.' },
                    { title: 'Research Integration', text: 'Stay current with AI safety research and incorporate it.' }
                ].map(p => (
                    <div key={p.title} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 transition-all duration-300 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10">
                        <h4 className="font-bold text-lg text-white mb-2">{p.title}</h4>
                        <p className="text-gray-400 text-sm">{p.text}</p>
                    </div>
                ))}
            </div>

            <SectionTitle>The Five Levels</SectionTitle>

            <LevelCard level={1} title="Foundational Safety" objective="Implement basic controls to prevent trivial failures and obvious misuse in narrow, low-impact systems." applicability={["Rule-based classification APIs", "Simple Q&A bots with closed knowledge bases", "Recommendation engines with limited scope"]} measures={["Input Validation & Output Constraints", "Access Controls & Authentication", "Unit Tests & Manual Reviews", "Documentation & Onboarding"]} caseStudy="A retail company deploys a Level 1 sentiment analysis API to filter customer reviews. By enforcing profanity filters, logging every API call, and limiting access to internal clients, the team prevents both malicious inputs and accidental leakage of user data." />
            <LevelCard level={2} title="Enhanced Safety for Interactive Systems" objective="Introduce moderate adversarial defenses and basic monitoring to address common risks in interactive, generative, or conversational applications." applicability={["Entry‑level chatbots with domain constraints", "Constrained virtual assistants", "Simple generative tools"]} measures={["Robust Filtering & Refusal Triggers", "Sandboxing & Anomaly Detection", "Basic Red Teaming", "Incident Response Planning"]} caseStudy="A financial services chatbot at Level 2 employs semantic detection to refuse queries requesting investment advice. All code snippets are sandboxed, and alerts notify security if anomalous resource consumption occurs. Basic red teaming uncovers a prompt bypass; the fix is rolled out within 48 hours." />
            <LevelCard level={3} title="Substantial Safety for Capable Systems" objective="Defend against sophisticated misuse, integrate human oversight for high‑stakes actions, and deepen adversarial resilience." applicability={["Advanced conversational agents", "Media and code generation tools", "Systems accessing external data"]} measures={["Constitutional‑Style Jailbreak Defenses", "Behavioral Monitoring", "Expert Red Teaming & Ethical Review", "Formal Safety Cases"]} caseStudy="A healthcare assistant at Level 3 provides medical literature summaries. Using a constitutional AI approach, it refuses requests for personalized diagnoses. An external panel of medical and AI safety experts reviews test logs and endorses the system’s safety case before it goes live." />
            <LevelCard level={4} title="Advanced Safety for Near‑Frontier Systems" objective="Anticipate and mitigate emergent behaviors in general‑purpose systems nearing human‑level performance." applicability={["Multi‑modal models (text, vision, audio)", "Large foundation models", "Experimental agentic systems"]} measures={["Scaled Constitutional AI & RLHF", "Mechanistic Interpretability", "External Expert Validation", "Regulatory Coordination"]} caseStudy="A lab's multimodal reasoning engine reaches near-human benchmarks. Mechanistic interpretability reveals potential corruption of planning circuits; predictive detectors flag these cases. After an external AI safety audit, the team updates RLHF policies and secures compliance certification." />
            <LevelCard level={5} title="AGI‑Level Safety" objective="Manage existential and systemic risks posed by systems at or beyond human intelligence—ensuring provable control and global governance." applicability={["Experimental AGI prototypes", "Agentic systems with strategic planning", "Large-scale multi‑agent ecosystems"]} measures={["Provably Robust Alignment", "Hardware & Network Failsafes", "AI‑Assisted Oversight", "Global Governance"]} caseStudy="A consortium collaborates on an AGI testbed. Formal methods verify the system cannot override shutdown commands. Red team exercises simulate strategic scenarios, revealing hidden incentives that are then mathematically neutralized. A global governance council reviews logs, ensuring transparency." />

            <SectionTitle>Getting Started</SectionTitle>
            <div className="text-gray-300 leading-relaxed space-y-4">
                 <ol className="custom-ol">
                    <li><strong>Capability Assessment:</strong> Catalog your AI projects and map each to the corresponding safety level.</li>
                    <li><strong>Gap Analysis:</strong> List required safety measures that are not yet implemented and prioritize them by risk.</li>
                    <li><strong>Roadmap Development:</strong> Create a timeline for implementing missing safeguards, starting with the highest-risk projects.</li>
                    <li><strong>Governance Structure:</strong> Establish safety review committees with clear roles, responsibilities, and decision-rights.</li>
                    <li><strong>Measurement & Monitoring:</strong> Build dashboards to track key safety metrics and set up alerting thresholds.</li>
                    <li><strong>Training & Culture:</strong> Educate all teams on the framework and foster a culture of “safety by design.”</li>
                    <li><strong>Iterate & Evolve:</strong> Review framework thresholds and measures quarterly, incorporating new safety research and lessons learned.</li>
                </ol>
            </div>
            
            <SectionTitle>Conclusion</SectionTitle>
             <div className="text-gray-300 text-lg leading-relaxed space-y-6">
                <p>The Five-Level AI Safety Framework empowers organizations to navigate the advancing frontier of AI responsibly. By aligning safety requirements with capability, establishing clear thresholds, layering complementary defenses, and embedding rigorous governance, teams can innovate at pace without sacrificing security or ethical integrity. From foundational safeguards for simple models to provably robust controls for AGI, this tiered approach fosters clarity, accountability, and resilience.</p>
                <p>Adopting the framework is not a one‑off project but an ongoing commitment—requiring continuous monitoring, regular audits, and a culture that embraces safety as a core priority. With this holistic model, organizations can harness the transformative potential of AI while safeguarding against its risks, ensuring that technological progress remains firmly in service of human well‑being.</p>
            </div>
        </main>
    );
};

export default SafetyPage;