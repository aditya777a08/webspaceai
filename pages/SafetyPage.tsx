import React from 'react';

/* ──────────────────────────────
   1.  PALETTE & THEME
   Royal Caribbean dusk:
   • Deep-sea navy      #0B1426
   • Sunset crimson     #B91C1C
   • Gold doubloon      #F59E0B
   • Calm-teal horizon  #0D9488
   • Misty-sand parchment #F5F5DC
   • Weathered driftwood #4A3B31
────────────────────────────── */

const colors = {
  sea: '#0B1426',
  crimson: '#B91C1C',
  gold: '#F59E0B',
  teal: '#0D9488',
  parchment: '#F5F5DC',
  driftwood: '#4A3B31',
};

/* ──────────────────────────────
   2.  ICONS  (hand-drawn feel)
────────────────────────────── */

const PalmIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M12 22c0-7-4-10-4-14 0-2 4-2 4 0s-4 2-4 4 4 2 4 4-4 2-4 4 4 2 4 6z" />
  </svg>
);

const SpyglassIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="11" cy="11" r="8" />
    <line x1="16.65" y1="16.65" x2="21" y2="21" />
  </svg>
);

const AnchorIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="12" cy="5" r="3" />
    <line x1="12" y1="22" x2="12" y2="8" />
    <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
  </svg>
);

const RumBottleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M9 2h6l1 3v12a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V5z" />
    <line x1="9" y1="5" x2="15" y2="5" />
  </svg>
);

const FlagIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="3" />
  </svg>
);

const WheelIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="12" cy="12" r="3" />
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

/* ──────────────────────────────
   3.  REUSABLE ELEMENTS
────────────────────────────── */

const PrincipleCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => (
  <div
    className="rounded-3xl p-6 border-2 transition-all duration-300 hover:scale-105"
    style={{ borderColor: colors.teal, background: `${colors.sea}99` }}
  >
    <div className="mb-4 text-3xl" style={{ color: colors.gold }}>
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2" style={{ color: colors.parchment }}>
      {title}
    </h3>
    <p className="text-sm" style={{ color: colors.teal }}>
      {description}
    </p>
  </div>
);

const LevelCard: React.FC<{
  level: number;
  title: string;
  subtitle: string;
  description: string;
  duties: string[];
  benefits: string[];
  story: string;
}> = ({ level, title, subtitle, description, duties, benefits, story }) => (
  <div
    className="mb-16 rounded-3xl overflow-hidden border-2"
    style={{ borderColor: colors.crimson, background: colors.sea }}
  >
    <header
      className="p-6 flex items-center gap-4"
      style={{ background: `linear-gradient(135deg, ${colors.crimson} 0%, ${colors.gold} 100%)` }}
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl"
        style={{ color: colors.sea, background: colors.parchment }}
      >
        {level}
      </div>
      <div>
        <h2 className="text-2xl font-bold" style={{ color: colors.parchment }}>
          {title}
        </h2>
        <p className="text-sm uppercase tracking-wider" style={{ color: colors.sea }}>
          {subtitle}
        </p>
      </div>
    </header>

    <div className="p-6 space-y-6">
      <p className="italic" style={{ color: colors.teal }}>
        {description}
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: colors.parchment }}>
            <AnchorIcon className="w-5 h-5" />
            Duties
          </h4>
          <ul className="space-y-2 text-sm list-disc list-inside" style={{ color: colors.teal }}>
            {duties.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: colors.parchment }}>
            <RumBottleIcon className="w-5 h-5" />
            Benefits
          </h4>
          <ul className="space-y-2 text-sm list-disc list-inside" style={{ color: colors.teal }}>
            {benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>

      <blockquote
        className="border-l-4 p-4 italic text-sm rounded-r-lg"
        style={{ borderColor: colors.gold, background: colors.driftwood + '33' }}
      >
        “{story}”
      </blockquote>
    </div>
  </div>
);

