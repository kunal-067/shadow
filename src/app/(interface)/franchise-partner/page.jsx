import { JoinUsCard } from "@/components/admin/ActionCards"
import Image from "next/image"

import { Check } from "lucide-react";
import { LogoMarquee } from "../home/page";


export default function FraudAlert() {
  return (
    <>

      <div className="p-4 md:p-8 md:px-20">

        <section className='flex mb-12 justify-center gap-8 md:gap-16 items-center flex-col md:flex-row'>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 border-l-4 border-green-600 pl-4">
              Become a Shadowfax Franchise Partner
            </h2>
            <p className='text-lg md:text-xl text-gray-700 max-w-2xl mb-6'>
              Start your own business and become an entrepreneur with a future-ready logistics company built for growth and scale.
            </p>
            <JoinUsCard text='Become a franchise partner' className='text-[18px] p-4 px-6' />
          </div>

          <Image src="/BecomeaShadowfaxFranchisePartner.webp" alt="Ecommerce & D2C" width={500} height={300} className='rounded-lg object-cover' />
        </section>

        {/* fraud warn section */}
        <div className="bg-green-50 bg-[url('/fraudulent.webp')] bg-cover md:bg-center rounded-2xl flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 md:p-12 shadow-md">
          {/* Left Content */}
          <div className="w-full md:w-1/2 max-w-lg space-y-4 sm:space-y-6 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900">
              Beware of <br /> Fraudulent Emails
            </h2>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Shadowfax communicates only through <span className="font-medium">shadowfax.in</span> email addresses.
              For franchise queries, our official email is:
            </p>

            <p className="bg-white px-3 sm:px-4 py-2 rounded-md inline-block font-mono text-gray-900 shadow-sm text-[12px] sm:text-base">
              franchise.onboarding@shadowfax.in
            </p>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              If you receive emails from any other domain, do not respond. Report them to:
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center md:justify-start">
              <p className="bg-white px-3 sm:px-4 py-2 rounded-md font-mono text-gray-900 shadow-sm text-sm sm:text-base">
                it.support@shadowfax.in
              </p>
              <p className="bg-white px-3 sm:px-4 py-2 rounded-md font-mono text-gray-900 shadow-sm text-sm sm:text-base">
                info@shadowfax.in
              </p>
            </div>
          </div>
        </div>

        <WhyPartnerWithUs />
        <RequirementsGrid />
        <DocumentsRequired />
      </div>

      <div className='p-2 py-6'>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 border-green-600 pl-4">
          Trusted By
        </h2>
        <LogoMarquee />
      </div>

      <FranchiseBanner />

    </>
  )
}

const features = [
  {
    icon: "💰",
    title: "Minimal Investment",
    desc: "Easily start your business with low initial costs.",
  },
  {
    icon: "⚡",
    title: "Immediate Earnings",
    desc: "Begin earning quickly with a straightforward setup and no steep learning curve.",
  },
  {
    icon: "📈",
    title: "Significant Income",
    desc: "Earn regular incentives and seasonal offers, with reliable payments.",
  },
  {
    icon: "🎓",
    title: "Comprehensive Training & Support",
    desc: "Access to a dedicated relationship manager 24/7 and thorough onboarding training.",
  },
  {
    icon: "💼",
    title: "Prestigious Partnership",
    desc: "Collaborate with Shadowfax, a leading logistics company serving major clients like Flipkart and Meesho.",
  },
  {
    icon: "🛒",
    title: "Part of India's E-commerce Boom",
    desc: "Become a part of the growing E-commerce industry and help drive its growth.",
  },
  {
    icon: "🚀",
    title: "Entrepreneurial Opportunity",
    desc: "Take the first step towards realizing your dream of becoming an entrepreneur.",
  },
  {
    icon: "⚙️",
    title: "Advanced ERP Portal",
    desc: "Manage your business efficiently with our state-of-the-art Employee Resource Planning portal.",
  },
];
export function WhyPartnerWithUs() {
  return (
    <section className="py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
        Why Partner With Us?
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-yellow-50 p-6 rounded-lg shadow-sm flex items-start space-x-4 hover:shadow-md transition"
          >
            <div className="text-3xl">{feature.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-green-800">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function RequirementsGrid() {
  const items = [
    "Office space of 500–600 sq. ft.",
    "PC or laptop with internet access",
    "Printer and scanner",
    "Minimum of 2 CCTV cameras",
    "50kg capacity weighing machine",
    "Thermal printer for label printing",
    "Barcode scanner",
    "Storage racks",
    "One center manager and delivery executive",
  ];

  return (
    <div>
      <h2 className="text-2xl border-l-4 pl-4 border-green-600 md:text-4xl font-bold mb-6">
        For a Seamless Start, Ensure you have the Following<br /> Requirements and Infrastructure:
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-4 "
          >
            <div className="size-8 md:size-12 flex items-center justify-center rounded-full bg-yellow-300  text-green-700">
              <Check size={20} strokeWidth={3} />
            </div>
            <p className="text-gray-800 text-[16px] md:text-xl border-l-3 h-full py-auto border-green-600 pl-4">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import { ArrowLeft, ArrowRight } from "lucide-react";
export function DocumentsRequired() {
  return (
    <div className="py-8 md:py-16">
      <div className="rounded-2xl bg-yellow-50 p-10 flex flex-col md:flex-row justify-between items-center shadow-md">
        
        {/* Left side - Document card */}
        <div className="bg-yellow-300 p-6 rounded-xl flex justify-center items-center w-full md:w-1/2 md:h-[310px]">
          <div className="bg-white p-8 rounded-xl text-center shadow md:pb-12">
            <div className="bg-teal-600 text-yellow-300 font-bold text-lg px-4 py-6 rounded-b-full inline-block mb-4">
              04
            </div>
            <p className="text-gray-800 md:text-3xl font-medium">Rent Agreement</p>
          </div>
        </div>

        {/* Right side - Question + Navigation */}
        <div className="flex flex-col items-center md:items-start mt-8 md:mt-0 md:ml-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            What are the documents required?
          </h3>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center shadow hover:bg-yellow-400">
              <ArrowLeft className="text-teal-700 w-6 h-6" />
            </button>
            <button className="w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center shadow hover:bg-yellow-400">
              <ArrowRight className="text-teal-700 w-6 h-6" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}


export function FranchiseBanner() {
  return (
    <div className="p-4 py-8 mb-12 md:py-16 md:pb-28 md:px-20 ">
      <div className="rounded-2xl bg-gradient-to-r from-yellow-100 md:via-yellow-50 to-yellow-100 md:to-white p-6 py-12 md:p-16 flex flex-col md:flex-row justify-between items-center shadow-md">
        
        {/* Left content */}
        <div className="md:p-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-teal-700 max-w-4xl md:mb-8">
            Partner with us and take your Franchise Logistics Business to New Heights
          </h2>
          <button className="px-5 py-3 bg-white text-black font-medium rounded-lg shadow hover:bg-gray-100 transition">
            Become a franchisee partner
          </button>
        </div>

        {/* Right content (logo placeholder) */}
        <div className="mt-8 md:mt-0">
          <img
            src="/logo_header_tm.svg"
            alt="Shadowfax Logo"
            className="w-40 md:w-52"
          />
          <p className="text-sm text-teal-700 font-medium">Think ahead!</p>
        </div>
      </div>
    </div>
  );
}

