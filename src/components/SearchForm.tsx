import { FormEvent } from "react";
import Input from "./common/components/Input";
import "../styles/search.css"
function SearchForm({
  setSearchWord,
  isLoading
}: {
  setSearchWord: (word: string) => void;
  isLoading:boolean
}) {
  const onSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget as HTMLFormElement);
    const searchWordInput = form.get("searchWord");
    console.log(searchWordInput);
    if (searchWordInput?.toString()) setSearchWord(searchWordInput.toString());

    // setSearchWord("");
  };

  return (
    <form className="look_up_form" onSubmit={onSubmitSearch}>
      <Input
        className="search_word"
        placeholder="write your word :>"
        alt="write your word here"
        name="searchWord"
        type="text"
        accessKey="SHIFT"
      />
      <button disabled={isLoading} type="submit" className="look_up">Look Up</button>
    </form>
  );
}

export default SearchForm;
