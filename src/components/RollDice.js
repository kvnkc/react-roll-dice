import Die from "./Die";
import { useState } from "react";
const RollDice = () => {
  const [roll, setRoll] = useState("one");
  const numbers = ["one", "two", "three", "four", "five", "six"];
  const random = Math.floor(Math.random() * 6);
  const randomNumber = numbers[random];

  const handleClick = () => {
    setRoll(randomNumber);
  };

  return (
    <div>
      <Die number={roll} />
      <button onClick={handleClick}>Roll Dice</button>
    </div>
  );
};

export default RollDice;
