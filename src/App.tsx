import { useState } from "react";
import FastList from "./components/FastList";
import SearchForm from "./components/SearchForm";
import EmptyState from "./components/animation/EmptyState";
import { useSynoAntonyms, wordAntoSynonymsType } from "./hooks/useSynoAntonyms";
import "./styles/badge.css";
import DoneToaster from "./assets/animations/toaster/DoneToaster";

function App() {
  const limitWord = { synDefault: 10, antoDefault: 10 };
  const [searchWord, setSearchWord] = useState("");
  const [extendsWords, setExtendsWords] = useState(limitWord);
  const { status, words } = useSynoAntonyms({ word: searchWord });
  const notFound =
    !!!words.antonyms?.length &&
    !!!words.antonyms?.length &&
    status !== "loading" &&
    status !== "start";

  const noDataRecieved = !!!words.antonyms?.length && !!!words.antonyms?.length;
  // const synonyms = !noDataRecieved ? words.synonyms.length : 0;
  // const antonyms =!noDataRecieved ? words.antonyms.length : 0;

  const extendHandler = (
    step: number,
    token: keyof typeof limitWord,
    wordType: keyof wordAntoSynonymsType
  ) => {
    setExtendsWords((prev) => {
      if (prev[token] >= words[wordType].length)
        return { ...prev, [token]: words[wordType].length };

      return { ...prev, [token]: prev[token] + step };
    });
  };

  return (
    <main className="combo">
      {status === "done" && <DoneToaster isClicked={true} />}
      <SearchForm
        isLoading={status === "loading"}
        setSearchWord={(word) => setSearchWord(word)}
      />
      {notFound && <EmptyState searchWord={searchWord} />}

      {!noDataRecieved && (
        <section className="words">
          <div className="">
            <FastList
              allWordsCount={words.synonyms.length}
              status={status}
              extendWords={() => extendHandler(10, "synDefault", "synonyms")}
              badgeclass="badge syno-badge"
              wordType={"antonyms"}
              words={words.antonyms.slice(0, extendsWords.synDefault)}
              currentShownWords={extendsWords.synDefault}
            />
          </div>
          <div>
            <FastList
              allWordsCount={words.antonyms.length}
              status={status}
              extendWords={() => extendHandler(10, "antoDefault", "synonyms")}
              badgeclass="badge ant-badge"
              wordType={"synonyms"}
              words={words.synonyms.slice(0, extendsWords.antoDefault)}
              currentShownWords={extendsWords.antoDefault}
            />
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
