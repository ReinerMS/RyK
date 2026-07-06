import Reveal from './Reveal'
import Ornament from './Ornament'
import { siteData } from '../data/siteData'

export default function Closing() {
  return (
    <section className="text-center py-24 px-6 relative">
      <Reveal>
        <Ornament className="mb-6" />
        <p className="font-script text-5xl md:text-6xl text-rose-700">
          {siteData.closingText}
        </p>
        <div className="mt-10 text-6xl">🌸</div>
      </Reveal>
    </section>
  )
}
