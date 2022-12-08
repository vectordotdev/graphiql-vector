import React from 'react';
import GraphiQL from './Temp';
import 'graphiql/graphiql.min.css';
import 'graphiql/graphiql.css';
import '@graphiql/react/dist/style.css';

const App = () => (
  <GraphiQL
    fetcher={async graphQLParams => {
      const data = await fetch(
        'https://swapi-graphql.netlify.app/.netlify/functions/index',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(graphQLParams),
          credentials: 'same-origin',
        },
      );
      return data.json().catch(() => data.text());
    }}
  />
);

export default App;
