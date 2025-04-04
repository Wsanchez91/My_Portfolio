import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      I’m a web developer with a focus on building clean, responsive, and user-friendly interfaces. My core stack includes JavaScript, HTML, CSS, React, TypeScript, TailwindCSS, Node.js, and Python. I enjoy turning ideas into real, functional products — whether it’s a frontend UI or a backend solution.

With a background in payroll, I bring a strong understanding of data accuracy, process automation, and secure handling of information — all of which influence how I build and structure my applications.

I also maintain a forex trading journal, which has taught me discipline, data analysis, and strategic thinking — the same mindset I bring to writing scalable and maintainable code.

I’m always learning, always building, and always looking for ways to push my skills further.

Check out my projects below — and feel free to reach out if you’d like to collaborate.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
