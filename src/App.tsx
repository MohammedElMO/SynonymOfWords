import { useState } from "react";
import FastList from "./components/FastList";
import ProgressState from "./components/ProgressState";
import SearchForm from "./components/SearchForm";
import { useSynoAntonyms } from "./hooks/useSynoAntonyms";
import "./styles/badge.css";
import EmptyState from "./components/animation/EmptyState";

function App() {
  const limitWord = { synDefault: 10, antoDefault: 10 };
  const [searchWord, setSearchWord] = useState("");
  const [extendsWords, setExtendsWords] = useState(limitWord);
  const { status, words } = useSynoAntonyms({ word: searchWord });

  return (
    <main className="combo">
      {/* {words.antonyms &&
        !!words.antonyms.length &&
        words.synonyms &&
        !!words.synonyms.length && (
          )} */}
      <SearchForm
        isLoading={status === "loading"}
        setSearchWord={(word) => setSearchWord(word)}
      />
      <ProgressState status={status} />
      {/* <EmptyState /> */}

      {status === "done" && (
        <section className="words">
          <div>
            <FastList
              extendWords={() =>
                setExtendsWords({
                  ...extendsWords,
                  synDefault: extendsWords.synDefault + 10,
                })
              }
              badgeclass="badge syno-badge"
              wordType={Object.keys(words)[2]}
              words={words.antonyms.slice(0, extendsWords.synDefault)}
            />
          </div>
          <div>
            <FastList
              extendWords={() =>
                setExtendsWords({ ...extendsWords, antoDefault: 20 })
              }
              badgeclass="badge ant-badge"
              wordType={Object.keys(words)[1]}
              words={words.synonyms.slice(0, extendsWords.antoDefault)}
            />
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
