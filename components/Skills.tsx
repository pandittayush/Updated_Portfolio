import { FaLaptopCode } from "react-icons/fa";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const skills = [
  { title: "🐍 Python", link: "https://www.python.org/" },
  { title: "💻 C++", link: "https://isocpp.org/" },
  { title: "☕ Java", link: "https://www.java.com/en/" },
  { title: "🟨 JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { title: "⚛️ ReactJS", link: "https://react.dev/" },
  { title: "🍃 NodeJS", link: "https://nodejs.org/en" },
  { title: "🟦 TypeScript", link: "https://www.typescriptlang.org/" },
  { title: "🚀 NextJS", link: "https://nextjs.org/" },
  { title: "📦 Redux Toolkit", link: "" },
  { title: "🌐 ExpressJS", link: "https://expressjs.com/" },
  { title: "🍃 MongoDB", link: "https://www.mongodb.com/" },
  { title: "🔥 Firebase", link: "https://firebase.google.com/" },
  { title: "🎨 TailwindCSS", link: "https://tailwindcss.com/" },
  { title: "🧠 Sanity.io", link: "https://www.sanity.io/" },
  { title: "📝 HTML5", link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5" },
  { title: "🎨 CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { title: "🧑‍💻 VS Code", link: "https://code.visualstudio.com/" },
  { title: "🧪 Atom", link: "https://github.blog/2022-06-08-sunsetting-atom/" },
  { title: "🐱 GitHub", link: "https://github.com/" },
  { title: "🖌️ UI Design", link: "https://www.figma.com/" },
  { title: "🎯 Figma", link: "https://www.figma.com/" },
  { title: "📐 Canva", link: "https://www.canva.com/" },
  { title: "🖋️ Adobe Illustrator", link: "https://www.adobe.com/products/illustrator/free-trial-download.html" },
  { title: "🏷️ Brand & Logo Design", link: "https://dribbble.com/" },
  { title: "🌍 Website Design", link: "https://themeforest.net/" },
  { title: "⚡ Vercel", link: "https://vercel.com/" },
  { title: "📡 Netlify", link: "https://www.netlify.com/" },
];

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<FaLaptopCode />} />
      <div className="flex gap-4 flex-wrap">
        {skills.map((skill, index) => (
          <SkillsInput key={index} title={skill.title} link={skill.link} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
