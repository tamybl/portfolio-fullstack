import { useEffect } from 'react';
import type { AppProps } from 'next/app';

import Layout from '@/components/Layout';
import Head from '@/components/Head';

import 'devicon/devicon.min.css';
import '@/styles/globals.css';
import '@/styles/themes.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, []);

  return (
    <Layout>
      <Head title={`Tamara Bravo | ${pageProps.title}`} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
