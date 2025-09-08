'use client'
import { ArrowBigDown, Building, ChevronDown, Clock, Clock9, FileChartPieIcon, IndianRupee, LocateFixed, MapPin, Package, PackageCheck, PackageIcon, ParkingMeter, PersonStanding, Settings, ShieldCheck, Truck, Wallet } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Testimonials from '@/components/Testimonial';
import ContactForm from '@/components/Contact';

const D2cPage = () => {
    return (
        <>
            <section className="relative h-[500px] flex items-center">
                <img src="/covers/Hyperlocalandquickcommerce.webp"
                    alt="Ecommerce & D2C"
                    className="absolute inset-0 w-full h-full object-cover" />

                {/* <!-- Overlay (optional, to improve text readability) --> */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* <!-- Content --> */}
                <div className="relative z-10 max-w-3xl text-white px-6 md:px-10">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">Hyperlocal &
Quick Commerce</h1>
                    <ul className="space-y-3 text-md md:text-lg">
                        <li>• Market Leader in 3PL Quick Commerce Solutions</li>
                        <li>• 10-minute Grocery Delivery to 60-minute Food and Pharma Services</li>
                        <li>• Electrify Your Fleet with Our EV Solutions</li>
                    </ul>
                    <button className="mt-6 bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-yellow-500 transition">
                        Sign Up Now →
                    </button>
                </div>
            </section>

            <div className='my-12 px-6 md:px-12'>
                <StatsSection />
            </div>
            <section className='flex justify-center gap-8 md:gap-16 items-center flex-col md:flex-row p-4 md:p-8'>
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 border-l-4 border-green-600 pl-4">
                        What it is ?
                    </h2>
                    <p className='text-lg md:text-xl text-gray-700 max-w-2xl mb-6'>
                        Our cost-effective and convenient courier services deliver in 10 minutes to 2 hours, depending on distance, helping you think ahead with rapid same-day and next-day delivery for food, pharma, and grocery orders.
                    </p>
                </div>

                <Image src="/covers/HYPERLOCAL_what_it_is.webp" alt="Ecommerce & D2C" width={500} height={300} className='rounded-lg object-cover' />
            </section>

            <ServicesTabs />
        </>
    )
}

