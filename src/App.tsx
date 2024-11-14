import { useEffect, useState } from 'react';

import './App.css';
import useLatest from './hooks/useLatest';

function App() {
  const [count, setCount] = useState(0);
  const latestCount = useLatest(count);

  useEffect(() => {
    const interval = setInterval(() => {
      //console.log(latestCount.current); // 这里总是打印最新的 count 值
      console.log('count的值是', count);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}

export default App;
