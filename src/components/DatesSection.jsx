import Reveal from './Reveal'
import MilestoneCard from './MilestoneCard'
import { siteData } from '../data/siteData'

export default function DatesSection() {
  return (
    <section className="relative mx-auto max-w-2xl">
      <div className="timeline-rail" aria-hidden="true" />
      <div className="flex flex-col gap-10">
        {siteData.milestones.map((milestone) => (
          <Reveal key={milestone.id}>
            <MilestoneCard {...milestone} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
