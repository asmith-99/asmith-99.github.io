import Project from "./Project";
import resume from "../resume.json";
import styles from "./ProjectsPage.module.scss";

export default function ProjectsPage() {
  console.log(resume.projects[0]);
  const academicProjects = resume.projects.filter(
    (project) => project.isAcademic
  );
  const personalProjects = resume.projects.filter(
    (project) => !project.isAcademic
  );
  return (
    <div className={styles["container"]}>
      <section className={styles["about-section"]}>
        <h1>Personal Projects</h1>
        <p>
          These are projects which I completed on my own time for my own
          personal interest, or to solve a problem I had. Hover over them or
          click 'More...'
        </p>
      </section>
      {personalProjects.map((projectDetails) => (
        <Project {...projectDetails} key={projectDetails.name} />
      ))}
      <section className={styles["about-section"]}>
        <h1>Academic Projects</h1>
        <p>
          These are projects which I completed as a part of my education. Hover
          over them or click 'More...'
        </p>
      </section>
      {academicProjects.map((projectDetails) => (
        <Project {...projectDetails} key={projectDetails.name} />
      ))}
    </div>
  );
}
