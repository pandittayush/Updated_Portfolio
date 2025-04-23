import Image from "next/image";

interface Props {
  title: string;
  img: string;
  link: string;
}

const CertificationCard = ({ title, img, link }: Props) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="w-[350px] border border-blue-600 overflow-hidden relative rounded-lg shadow-md cursor-pointer">
        <div className="overflow-hidden">
          <Image
            src={img}
            alt={title}
            width={350}
            height={250}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
          />
        </div>
        <p className="absolute bottom-0 w-full py-1 bg-blue-600 text-white text-center font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
          {title}
        </p>
      </div>
    </a>
  );
};

export default CertificationCard;
