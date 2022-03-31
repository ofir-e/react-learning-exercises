import { useState } from 'react';
import store from 'store';

type setStateFunc<T> = React.Dispatch<React.SetStateAction<T>>;

// fix this custom hook!
function useLocalStorage<T>(key: string, defaultValue: T): [T, setStateFunc<T>] {
  const [value, setValue] = useState<T>(store.get(key) ?? defaultValue);

  // make this persistance using local storage
  // (meaning value should be saved thru refreshes)
  // you may use a given simplified local storage api: store.get(key) and store.set(key,value)

  return [value, setValue];
}

const IS_DARK_MODE_KEY = 'EX8_IS_DARK_MODE';

function useDarkMode(defaultValue: boolean) {
  return useLocalStorage(IS_DARK_MODE_KEY, defaultValue);
}


// dont touch this function
function Ex8Container() {
  const [isDarkMode, setIsDarkMode] = useDarkMode(false);

  return (<div style={{ backgroundColor: isDarkMode ? 'gray' : 'white' }}>
    <p>i love dark mode! help make it persistance thru refreshes</p>
    <span
      style={{ userSelect: 'none', fontSize: '3em', cursor: 'pointer' }}
      onClick={() => { setIsDarkMode(!isDarkMode) }}
    >
      {isDarkMode ? '🌛' : '☀️'}
    </span>
    {store.get(IS_DARK_MODE_KEY) !== undefined && <p>wow. 6 out of 6</p>}
  </div>);
}


// dont touch this function
function Ex8() {

  return (
    <div id='ex8'>
      <Ex8Container />
    </div>
  );
}

export default Ex8;
