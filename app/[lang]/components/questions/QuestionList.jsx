'use client';

import { useState } from 'react';

export default function QuestionList({ title, description, questions }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-4xl mx-auto py-12 sm:py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
          {title}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {questions.map((question, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center"
            >
              <span className="text-gray-900 font-medium pr-4">{question}</span>
              <svg
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 
                  ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </button>
            
            {openIndex === index && (
              <div className="px-6 pb-4">
                <div className="pt-4 border-t">
                  <p className="text-gray-600">
                    {/* Nội dung câu trả lời sẽ được thêm sau */}
                    Đang cập nhật nội dung chi tiết...
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 