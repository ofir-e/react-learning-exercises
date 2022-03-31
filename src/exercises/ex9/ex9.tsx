import { useState } from 'react';
import { useInterval } from 'usehooks-ts';

// fix this 🐛buggy🐛 fibonacci calculator🧮!
function Ex9fibonacci() {
  // but use the given state and dont add states
  const [lowerNumber, setLowerNumber] = useState(0);
  const [higherNumber, setHigherNumber] = useState(1);
  const [nextNumber, setNextNumber] = useState(1);

  // useInterval is a custom hook from the package usehooks-ts
  // npm is a huge repo that have many packages including many useful custom hooks
  useInterval(() => {
    const oldHigherNumber = higherNumber;
    setHigherNumber(lowerNumber + higherNumber);
    setLowerNumber(oldHigherNumber);
    setNextNumber(lowerNumber + higherNumber);
  }, 1000)

  // 👇 dont touch this part 👇
  return (<div>
    <h1>🤖🧮auto fibonacci🧮🤖</h1>
    <p>low number: {lowerNumber}</p>
    <p>high number: {higherNumber}</p>
    <p>next number: {nextNumber}</p>
    {nextNumber !== lowerNumber + higherNumber && <p>this is not how fibonacci works... fix it!</p>}
    {nextNumber !== lowerNumber + higherNumber && <p>next number should be low number + high number (sum of last 2 numbers)</p>}
  </div>);
}


// dont touch this function
function Ex9() {

  return (
    <div id='ex9'>
      <Ex9fibonacci />
    </div>
  );
}

export default Ex9;
