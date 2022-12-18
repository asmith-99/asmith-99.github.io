import { lorem } from "..";

const CatbotPage = () => {
  return (
    <>
      Hello, world! This should be a different page than the other one...
      <p>{lorem.generateParagraphs(1)}</p>
      <p>{lorem.generateParagraphs(1)}</p>
      <p>{lorem.generateParagraphs(1)}</p>
      <p>{lorem.generateParagraphs(1)}</p>
    </>
  );
};

export default CatbotPage;
