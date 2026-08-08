import Footer from '@/components/CustomComponents/Footer/Footer'
import HeaderFull from '@/components/CustomComponents/Navbar/HeaderFull'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
        <HeaderFull />

        <Outlet />

        <Footer />
    </>
  )
}

export default MainLayout