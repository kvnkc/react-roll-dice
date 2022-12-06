import Die from "./Die";
import { useState } from "react";
import "./RollDice.css";

const RollDice = () => {
  const [rollOne, setRollOne] = useState("one");
  const [rollTwo, setRollTwo] = useState("two");
  const numbers = ["one", "two", "three", "four", "five", "six"];
  const randomOne = numbers[Math.floor(Math.random() * numbers.length)];
  const randomTwo = numbers[Math.floor(Math.random() * numbers.length)];

  const handleClick = () => {
    setRollOne(randomOne);
    setRollTwo(randomTwo);
  };

  return (
    <div className="RollDice">
      <div className="RollDice-container">
        <Die number={rollOne} />
        <Die number={rollTwo} />
      </div>
      <button onClick={handleClick}>Roll Dice</button>
    </div>
  );
};

export default RollDice;
