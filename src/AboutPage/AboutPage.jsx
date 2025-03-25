import Education from "./Education";
import ProjectsCarousel from "./ProjectsCarousel";
import WorkHistory from "./WorkHistory";
import { cx } from "../util";
import resume from "../resume.json";
import styles from "./AboutPage.module.scss";

function AboutPage() {
  return (
    <div>
      <section className={styles["about-section"]}>
        <h1>About me</h1>
        <p>
          Hi! I'm a full-stack software developer, forever-student, and
          scientist at heart. I love to jump in the deep end, learn how things
          work from the atoms-up, and share my knowledge with others.
        </p>
        <p>
          I have the most experience working in JavaScript, but I've worked in
          C/C++, Python, MATLAB, and others.
        </p>
        <p>
          When I'm not on the job I enjoy working on hardware projects, reading
          sci-fi, playing video games and D&D, and astronomy. I also like choir
          and musical theatre, and I'm a pretty good cook!
        </p>
      </section>
      <section className={styles["about-section"]}>
        <h1>Education</h1>
        <Education />
      </section>
      <section className={styles["about-section"]}>
        <h1>Projects</h1>
        <ProjectsCarousel />
      </section>
      <section className={cx(styles["about-section"], styles["work-exp"])}>
        <h1>Work</h1>
        {resume.experience.map((work) => (
          <WorkHistory {...work} />
        ))}
      </section>
      <section className={styles["about-section"]}>
        <h1>Skills</h1>
        <div className={styles["skills-grid"]}>
          {resume.skills.map((skill) => (
            <div>{skill}</div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
