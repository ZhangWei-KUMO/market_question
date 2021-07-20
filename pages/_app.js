/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import Script from 'next/script';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta content="https://dazmaster.com" property="og:url" />
        <meta content="答岸" property="og:site_name" />
        <meta name="keywords" content="一课永流传" />
        <meta content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1" name="viewport" />
        <link href="https://dazmaster.com" rel="canonical" />
        <link href="https://web.sdk.qcloud.com/player/tcplayer/release/v4.2.1/tcplayer.min.css" rel="stylesheet" />
      </Head>
      <Script async src="https://web.sdk.qcloud.com/player/tcplayer/release/v4.2.1/libs/hls.min.0.13.2m.js" />
      <Script async src="https://web.sdk.qcloud.com/player/tcplayer/release/v4.2.1/tcplayer.v4.2.1.min.js" />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
