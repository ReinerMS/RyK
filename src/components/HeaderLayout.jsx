import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HeaderLayout() {
  const [isOpen, setIsOpen] = useState(false)

  // Clase base para los enlaces del menú
  const linkBaseClass = "relative py-2 text-sm font-medium tracking-wide text-white/70 transition-colors duration-300 hover:text-white md:after:absolute md:after:bottom-0 md:after:left-0 md:after:h-[2px] md:after:w-0 md:after:bg-gradient-to-r md:after:from-[#ff758c] md:after:to-[#ff7eb3] md:after:transition-[width] md:after:duration-300 hover:after:w-full"
  
  // Clase que se añade cuando el enlace está seleccionado
  const linkActiveClass = "text-white font-semibold md:after:w-full md:after:bg-gradient-to-r md:after:from-[#ff7eb3] md:after:to-red-500"

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="min-h-screen">
      {/* Header Fijo */}
      <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-[#0f0f0f]/85 px-[6%] py-4 shadow-xl backdrop-blur-md">
        
        {/* Logo */}
        <div className="text-xl font-bold tracking-widest z-50">
          <NavLink to="/" onClick={closeMenu} className="bg-linear-to-r from-[#ff758c] to-[#ff7eb3] bg-clip-text text-transparent">
           R&K
          </NavLink>
        </div>
        
        {/* Botón Hamburguesa (Solo móvil) */}
        <button 
          onClick={toggleMenu}
          className="text-white focus:outline-none md:hidden z-50 p-2"
          aria-label="Toggle Menu"
        >
          <div className="relative w-6 h-5 flex flex-col justify-between items-center">
            <span className={`h-0.5 w-full bg-white rounded transition-transform duration-300 origin-left ${isOpen ? 'rotate-45 translate-x-0.5' : ''}`} />
            <span className={`h-0.5 w-full bg-white rounded transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-white rounded transition-transform duration-300 origin-left ${isOpen ? '-rotate-45 translate-x-0.5' : ''}`} />
          </div>
        </button>
        
        {/* Navegación (Escritorio + Móvil Desplegable) */}
        <nav className={`
          fixed inset-0 top-0 left-0 h-screen w-full flex flex-col items-center justify-center gap-8 bg-[#0f0f0f]/95 transition-all duration-300 backdrop-blur-lg
          md:static md:h-auto md:w-auto md:flex-row md:bg-transparent md:backdrop-blur-none
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'}
        `}>
          <NavLink 
            to="/" 
            onClick={closeMenu}
            className={({ isActive }) => `${linkBaseClass} ${isActive ? linkActiveClass : ''}`}
          >
            Inicio
          </NavLink>
          
          <NavLink 
            to="/citas" 
            onClick={closeMenu}
            className={({ isActive }) => `${linkBaseClass} ${isActive ? linkActiveClass : ''}`}
          >
            Hitos
          </NavLink>
          
          <NavLink 
            to="/viajes" 
            onClick={closeMenu}
            className={({ isActive }) => `${linkBaseClass} ${isActive ? linkActiveClass : ''}`}
          >
            Viajes
          </NavLink>
          
          <NavLink 
            to="/videos" 
            onClick={closeMenu}
            className={({ isActive }) => `${linkBaseClass} ${isActive ? linkActiveClass : ''}`}
          >
            Videos
          </NavLink>
        </nav>
      </header>

      {/* Contenedor de las páginas */}
      <main className="pt-24 px-[4%] pb-12">
        <Outlet />
      </main>
    </div>
  )
}