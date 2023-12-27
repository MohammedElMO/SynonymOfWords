import { useState } from "react";
import FastList from "./components/FastList";
import ProgressState from "./components/ProgressState";
import SearchForm from "./components/SearchForm";
import { useSynoAntonyms } from "./hooks/useSynoAntonyms";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const { status, words } = useSynoAntonyms({ word: searchWord });

  return (
    <main>
      <SearchForm setSearchWord={(word) => setSearchWord(word)} />
      <ProgressState status={status} />
      <section>
        <FastList wordType={Object.keys(words)[2]} words={words.antonyms} />
        <FastList wordType={Object.keys(words)[1]} words={words.synonyms} />
      </section>
    </main>
  );
}

export default App;
