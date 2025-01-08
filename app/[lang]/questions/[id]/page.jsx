'use client';

import { useState } from 'react';
import questionCategories from '../../components/data/questions';
import QuestionList from '../../components/Questions/QuestionList';

export default function CategoryPage({ params }) {
  const [category] = useState(() => 
    questionCategories.categories.find(cat => cat.id === params.id)
  );

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Không tìm thấy danh mục
        </h1>
      </div>
    );
  }

  return (
    <QuestionList
      title={category.title}
      description={category.description}
      questions={category.questions}
    />
  );
} 