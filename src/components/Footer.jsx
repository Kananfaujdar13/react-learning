import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaTwitch } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Footer() {
    return (
        <footer className="text-white mt-20 p-8">
            <div className="container mx-auto px-6">
                {/* Top Row: Logo and Social Media Icons */}
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start border-b border-gray-800 p-6">
                    {/* Logo */}
                    <div className="text-xl font-bold mb-4 sm:mb-0">
                        {/* Replace with actual logo */}
                        <img src="https://img.securityinfowatch.com/files/base/cygnus/siw/image/2022/11/Cybrary_logo.636d1736d4f10.png?auto=format,compress&fit=fill&fill=blur&w=1200&h=630" alt="Cybrary Logo" className="w-44" />
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex flex-wrap gap-4 justify-center sm:justify-start ">
                        <NavLink to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="border bg-gray-900 rounded-full p-2 hover:text-gray-400">
                            <FaFacebook size={20} />
                        </NavLink>
                        <NavLink to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="border bg-gray-900 rounded-full p-2 hover:text-gray-400">
                            <FaTwitter size={20} />
                        </NavLink>
                        <NavLink to="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="border bg-gray-900 rounded-full p-2 hover:text-gray-400">
                            <FaLinkedin size={20} />
                        </NavLink>
                        <NavLink to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="border bg-gray-900 rounded-full p-2 hover:text-gray-400">
                            <FaInstagram size={20} />
                        </NavLink>
                        <NavLink to="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer" className="border bg-gray-900 rounded-full p-2 hover:text-gray-400">
                            <FaTwitch size={20} />
                        </NavLink>
                        <NavLink to="https://youtube.com" target="_blank" rel="noopener noreferrer" className="border bg-gray-900 rounded-full p-2 hover:text-gray-400">
                            <FaYoutube size={20} />
                        </NavLink>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-between gap-4 text-sm mt-6">
                    <div>
                        <h3 className="font-semibold mb-2 text-2xl">Solutions</h3>
                        <ul>
                            <li><NavLink to="/individuals" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                For Individuals
                                <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </NavLink></li>
                            <li><NavLink to="/teams" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                For Teams
                                <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </NavLink></li>
                            <li><NavLink to="/government" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                Government
                                <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2 text-2xl">Company</h3>
                        <ul>
                            <li><NavLink to="/about" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                About
                                <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </NavLink></li>
                            <li><NavLink to="/careers" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                Careers
                                <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </NavLink></li>
                            <li><NavLink to="/press" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                Press
                                <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </NavLink></li>
                            <li><NavLink to="/impact" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                Cybrary Impact Hub
                                <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2 text-2xl">Platform</h3>
                        <ul>
                            <li><NavLink to="/catalog" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                Catalog
                                <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </NavLink></li>
                            <li><NavLink to="/instructors" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                Instructors
                                <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </NavLink></li>
                            <li><NavLink to="/alliances" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                Alliances
                                <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2 text-2xl">Resources</h3>
                        <ul>
                            <li><NavLink to="/blog" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                Blog
                                <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </NavLink></li>
                            <li><NavLink to="/help-center" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                Help Center
                                <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </NavLink></li>
                            <li><NavLink to="/podcast" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                The Cybrary Podcast
                                <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </NavLink></li>
                            <li><NavLink to="/report-vulnerability" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                Report a Vulnerability
                                <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </NavLink></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Row: Terms & Privacy */}
                <div className="mt-6 flex flex-col sm:flex-row gap-8 text-center sm:text-left text-sm text-gray-500">
                    <NavLink to="/privacy-policy" className="hover:underline mb-4 sm:mb-0 text-lg text-gray-400">Privacy Policy</NavLink>
                    <NavLink to="/terms-of-service" className="hover:underline mb-4 sm:mb-0 text-lg text-gray-400">Terms of Service</NavLink>
                    <p className="hover:underline mb-4 sm:mb-0 text-lg text-gray-400">Cybrary, Inc. © 2024</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
