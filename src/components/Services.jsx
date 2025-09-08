import Image from 'next/image';
import React from 'react'

const services = [
  {
    title: "Ecommerce & D2C",
    desc: "We provide end-to-end delivery services, from standard shipping to same-day and next-day delivery, designed for D2C and E-commerce brands. Our smart logistics and tech ensure speed, efficiency, and great customer experiences.",
    img: "/service1.webp",
  },
  {
    title: "Hyperlocal & Quick Commerce",
    desc: "Enjoy rapid deliveries within hours or choose flexible slots for same day or next day service. From groceries to medicines and more, with real-time tracking and reliable service.",
    img: "/service2.webp",
  },
  {
    title: "SME & Personal Courier",
    desc: "Shadowfax Flash powers on-demand pickup and drop services within the city for individuals and small businesses. Affordable, reliable, and backed by India’s fastest-growing last-mile fleet.",
    img: "/service3.webp",
  },
];
function Services() {
  return (
    <section className="py-8 px-6 md:px-16 bg-white">
      <h3 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-2 text-center">Our Services</h3>
      <p className='text-center text-[16px] md:text-2xl font-light mb-8 opacity-90'>To meet the dynamic market needs of your business</p>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="rounded-2xl flex flex-col items-start"
          >
            {/* Image */}
            <div className="w-full relative rounded-xl overflow-hidden">
              <Image
                src={service.img}
                alt={service.title}
                height={200}
                width={400}
                className="object-cover w-full h-auto"
              />
            </div>

            {/* Title */}
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-gray-600 text-sm">{service.desc}</p>

            {/* Button */}
            <button className="mt-4 bg-yellow-400 text-black px-5 py-2 rounded-md font-medium hover:bg-yellow-500 transition">
              Know More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Services