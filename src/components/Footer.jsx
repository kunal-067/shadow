import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-teal-500 to-green-400 text-white py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-6 gap-8">

                {/* Left Section */}
                <div className="md:col-span-2 space-y-6">
                    <img src="/logo_footer_tm.svg" alt="Logo" className=" h-14" />
                    <p>
                        1st Floor, Appek Building, <br />
                        93/A, 4th B Cross Rd, 5th Block, <br />
                        Koramangala, Bengaluru, Karnataka <br />
                        560095
                    </p>
                    <a href="mailto:hello@shadowfax.in" className="text-teal-200 hover:text-white">
                        hello@shadowfax.in
                    </a>
                    <div className="flex space-x-4 pt-4">
                        <a href="#"><Facebook /></a>
                        <a href="#"><Twitter /></a>
                        <a href="#"><Linkedin /></a>
                        <a href="#"><Instagram /></a>
                        <a href="#"><Youtube /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold text-yellow-300 mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-yellow-300">Track Shipment</a></li>
                        <li><a href="#" className="hover:text-yellow-300">Book a Delivery</a></li>
                        <li><a href="#" className="hover:text-yellow-300">Support</a></li>
                        <li><a href="#" className="hover:text-yellow-300">Flash App</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="font-semibold text-yellow-300 mb-4">Services</h3>
                    <ul className="space-y-2">
                        <li><a href="#">Ecommerce & D2C</a></li>
                        <li><a href="#">Hyperlocal & Quick Commerce</a></li>
                        <li><a href="#">SME & Personal Courier</a></li>
                    </ul>
                </div>

                {/* Partners */}
                <div>
                    <h3 className="font-semibold text-yellow-300 mb-4">Partners</h3>
                    <ul className="space-y-2">
                        <li><a href="#">Delivery Partner</a></li>
                        <li><a href="#">Client Partner</a></li>
                        <li><a href="#">Franchise Partner</a></li>
                    </ul>
                </div>

                {/* Company & Legal */}
                <div>
                    <h3 className="font-semibold text-yellow-300 mb-4">Company</h3>
                    <ul className="space-y-2">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Innovation</a></li>
                        <li><a href="#">Social Impact</a></li>
                        <li><a href="#">Get In Touch</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-yellow-300 mb-4">Legal</h3>
                    <ul className="space-y-2">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto px-6 mt-10 flex flex-col md:flex-row justify-between items-center border-t border-teal-500 pt-6">
                <div className="flex space-x-10">
                    <div className="text-center">
                        <p className="font-semibold">Delivery Partner App</p>
                        <img src="/Play Store.webp" alt="Google Play" className="h-12 mt-2" />
                    </div>
                    <div className="text-center">
                        <p className="font-semibold">Flash App</p>
                        <img src="/Play Store.webp" alt="Google Play" className="h-12 mt-2" />
                    </div>
                </div>
                <p className="mt-6 md:mt-0 text-sm">© 2025 All rights reserved. Shadowfax Technologies Limited</p>
            </div>
        </footer>

    )
}

export default Footer