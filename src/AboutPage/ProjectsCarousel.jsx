import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import resume from "../resume.json";
import styles from "./ProjectsCarousel.module.scss";
import { useMemo } from "react";
import { useNavigate } from "react-router";

export default function ProjectsCarousel() {
  const navigate = useNavigate();

  const projects = useMemo(() => {
    const personalProjects = resume.projects.filter(
      (project) => !project.isAcademic
    );
    const academicProjects = resume.projects.filter(
      (project) => project.isAcademic
    );
    return [...personalProjects, ...academicProjects];
  }, [resume]);

  return (
    <div className={styles["slider-container"]}>
      <Slider
        dots={true}
        slidesToShow={1}
        slidesToScroll={1}
        swipeToSlide={true}
        infinite={true}
        variableWidth={true}
        dotsClass={`slick-dots ${styles["dots"]}`}
      >
        {projects.map(({ name, blurb, coverImage }) => {
          const handleClick = () =>
            navigate("/projects#" + encodeURIComponent(name));
          return (
            <div className={styles["project-container"]}>
              <span className={styles["project-name"]} onClick={handleClick}>
                {name}
              </span>
              <img className={styles["project-image"]} src={coverImage} />
              <div className={styles["project-blurb"]}>{blurb}</div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
