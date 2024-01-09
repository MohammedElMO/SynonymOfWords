import Badge from "./Badge";
import ProgressState from "./ProgressState";

type FastListT = {
  words: string[];
  wordType: string;
  badgeclass: string;
  extendWords: () => void;
  currentShownWords: number;
  status: Status;
  allWordsCount: number;
};

const FastList: React.FC<FastListT> = ({
  words,
  wordType,
  badgeclass,
  extendWords,
  currentShownWords,
  status,
  allWordsCount,
}) => {
  const isDone = status === "done";

  return (
    <>
      <div className="wrapper">
        <h2 className="word--type">{wordType}</h2>
        <ProgressState status={status} />
      </div>
      {isDone && (
        <>
          <ul className="words--menu">
            {words &&
              words.filter(Boolean).map((word, index) => {
                return (
                  <Badge
                    words={words.length}
                    className={badgeclass}
                    word={word}
                    key={index}
                  />
                );
              })}
            {currentShownWords <= allWordsCount && (
              <div onClick={extendWords} className="show--more">
                Show more ...
              </div>
            )}
          </ul>
        </>
      )}
    </>
  );
};

export default FastList;
