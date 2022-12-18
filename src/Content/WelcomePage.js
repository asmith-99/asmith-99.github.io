import { lorem } from "..";

const WelcomePage = () => {
  return (
    <>
      Hello, world!
      <p>{lorem.generateParagraphs(1)}</p>
      <p>{lorem.generateParagraphs(1)}</p>
      <p>{lorem.generateParagraphs(1)}</p>
      <p>{lorem.generateParagraphs(1)}</p>
    </>
  );
};

export default WelcomePage;
