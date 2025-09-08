// app/components/DeliveryHero.tsx
"use client";

import { JoinUsCard } from "@/components/admin/ActionCards";
import Blogs from "@/components/Blogs";
import ContactForm from "@/components/Contact";
import Services from "@/components/Services";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Alert Banner */}
      <div className="overflow-hidden whitespace-nowrap bg-yellow-50">
        <div className="flex word-space animate-marquee text-[#323131] font-[600] text-[16px] py-4 px-4">
          <span className="mr-26"><span className="font-bold mr-3 text-black">Weather Alert:</span>
            Due to heavy rains in Telangana, Andhra Pradesh, Kerala & Maharashtra, some deliveries may be delayed. Thank you for your patience and support. For the list of impacted areas,
            <Link href="#" className="underline text-blue-700 ml-2">click here</Link>.
          </span>
          <span><span className="font-bold mr-3 text-black">Weather Alert:</span>
            Due to heavy rains in Telangana, Andhra Pradesh, Kerala & Maharashtra, some deliveries may be delayed. Thank you for your patience and support. For the list of impacted areas,
            <Link href="#" className="underline text-blue-700 ml-2">click here</Link>.
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="flex bg-[url('/HomePage_baneer_Option.webp')] md:bg-[url('/hero_1_bg.webp')] bg-center bg-cover bg-no-repeat flex-col md:flex-row items-center justify-between px-6 py-12 md:px-16 md:py-28 bg-gradient-to-r from-black/90 to-black/70 relative">
        {/* Left Content */}
        <div className="lg:w-1/2 text-white">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
            India&apos;s Trusted Partner For <br />
            <span className="text-yellow-400">Speed and Reliable Delivery</span>
          </h1>
          <p className="mt-4 text-md sm:text-lg text-gray-300">
            Your trusted partner for express parcels, returns, same-day,
            next-day, 30-min delivery, and fulfillment solutions.
          </p>

          <button className="md:hidden mt-6 bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300">
            Get In Touch
          </button>

          {/* Tracking Form */}
          <div className="mt-6 py-6 sm:p-4 md:p-9 flex flex-col md:flex-row md:bg-white rounded-4xl overflow-hidden w-full">
            <input
              type="text"
              placeholder="AWB Number"
              className="px-4 py-3 w-full bg-white text-gray-800 border-slate-200 border-[2px] rounded-md mr-6"
            />
            <button className="bg-yellow-300 px-6 py-3 mt-2 md:mt-0 inline-block whitespace-nowrap rounded-md text-black font-semibold hover:bg-yellow-300">
              Track Shipment →
            </button>
          </div>
        </div>
      </section>

      {/* bottom hero */}
      <section className="py-12">
        {/* Top Title */}
        <h2 className="text-center text-2xl md:text-4xl font-semibold text-gray-800 mb-12">
          Fast. Flexible. Future-Ready.
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 text-center px-6 md:px-16">
          <div>
            <div className="flex justify-center mb-2">
              <Image src="/icons/parcels.webp" alt="Parcels" width={60} height={60} className=" size-[40px] lg:size-[60px]" />
            </div>
            <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900">1 Billion+</h3>
            <p className="text-gray-600 text-[12px] lg:text-sm mt-1 lg:mt-2">PARCELS DELIVERED</p>
          </div>

          <div>
            <div className="flex justify-center mb-2">
              <Image src="/icons/centres.webp" alt="Space" width={60} height={60} className=" size-[40px] lg:size-[60px]" />
            </div>
            <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900">2.5 Million+</h3>
            <p className="text-gray-600 text-[12px] lg:text-sm mt-1 lg:mt-2">SQ. FT. OF OPERATIONAL SPACE</p>
          </div>

          <div>
            <div className="flex justify-center mb-2">
              <Image src="/icons/trucks.webp" alt="Trucks" width={60} height={60} className=" size-[40px] lg:size-[60px]" />
            </div>
            <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900">2,500+</h3>
            <p className="text-gray-600 text-[12px] lg:text-sm mt-1 lg:mt-2">TRUCKS</p>
          </div>

          <div>
            <div className="flex justify-center mb-2">
              <Image src="/icons/pincodes.webp" alt="Pin Codes" width={60} height={60} className=" size-[40px] lg:size-[60px]" />
            </div>
            <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900">14,300+</h3>
            <p className="text-gray-600 text-[12px] lg:text-sm mt-1 lg:mt-2">PIN CODES</p>
          </div>

          <div className="col-span-2 md:col-span-1 ">
            <div className="flex justify-center mb-2">
              <Image src="/icons/sellers.webp" alt="Partners" width={60} height={60} className=" size-[40px] lg:size-[60px]" />
            </div>
            <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900">1.40 Lakh+</h3>
            <p className="text-gray-600 text-[12px] lg:text-sm mt-1 lg:mt-2">QUARTERLY DELIVERY PARTNERS</p>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-16 bg-green-100 py-12 px-6 md:px-16 text-center">
          <h3 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-8">Trusted By</h3>
          <LogoMarquee />
        </div>
      </section>

      <Services />

      <section className="px-4 md:px-24 py-8">
        <h3 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-2 text-center">Our Key Solutions</h3>
        <p className='text-center text-[16px] md:text-xl font-light mb-4 opacity-70'>For D2Cs, large marketplaces, small businesses and more</p>
        <img src={'/key_solutions.webp'} width={100} height={100} className="w-full h-auto" alt='img' />
      </section>

      <Services2 />
      <Blogs />
      <div className='px-4 md:px-24 mb-16'>
        <ContactForm />
      </div>


    </>
  );
}


