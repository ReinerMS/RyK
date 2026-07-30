import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import AmbientParticles from './AmbientParticles'

export default function HeaderLayout() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const linkClass = ({ isActive }) =>
    `nav-link ${isActive ? 'nav-link-active' : ''}`

  return (
    <div className="min-h-screen">
      <AmbientParticles />

      {/* Header fijo */}
      <header className="site-header fixed top-0 left-0 z-50 flex w-full items-center justify-between px-[6%] py-4">
        <NavLink
          to="/"
          onClick={closeMenu}
          className="nav-logo z-50 text-lg sm:text-xl uppercase"
        >
          R&K
        </NavLink>

        {/* Botón hamburguesa (móvil) */}
        <button
          onClick={toggleMenu}
          className="z-50 p-2 focus:outline-none md:hidden"
          aria-label="Abrir menú"
        >
          <div className="relative flex h-5 w-6 flex-col items-center justify-between">
            <span className={`nav-burger-line h-0.5 w-full origin-left rounded transition-transform duration-300 ${isOpen ? 'translate-x-0.5 rotate-45' : ''}`} />
            <span className={`nav-burger-line h-0.5 w-full rounded transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`nav-burger-line h-0.5 w-full origin-left rounded transition-transform duration-300 ${isOpen ? '-translate-x-0.5 -rotate-45' : ''}`} />
          </div>
        </button>

        {/* Navegación */}
        <nav className={`
          nav-mobile-panel fixed inset-0 top-0 left-0 flex h-screen w-full flex-col items-center justify-center gap-8 transition-all duration-300
          md:static md:h-auto md:w-auto md:flex-row md:gap-10 md:bg-transparent md:backdrop-blur-none
          ${isOpen ? 'visible opacity-100' : 'invisible opacity-0 md:visible md:opacity-100'}
        `}>
          <NavLink to="/" onClick={closeMenu} className={linkClass}>
            Inicio
          </NavLink>
          <NavLink to="/citas" onClick={closeMenu} className={linkClass}>
            Hitos
          </NavLink>
          <NavLink to="/viajes" onClick={closeMenu} className={linkClass}>
            Viajes
          </NavLink>
          <NavLink to="/cumpleanos" onClick={closeMenu} className={linkClass}>
            Cumpleaños
          </NavLink>
          <NavLink to="/videos" onClick={closeMenu} className={linkClass}>
            Videos
          </NavLink>
        </nav>
      </header>

      {/* Contenedor de las páginas */}
      <main className="relative px-[4%] pt-24 pb-12">
        <Outlet />
      </main>
    </div>
  )
}
