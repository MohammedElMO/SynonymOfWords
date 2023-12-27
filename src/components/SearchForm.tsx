import { FormEvent } from "react";

function SearchForm({
  setSearchWord,
}: {
  setSearchWord: (word: string) => void;
}) {
  const onSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = new FormData(e.currentTarget as HTMLFormElement);
    const searchWordInput = form.get("searchWord");
    console.log(searchWordInput)
    if (searchWordInput?.toString()) setSearchWord(searchWordInput.toString());

    // setSearchWord("");
  };

  return (
    <form onSubmit={onSubmitSearch}>
      <input
        name="searchWord"
        type="text"
        accessKey="SHIFT"
        alt="write your word here"
        placeholder="write your word :>"
        className="search_word"
      />
      <button type="submit">Look Up</button>
    </form>
  );
}

export default SearchForm;
