import Footer from '@/components/CustomComponents/Footer/Footer'
import Home from './components/CustomComponents/Home/Home'
import HeaderFull from './components/CustomComponents/Navbar/HeaderFull'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Services from './components/CustomComponents/Services/Services'
import ServicesTemplate from './components/CustomComponents/Services/ServicesComponents/ServicesTemplate'

const App = () => {

  const router = createBrowserRouter([

    {
      path:'/',
      element: <MainLayout />,
      children: [
        {
          path:"/",
          element: <Home />
        },

        {
          path:"/Services",
          element: <Services />
        },

        {
          path:"/Services/:service",
          element: <ServicesTemplate />
        }
      ]
    }
  ])


  return (

      <RouterProvider router={router}/>
      
  )
}

export default App
