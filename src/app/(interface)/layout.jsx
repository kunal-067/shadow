import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <NavBar/>
        <main className='min-w-full'>
            {children}  
            </main>
        <Footer/>
    </div>
  )
}

export default Layout