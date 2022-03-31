import { useLayoutEffect, useRef, useState } from 'react';

// dont touch this function
function Ex3Item({ description }: { description: string }) {
  const ref = useRef<HTMLInputElement>(null);

  // when working with ref and making direct dom changes use useLayoutEffect instead of useEffect
  useLayoutEffect(() => {
    ref.current!.value = description;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ border: 'solid 1px black', paddingBottom: '10px' }}>
      <p>{description}</p>
      <input ref={ref} />
    </div>
  );
}

// fix this huge bug!
function Ex3() {
  const [items, setItems] = useState(['hey', 'im', 'a', 'list', 'of', 'uniq', 'words', 'will', 'you', 'render', 'me', 'in', 'the', 'right', 'order', '?']);

  return (
    <div id="ex3">
      {/** 👇 dont touch this 👇 */}
      <p>fix this reverse list!</p>
      <p>note that reverse keep the inputs at the same places (and this is a huge bug!)</p>
      <button onClick={() => {
        setItems([...items].reverse());
      }}
      >
        reverse list

      </button>
      {/** 👆 dont touch this 👆 */}

      {items.map((description) => <Ex3Item description={description} />)}

      <div>
        <a href="/ex4">so you figured it out ahh? well.. i will try to raise the level in this next one</a>
      </div>
    </div>
  );
}

export default Ex3;
