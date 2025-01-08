import { getTranslations } from '../../config/i18n';
import Link from 'next/link';

const categories = [
  {
    id: "suc-khoe",
    title: "Sức Khỏe",
    description: "Các câu hỏi về sức khỏe và phương pháp điều trị"
  },
  {
    id: "tinh-than",
    title: "Tinh Thần",
    description: "Các vấn đề về tâm lý và tinh thần"
  },
  {
    id: "moi-truong",
    title: "Môi Trường",
    description: "Tác động của môi trường đến tuổi thọ"
  }
];

export default async function QuestionsPage({ params }) {
  const lang = params?.lang || 'vi';
  const dict = await getTranslations(lang);

  return (
    <div className="max-w-4xl mx-auto py-12 sm:py-16 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        {dict.questions?.title || 'Câu Hỏi'}
      </h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        {dict.questions?.description || 'Danh sách câu hỏi thường gặp'}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/${lang}/questions/${category.id}`}
            className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {category.title}
            </h2>
            <p className="text-gray-600">
              {category.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
} 