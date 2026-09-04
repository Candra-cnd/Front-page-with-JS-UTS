export default function Projects() {
  const projectList = [
    // =========================
    // ACADEMIC PROJECTS
    // =========================
    {
      category: "Academic Project",
      title: "Machine Learning & Data Analysis",
      organization: "Academic Project",
      date: "University / Course Project",
      description:
        "Performing data preprocessing, exploratory data analysis, feature analysis, machine learning implementation, and model evaluation using Python for the topic of Tourism Data Analysis & Machine Learning: Cirebon Regency.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
      ],
      image: "/assets/visual skenario what if.png",
      colorClass: "green",
    },

    {
      category: "Academic Project",
      title: "K-Means & Gaussian Mixture Model Analysis",
      organization: "Machine Learning Project",
      date: "University / Course Project",
      description:
        "Comparing K-Means and Gaussian Mixture Models across various cluster configurations and covariance types, including model evaluation using AIC and BIC on height and weight data.",
      technologies: [
        "Python",
        "K-Means",
        "GMM",
        "Scikit-learn",
        "AIC/BIC",
      ],
      image: "/assets/GMM SKALA ASLI WEIGHT HEIGHT.png",
      colorClass: "green",
    },

    {
      category: "Academic / Research Project",
      title: "Speech Recognition & Text-to-Speech",
      organization: "Speech Recognition Project",
      date: "University / Research Project",
      description:
        "Developing feature extraction and speech recognition systems and techniques using MFCC and LPC, through experiments involving speech recognition and machine learning methods applied to variations in accents and speech intensity among speakers of regional languages ​​in Indonesia.",
      technologies: [
        "Python",
        "MFCC",
        "LPC",
        "DTW",
        "HMM",
        "LSTM",
      ],
      colorClass: "green",
    },

    {
      category: "Academic Project",
      title: "Fuzzy Logic Expert System",
      organization: "Sistem Pakar Project",
      date: "University / Course Project",
      description:
        "Developed an AI chatbot for car damage diagnosis by combining Natural Language Processing (NLP) to extract information from user complaints with Mamdani Fuzzy Logic to evaluate diagnostic conditions and generate risk assessments.",
      technologies: [
        "Python",
        "Fuzzy Logic",
        "Mamdani",
        "Scikit-fuzzy",
      ],
      image: "/assets/Screenshot 2026-09-03 142519.png",
      colorClass: "green",
    },

    // =========================
    // TECHNICAL PROJECT
    // =========================
    {
      category: "Technical Project",
      title: "IoT Components & Implementation",
      organization: "Zilenial Farmer Project — Institut Teknologi Nasional Bandung",
      date: "April 2023 - June 2023",
      description:
        "Delivered introductory materials on IoT concepts, explained basic code implementation through examples, and introduced the functions of IoT devices and components.",
      technologies: ["IoT", "Blynk", "IoT Components"],
      image: "/assets/IMG-20230623-WA0024.jpg",
      colorClass: "green",
    },

    // =========================
    // WORK EXPERIENCE
    // =========================
    {
      category: "Work Experience",
      title: "Administrative & Data Entry",
      organization: "Harum Bina Wisata (formerly Qonita Wisata)",
      date: "January 2020 - March 2020",
      description:
        "Performed daily data entry and updated records using Microsoft Excel, assisted with Hajj and Umrah savings data input, and supported administrative and content-related activities.",
      technologies: ["Microsoft Excel", "Data Entry", "Administration"],
      colorClass: "orange",
    },

    // =========================
    // TRAINING
    // =========================
    {
      category: "Certification Training",
      title: "Btech & InfraDigital Foundation",
      organization: "Btech & InfraDigital Foundation",
      date: "June 2020 - November 2021",
      description:
        "Completed learning programs covering CompTIA Linux+, Security+, and CySA+ fundamentals.",
      technologies: ["Linux+", "Security+", "CySA+"],
      image: "/assets/comptia-certifications-overview-1024x683.webp",
      colorClass: "orange",
    },

    {
      category: "Training",
      title: "Huawei National Exam",
      organization: "Huawei ICT",
      date: "February 2024",
      description:
        "Completed an online national examination program covering Huawei networking modules.",
      technologies: ["Huawei Networking"],
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
    <section
      id="projects"
      className="py-12 px-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Projects & Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projectList.map((item, index) => {
            const color = colorClasses[item.colorClass];

            return (
              <div
                key={index}
                className={`bg-white dark:bg-gray-900 p-6 rounded-lg shadow border-l-4 ${
                  color.border
                } ${
                  !item.image
                    ? "md:col-span-2 md:max-w-2xl md:mx-auto w-full"
                    : ""
                }`}
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title || item.organization}
                    className="w-full h-60 md:h-72 object-cover rounded-lg"
                  />
                )}

                {/* Category */}
                <div
                  className={`inline-block mb-2 px-3 py-1 text-sm text-white rounded ${color.bg}`}
                >
                  {item.category}
                </div>

                {/* Project / Experience Title */}
                <h3
                  className={`text-xl font-semibold mb-1 ${color.text} ${color.textDark}`}
                >
                  {item.title}
                </h3>

                {/* Organization */}
                <p className="font-medium mb-1">
                  {item.organization}
                </p>

                {/* Date */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {item.date}
                </p>

                {/* Description */}
                <p className="mb-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="mb-3 text-center">
                  <p className="text-sm font-semibold mb-2">
                    Technologies / Skills:
                  </p>

                  <ul className="flex flex-wrap justify-center gap-2">
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