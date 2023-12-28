import { useState } from "react";
import FastList from "./components/FastList";
import ProgressState from "./components/ProgressState";
import SearchForm from "./components/SearchForm";
import { useSynoAntonyms } from "./hooks/useSynoAntonyms";
import "./styles/badge.css";
import EmptyState from "./components/animation/EmptyState";
import Loading from "./components/status/Loading";

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

  return (
    <main className="combo">
      <SearchForm
        isLoading={status === "loading"}
        setSearchWord={(word) => setSearchWord(word)}
      />
      {notFound && <EmptyState searchWord={searchWord} />}

      {noDataRecieved ? null : (
        <section className="words">
          <div>
            <FastList
              status={status}
              extendWords={() =>
                setExtendsWords({
                  ...extendsWords,
                  synDefault:
                    extendsWords.synDefault >= words.antonyms.length
                      ? words.antonyms.length
                      : extendsWords.synDefault + 10,
                })
              }
              badgeclass="badge syno-badge"
              wordType={"synonyms"}
              words={
                words.synonyms
                  ? words.antonyms.slice(0, extendsWords.synDefault)
                  : []
              }
              currentShownWords={extendsWords.synDefault}
            />
          </div>
          <div>
            <FastList
              status={status}
              extendWords={() =>
                setExtendsWords({
                  ...extendsWords,
                  antoDefault:
                    extendsWords.antoDefault >= words.antonyms.length
                      ? words.antonyms.length
                      : extendsWords.antoDefault + 10,
                })
              }
              badgeclass="badge ant-badge"
              wordType={"antonyms"}
              words={
                words.antonyms
                  ? words.synonyms.slice(0, extendsWords.antoDefault)
                  : []
              }
              currentShownWords={extendsWords.antoDefault}
            />
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
