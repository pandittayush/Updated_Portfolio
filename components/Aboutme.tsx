import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  const paragraphs = [
    "I am a web developer with 1+ years of experience in React. I have a strong foundation in front-end & back-end development and am skilled in creating user-friendly and responsive web applications using React and its ecosystem."
  ];

  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        {paragraphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </div>
  );
};

export default Aboutme;
