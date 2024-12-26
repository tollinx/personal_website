import Hero from "../components/Hero";
import ProjectsGrid from "../components/ProjectsGrid";
import ExperienceGrid from "../components/ExperienceGrid";
import Carousel from "../components/Carousel";

const Homepage = () => {
  return (
    <div className="bg-beige dark:bg-teal">
      < Hero />
      < ExperienceGrid />
      {/* < Carousel /> */}
      < ProjectsGrid />
    </div>
  );
};

export default Homepage;
