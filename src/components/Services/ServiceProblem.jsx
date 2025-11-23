import img1 from "../../assets/images/Problem.svg?react";
import img2 from "../../assets/images/Azirrigation həlli.svg?react";
import img3 from "../../assets/images/Faydaları.svg?react";
import "./style.css";
import { useTranslation } from "react-i18next";
const ServiceProblem = () => {
  const { t } = useTranslation();
  const problemsData = [
    {
      id: 1,
      title: t("problem_title"),
      desc: t("problem_desc"),
      img: img1,
    },
    {
      id: 2,
      title: t("solution_title"),
      desc: t("solution_desc"),
      img: img2,
    },
    {
      id: 3,
      title: t("benefits_title"),
      desc: t("benefits_desc"),
      img: img3,
    },
  ];
  return (
    <section className="services-page">
      <div className="service-container">
        <div className="problem-cards">
          {problemsData?.map((problem) => (
            <div className="problem-card" key={problem.id}>
              <div className="problem-img">
                <img src={problem.img} alt="" />
              </div>
              <div className="problem-content">
                <h3>{problem.title}</h3>
                <p>{problem.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProblem;
