import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DailySync — AI Task Email Manager</title>
        <meta name="description" content="Daily task manager with AI-powered email generation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0f" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
