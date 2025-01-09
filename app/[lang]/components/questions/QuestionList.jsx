'use client';

import Link from 'next/link';

export default function QuestionList({ title, description, questions, lang }) {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            {title}
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-xl">{description}</p>
        </div>

        {/* Questions Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {questions.map((question, index) => (
            <Link 
              key={question.id} 
              href={`/${lang}/questions/${question.id}`}
              className="group block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {question.title}
              </h3>
              <p className="mt-2 text-gray-600 line-clamp-3">
                {question.excerpt || question.answer}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 