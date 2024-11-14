import { useEffect } from 'react';
/**
 *
 * @param fn 组件加载时运行
 * @returns
 */
const useMount = (fn: () => void) => {
  useEffect(() => {
    fn?.();
  }, []);
};

export default useMount;
