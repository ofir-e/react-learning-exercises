/* eslint-disable @typescript-eslint/no-unused-vars */
import { memo, useEffect, useState } from 'react';

type Ex4ChildProps = { incRendersCount: () => void };

// dont touch this function
function Ex4Child({ incRendersCount }: Ex4ChildProps) {
  useEffect(() => {
    incRendersCount();
  })
  return <p>my renders are being counted</p>
}

const MemoEx4Child = memo(Ex4Child);
const MAX_RENDERS = 250;


// fix this infinite renders bug
function Ex4() {
  // but dont change this line or add any state
  const [rendersCount, setRendersCount] = useState(1);

  return (
    <div id='ex4'>
      <Ex4Child incRendersCount={() => {
        setRendersCount(rendersCount => rendersCount + 1);
      }} />
      <p>renders count: {rendersCount}</p>
      {rendersCount < MAX_RENDERS ? <a href='/ex5'>nice. next one is a piece of cake</a> : <p>wait im being rendered way too many times</p>}
    </div>
  );
}

export default Ex4;
