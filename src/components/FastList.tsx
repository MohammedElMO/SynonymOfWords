import Badge from "./Badge";
import ProgressState from "./ProgressState";

function FastList({
  words,
  wordType,
  badgeclass,
  extendWords,
  currentShownWords,
  status,
}: {
  words: string[];
  wordType: string;
  badgeclass: string;
  extendWords: () => void;
  currentShownWords: number;
  status: Status;
}) {
  console.log(currentShownWords);
  return (
    <>
      <div className="wrapper">
        <h2 className="word--type">{wordType}</h2>
        <ProgressState status={status} />
      </div>
    
      {status === "done" && (
        <ul className="words--menu">
          {words &&
            words.map((word, index) => {
              if (!word) return <></>;
              return <Badge className={badgeclass} word={word} key={index} />;
            })}

          {currentShownWords === words.length && (
            <div onClick={extendWords} className="show--more">
              Show more ...
            </div>
          )}
        </ul>
      )}
    </>
  );
}

export default FastList;
