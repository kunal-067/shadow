// pages/about.js
import Head from 'next/head';
import Image from 'next/image';
import { LogoMarquee } from '../home/page';

const About = () => {
    return (
        <>
            <section className="px-6 md:px-16 y-12 bg-white">
                <div className="grid md:grid-cols-2 gap-10 items-start">
                    {/* Left Side - Text */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 border-l-4 border-green-600 pl-3">
                            About Shadowfax
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Shadowfax stands as India's leading logistics service provider for
                            e-commerce, express parcel, and value-added services. With an
                            extensive distribution network covering over 2,200 cities and more
                            than 14,300 PIN codes, we've established ourselves as market leaders
                            through strategic thinking and forward-focused solutions.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            As we celebrate 10 years of transforming logistics, Shadowfax
                            continues to lead with speed, agility, innovation, and service
                            excellence. Our versatility spans from lightning-fast intracity
                            deliveries to same-day fulfillment, while our tech-driven AI
                            solutions like SF Maps and SF Shield deliver exceptional value and
                            set new industry benchmarks.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            With a relentless focus on operational efficiency and intelligent
                            automation, Shadowfax has become the preferred logistics partner for
                            India's top e-commerce and hyperlocal brands. We are thinking beyond
                            today to redefine and shape the future of logistics.
                        </p>

                        {/* Left Stats Section */}
                        <div className="grid grid-cols-2 bg-yellow-50 size-64 md:size-85 grid-rows-2 border border-yellow-400 mx-auto mt-8">
                            <div className="border-b border-yellow-400 flex flex-col justify-center items-center">
                                <h1 className='text-[#008a71] font-semibold text-3xl md:text-4xl '>1.40</h1> <p className='text-center p-2 text-[12px] md:text-[16px] opacity-90'>Lakh Quarterly Delivery Partners</p></div>
                            <div className="border-l border-b border-yellow-400 flex flex-col justify-center items-center">
                                <h1 className='text-[#008a71] font-semibold text-3xl md:text-4xl '>1.5</h1> <p className='text-center p-2 text-[12px] md:text-[16px] opacity-90'>Million Packages Delivered Daily</p></div>
                            <div className="border-yellow-400 flex flex-col justify-center items-center">
                                <h1 className='text-[#008a71] font-semibold text-3xl md:text-4xl '>2200+</h1> <p className='text-center p-2 text-[12px] md:text-[16px] opacity-90'>Cities</p></div>
                            <div className="border-l border-yellow-400 flex flex-col justify-center items-center">
                                <h1 className='text-[#008a71] font-semibold text-3xl md:text-4xl '>14,300+</h1> <p className='text-center p-2 text-[12px] md:text-[16px] opacity-90'>PIN Codes</p></div>
                        </div>
                    </div>

                    {/* right image grid */}
                    <div className="flex flex-col md:grid md:h-[960px] md:grid-cols-2 md:grid-rows-15 gap-3 md:p-4">
                        {/* Wide image across 2 columns */}
                        <div className="relative md:row-span-6 rounded-xl overflow-hidden">
                            <img
                                height={100}
                                width={100}
                                src="/aboutgrid-1.webp"
                                alt="Image 1"
                                className="rounded-xl w-full h-auto md:h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-end p-4 text-white font-semibold">
                                1.40 Lakh Average Quarterly Transacting Delivery Partners
                            </div>
                        </div>

                        {/* Tall single image */}
                        <div className="relative md:pt-16 md:row-span-8 rounded-xl overflow-hidden">
                            <img
                                height={100}
                                width={100}
                                src="/aboutgrid-2.png"
                                alt="Image 2"
                                className="rounded-xl w-full h-auto md:h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-end p-4 text-white font-semibold">
                                Serving 14,300+ PIN Codes
                            </div>
                        </div>

                        {/* Normal square image */}
                        <div className="relative md:row-span-3 rounded-xl overflow-hidden">
                            <img
                                height={100}
                                width={100}
                                src="/aboutgrid-3.png"
                                alt="Image 3"
                                className="rounded-xl w-full h-auto md:h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-end p-4 text-white font-semibold">
                                Operating in 2200+ Cities
                            </div>
                        </div>

                        {/* Another wide image */}
                        <div className="relative md:row-span-7 rounded-xl overflow-hidden">
                            <img
                                height={100}
                                width={100}
                                src="/aboutgrid-4.webp"
                                alt="Image 4"
                                className="rounded-xl w-full h-auto md:h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-end p-4 text-white font-semibold">
                                Handling a Staggering Volume of Over 15 lakh Orders Daily
                                Our Leadership Lineup


                            </div>
                        </div>

                        {/* Fifth image */}
                        <div className="relative md:row-span-6 rounded-xl overflow-hidden">
                            <img
                                height={100}
                                width={100}
                                src="/aboutgrid-5.png"
                                alt="Image 5"
                                className="rounded-xl w-full h-auto md:h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-end p-4 text-white font-semibold">
                            </div>
                        </div>
                    </div>



                </div>

                <AboutCmCard />

                <section class="md:px-10 py-12">
                    <h2 class="text-3xl font-bold mb-8 border-l-4 border-green-600 pl-4">
                        What We Strive For
                    </h2>

                    <div class="grid md:grid-cols-2 gap-8">
                        {/* <!-- Card 1 --> */}
                        <div class="relative rounded-lg overflow-hidden">
                            <img src="/vision.jpg" alt="Our Vision" class="absolute inset-0 w-full h-full object-cover opacity-60" />
                            <div class="absolute inset-0 bg-gradient-to-r from-green-200/70 to-yellow-200/70"></div>
                            <div class="relative p-8">
                                <h3 class="text-2xl font-semibold text-green-700 mb-4">Our Vision</h3>
                                <p class="text-gray-800">
                                    Enabling seamless commerce by empowering lives through technology-driven logistics services,
                                    creating opportunities for everyone, everywhere, across India.
                                </p>
                            </div>
                        </div>

                        {/* <!-- Card 2 --> */}
                        <div class="relative rounded-lg overflow-hidden">
                            <img src="/mission.jpg" alt="Our Mission" class="absolute inset-0 w-full h-full object-cover opacity-60" />
                            <div class="absolute inset-0 bg-gradient-to-r from-yellow-200/70 to-green-200/70"></div>
                            <div class="relative p-8">
                                <h3 class="text-2xl font-semibold text-green-700 mb-4">Our Mission</h3>
                                <p class="text-gray-800">
                                    Building the fastest and most reliable logistics network by empowering a million
                                    micro-entrepreneurs through technology to deliver anything, anywhere.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <div className='p-2 py-6'>
                <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 border-l-4 border-green-600 pl-4">
                    Trusted By
                </h2>
                <LogoMarquee />
            </div>


        </>

    );
};

export function AboutCmCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 mt-10">
            {/* Box 1 */}
            <div className="flex justify-between items-center p-6 md:p-20 border-r-4 border-b-4 border-yellow-400">
                <div>
                    <h3 className="text-green-600 font-semibold text-lg">Customer Centricity</h3>
                    <p className="text-gray-600 mt-2">
                        Nurturing strong bonds & delivering an outstanding customer experience is the hallmark of our services.
                    </p>
                </div>
                <div className='min-w-fit'>
                    <img src="/icons/centricity.webp" alt="Customer Icon" className="size-10 md:size-28 object-cover w-auto" />
                </div>
            </div>

            {/* Box 2 */}
            <div className="flex justify-between items-center p-6 md:p-20 border-b-4 border-yellow-400">
                <div>
                    <h3 className="text-green-600 font-semibold text-lg">Innovation</h3>
                    <p className="text-gray-600 mt-2">
                        With constant innovation and original ideas, we aim to revolutionize logistics solutions.
                    </p>
                </div>
                <div className='min-w-fit'>
                    <img src="/icons/innovation.webp" alt="Innovation Icon" className="size-10 md:size-28 object-cover w-auto" />
                </div>
            </div>

            {/* Box 3 */}
            <div className="flex justify-between items-center p-6 md:p-20 border-r-4 border-yellow-400">
                <div>
                    <h3 className="text-green-600 font-semibold text-lg">Empathy</h3>
                    <p className="text-gray-600 mt-2">
                        Showing empathy enables us to anticipate needs and put in genuine effort to address them.
                    </p>
                </div>
                <div className='min-w-fit'>
                    <img src="/icons/empathy.webp" alt="Empathy Icon" className="size-10 md:size-28 object-cover w-auto" />
                </div>
            </div>

            {/* Box 4 */}
            <div className="flex justify-between items-center p-6 md:p-20">
                <div>
                    <h3 className="text-green-600 font-semibold text-lg">Integrity</h3>
                    <p className="text-gray-600 mt-2">
                        Powered by integrity and strong morals, we value ethics over anything else.
                    </p>
                </div>
                <div className='min-w-fit'>
                    <img src="/icons/integrity.webp" alt="Integrity Icon" className="size-10 md:size-28 object-cover w-auto" />
                </div>
            </div>
        </div>

    )
}

export default About;
