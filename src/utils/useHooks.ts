import { useAppContext, connectFactory } from './contextFactory';
import axios from 'axios';
const KEY: string = 'userInfo';
const DEFAULT_VALUE = {};

export const useUserContext = () => useAppContext(KEY);

export const connect = connectFactory(KEY, DEFAULT_VALUE);

export const useGetUser = async () => {
  const { store, setStore } = useUserContext();
  let res = await axios.post('http://localhost:3000/api/auth/signin', {
    username: 'stu123456',
    password: 'stu123456',
    role_type: 'student',
  });
  setStore(res.data);
  console.log('store6666666666666666666666666666666666666666', store, res.data);
};
