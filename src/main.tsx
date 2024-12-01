import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import './index.css';
import App from './App.tsx';
import { client } from './utils/apollo.ts';
import UserInfo from './components/UserInfo.tsx';

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <UserInfo>
      <App />
    </UserInfo>
  </ApolloProvider>
);
