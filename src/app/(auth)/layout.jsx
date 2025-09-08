import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import React from 'react'

function Layout({ children }) {
    return (
        <>
            <NavBar />
            <main className='min-w-full'>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout