import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
