import { JoinUsCard } from '@/components/admin/ActionCards';
import Image from 'next/image';
import React from 'react'

const DeliveryPage = () => {
    return (
        <div>

            <div className="p-4 md:p-8 md:px-20 mb-12">

                <section className='flex mb-12 justify-center gap-8 md:gap-16 items-center flex-col md:flex-row'>
                    <Image src="/Become_Shadowfax_Delivery Partner.webp" alt="Ecommerce & D2C" width={500} height={300} className='rounded-md object-cover md:w-3/4 h-auto' />


                    <div className='flex flex-col md:leading-12'>
                        <h2 className="text-3xl md:text-5xl font-medium mb-4">
                            Become a Delivery Partner: Register & Earn Now
                        </h2>
                        <p className='text-[18px] md:text-[24px] font-medium'>Earn up to ₹35,000/- every month</p>
                        <JoinUsCard text='Apply on the Shadowfax' className='text-[18px] p-4 px-6 mt-6' />
                    </div>

                </section>

                <div className='flex flex-col gap-28'>
                    <Steps keep={'left'} />

                    <Steps
                        index='02'
                        keep='right'
                        img={'/CompletetheDeliveryPartnerTraining.webp'}
                        heading={'Complete the Delivery Partner Training'}
                        text={'Get a training order to our nearest onboarding centre. Deliver it & complete your training.'}
                    />

                    <Steps
                        index={'03'}
                        keep={'left'}
                        img={'/StartEarningNow.webp'}
                        heading={'Start Earning Now!'}
                        text={'Choose your delivery slot, go online, receive your first order & get paid for every delivery.'}
                    />
                </div>
            </div>

        </div>
    )
}

export function Steps({ img, heading, text, index, keep }) {
    return (

        <div className='relative'>
            <div className="rounded-2xl px-12 flex flex-col md:flex-row items-center justify-between relative">

                {/* Left - Phone mockup */}
                <div className={`w-full  ${keep == 'right' ? 'hidden' : 'flex'} md:w-1/2 mb-6 md:mb-0`}>
                    <img
                        src={img || "/RegisterwiththeShadowfaxPartnerApp.webp"} // replace with your actual image path
                        alt="Shadowfax Partner App"
                        className="max-h-[500px] object-contain"
                    />
                </div>

                {/* Right - Text content */}
                <div className="w-full md:w-1/2 relative h-full">
                    {/* Step Badge */}
                    <div className={`absolute -top-24  ${keep == 'left' ? 'right-0' : 'left-0'} bg-teal-700 text-yellow-200 px-4 py-6 rounded-b-full font-bold text-lg`}>
                        {index || '01'}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                        {heading || 'Register with the Shadowfax Partner App'}
                    </h3>

                    <div className="bg-teal-50 p-6 rounded-lg shadow-sm">
                        <p className="text-gray-800 leading-relaxed">
                            {text || <>
                                Install the Shadowfax partner app. <br />
                                Upload your <span className="font-semibold">PAN</span> &{" "}
                                <span className="font-semibold">AADHAR</span> to get registered.</>}
                        </p>
                    </div>
                </div>

                <div className={`w-full md:w-1/2 ${keep == 'left' ? 'hidden' : 'flex'}  mb-6 md:mb-0 justify-end `}>
                    <img
                        src={img || "/RegisterwiththeShadowfaxPartnerApp.webp"} // replace with your actual image path
                        alt="Shadowfax Partner App"
                        className="max-h-[500px] object-contain"
                    />
                </div>

            </div>

            <div className='bg-yellow-100 h-2/3 -z-10 w-full absolute top-1/2 translate-y-[-50%]'>
            </div>


        </div>

    );
}


export default DeliveryPage