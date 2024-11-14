import { useState, useCallback } from 'react';
import useMount from './useMount';
/**
 * 1、组件初始化发请求获取数据
 * 2、手动触发请求
 * @param service
 * @param params
 * @returns
 */

interface IOptions {
  params: Record<string, string>;
  manual?: boolean;
  onSucess?: (res: unknown) => void;
  onError?: (res: unknown) => void;
}
const useRequest = (
  service: (params: Record<string, string>) => Promise<unknown>,
  options: IOptions
) => {
  const [data, setData] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);
  //使用useCallback防止每次重新创建init
  const init = useCallback(
    async (curParams: Record<string, string>) => {
      return service(curParams)
        .then((res: unknown) => {
          setData(res);
          setLoading(false);
          options.onSucess && options.onSucess(res);
        })
        .catch(error => {
          setLoading(false);
          options.onError && options.onError(error);
        });
    },
    [service]
  );
  useMount(() => {
    if (!options.manual) {
      init(options.params);
    }
  });
  const run = (runParams: Record<string, string>) => {
    return init(runParams);
  };
  //用数组没有用对象好，因为可能只会用到部分，用数组的话中间还要加占位符
  return { loading, data, run };
};

export default useRequest;
