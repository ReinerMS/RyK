import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Citas from '../pages/Citas'
import Viajes from '../pages/Viajes'
import Videos from '../pages/Videos'
import HeaderLayout from '../components/HeaderLayout'
import NotFound from '../pages/NotFound'

export const router = createBrowserRouter(
  [
    {
      element: <HeaderLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/citas', element: <Citas /> },
        { path: '/viajes', element: <Viajes /> },
        { path: '/videos', element: <Videos /> },
        { path: '*', element: <NotFound /> }, // 👈 va aquí dentro, como hijo del layout
      ],
    },
  ],
  {
    basename: '/RyK', // 👈 esto va en el segundo argumento (objeto de opciones)
  }
)