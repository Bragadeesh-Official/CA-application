import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { COMPANY_EMAIL, COMPANY_PHONE, COMPANY_ADDRESS } from '../../constant';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-[1720px] mx-auto px-10">
                <div className="flex flex-col gap-12 md:gap-16">
                    {/* Section Header */}
                    <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Get in Touch</h2>
                        <p className="text-gray-600 text-base md:text-lg">
                            Have questions or need expert financial advice? Our team is here to help you navigate your business challenges.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-3 bg-white border border-gray-100 p-6 md:p-8 rounded-[2rem] shadow-xl shadow-gray-100/50">
                            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="John Doe"
                                            className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all text-sm md:text-base"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="john@example.com"
                                            className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all text-sm md:text-base"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        placeholder="Service Inquiry"
                                        className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all text-sm md:text-base"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        placeholder="How can we help you?"
                                        className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all resize-none text-sm md:text-base"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 group active:scale-95"
                                >
                                    <span>Send Message</span>
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>

                        {/* Contact Info Card */}
                        <div className="lg:col-span-2 bg-indigo-600 p-8 md:p-10 rounded-[2rem] text-white flex flex-col gap-8 md:gap-10 relative overflow-hidden group">
                            {/* Decorative background shapes */}
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 md:w-64 h-32 md:h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
                            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-24 md:w-48 h-24 md:h-48 bg-indigo-400/20 rounded-full blur-2xl" />

                            <div className="relative z-10">
                                <h3 className="text-xl md:text-2xl font-bold mb-4 !text-white" style={{ color: 'white' }}>Contact Information</h3>
                                <p className="text-sm md:text-base !text-white opacity-100" style={{ color: 'white' }}>
                                    Fill out the form and our team will get back to you within 24 hours.
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-col gap-6 md:gap-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-xl shrink-0">
                                        <Phone size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm md:text-base !text-white" style={{ color: 'white' }}>Call Us</p>
                                        <p className="text-sm md:text-base !text-white opacity-90" style={{ color: 'white' }}>{COMPANY_PHONE}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-xl shrink-0">
                                        <Mail size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm md:text-base !text-white" style={{ color: 'white' }}>Email Us</p>
                                        <p className="text-sm md:text-base !text-white opacity-90" style={{ color: 'white' }}>{COMPANY_EMAIL}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-xl shrink-0">
                                        <MapPin size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm md:text-base !text-white" style={{ color: 'white' }}>Visit Us</p>
                                        <p className="text-sm md:text-base !text-white opacity-90 leading-relaxed" style={{ color: 'white' }}>{COMPANY_ADDRESS}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto relative z-10 pt-6 md:pt-8 border-t border-white/10">
                                <p className="text-xs md:text-sm !text-white opacity-80" style={{ color: 'white' }}>
                                    Available Mon-Fri, 9:00 AM - 6:00 PM IST
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
