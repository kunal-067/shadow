import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Shadowfax is our single largest partner for omnichannel fulfillment. Their reliable services and extensive network have significantly supported the growth of the Pincode platform.",
      author: "Lalit Singh",
      role: "Paytm Payments Bank",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/PhonePe_Logo.svg",
    },
    {
      text: "Shadowfax helped us scale faster with their efficient logistics network. Their same-day delivery has boosted our customer satisfaction rates drastically.",
      author: "Anita Verma",
      role: "Flipkart",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flipkart_logo.png",
    },
    {
      text: "With Shadowfax, our return management became hassle-free. Their robust support system ensures our customers are always satisfied.",
      author: "Rohit Sharma",
      role: "Myntra",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/Myntra_logo.png",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextTestimonial = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);

  const prevTestimonial = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="py-12 px-6 text-center md:px-42 mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-gray-800 border-l-0 border-green-600 pl-4">
        What Our Clients Say
      </h2>

      <div className="relative flex items-center justify-center">
        {/* Prev Button */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 bg-yellow-300 p-2 md:p-4 rounded-full shadow-md hover:bg-yellow-400 transition"
        >
          <ArrowLeft className="text-teal-700 size-4 md:w-6 md:h-6" />
        </button>

        {/* Testimonial Content */}
        <div className="px-6 md:px-12">
          <p className="text-md md:text-lg italic text-gray-700 mb-6">
            “{testimonials[current].text}”
          </p>
          <h3 className="text-md md:text-lg font-semibold text-teal-700">
            {testimonials[current].author}
          </h3>
          <p className="text-gray-500">{testimonials[current].role}</p>
          <img
            src={testimonials[current].logo}
            alt={testimonials[current].role}
            className="mx-auto mt-4 h-10"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={nextTestimonial}
          className="absolute right-0 bg-yellow-300 p-2 md:p-4 rounded-full shadow-md hover:bg-yellow-400 transition"
        >
          <ArrowRight className="text-teal-700 size-4 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
              idx === current ? "bg-teal-700" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
