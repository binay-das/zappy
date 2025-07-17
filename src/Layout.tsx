import { Outlet } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function Layout() {
  return (
    <div>
      <Header />
      <Outlet /> {/* This is where Home, Contact, or NoPage will render */}
      <Footer />
    </div>
  )
}

export default Layout;
