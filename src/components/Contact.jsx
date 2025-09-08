export default function ContactForm() {
    return (
        <section className="bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-lg md:rounded-2xl p-4 py-8 md:px-24 md:py-16 mx-auto shadow-lg">
            {/* Left Side */}
            <div className="text-left">
                <h2 className="text-lg md:text-4xl border-l-2 md:border-l-3 pl-2 md:pl-4 border-green-600 font-bold text-gray-800 mb-6">
                    Gain Leverage For Your <br /> Business With Shadowfax
                </h2>
            </div>

            {/* Right Side - Form */}
            <div className="flex flex-col md:justify-around md:flex-row w-full md:p-8 mt-10 md:mt-0">
                <div className="flex justify-center items-center p-4">
                    <img
                        src="/covers/Shadowfax-logo-circular.gif"
                        alt="Logo"
                        className="size-52"
                    />
                </div>
                <form className="space-y-5 md:w-1/2 md:ml-12">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Enter your full name
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Enter your contact number
                        </label>
                        <input
                            type="tel"
                            placeholder="+91 9876543210"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Enter your email
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Enter your message
                        </label>
                        <textarea
                            rows="3"
                            placeholder="Write your message..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
