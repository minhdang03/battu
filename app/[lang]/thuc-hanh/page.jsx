import Link from "next/link";
import { practiceContent } from "../components/data/practice";

export default function Practice({ params }) {
  const lang = params?.lang || 'vi'
  const content = practiceContent[lang];

  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            {content.title}
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-xl">{content.subtitle}</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {content.sections.map((section, index) => {
            const gradients = [
              "from-blue-900/50 to-purple-900/50",
              "from-purple-900/50 to-pink-900/50",
              "from-pink-900/50 to-red-900/50",
              "from-red-900/50 to-orange-900/50",
              "from-orange-900/50 to-yellow-900/50"
            ];
            const borders = [
              "border-blue-700/30",
              "border-purple-700/30",
              "border-pink-700/30",
              "border-red-700/30",
              "border-orange-700/30"
            ];
            const hovers = [
              "hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)]",
              "hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(147,51,234,0.5)]",
              "hover:border-pink-500/50 hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.5)]",
              "hover:border-red-500/50 hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.5)]",
              "hover:border-orange-500/50 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)]"
            ];
            const textColors = [
              "text-blue-400 group-hover:text-blue-300",
              "text-purple-400 group-hover:text-purple-300",
              "text-pink-400 group-hover:text-pink-300",
              "text-red-400 group-hover:text-red-300",
              "text-orange-400 group-hover:text-orange-300"
            ];
            const subtitleColors = [
              "text-blue-200",
              "text-purple-200",
              "text-pink-200",
              "text-red-200",
              "text-orange-200"
            ];
            const listColors = [
              "group-hover:text-blue-100",
              "group-hover:text-purple-100",
              "group-hover:text-pink-100",
              "group-hover:text-red-100",
              "group-hover:text-orange-100"
            ];
            const statusBorders = [
              "border-blue-900/50",
              "border-purple-900/50",
              "border-pink-900/50",
              "border-red-900/50",
              "border-orange-900/50"
            ];

            return (
              <section
                key={index}
                className={`group bg-gradient-to-br ${gradients[index]} backdrop-blur-sm 
                  border ${borders[index]} rounded-2xl p-6 
                  ${hovers[index]} transition-all duration-500 
                  flex flex-col h-full ${index === 4 ? "md:col-span-2 xl:col-span-1" : ""}`}
              >
                <h2 className={`text-xl font-semibold mb-4 ${textColors[index]} transition-colors`}>
                  {section.title}
                </h2>
                <div className="space-y-4 text-gray-300 flex-grow">
                  <p className={`font-medium ${subtitleColors[index]}`}>{section.subtitle}</p>
                  <ul className={`list-disc list-inside space-y-2 pl-4 ${listColors[index]} transition-colors`}>
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className={`text-sm ${textColors[index]} mt-4 pt-4 border-t ${statusBorders[index]}`}>
                    {section.status}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}