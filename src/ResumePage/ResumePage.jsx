import styles from "./ResumePage.module.scss";

export default function ResumePage() {
  return (
    <div className={styles["content"]}>
      <div>
        Want to download a copy? Click{" "}
        <a href="/Resume draft 2.pdf" download="Aiden Smith.pdf">
          here
        </a>
      </div>
      <object
        className={styles["embedded-resume"]}
        data="/Resume draft 2.pdf"
        type="application/pdf"
        standby="hello? this thing on?"
      >
        <p>
          Sorry, it looks like your browser does not support inline PDFs. Please
          <a href="/Resume draft 2.pdf" download="Aiden Smith.pdf">
            download the PDF
          </a>
          .
        </p>
      </object>
    </div>
  );
}
