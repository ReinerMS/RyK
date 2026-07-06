import VineRail from './components/VineRail'
import Hero from './components/Hero'
import DatesSection from './components/DatesSection'
import LetterSection from './components/LetterSection'
import Closing from './components/Closing'
import TravelsSection from './components/TravelsSection'

export default function App() {
  return (
    <>
      <VineRail />
      <div className="relative z-10">
        <Hero />
        <DatesSection />
        <TravelsSection />
        <LetterSection />
        <Closing />
      </div>
    </>
  )
}
