export default function Projects() {
  const projectList = [
    {
      organization: "Qonita Wisata",
      date: "Jan 2020 - Mar 2020",
      description: "Data input and editing using Adobe Photoshop and Microsoft Excel.",
      technologies: ["Photoshop", "Excel"],
      colorClass: "green",
    },
    {
      organization: "Btech & InfraDigital Foundation",
      date: "Jun 2020 - Nov 2021",
      description: "Learn 3 levels: CompTIA Linux+, Security+, and CySA+.",
      technologies: ["Linux+", "Security+", "CySA+"],
      colorClass: "orange",
    },
    {
      title: "Zilenial Farmer Project Development of Hydroponic System for Watering Plants Lembang Agri",
      organization: "Institut Teknologi Nasional Bandung",
      date: "April 2023 - Juni 2023",
      description: "IoT Components Speaker.",
      technologies: ["IoT", "Blynk"],
      image: "/assets/IMG-20230623-WA0024.jpg", // Ganti dengan gambar yang kamu miliki
      colorClass: "green",
    },
    {
      title: "Huawei National Exam",
      organization: "Huawei ICT",
      date: "February 2024",
      description: "Learn Online Exam National Modul Huawei Networking",
      technologies: ["Huawei"],
      image: "/assets/IMG-20231125-WA0002.jpg",
      colorClass: "orange",
    },
  ];

  const colorClasses = {
    green: {
      bg: "bg-green-500",
      text: "text-green-600",
      textDark: "dark:text-green-400",
      border: "border-green-500",
    },
    orange: {
      bg: "bg-orange-500",
      text: "text-orange-600",
      textDark: "dark:text-orange-400",
      border: "border-orange-500",
    },
  };

  return (
    <section id="projects" className="py-12 px-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Projects & Training</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projectList.map((item, index) => {
            const color = colorClasses[item.colorClass];

            return (
              <div key={index} className={`bg-white dark:bg-gray-900 p-6 rounded-lg shadow border-l-4 ${color.border}`}>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title || item.organization}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                )}

                <div className={`inline-block mb-2 px-3 py-1 text-sm text-white rounded ${color.bg}`}>
                  {item.title}
                </div>

                <h3 className={`text-xl font-semibold mb-1 ${color.text} ${color.textDark}`}>
                  {item.organization}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{item.date}</p>
                <p className="mb-3">{item.description}</p>

                <div className="mb-3 min-h-[64px]">
                  <p className="text-sm font-semibold mb-1">Technologies:</p>
                  <ul className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, i) => (
                      <li
                        key={i}
                        className="bg-gray-200 dark:bg-gray-700 px-3 py-1 text-sm rounded"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
