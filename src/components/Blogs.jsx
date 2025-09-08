import Image from 'next/image';
import React from 'react'


const blogs = [
  {
    title: "How Shadowfax Handles 3X Traffic Loads Switching From Celery to Coroutines?",
    category: "Tech Innovation",
    date: "July 31, 2025",
    img: "/blog_1.jpg",
  },
  {
    title: "Challenges in Critical Logistics and How Shadowfax Overcomes Them",
    category: "Critical Logistics",
    date: "July 23, 2025",
    img: "/blog_2.jpg",
  },
  {
    title: "Shadowfax Expands Nationwide With New Hub Strategy",
    category: "Business Growth",
    date: "July 18, 2025",
    img: "/blog_3.jpg",
  },
  {
    title: "Shadowfax Expands Nationwide With New Hub Strategy",
    category: "Business Growth",
    date: "July 18, 2025",
    img: "/blog_4.jpg",
  }
];
function Blogs() {
  return (
    <section id='blog' className="mx-auto text-center px-6 md:px-24 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Discover New Blogs</h2>
        <a
          href="#"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-5 py-2 rounded-lg hidden md:flex items-center gap-2"
        >
          Read More →
        </a>
      </div>

      {/* Grid Layout */}
      <div className="md:grid w-full grid-cols-1 md:grid-cols-2 gap-8">
        {/* Featured Blog (left big card) */}
        <div className="hidden relative md:block rounded-xl overflow-hidden shadow-lg md:row-span-2">
          <Image
            src="/blog_b.jpg"
            alt="Featured Blog"
            fill
            className="object-cover"
          />

          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-yellow-100 text-green-700 px-3 py-1 text-sm font-medium rounded-full mt-2">
                Festival Prepration
              </span>
              <span className="text-gray-100 text-sm">| August 06, 2025</span>
            </div>
            <h3 className="text-white text-2xl font-semibold">
              How Shadowfax Is Preparing For India Festive's Rush
            </h3>
          </div>
          <div>
            <span className="bg-yellow-100 text-green-700 px-3 py-1 text-sm font-medium rounded-full mt-2">
              How to do this
            </span>
            h
          </div>
        </div>

        {/* Other Blogs */}
        <div className='w-full overflow-hidden'>
        <div className="w-[400%] md:w-full overflow-hidden relative grid grid-cols-4 md:grid-cols-[1fr_1fr] md:grid-rows-[1fr_1fr] gap-4 ">
          {blogs.map((blog, i) => (
            <div key={i} className="flex w-[100%] md:w-auto flex-col overflow-hidden">
              {/* Blog Image */}
              <div className="relative h-56 flex-shrink-0">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  fill
                  className="object-cover w-full h-auto rounded-lg"
                />
              </div>

              {/* Blog Content */}
              <div className="flex flex-col md:justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-yellow-100 text-green-700 px-3 py-1 text-sm font-medium rounded-full mt-2">
                    {blog.category}
                  </span>
                  <span className="text-gray-500 text-sm">| {blog.date}</span>
                </div>
                <h4 className="text-gray-900 font-semibold text-md md:text-lg leading-snug text-left md:text-center">
                  {blog.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>

      <div>
         <a
          href="#"
          className="md:hidden mr-24 mt-6 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-5 py-2 rounded-lg flex items-center gap-2"
        >
          Read More →
        </a>
      </div>
    </section>
  );
}


export default Blogs