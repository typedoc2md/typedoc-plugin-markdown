import { Analytics } from '@vercel/analytics/react';
import '../global.css';

export default function App({ Component, pageProps }) {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') {
    return <Component {...pageProps} />;
  }
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
