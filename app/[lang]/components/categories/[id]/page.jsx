import { getTranslations } from '../../../../config/i18n'
import questions from '../../data/questions'
import QuestionList from '../../Questions/QuestionList'

export function generateStaticParams() {
  return questions.categories.map((category) => ({
    id: category.id,
  }))
}

export default async function CategoryPage({ params }) {
  const lang = params?.lang || 'vi'
  const dict = await getTranslations(lang)
  const categoryId = params?.id

  const category = questions.categories.find(cat => cat.id === categoryId)

  if (!category) {
    return <div>Category not found</div>
  }

  return (
    <QuestionList
      title={category.title}
      description={category.description}
      questions={category.questions}
      lang={lang}
    />
  )
} 