import Reveal from './Reveal'
import MilestoneCard from './MilestoneCard'
import { siteData } from '../data/siteData'

export default function DatesSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 relative">
      <div className="grid md:grid-cols-2 gap-8">
        {siteData.milestones.map((milestone) => (
          <Reveal key={milestone.id}>
            <MilestoneCard {...milestone} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
