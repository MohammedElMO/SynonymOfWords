function Badge({ word, className }: { word: string; className: string }) {
  return <div className={className}>{word}</div>;
}

export default Badge;
