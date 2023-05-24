import React, { useEffect, useState } from "react";
import "./style/word.css";
import words from "../data/words.json";

const Word = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(words.kelimeler);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="word">
      <h1>Word sayfası</h1>
    </div>
  );
};

export default Word;
