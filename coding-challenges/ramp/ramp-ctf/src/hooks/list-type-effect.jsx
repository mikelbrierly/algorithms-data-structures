import { useEffect, useRef, useState } from "react";

export const useListTypeEffect = (text, pace) => {
  const [letters, setLetters] = useState([]);

  const textArr = text.split("");
  const index = useRef(0);

  useEffect(() => {
    let i = index.current;
    if (i < textArr.length) {
      const timer = setTimeout(() => {
        return setLetters((prevLetters) => [...prevLetters, textArr[i]]);
      }, pace);
      index.current = i + 1;

      return () => clearTimeout(timer);
    }
  }, [pace, letters, textArr]);

  return (
    <ul>
      {letters.map((letter) => (
        <li key={letter + index}>{letter}</li>
      ))}
    </ul>
  );
};
