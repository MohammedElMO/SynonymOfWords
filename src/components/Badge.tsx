import React, { useEffect, useRef } from "react";

type badgeT = {
  word: string;
  className: string;
  words: number;
};

const Badge: React.FC<badgeT> = ({ word, className, words }) => {
  const badgeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!badgeRef.current?.classList.contains("before-show"))
      badgeRef.current?.classList.add("before-show");
  }, [words]);

  return (
    <div ref={badgeRef} className={className}>
      {word}
    </div>
  );
};

export default Badge;