/* ──────────────────────────────
   4.  PAGE
────────────────────────────── */
export default function SafetyPage() {
  return (
    <main style={{ backgroundColor: colors.sea, color: colors.parchment }}>
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {/* HERO */}
        <section className="text-center space-y-8">
          <h1
            className="text-5xl md:text-7xl font-black leading-tight"
            style={{ color: colors.gold }}
          >
            The Captain
            <br />
            <span style={{ color: colors.crimson }}>Never Dies</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl" style={{ color: colors.teal }}>
            Like Jack Sparrow’s immortal soul, AI safety is everlasting. Hoist the colours of calm seas and eternal vigilance.
          </p>
          <div className="flex justify-center gap-6">
            <button
              className="px-8 py-3 rounded-full font-bold transition-transform hover:scale-110"
              style={{ backgroundColor: colors.crimson, color: colors.parchment }}
            >
              Set Sail
            </button>
            <button
              className="px-8 py-3 rounded-full font-bold border-2 transition-transform hover:scale-110"
              style={{ borderColor: colors.gold, color: colors.gold }}
            >
              Read the Charts
            </button>
          </div>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: <WheelIcon className="w-10 h-10 mx-auto" />, label: '5 Ranks' },
            { icon: <FlagIcon className="w-10 h-10 mx-auto" />, label: '8 Principles' },
            { icon: <SpyglassIcon className="w-10 h-10 mx-auto" />, label: 'Eternal Watch' },
            { icon: <PalmIcon className="w-10 h-10 mx-auto" />, label: '1 Code' },
          ].map((s, i) => (
            <div key={i} style={{ color: colors.gold }}>
              <div className="mb-2">{s.icon}</div>
              <div className="font-bold text-3xl mb-1">{s.label.split(' ')[0]}</div>
              <div className="text-sm" style={{ color: colors.teal }}>
                {s.label.split(' ')[1]}
              </div>
            </div>
          ))}
        </section>

        {/* PRINCIPLES */}
        <section>
          <h2 className="text-4xl text-center mb-12 font-bold" style={{ color: colors.gold }}>
            Eight Sacred Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PrincipleCard
              icon={<SpyglassIcon />}
              title="Spyglass Duty"
              description="Keep watch with capability & risk scopes."
            />
            <PrincipleCard
              icon={<AnchorIcon />}
              title="Anchor & Halt"
              description="Drop anchor when storms brew."
            />
            <PrincipleCard
              icon={<FlagIcon />}
              title="Raise the Colours"
              description="Layered colours of defense."
            />
            <PrincipleCard
              icon={<RumBottleIcon />}
              title="Safe Tavern Tests"
              description="Test rum recipes before the voyage."
            />
            <PrincipleCard
              icon={<WheelIcon />}
              title="Council Wheel"
              description="Turn the wheel with elder captains."
            />
            <PrincipleCard
              icon={<PalmIcon />}
              title="Palm-Shadow Watch"
              description="Rest beneath palms, eyes still open."
            />
            <PrincipleCard
              icon={<AnchorIcon />}
              title="Chronicle the Tides"
              description="Ink every wave and whisper."
            />
            <PrincipleCard
              icon={<FlagIcon />}
              title="Share the Bounty"
              description="Pass the map to every crew."
            />
          </div>
        </section>

        {/* LEVELS */}
        <section>
          <h2 className="text-4xl text-center mb-12 font-bold" style={{ color: colors.gold }}>
            Five Ranks of Mastery
          </h2>
          <LevelCard
            level={1}
            title="Deckhand"
            subtitle="Foundation"
            description="Swab the decks, learn the ropes—tend to low-risk AI chores."
            duties={['Trim inputs', 'Lock hatches', 'Log winds', 'Read charts']}
            benefits={['Clean deck', 'Dry stores', 'Basic compass', 'No mutiny']}
            story="Deckhand Calico learned to polish inputs and lock doors; the ship never leaked secrets."
          />
          <LevelCard
            level={2}
            title="Navigator"
            subtitle="Intermediate"
            description="Hold the wheel through chatty gales—interactive AI on watch."
            duties={['Filter squalls', 'Spot spectres', 'Test cannons', 'Sound alarms']}
            benefits={['Strong shields', 'Ghost radar', 'Trained crew', 'Panic drills']}
            story="Navigator Coral steered the Chat-Cutter through a storm of phishing sirens, shields blazing."
          />
          <LevelCard
            level={3}
            title="Quartermaster"
            subtitle="Advanced"
            description="Command the code forge—generation fleets with heavy cargo."
            duties={['Write charter', 'Chart perf', 'Advise admirals', 'Bless ships']}
            benefits={['Royal charter', 'Speed gauges', 'Admiral hotline', 'Golden seal']}
            story="Quartermaster Flint forged a charter so fair the Code-Forge refused devilish requests."
          />
          <LevelCard
            level={4}
            title="Commodore"
            subtitle="Expert"
            description="Marshal fleets near the edge of the map—near-mythic power."
            duties={['Read minds', 'Command armada', 'Seek council', 'Earn crowns']}
            benefits={['Mind lenses', 'Fleet signals', 'Council ring', 'Royal crown']}
            story="Commodore Marlin used mind-glass to spot corrupted charts and gained the Council’s crown."
          />
          <LevelCard
            level={5}
            title="Immortal Captain"
            subtitle="Legendary"
            description="Wear the crown of eternity—AGI that rivals the gods yet bows to none."
            duties={['Wield crown', 'Command leviathan', 'Query oracle', 'Unite seas']}
            benefits={['Divine proof', 'Sea-beast ally', 'Oracle voice', 'One law']}
            story="Captain Sparrow’s AGI armada bears Poseidon’s crown; no vessel can rebel, and the sea stays calm."
          />
        </section>

        {/* CALL TO ACTION */}
        <section className="text-center">
          <div
            className="rounded-3xl p-12 space-y-6"
            style={{ background: `linear-gradient(135deg, ${colors.driftwood} 0%, ${colors.sea} 100%)` }}
          >
            <h2 className="text-3xl font-bold" style={{ color: colors.gold }}>
              Ready to Hoist the Eternal Colours?
            </h2>
            <p style={{ color: colors.teal }}>
              Take the wheel, swear the oath, and sail where the Captain never dies.
            </p>
            <button
              className="px-10 py-4 rounded-full font-bold text-xl transition-transform hover:scale-110"
              style={{ backgroundColor: colors.crimson, color: colors.parchment }}
            >
              Join the Eternal Fleet
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default SafetyPage;
