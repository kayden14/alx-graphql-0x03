import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql', // Replace with your GraphQL endpoint if different
  cache: new InMemoryCache(),
});

export default client;