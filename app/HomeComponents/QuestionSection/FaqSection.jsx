'use client'
import React, { useState } from 'react';

function FaqSection() {
    const [faq, setFaq] = useState([
        {
            question: 'What courses do you offer?',
            answer: 'We offer a wide range of courses in various subjects, including science, technology, engineering, mathematics, humanities, and social sciences. Our courses are designed for different education levels, from primary school to university',
            open: false
        },
        {
            question: 'How Can Teachers Effectively Manage a Diverse Classroom?',
            answer: 'We offer a wide range of courses in various subjects, including science, technology, engineering, mathematics, humanities, and social sciences. Our courses are designed for different education levels, from primary school to university.',
            open: false
        },
        {
            question: 'How Is Special Education Delivered in Inclusive Classrooms?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua do amet sint. Velit officia consequat duis enim velit mollit.',
            open: false
        }
    ]);

    const toggleFaq = (index) => {
        setFaq(faq.map((item, i) => ({
            ...item,
            open: i === index ? !item.open : false
        })));
    }

    return (
        <section className="max-w-4xl mx-auto ">
            <div className="space-y-4">
                {faq.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                            onClick={() => toggleFaq(index)}
                        >
                            <div className='flex items-center gap-3'>
                                <span className='text-lg text-gray-600 font-bold'>0{index + 1}.</span>
                                <span className="text-lg font-semibold text-black">{item.question}</span>
                            </div>

                            <svg
                                className={`w-6 h-6 text-gray-400 transition-transform duration-300 ease-in-out shrink-0 ml-4 ${item.open ? 'rotate-180' : 'rotate-0'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${item.open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="px-4 pb-4 pt-2 border-t border-gray-200 bg-gray-50">
                                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FaqSection;