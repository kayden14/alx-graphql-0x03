// pages/_app.tsx

import type { AppProps } from "next/app";
import ErrorBoundary from '@/components/ErrorBoundary';
import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apolloClient'; // Adjust path if needed
import '@/styles/globals.css'; // Optional, if you have global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </ApolloProvider>
  );
}

export default MyApp;
