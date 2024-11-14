import './App.css';
import { useQuery } from '@apollo/client';
import { FIND } from './graphql/demo';

function App() {
  const { loading, data } = useQuery(FIND, {
    variables: {
      id: 1,
    },
  });

  return (
    <div>
      <p>data:{JSON.stringify(data)}</p>
      <p>data:{loading}</p>
    </div>
  );
}

export default App;
