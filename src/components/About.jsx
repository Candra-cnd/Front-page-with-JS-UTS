const skills = [
  "Python",
  "SQL",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Matplotlib",
  "Machine Learning",
  "Deep Learning",
  "Data Science",
  "Data Analysis",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "PHP",
  "Laravel",
];

const tools = [
  "VSCode",
  "GitHub",
  "MySQL",
  "Jupyter Notebook",
  "Vite",
  "Figma",
  "Cisco",
  "Linux",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-white/70 dark:bg-gray-900/60 backdrop-blur-md rounded-xl max-w-7xl mx-auto my-10 shadow-md"
    >
      <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">
        About Me
      </h2>

      <p className="text-center max-w-3xl mx-auto mb-8 text-gray-700 dark:text-white leading-relaxed">
        I am an Informatics Engineering student with an interest in Data
        Science, Machine Learning, and Software Development. I have worked
        with Python and various data science and machine learning techniques,
        as well as web development using technologies such as React, PHP,
        Laravel, and MySQL. I am continuously developing my technical skills
        through academic projects, research, and practical learning.
      </p>

      <div className="grid md:grid-cols-2 gap-12 text-center">
        {/* Skills Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 dark:text-white">
            Skills
          </h3>

          <ul className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Tools Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 dark:text-white">
            Tools & Technologies
          </h3>

          <ul className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <li
                key={index}
                className="bg-green-100 dark:bg-green-900 px-3 py-1 rounded"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}