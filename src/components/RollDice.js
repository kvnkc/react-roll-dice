import Die from "./Die";
const RollDice = () => {
  const numbers = ["one", "two", "three", "four", "five", "six"];
  const random = Math.floor(Math.random() * 6);
  const randomNumber = numbers[random];

  return (
    <div>
      <Die number={randomNumber} />
    </div>
  );
};

export default RollDice;
