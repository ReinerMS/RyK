import Ornament from './Ornament'
import { siteData } from '../data/siteData'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-3xl text-center">
        <Ornament className="mb-6">
          <span className="text-sm tracking-[0.35em] uppercase text-gold">R&K</span>
        </Ornament>

        <h1 className="font-script text-6xl md:text-8xl leading-tight text-rose-700">
          {siteData.name}
        </h1>

        <p className="font-display italic text-2xl md:text-3xl mt-6 text-ink">
          {siteData.heroTagline}
        </p>

        <p className="mt-8 text-base md:text-lg font-light max-w-xl mx-auto leading-loose text-ink">
          {siteData.heroText}
        </p>

        <p className="font-script text-4xl md:text-5xl mt-10 text-rose-500">
          {siteData.heroSignature}
        </p>
      </div>
    </section>
  )
}
