import Reveal from '../components/Reveal'
import Ornament from '../components/Ornament'
import BirthdayCard from '../components/BirthdayCard'
import ChildBirthdayCard from '../components/ChildBirthdayCard'
import FamilyTree from '../components/FamilyTree'
import { siteData } from '../data/siteData'
import { familyTree } from '../data/siteBirthDayUsers'

export default function Cumpleanos() {
  const { reiner, kari, child } = siteData.birthdays

  return (
    <div className="mx-auto max-w-4xl">
      <Reveal className="mb-14 text-center" as="header">
        <span className="page-eyebrow">Nuestros años</span>
        <h1 className="page-title">Cumpleaños</h1>
        <p className="page-subtitle">Cada vuelta al sol, un motivo más para celebrar.</p>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        <Reveal as="div">
          <BirthdayCard name={reiner.name} date={reiner.date} accent={reiner.accent} />
        </Reveal>
        <Reveal as="div">
          <BirthdayCard name={kari.name} date={kari.date} accent={kari.accent} />
        </Reveal>
      </div>

      <Reveal className="mt-16" as="section">
        <Ornament className="mb-10">
          <span className="font-script text-2xl text-gold">Nuestro árbol</span>
        </Ornament>
        <div className="grid gap-8 sm:grid-cols-2">
          <FamilyTree title="Familia de Reiner" accent="reiner" units={familyTree.reiner} />
          <FamilyTree title="Familia de Kari" accent="kari" units={familyTree.kari} />
        </div>
      </Reveal>

      <Reveal className="mt-16" as="section">
        <Ornament className="mb-8">
          <span className="font-script text-2xl text-gold">Y quizás, pronto</span>
        </Ornament>
        <div className="mx-auto max-w-sm">
          <ChildBirthdayCard name={child.name} date={child.date} />
        </div>
      </Reveal>
    </div>
  )
}
