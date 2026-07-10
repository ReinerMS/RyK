import Reveal from './Reveal'
import Ornament from './Ornament'
import { siteData } from '../data/siteData'

export default function LetterSection() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 relative">
      <Reveal className="glass-card rounded-2xl p-10 md:p-14 shadow-sm">
        <Ornament className="mb-8">
          <span className="font-script text-xl sm:text-4xl text-rose-500">{siteData.letterTitle}</span>
        </Ornament>

        <div className="text-lg leading-10 text-center font-light text-ink">
          {siteData.letterParagraphs.map((paragraph, i) => (
            <p key={i} className={i > 0 ? 'mt-6' : ''}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="text-center mt-8 text-3xl">❤</div>
      </Reveal>
    </section>
  )
}
