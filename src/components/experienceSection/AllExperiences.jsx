import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Senior Payroll Lead",
    company: "WeWork",
    date: "2022 - 2024",
    responsibilities: [
      "Did payroll for 2000+ employees.",
      "USA, Canada, and Global payrolls.",
      "Used Workday and cloudpay to process the payrolls.",
      "Worked with the HR team to ensure accurate payroll.",
    ],
  },
  {
    job: "Full Stack Developer",
    company: "Columbia Engineering Coding Boot Camp",
    date: "2024 - 2025",
    responsibilities: [
      "Covering HTML, CSS, JavaScript, Node.js, React, TypeScript, and more",
      "Collaborated on full-stack applications using Git, GitHub, and agile workflows."
    ],
  },
  {
    job: "Front-End Developer",
    company: "freeBootCamp.org",
    date: "2025 - Present",
    responsibilities: [
      "Certification in HTML, CSS, and Javascript.",
      "Learning React, Node.js, and Express.",
      "Working on projects to build a portfolio.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
