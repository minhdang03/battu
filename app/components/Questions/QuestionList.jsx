'use client';

import { useState } from 'react';

export default function QuestionList({ title, questions, description }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-2">{title}</h1>
      <p className="text-gray-400 text-center mb-8">{description}</p>
      
      <div className="space-y-4">
        {questions.map((question, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-4 py-3 text-left flex justify-between items-center
                hover:bg-gray-800/50 transition-colors duration-200"
            >
              <span className="font-medium">{question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-200 
                  ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {openIndex === index && (
              <div className="px-4 py-3 bg-gray-800/30">
                <p className="text-gray-300">
                  {/* Nội dung câu trả lời sẽ được thêm sau */}
                  Đang cập nhật nội dung...
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 