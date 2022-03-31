import { useState } from 'react';

// fix this counter
function Counter1() {
  // but dont change this line or add any state
  const [counterState, setCounterState] = useState({ count: 0 });

  const copyState = counterState;

  return (
    <div id='counter1'>
      <p>count1: {counterState.count}</p>
      <button onClick={() => {
        copyState.count++;
        setCounterState(copyState);
      }}>add 1 to count1</button>
    </div>
  );
}

// fix this counter too
function Counter2() {
  // but dont change this line or add any state
  const [counterState, setCounterState] = useState({ count: 0 });

  return (
    <div id='counter2'>
      <p>count2: {counterState.count}</p>
      <button onClick={() => {
        setCounterState(state => {
          state.count += 2;
          return state;
        });
      }}>add 2 to count2</button>
    </div>
  );
}



function Ex2() {
  return (
    <div id='ex2'>
      <Counter1 />
      <Counter2 />
      <div>
        <a href='/ex3'>done? are you sure the counters work? click them again just to be sure... what? you really did it? okay you may proceed</a>
      </div>
    </div>
  );
}

export default Ex2;