const logos = [
  { src: "/icons/Purplle.webp", alt: "Purplle" },
  { src: "/icons/Uber.webp", alt: "Uber" },
  { src: "/icons/nykaa.webp", alt: "Nykaa" },
  { src: "/icons/Flipkart.webp", alt: "Flipkart" },
  { src: "/icons/ONDC.webp", alt: "Meesho" },
  { src: "/icons/Magicpin.webp", alt: "Magicpin" },
  { src: "/icons/Mokobara.webp", alt: "Mokobara" },
];
export function LogoMarquee() {
  return (
    <div className="overflow-hidden w-full">
      <div className="animate-marquee flex gap-6 md:gap-14">
        {[...Array(2)].map((_, i) => (
          <div key={i} className={`flex gap-8 items-center ${i == 1 ? "ml-240" : ""}`}>
            {logos.map((logo, idx) => (
              <Image
                key={i + "-" + idx}
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={80}
                className="h-[40px] w-[85px] md:h-[80px] md:w-[140px]"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}


const services2 = [
  { title: "Shadowfax Maps", img: "/shadowfax_maps.webp", description: "Our AI-driven mapping system identifies address errors, ensuring accurate geocodes and optimizing the path for our delivery and courier services. This precision reduces cancellations and ensures on-time delivery." },
  { title: "Shadowfax Shield", img: "/shadowfax_shield.webp", description: "Our AI fraud detection tool prevents fake orders, fraud returns, and inconsistencies, ensuring a smooth experience. This reduces potential challenges in delivery and courier services and enhances reliability." },
  { title: "Shadowfax Gigs", img: "/shadowfax_gig.webp", description: "With the largest crowdsourced fleet in logistics, we have a huge network of registered trucks, delivery partners, and agents, enabling a strong delivery network for same-day and next-day delivery services." },
];
function Services2() {
  return (
    <section className="mx-auto px-6 py-6 md:py-12 md:px-20">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-2">
        Unmatched Competitive Edge
      </h2>
      <p className="text-[16px] md:text-xl font-light opacity-90 text-center mb-8">
        Driving business efficiency with every delivery
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {services2.map((service, i) => (
          <div key={i} className="relative rounded-xl overflow-hidden shadow-lg group">
            {/* Background Image */}
            <div className="w-full h-100 md:h-120 relative">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Overlay (gradient + text) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-end p-6 py-10">
              <h3 className="text-white text-2xl md:text-3xl font-medium">{service.title}</h3>
              <p className="text-white mt-2 text-[16px] md:text-md">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