function StatsSection() {
    const stats = [
        {
            icon: <Package size={40} strokeWidth={1.5} />,
            value: "1 Billion+",
            label: "PARCELS DELIVERED",
        },
        {
            icon: <Building size={40} strokeWidth={1.5} />,
            value: "2,200+",
            label: "CITY PRESENCE",
        },
        {
            icon: <MapPin size={40} strokeWidth={1.5} />,
            value: "14,300+",
            label: "PIN CODE COVERAGE",
        },
        {
            icon: <Truck size={40} strokeWidth={1.5} />,
            value: "2,500",
            label: "TRUCKS RUNNING DAILY",
        },
    ];

    return (
        <div className="w-full bg-yellow-100 rounded-2xl py-10 px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center space-y-3">
                        <div className="text-black">{stat.icon}</div>
                        <h3 className="text-2xl font-bold text-black">{stat.value}</h3>
                        <p className="text-sm uppercase tracking-wide text-gray-700">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}


const tabs = [
    { id: "quick", label: "Quick Commerce" },
    { id: "hyperlocal", label: "Hyperlocal" },
    { id: "electric", label: "Electric Vehicle Fleet" },
]


const content = {
    quick: {
        title: "Quick Commerce",
        img: "/covers/quick commerce.webp", // replace with your image
        text: "Ensure your dark store or retail outlet is ready for delivery/courier services with our dedicated manpower and fleet management, utilizing our network of huge delivery partners.",
        highlights: [
            { text: "Flexible Shifts: 2 to 12 Hours", active: true },
            { text: "Automatic Manpower Refill", active: false },
            { text: "Dedicated Fleet Manager", active: false },
        ],
        benefits: [
            { icon: PersonStanding, text: "Over 90% adherence to the manpower plan" },
            { icon: Wallet, text: "20% fleet on short shifts (<6 hours), saving costs" },
            { icon: FileChartPieIcon, text: "100% KYC verified and skilled fleet" },
        ]

    },
    hyperlocal: {
        title: "Hyperlocal",
        img: "/covers/hyperlocal (1).webp",
        text: "Enjoy low-cost and convenient delivery/courier services, completed in as little as 10 min to 2 hours depending on the distance. Perfect for same day & next day delivery of food, pharma, and grocery orders.",
        highlights: [
            { text: "Real-time Serviceability Check", active: true },
            { text: "Variable Cost Of Delivery", active: false },
            { text: "Trained & Verified Fleet", active: false },
        ],
        benefits: [
            { icon: MapPin, text: "Extensive coverage in 100+ cities" },
            { icon: Clock, text: "98% adherence to customer promised time" },
            { icon: ArrowBigDown, text: "Lowest cost to deliver" },
        ]
    },
    electric: {
        title: "Electric Vehicle Fleet",
        img: "/covers/Electric Vehicle fleet Step 3.webp",
        text: "Boost your operations with our eco-friendly EV fleet! Our green scooters and vans, driven by dedicated executives, provide sustainable transport solutions for all your business needs, including same day & next day delivery.",
        highlights: [
            { text: "End to End Management of: Vehicle Fleet + Man Power", active: true },
            { text: "EV Tracking & Safety", active: false },
            { text: "EV Replacement", active: false },
        ],
        benefits: [
            { icon: Settings, text: "0% maintenance & fuel charge" },
            { icon: ArrowBigDown, text: "10% to 15% delivery cost reduction" },
            { icon: FileChartPieIcon, text: "100% KYC verified and skill trained fleet" },
        ]
    },

};

function ServicesTabs() {
    const [activeTab, setActiveTab] = useState("quick");

    return (
        <div className="w-full">
            {/* Tabs */}
            <div className="hidden md:flex justify-center border-b">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-3 text-lg font-medium transition ${activeTab === tab.id
                            ? "text-teal-600 border-b-2 border-teal-600"
                            : "text-gray-600 hover:text-teal-600"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="bg-teal-100 rounded-lg p-6 pb-12 md:p-8 mt-6">
                
            {/* sm screen tab  */}
            <Collapsible className="md:hidden mt-4 font-medium text-[16px] mb-6">
                <div onClick={() => setActiveTab(tabs[0].id)} className='flex justify-between p-4 bg-white'>{tabs[0].label}<CollapsibleTrigger asChild><ChevronDown /></CollapsibleTrigger></div>
                <CollapsibleContent>
                <div className='flex flex-col gap-2 mt-2'>
                    {
                        tabs.map((tab, i) => (
                            <div onClick={() => setActiveTab(tab.id)} key={tab.id} className={`${i==0?'hidden':'flex'} bg-white p-4 hover:bg-gray-400`}>
                                {tab.label}
                            </div>))
                    }
                    </div>
                </CollapsibleContent>
            </Collapsible>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center md:p-4">
                    <img
                        src={content[activeTab].img}
                        alt={content[activeTab].title}
                        className="rounded-lg shadow-md"
                    />
                    <div>
                        <h2 className="text-2xl md:text-5xl font-bold border-l-3 border-green-600 pl-4 text-gray-800 mb-4">
                            {content[activeTab].title}
                        </h2>
                        <p className="text-gray-700 md:text-xl leading-relaxed">
                            {content[activeTab].text}
                        </p>
                    </div>
                </div>

                {/* Highlights */}
                <h2 className="text-2xl font-medium mb-6 text-gray-800 border-l-2 border-green-600 md:pl-4 pl-2 md:text-4xl my-4 mt-6 md:my-8">Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {content[activeTab]?.highlights.map((item, idx) => (
                        <div
                            key={idx}
                            className={`flex justify-center items-center md:h-40 p-6 rounded-xl shadow-md text-center text-[18px] md:text-[21px] font-medium transition ${item.active
                                ? "bg-yellow-300 text-gray-900"
                                : "bg-white text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            {item.text}
                        </div>
                    ))}
                </div>

                {/* Benefits */}
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    What are the benefits?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {content[activeTab]?.benefits.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                            <item.icon className="text-teal-600 w-8 h-8" />
                            <p className="text-gray-700 font-medium">{item.text}</p>
                        </div>
                    ))}
                </div>


            </div>

            <Testimonials/>
            <div className='px-4 md:px-24 mb-16'>
            <ContactForm/>
            </div>
        </div>
    );
}


export default D2cPage