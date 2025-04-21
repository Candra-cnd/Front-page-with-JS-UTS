const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'PHP', 'Laravel', 'Cisco', 'Linux'];
const tools = ['VSCode', 'GitHub', 'Figma', 'Vite', 'Unity 6', 'MySql', 'Adinusa'];

export default function About() {
  return (
    <section id="about" className="p-10 bg-white/70 dark:bg-gray-900/60 backdrop-blur-md rounded-xl mx-4 md:mx-20 my-10 shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">About Me</h2>
      
      <p className="text-center max-w-2xl mx-auto mb-8 text-gray-700 dark:text-white">
      I am an Informatics Engineering student who is interested in Fullstack Web and Network development. My educational background started from elementary school in Tasikmalaya City. And from junior high school to vocational high school in Indramayu City. With the chosen major being Computer Network Engineering. That's when I started to study in the field of Networks and other Networking. I am also interested in studying in fields such as Web Developer in various programming languages ​​and various frameworks. These are the Skills and Framework Tools that I have worked on.
      </p>

      <div className="grid md:grid-cols-2 gap-12 text-center">
        {/* Skills Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 dark:text-white">Skills</h3>
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

        {/* Tools & Framework Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 dark:text-white">Tools & Framework</h3>
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
