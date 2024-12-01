import './App.css';
import { useQuery } from '@apollo/client';
import { FIND } from './graphql/demo';
import { useUserContext } from './utils/useHooks';

function App() {
  const { store } = useUserContext();

  return (
    <div>
      <p>store:{JSON.stringify(store)}</p>
    </div>
  );
}

export default App;
