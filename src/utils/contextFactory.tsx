import React, { createContext, useContext, useMemo, useState } from 'react';
//用来传递全局的用户信息
interface IStore {
  key: string;
  store: Record<string, any>;
  setStore: (payload: Record<string, any>) => void;
}

interface IProp {
  children: React.ReactNode;
}
const getCxtProvider =
  (
    key: string,
    defaultValue: Record<string, any>,
    AppContext: React.Context<IStore>
  ) =>
  ({ children }: IProp) => {
    const [store, setStore] = useState(defaultValue);
    let value = useMemo(() => {
      return { store, setStore, key };
    }, [store]);
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
  };

//我们可能用到多个context进行存储
const cxtCache: Record<string, Cxt> = {};
class Cxt {
  defaultStore: IStore;
  AppContext: React.Context<IStore>;
  Provider: ({ children }: IProp) => JSX.Element;

  constructor(key: string, defaultValue: Record<string, any>) {
    this.defaultStore = {
      key,
      store: defaultValue,
      setStore: () => {},
    };
    this.AppContext = createContext(this.defaultStore);
    this.Provider = getCxtProvider(key, defaultValue, this.AppContext);
    cxtCache[key] = this;
  }
}

//不会让用户直接调用context
export const useAppContext = (key: string) => {
  const cxt = cxtCache[key];
  const app = useContext(cxt.AppContext);
  return {
    store: app.store,
    setStore: app.setStore,
  };
};

export const connectFactory = (
  key: string,
  defaultValue: Record<string, any>
) => {
  const cxt = cxtCache[key];
  let CurCxt: Cxt;
  if (cxt) {
    CurCxt = cxt;
  } else {
    CurCxt = new Cxt(key, defaultValue);
  }
  //传入一个子组件，返回一个高阶组件
  return (Child: React.FunctionComponent<any>) => (props: any) => {
    return (
      <CurCxt.Provider>
        <Child {...props} />
      </CurCxt.Provider>
    );
  };
};
