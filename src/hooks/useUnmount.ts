import { useEffect } from 'react';
import useLatest from './useLatest';
/**
 *
 * @param fn 组件卸载时运行
 * @returns
 */
const useUnmount = (fn: () => void) => {
  const fnRef = useLatest(fn);
  useEffect(() => {
    return fnRef.current();
  }, []);
};

export default useUnmount;
