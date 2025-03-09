import Education from "./Education";
import WorkHistory from "./WorkHistory";
import resume from "../resume.json";
import styles from "./AboutPage.module.scss";

function AboutPage() {
  return (
    <div>
      <section>
        <h1>About me</h1>Hi! I'm a full-stack software developer, forever
        student, and scientist at heart. I love to learn how things work from
        the atoms-up.
      </section>
      <section>
        <h1>Education</h1>
        <Education />
      </section>
      <section>
        <h1>Work</h1>
        {resume.experience.map((work) => (
          <WorkHistory {...work} />
        ))}
      </section>
      <section>
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
