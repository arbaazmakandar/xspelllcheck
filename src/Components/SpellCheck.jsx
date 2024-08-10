import React, { useState } from "react";

const SpellCheck = () => {
  const [words, setWords] = useState("");
  const [word, setWord] = useState("");

  const customDictionary = {
    teh: "the",

    wrok: "work",

    fot: "for",

    exampl: "example",
  };
  const handleWords = (event) => {
    const inputWords = event.target.value;
    setWords(inputWords);
    const input = inputWords.split(" ");
    const correctedWords = input.map((element) => {
      const correctedWord = customDictionary[element.toLowerCase()];
      return correctedWord || element;
    });
    const correctedText = correctedWords.join(" ");
    const firstCorrection = correctedWords.find(
      (element, index) => element !== input[index]
    );

    setWord(firstCorrection || "");
  };

  return (
    <div>
      {" "}
      <h1>Spell Check and Auto-Correction</h1>{" "}
      <textArea
        placeholder="Enter text..."
        value={words}
        onChange={handleWords}
      ></textArea>
      {word && <p>Did you mean: {word}? </p>}
    </div>
  );
};

export default SpellCheck;
