import Badge from "./Badge";

function FastList({
  words,
  wordType,
  badgeclass,
  extendWords,
}: {
  words: string[];
  wordType: string;
  badgeclass: string;
  extendWords: () => void;
}) {
  return (
    <>
      <h2>{wordType}</h2>
      <ul className="words--menu">
        {words &&
          words.map((word, index) => (
            <Badge className={badgeclass} word={word} key={index} />
          ))}
        <div onClick={extendWords}>Show more ...</div>
      </ul>
    </>
  );
}

export default FastList;
