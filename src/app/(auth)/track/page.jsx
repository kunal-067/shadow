import React from 'react'

const TrackingPage = () => {
    return (
        <>

            <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Left Content */}
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Track Your Order
                    </h2>

                    {/* Input + Button */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <input
                            type="text"
                            placeholder="Enter AWB Number"
                            className="w-full sm:w-80 border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none"
                        />
                        <button className="bg-yellow-300 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition">
                            Track Shipment →
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <img
                        src="/track-01.webp"
                        alt="Track Order"
                        className="max-h-[350px] object-contain rounded-lg"
                    />
                </div>
            </section>


        </>
    )
}

export default TrackingPage