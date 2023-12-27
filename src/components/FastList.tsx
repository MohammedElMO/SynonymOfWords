import Badge from "./Badge";

function FastList({ words, wordType }: { words: string[]; wordType: string }) {
  return (
    <>
      <h2>{wordType}</h2>
      <ul>
        {words && words.map((word, index) => <Badge word={word} key={index} />)}
      </ul>
    </>
  );
}

export default FastList;
