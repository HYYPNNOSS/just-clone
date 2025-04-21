"use client"
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Form() {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phoneNumber: '', message: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setStatus('Sending...');
        try {
            const templateParams = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phoneNumber: formData.phoneNumber,
                message: formData.message,
            };

            await emailjs.send(
                'service_67ri5bz', 
                'template_k0dmgbi', 
                templateParams,
                'KWhuQvBaWyqkMECoH' 
            );

            setStatus('Message sent successfully!');
            setFormData({ firstName: '', lastName: '', email: '', phoneNumber: '', message: '' });
        } catch (err) {
            console.error(err); // Log the error for debugging
            setStatus('Failed to send message. Please try again.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-[#F4F4F4] h-full border rounded-2xl w-[50%] max-md:w-full max-md:mt-8">
            <form onSubmit={handleSubmit} className="w-[100%] p-8">
                <div className="grid w-full grid-cols-2 grid-rows-3 gap-y-[32px] mb-10 gap-4 max-xs:flex max-xs:flex-col">
                    <div className="row-start-1 row-end-2 col-start-1 col-end-2 flex flex-col justify-between">
                        <span className="mb-4 flex-end">First name</span>
                        <input type="text" name='firstName' value={formData.firstName} className="bg-[#F4F4F4] border border-solid border-x-0 border-t-0 outline-none" placeholder="test" onChange={handleChange} required />
                    </div>
                    <div className="row-start-1 row-end-2 col-start-2 col-end-3 flex flex-col justify-between">
                        <span className="mb-4 ">Last name</span>
                        <input type="text" name='lastName' value={formData.lastName} className="bg-[#F4F4F4] border border-solid border-x-0 border-t-0 outline-none" placeholder="test" onChange={handleChange} required />
                    </div>
                    <div className="row-start-2 row-end-3 col-start-1 col-end-2 flex flex-col justify-between">
                        <span className="mb-4 col-start-1 col-end-4 row-start-3 row-end-4">Email</span>
                        <input type="text" name='email' value={formData.email} className="bg-[#F4F4F4] border border-solid border-x-0 border-t-0 outline-none" placeholder="test" onChange={handleChange} required />
                    </div>
                    <div className="row-start-2 row-end-3 col-start-2 col-end-3 flex flex-col justify-between">
                        <span className="mb-4">Phone</span>
                        <input type="text" name='phoneNumber' value={formData.phoneNumber} className="bg-[#F4F4F4] border border-solid border-x-0 border-t-0 outline-none" placeholder="test" onChange={handleChange} required />
                    </div>
                    <div className="row-start-3 row-end-4 col-start-1 col-end-4 flex flex-col justify-between">
                        <span className="mb-4 ">Message</span>
                        <input type="text" name='message' value={formData.message} className="bg-[#F4F4F4] border border-solid border-x-0 border-t-0 outline-none c " placeholder="test" onChange={handleChange} required />
                    </div>
                </div>
                <button type='submit' className="bg-ruby p-4 text-1xl border rounded-3xl text-white mb-4">Submit Now</button>
            </form>
            {status && <p>{status}</p>}
        </div>
    );
}