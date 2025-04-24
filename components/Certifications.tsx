import CertificationCard from "./CertificationCard";

const Certifications = () => {
  return (
    <div className="wrapper">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <CertificationCard
          img="/img/certi1.png"
          title="Full Stack Web Dev"
          link="https://www.udemy.com/certificate/UC-bdc3896d-da1d-47b5-bb61-16141ac81e6e/"
        />
        <CertificationCard
          img="/img/certi2.png"
          title="Cloud Fundamentals"
          link=""
        />
        <CertificationCard
          img="/img/certi3.png"
          title="Cybersecurity Basics"
          link="https://www.coursera.org/account/accomplishments/verify/2J3K7Q6F5G4H"
        />
      </div>
    </div>
  );
};

export default Certifications;
