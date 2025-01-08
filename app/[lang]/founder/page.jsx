import { getTranslations } from '../../config/i18n';
import Founder from '../components/Founder';

export async function generateMetadata({ params }) {
  const lang = params?.lang || 'vi';
  const dict = await getTranslations(lang);
  
  return {
    title: `${dict.founder.title} | immortality.vn`,
    description: dict.founder.description,
    openGraph: {
      title: dict.founder.title,
      description: dict.founder.description,
      images: [
        {
          url: '/images/og/founder.jpg',
          width: 1200,
          height: 630,
          alt: dict.founder.title,
        },
      ],
    },
  };
}

export default async function FounderPage({ params }) {
  const lang = params?.lang || 'vi';
  const dict = await getTranslations(lang);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Founder 
        title={dict.founder.title}
        description={dict.founder.description}
        bio={dict.founder.bio}
        birthDateLabel={dict.founder.birthDate}
        locationLabel={dict.founder.location}
        expertiseLabel={dict.founder.expertise}
        roles={dict.founder.roles}
      />
    </div>
  );
} 