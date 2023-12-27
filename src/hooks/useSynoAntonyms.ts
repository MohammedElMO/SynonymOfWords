import { useEffect, useState } from "react";

export type wordAntoSynonymsType = {
  antonyms: string[];
  synonyms: string[];
  word: string;
};
type paramType = {
  word: string;
};

export const useSynoAntonyms = (params: paramType) => {
  const [requestState, SetRequestState] = useState<
    "loading" | "done" | "start"
  >("start");
  const [words, setWords] = useState<wordAntoSynonymsType>(
    {} as wordAntoSynonymsType
  );
  const findSynonyms = async () => {
    SetRequestState("loading");
    const req = await fetch(
      `${import.meta.env.VITE_SYNONYM_API}?word=${params.word}`,
      {
        method: "GET",

        headers: {
          "X-Api-Key": import.meta.env.VITE_API_REQUEST_KEY,
        },
      }
    );
    const data: wordAntoSynonymsType = await req.json();
    setWords(data);
    SetRequestState("done");
  };

  useEffect(() => {
    if (!params.word) return;
    const sendRequest = async () => {
      await findSynonyms();
    };
    sendRequest();
  }, [params.word]);

  return {
    words,
    status: requestState,
  };
};
