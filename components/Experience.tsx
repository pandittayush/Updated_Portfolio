import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <ExperienceCard
          title="Programming Pathsala"
          subTitle="MERN Stack Developer 2024 June - 2024 Aug"
          icon={<SiToptal />}
        />

        <ExperienceCard
          title="Cognizify"
          subTitle="Web Developer 2024 Sep - 2024 Nov"
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="Freelancer"
          subTitle="MERN Stack Developer 2022 - 2023"
          icon={<SiFreelancer />}
        />

        <ExperienceCard
          title="Fiverr"
          subTitle="MERN Stack Developer 2021 - 2022"
          icon={<SiFiverr />}
        />
      </div>
    </div>
  );
};

export default Experience;
