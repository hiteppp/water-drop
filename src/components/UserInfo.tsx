import { IPropChild } from '../type';
import { connect, useGetUser } from '../utils/useHooks';
const UserInfo = ({ children }: IPropChild) => {
  useGetUser();

  return <div>{children}</div>;
};
export default connect(UserInfo);
