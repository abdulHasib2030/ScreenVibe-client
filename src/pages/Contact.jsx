import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

  const navigate = useNavigate()

    const handleContact = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const subject =form.subject.value;
        const message = form.message.value;
        if (!name || !email || !subject || !message){
           return toast.error("Please fill out all required fields before submitting the form.")
        }
       
        else{
          toast.success("Thanks for contacting us! Our team will review your message and respond soon.")
            navigate('/')
        }
    }

    return (
        <div>

            <section className="max-w-4xl p-6 space-y-8 mx-auto bg-indigo-600 rounded-md shadow-md  dark:bg-gray-800 my-10">
                <div>
                <h1 className="text-center text-xl font-bold text-white capitalize dark:text-white">Get in Touch</h1>
                <p className='text-center'>We'd love to hear from you! Reach out with your questions, feedback, or suggestions.</p>
                </div>
                <form method='post' onSubmit={handleContact}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div className='md:col-span-2'>
                            <label className="text-white dark:text-gray-200" >Name <span className='text-red-500'>*</span></label>
                            <input id="" name='name' type="text" placeholder='Enter your name' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                         
                        </div>

                        <div className='md:col-span-2'>
                            <label className="text-white dark:text-gray-200" >Email Address <span className='text-red-500'>*</span></label>
                            <input id="email" type="email" name='email' placeholder='Enter email address' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                            
                        </div>
                        
                        <div className='md:col-span-2'>
                            <label className="text-white dark:text-gray-200" >Subject <span className='text-red-500'>*</span></label>

                            <input id="subject" type="text" name="subject"  placeholder="Enter subject" className="block w-full py-2 px-4 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                           
                        </div>
                      

                    

                        <div className='md:col-span-2'>
                            <label className="text-white dark:text-gray-200" for="passwordConfirmation">Message <span className='text-red-500'>*</span></label>
                            <textarea name='message' placeholder='Enter your message' id="textarea" type="textarea" rows={'6'} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                          
                        </div>

                    </div>

                    <div className="flex justify-start mt-6">
                        <button className="px-8 py-2 leading-5 text-black font-bold text-xl transition-colors duration-200 transform bg-gradient-to-r  from-[#5FE1E7] to-[#D3F46D] hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Submit</button>
                    </div>
                </form>
            </section>
        </div >
    );
};

export default Contact;