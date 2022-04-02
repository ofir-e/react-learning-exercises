import delay from "delay";
import { FC, useEffect, useState } from "react";

const DELAY_MS = 3000;
const NUM_OF_USERS = 3;

type User = { name: string, status: string };

function randomNumber(max: number) {
  return Math.floor(Math.random() * max);
}

// fix this custom hook!
function useAbortableFetch<T>(url: string) {
  const [resData, setResData] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      setIsLoading(true);
      await delay(DELAY_MS)
      try {
        const res = await fetch(url, { signal: abortController.signal });
        setResData(await res.json());
        setIsLoading(false);
      }
      catch (e) {
        console.log("failed/aborted api call");
      }
    }
    fetchData();
  }, [url]);


  return { resData, isLoading };
}

function useUser(userIndex: number) {
  const { resData: users, isLoading } = useAbortableFetch<User[]>(`/ex10Data.json?index=${userIndex}`);
  return { user: users?.[userIndex], isLoading };
}


const Ex10Fetcher: FC = () => {
  const [userIndex, setUserIndex] = useState(0);
  const { user, isLoading } = useUser(userIndex);

  return (<div>
    <button onClick={() => { setUserIndex(randomNumber(NUM_OF_USERS)); }}>fetch random user</button>
    {isLoading && <p>loading random user</p>}
    {isLoading && <p>try to press destroy while user is loading and see whats happens</p>}
    {!isLoading && (
      <>
        <p>{user?.name}</p>
        <p>{user?.status}</p>
      </>
    )}
  </div>);
}

const Ex10: FC = () => {
  const [isDestroyed, setIsDestroyed] = useState(false);

  return <div>
    <button onClick={() => { setIsDestroyed(true); }}>destroy</button>
    {!isDestroyed && <Ex10Fetcher />}
    {isDestroyed && <span>comp was destroyed</span>}
  </div>
}

export default Ex10;