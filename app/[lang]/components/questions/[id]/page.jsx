import { questionCategories } from '../../../../data/questions';
import QuestionList from '../QuestionList';

export default function CategoryPage({ params }) {
  const category = questionCategories.categories.find(cat => cat.id === params.id);

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