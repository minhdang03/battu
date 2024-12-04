export default function Founder() {
  const founders = [
    {
      name: "Lữ Minh Đăng",
      role: "Đồng sáng lập & CEO",
      image: "/images/founder/luminhdang.jpg",
      birthDate: "08/March/1995",
      location: "Sydney, Australia",
      joinDate: "01/01/2014",
      bio: "Người bất tử",
      expertise: ["Tâm lý học", "Vật lý lượng tử", "Coder", "Photographer"]
    },
    {
      name: "Huỳnh Phú Sang",
      role: "Đồng sáng lập & CTO",
      image: "images/founder/huynhphusang.jpg",
      birthDate: "01/01/1963",
      location: "TP.HCM, Việt Nam",
      joinDate: "01/01/1970",
      bio: "Người bất tử",
      expertise: ["AI Vũ trụ", "Y học vũ trụ", "Trí tuệ vũ trụ", "Phong thuỷ vũ trụ"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Đội Ngũ Sáng Lập
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-gray-400 text-lg">
            Những người tiên phong trong hành trình khám phá bí mật của sự bất tử
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {founders.map((founder, index) => (
            <div key={index} className="group">
              {/* Founder Card */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm 
                border border-gray-700/50 rounded-2xl overflow-hidden
                hover:border-purple-500/30 transition-all duration-500
                hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]">
                
                {/* Image Container */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-2xl font-bold text-white mb-2">{founder.name}</h3>
                    <p className="text-purple-400 font-medium">{founder.role}</p>
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-6 space-y-4">
                  {/* Bio */}
                  <p className="text-gray-300 leading-relaxed">
                    {founder.bio}
                  </p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700/50">
                    <div>
                      <p className="text-sm text-gray-400">Ngày sinh</p>
                      <p className="text-gray-300">{founder.birthDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Địa điểm</p>
                      <p className="text-gray-300">{founder.location}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-sm text-gray-400">Tham gia từ</p>
                      <p className="text-gray-300">{founder.joinDate}</p>
                    </div>
                  </div>

                  {/* Expertise Tags */}
                  <div className="pt-4 border-t border-gray-700/50">
                    <p className="text-sm text-gray-400 mb-3">Chuyên môn</p>
                    <div className="flex flex-wrap gap-2">
                      {founder.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-sm bg-purple-900/30 text-purple-300 rounded-full
                            border border-purple-700/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
