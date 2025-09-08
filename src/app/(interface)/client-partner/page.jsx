import { JoinUsCard } from '@/components/admin/ActionCards'
import ContactForm from '@/components/Contact'
import Image from 'next/image'
import React from 'react'
import { LogoMarquee } from '../home/page'

const ClientPartner = () => {
    return (
        <div>

            <div className="p-4 md:p-8 md:px-20 mb-12">

                <section className='flex mb-12 justify-center gap-8 md:gap-16 items-center flex-col md:flex-row'>

                    <div className='flex flex-col'>
                        <h2 className="text-3xl md:text-6xl font-medium mb-8 border-l-4 border-green-600 pl-4">
                            Apply To Become A Client Partner
                        </h2>
                    </div>


                    <Image src="/Shadowfax_Client_Partner.webp" alt="Ecommerce & D2C" width={500} height={300} className='rounded-md object-cover h-[450px] w-auto' />
                </section>

                <ContactForm />
            </div>

        </div>
    )
}

export default ClientPartner