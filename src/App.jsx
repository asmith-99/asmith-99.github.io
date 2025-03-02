import "./App.css";

function App() {
  return (
    <div className="central">
      <header className="header-bar">
        Aiden Smith
        <div className="star">
          <span>★</span>
        </div>
      </header>
      <section>
        <h1>About me</h1>Hi! I'm a full-stack software developer, forever
        student, and scientist at heart. I love to learn how things work from
        the atoms-up.
      </section>
      <section>
        <h1>Education</h1>

        <div className="education">
          <img src="/ubc_crest.png" />
          <div className="education-details">
            <div>University of British Columbia</div>
            <div>BSc, Combined Major in Computer Science and Physics</div>
            <div>2016—2021, Graduated with Distinction</div>
          </div>
        </div>
      </section>
      <section>
        <h1>Work</h1>
        <h3>Castofly Technologies Inc.</h3>
        <div className="job-title">
          Lead Software Developer / Full Stack Engineer
        </div>
        <p>
          Started by handling the migration of a standalone java application to
          a modern web app, featuring seamless real-time collaboration, audio
          and video editing, full multi-user undo and redo, permissions
          management, and a hierarchical project organization structure.
        </p>
        <p>
          Designed and implemented a backend using AWS services including
          Lambda, Route53, Cloudfront, S3, DynamoDB, SNS, and Secrets Manager.
        </p>
        <p>
          Implemented the entire backend using infrastructure as code (CDK),
          allowing for easy provisioning of identical copies of the production
          environment (e.g for new developers).
        </p>
        <p>
          Assisted with the creation and ongoing development of a video
          generation pipeline for converting user-generated content into
          high-quality downloadable videos using FFMPEG, Node, and Konva.
        </p>
        <h3>University of British Columbia</h3>
        <div className="job-title">
          Physics and Astronomy Demo Room Assistant
        </div>
        <p>
          Prepared, facilitated, and ran physics demonstrations for physics
          courses at UBC.
        </p>
        <p>
          Worked with professors and outreach staff to decide on appropriate
          physics demos to illustrate physics concepts.
        </p>
        <p>
          Maintained, repaired, designed, and created physics demonstrations.
        </p>
        <p>
          Designed and implemented a new demonstration room website featuring a
          catalogue of all demonstrations and updated or rewrote technical
          writing for over a hundred demonstrations.
        </p>
        <p>
          Worked with physics outreach staff to assist with/run physics-themed
          science shows.
        </p>
      </section>
      <section>
        <h1>Skills</h1>
      </section>
      <section>
        <h1>Projects</h1>
      </section>
    </div>
  );
}

export default App;
