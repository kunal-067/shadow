'use client'
import { Building, ChevronDown, Clock, Clock9, IndianRupee, LocateFixed, MapPin, Package, PackageCheck, PackageIcon, ParkingMeter, ShieldCheck, Truck } from 'lucide-react';
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
                <img src="/covers/e-com_bg.webp"
                    alt="Ecommerce & D2C"
                    className="absolute inset-0 w-full h-full object-cover" />

                {/* <!-- Overlay (optional, to improve text readability) --> */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* <!-- Content --> */}
                <div className="relative z-10 max-w-3xl text-white px-6 md:px-10">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">Ecommerce & D2C</h1>
                    <ul className="space-y-3 text-md md:text-lg">
                        <li>• Market Leader in Same Day Delivery Shipments</li>
                        <li>• Market Leader in Reverse Pick-up Shipments</li>
                        <li>• Customised Speed Shipping at Low Cost</li>
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
                        Shadowfax provides a range of delivery/courier services, from standard shipping to same day & next day delivery, tailored for D2C & E-commerce businesses. <br /> <br />
                        Our advanced logistics and technology ensure efficient routes, fast transit times, and excellent customer experiences.
                    </p>
                </div>

                <Image src="/covers/what_it_is_img.webp" alt="Ecommerce & D2C" width={500} height={300} className='rounded-lg object-cover' />
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
    { id: "reverse", label: "Reverse Parcel" },
    { id: "express", label: "Express Parcel" },
    { id: "prime", label: "Prime" },
    { id: "critical", label: "Critical Logistics" },
];


const content = {
    reverse: {
        title: "Reverse Parcel",
        img: "/covers/reverse_parcel_bg.webp", // replace with your image
        text: "As industry leaders in reverse logistics and return logistics, we provide thorough doorstep quality checks, quick refunds, seamless returns, and hassle-free exchanges.",
        highlights: [
            { text: "Faster Re-Inventorisation of Products", active: true },
            { text: "Return Transportation Via Air/Surface Transport", active: false },
            { text: "Easy Integration With Support", active: false },
        ],
        benefits: [
            { icon: ShieldCheck, text: "Fraud returns reduced by 50%" },
            { icon: Clock, text: "Same-day pickup for orders till 5 PM" },
            { icon: IndianRupee, text: "100% doorstep refund assurance" },
            { icon: PackageCheck, text: "Seamless returns with quality checks" },
        ]

    },
    express: {
        title: "Express Parcel",
        img: "/covers/ExpressParcel.webp",
        text: "We offer reliable, end-to-end forward delivery/courier services with a high success rate, meeting the fast-growing demands of E-commerce.",
        highlights: [
            { text: "Coverage across 14,300+ PIN codes", active: true },
            { text: "Return Transportation Via Air/Surface Transport", active: false },
            { text: "Easy Integration With Support", active: false },
        ],
        benefits: [
            { icon: ParkingMeter, text: "Coverage across 14,300+ PIN codes" },
            { icon: LocateFixed, text: "Pan-India presence across 2,200+ cities" },
            { icon: Clock9, text: "Best in class delivery and speed" },
        ]
    },
    prime: {
        title: "Prime",
        img: "https://via.placeholder.com/400x250",
        text: "Exclusive priority shipping designed for premium ecommerce and high-volume businesses.",
        highlights: [
            { text: "Faster Re-Inventorisation of Products", active: true },
            { text: "Return Transportation Via Air/Surface Transport", active: false },
            { text: "Easy Integration With Support", active: false },
        ],
        benefits: [
            { icon: ShieldCheck, text: "Fraud returns reduced by 50%" },
            { icon: Clock, text: "Same-day pickup for orders till 5 PM" },
            { icon: IndianRupee, text: "100% doorstep refund assurance" },
            { icon: PackageCheck, text: "Seamless returns with quality checks" },
        ]
    },
    critical: {
        title: "Critical Logistics",
        img: "https://via.placeholder.com/400x250",
        text: "Specialized logistics for urgent, sensitive, and high-value shipments with complete reliability.",
        highlights: [
            { text: "Faster Re-Inventorisation of Products", active: true },
            { text: "Return Transportation Via Air/Surface Transport", active: false },
            { text: "Easy Integration With Support", active: false },
        ],
        benefits: [
            { icon: ShieldCheck, text: "Fraud returns reduced by 50%" },
            { icon: Clock, text: "Same-day pickup for orders till 5 PM" },
            { icon: IndianRupee, text: "100% doorstep refund assurance" },
            { icon: PackageCheck, text: "Seamless returns with quality checks" },
        ]
    },
};

function ServicesTabs() {
    const [activeTab, setActiveTab] = useState("reverse");

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