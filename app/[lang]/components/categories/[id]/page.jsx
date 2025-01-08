import { categories } from '../../data/categories';
import QuestionList from '../../Questions/QuestionList';

export default function CategoryPage({ params }) {
  const category = categories.find(cat => cat.id === params.id);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <QuestionList
      title={category.title}
      description={category.description}
      questions={category.questions}
    />
  );
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }));
} 