import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Citas from '../pages/Citas'
import Viajes from '../pages/Viajes'
import Videos from '../pages/Videos'
import HeaderLayout from '../components/HeaderLayout' // Crearemos este layout ahora

export const router = createBrowserRouter(
  [
    {
      // Usamos un Layout global para que el Header aparezca en TODAS las páginas
      element: <HeaderLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/citas', element: <Citas /> },
        { path: '/viajes', element: <Viajes /> },
        { path: '/videos', element: <Videos /> },
      ],
    },
  ],
  {
    basename: '/RyK',
  }
)