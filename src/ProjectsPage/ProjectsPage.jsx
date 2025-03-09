import Project from "./Project";
import resume from "../resume.json";
import styles from "./ProjectsPage.module.scss";

export default function ProjectsPage() {
  const academicProjects = resume.projects.filter(
    (project) => project.isAcademic
  );
  const personalProjects = resume.projects.filter(
    (project) => !project.isAcademic
  );
  return (
    <div className={styles["container"]}>
      <h2>Personal Projects</h2>
      <p>
        These are projects which I completed on my own time for my own personal
        interest, or to solve a problem I had.
      </p>
      {personalProjects.map((projectDetails) => (
        <Project {...projectDetails} />
      ))}
      <h2>Academic Projects</h2>
      <p>These are projects which I completed as a part of my education.</p>
      {academicProjects.map((projectDetails) => (
        <Project {...projectDetails} />
      ))}
    </div>
  );
}
