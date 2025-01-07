import { questionCategories } from '../data/questions';
import Link from 'next/link';

export default function QuestionsPage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-2">{questionCategories.title}</h1>
      <p className="text-gray-400 text-center mb-8">{questionCategories.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {questionCategories.categories.map((category) => (
          <Link
            key={category.id}
            href={`/questions/${category.id}`}
            className="p-6 rounded-lg border border-gray-700 hover:bg-gray-800/50 
              transition-colors duration-200"
          >
            <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
            <p className="text-gray-400">{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
} 