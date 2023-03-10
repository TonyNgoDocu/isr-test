import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to isr-nx-next-app!</title>
      </Head>
      <main className="app">
        {/* @ts-expect-error ignoring */}
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
