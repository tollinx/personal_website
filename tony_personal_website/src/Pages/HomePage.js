import Hero from "../components/Hero";
import ProjectsGrid from "../components/ProjectsGrid";
import ExperienceGrid from "../components/ExperienceGrid";
import Certifications from "../components/Certifications";

const Homepage = () => {
  return (
    <div className="bg-beige dark:bg-teal">
      < Hero />
      < ExperienceGrid />
      < Certifications />
    </div>
  );
};

export default Homepage;
