import { getTranslations } from '../../../../config/i18n'
import questionCategories from '../../data/questions'

export default async function QuestionPage({ params }) {
  const lang = params?.lang || 'vi'
  const dict = await getTranslations(lang)
  const questionId = params?.id

  // Tìm câu hỏi theo ID
  const category = questionCategories.categories.find(cat => 
    cat.questions.some(q => q.id === questionId)
  )
  const question = category?.questions.find(q => q.id === questionId)

  if (!question) {
    return <div>Question not found</div>
  }

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-4">{question.title}</h1>
      <p className="text-gray-600">{question.answer}</p>
    </div>
  )
} 