import { FiArrowUpRight } from "react-icons/fi";
import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold">Let us create awesome products!</h2>
        <p className="text-lg tracking-wide font-medium text-center">
          I am always open to discussing your project, improving your online
          presence, or helping with Your website design and converting
          challenges.
        </p>
        
        {/* Change Say Hello to Download Resume */}
        <a
          href="https://drive.google.com/file/d/128zXoMzhLcexwieWVFsxEF5v_k2ZcZia/view?usp=drive_link" // Your resume file path here
          download
        >
          <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
            Download Resume
          </button>
        </a>
      </div>
      
      <div className="mt-8 flex items-center flex-wrap gap-8 justify-center">
        <SocialLink title="Github" link="https://github.com/pandittayush" />
        <SocialLink title="Leetcode" link="https://leetcode.com/u/ayushpandey121/" />
        <SocialLink
          title="Linkedin"
          link="https://www.linkedin.com/in/ayush-pandey-42a6a5254/"
        />
        <SocialLink
          title="Facebook"
          link="https://www.facebook.com/aarush.pandey.7146"
        />
        <SocialLink title="Nextjs" link="https://vercel.com/noorjsdivs" />
      </div>
    </div>
  );
};

export default Contact;
