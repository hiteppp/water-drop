import { useRef } from 'react';
//在每次组件重新渲染时，Hook 的内部逻辑都会执行一次，
//因此 ref.current 会被更新为最新的 value。由于 ref 是一个稳定的引用，即使组件重新渲染多次，ref.current 始终保持最新。
/**
 *
 * @param value 获取最新的数据
 * @returns
 */
const useLatest = <T>(value: T) => {
  console.log('useLatest正在执行');

  const ref = useRef(value);
  ref.current = value;
  return ref;
};

export default useLatest;

//example:

// import { useEffect, useState } from 'react';

// import './App.css';
// import useLatest from './hooks/useLatest';

// function App() {
//   const [count, setCount] = useState(0);
//   const latestCount = useLatest(count);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       //console.log(latestCount.current); // 这里总是打印最新的 count 值
//       console.log('count的值是', count);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return <button onClick={() => setCount(count + 1)}>Increment</button>;
// }

// export default App;
