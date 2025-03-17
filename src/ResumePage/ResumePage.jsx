import MoonLoader from "../components/MoonLoader";
import styles from "./ResumePage.module.scss";
import { useState } from "react";

export default function ResumePage() {
  const [pdfLoaded, setPdfLoaded] = useState(true);

  return (
    <div className={styles["content"]}>
      <div className={styles["explanation"]}>
        Want to download a copy? Click{" "}
        <a href="/Resume draft 2.pdf" download="Aiden Smith.pdf">
          here.
        </a>{" "}
        Or check it out, embedded below:
      </div>
      <object
        className={styles["embedded-resume"]}
        data="/Resume draft 2.pdf"
        type="application/pdf"
        onLoad={() => setPdfLoaded(true)}
      >
        <p>
          Sorry, it looks like your browser does not support inline PDFs. Please
          <a href="/Resume draft 2.pdf" download="Aiden Smith.pdf">
            download the PDF
          </a>
          .
        </p>
      </object>
      {!pdfLoaded && (
        <div className={styles["loading-container"]}>
          <MoonLoader loading={true} label={"Loading Resume..."} />
        </div>
      )}
    </div>
  );
}
