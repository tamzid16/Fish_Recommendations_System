import { ArrowRight, Fish, Leaf, Waves, ShieldCheck, Sparkles } from 'lucide-react'
import RecommendationForm from './components/RecommendationForm'

const highlights = [
  { icon: Fish, title: 'Purpose-aware matching', description: 'Explore species for food production, aquaculture or aquarium care.', tone: 'mint' },
  { icon: Waves, title: 'Habitat compatibility', description: 'Compare freshwater, saltwater and brackish environments.', tone: 'blue' },
  { icon: Leaf, title: 'Sustainability in view', description: 'Use species sustainability scores as one part of your decision.', tone: 'amber' },
]

export default function Home() {
  return (
    <div className="dashboard">
      <section className="dashboard-hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> SMART AQUATIC DISCOVERY</div>
          <h2>Find the right fish<br /><span>for your environment.</span></h2>
          <p className="hero-description">A practical starting point for choosing fish based on habitat, intended use and care conditions.</p>
          <div className="hero-tags">
            <span><ShieldCheck size={15} /> Preference-based</span>
            <span><Leaf size={15} /> Sustainability-aware</span>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-glow" />
          <div className="art-fish"><Fish size={118} strokeWidth={1.15} /></div>
          <div className="art-bubble bubble-one" />
          <div className="art-bubble bubble-two" />
          <div className="art-bubble bubble-three" />
          <div className="art-caption"><span className="caption-mark"><Waves size={16} /></span><span><strong>Better-fit choices</strong><small>Start with your conditions</small></span></div>
        </div>
      </section>

      <section className="dashboard-content">
        <div className="section-heading">
          <div><p className="section-kicker">PERSONALISE YOUR SEARCH</p><h3>Build your fish profile</h3></div>
          <p className="section-note">A few details help narrow down suitable species.</p>
        </div>
        <div className="recommendation-layout">
          <div className="form-panel">
            <div className="panel-heading"><span className="panel-icon"><Sparkles size={18} /></span><div><h4>Recommendation criteria</h4><p>Tell us about your intended use and water conditions.</p></div></div>
            <RecommendationForm />
          </div>
          <aside className="insight-column">
            <div className="insight-intro"><span className="insight-label">HOW IT HELPS</span><h4>Make a more informed choice.</h4><p>Recommendations are ranked against your selected criteria and the information available in the species dataset.</p></div>
            {highlights.map(({ icon: Icon, title, description, tone }) => (
              <div className="highlight-card" key={title}><span className={`highlight-icon ${tone}`}><Icon size={19} /></span><div><h5>{title}</h5><p>{description}</p></div></div>
            ))}
            <div className="aside-footnote"><span className="footnote-line" /><p>Use recommendations as a starting point. Confirm local regulations and species-specific care requirements before making a decision.</p></div>
          </aside>
        </div>
      </section>
      <div className="dashboard-bottom"><span>Designed for thoughtful aquatic decisions</span><span>Explore <ArrowRight size={14} /></span></div>
    </div>
  )
}
