import Lottie from "lottie-react";
import empty_state_cool from "../../assets/animations/empty_state_cool.json";
function EmptyState({ searchWord }: { searchWord: string }) {
  return (
    <>
      <Lottie
        style={{
          width: 200,
          height: 200,
        }}
        loop
        autoplay
        animationData={empty_state_cool}
      ></Lottie>
      <span className="not-found">
        No Synonyms / antonyms were found for {searchWord}
      </span>
    </>
  );
}

export default EmptyState;
