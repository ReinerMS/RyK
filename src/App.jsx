import Hero from './components/Hero'
import DatesSection from './components/DatesSection'
import LetterSection from './components/LetterSection'
import Closing from './components/Closing'
import TravelsSection from './components/TravelsSection'
import FallingPetals from './components/FallingPetals'
import ScrollDownArrow from './components/ScrollDownArrow'

export default function App() {
  return (
    <>
      <FallingPetals />
      <ScrollDownArrow />
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
