import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { COMPANY_EMAIL, COMPANY_PHONE, COMPANY_ADDRESS } from '../../constant';

const SERVICE_ID = "service_i8xlfo4";
const TEMPLATE_ID = "template_kd04m42";
const PUBLIC_KEY = "0gmu7E7rJR_vsuuEU";

const Contact: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        setIsSubmitting(true);

        try {
            const userEmail = (form.elements.namedItem("email") as HTMLInputElement).value;
            const userMobile = (form.elements.namedItem("mobile") as HTMLInputElement).value;
            const userMessage = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
            const userName = (form.elements.namedItem("name") as HTMLInputElement).value;

            const formData = {
                user_name: userName,
                name: userName,
                email: userEmail,
                mobile: userMobile,
                user_subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
                user_message: `From: ${userEmail}\nMobile: ${userMobile}\n\n${userMessage}`,
                time: new Date().toLocaleString(),
            };

            console.log("Sending Email with params:", formData);

            const result = await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                formData,
                PUBLIC_KEY
            );

            console.log("EmailJS Success:", result.status, result.text);

            alert("Thank you! Your message has been sent successfully.");
            form.reset();
        } catch (error: any) {
            console.error("Submission error details:", error);
            if (error.text) {
                console.error("EmailJS Error Text:", error.text);
            }
            alert(`Oops! Something went wrong: ${error.text || "Submission failed"}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-8 md:py-16 bg-white">
            <div className="max-w-[1720px] mx-auto px-8 lg:px-[10%]">
                <div className="flex flex-col gap-12 md:gap-16">
                    {/* Section Header */}
                    <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Get in Touch</h2>
                        <p className="text-gray-600 text-base md:text-lg">
                            Have questions or need professional financial advice? Our team is here to help you navigate your business challenges.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-3 bg-white border border-gray-100 p-6 md:p-8 rounded-[2rem] shadow-xl shadow-gray-100/50">
                            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            placeholder="John Doe"
                                            className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-950/20 focus:border-blue-950 transition-all text-sm md:text-base"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            placeholder="john@example.com"
                                            className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-950/20 focus:border-blue-950 transition-all text-sm md:text-base"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="mobile" className="text-sm font-semibold text-gray-700">Mobile Number</label>
                                        <input
                                            type="tel"
                                            id="mobile"
                                            name="mobile"
                                            required
                                            placeholder="+91 98765 43210"
                                            className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-950/20 focus:border-blue-950 transition-all text-sm md:text-base"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            required
                                            placeholder="Service Inquiry"
                                            className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-950/20 focus:border-blue-950 transition-all text-sm md:text-base"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="How can we help you?"
                                        className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-950/20 focus:border-blue-950 transition-all resize-none text-sm md:text-base"
                                    ></textarea>
                                </div>
                                {/* <div className="flex flex-col gap-2">
                                    <label htmlFor="file" className="text-sm font-semibold text-gray-700">Attachment (Optional)</label>
                                    <input
                                        type="file"
                                        id="file"
                                        accept=".pdf,.doc,.docx"
                                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                                        className="px-4 py-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-950/5 file:text-blue-950 hover:file:bg-blue-950/10 transition-all"
                                    />
                                    {file && <p className="text-xs text-blue-950">Selected: {file.name}</p>}
                                </div> */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-950 text-white font-bold rounded-2xl hover:bg-blue-950/90 transition-all shadow-lg shadow-blue-950/10 group active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Contact Info Card */}
                        <div className="lg:col-span-2 bg-blue-950 p-8 md:p-10 rounded-[2rem] text-white flex flex-col gap-8 md:gap-10 relative overflow-hidden group">
                            {/* Decorative background shapes */}
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 md:w-64 h-32 md:h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
                            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-24 md:w-48 h-24 md:h-48 bg-blue-950/20 rounded-full blur-2xl" />

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
                                        <a
                                            href="https://www.google.com/maps/place/T+NAGARAJU+%26+Co+,+CHARTERED+ACCOUNTANTS/@11.0226698,77.0141288,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba857435f01c8b9:0x4ee20d6a9648cfe7!8m2!3d11.0226645!4d77.0167091!16s%2Fg%2F11rn89bs72?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm md:text-base !text-white opacity-90 leading-relaxed hover:text-blue-200 transition-colors"
                                            style={{ color: 'white' }}
                                        >
                                            {COMPANY_ADDRESS}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto relative z-10 pt-6 md:pt-8 border-t border-white/10">
                                <p className="text-xs md:text-sm !text-white opacity-80" style={{ color: 'white' }}>
                                    Available Mon-Sat, 10:00 AM - 6:00 PM IST
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
