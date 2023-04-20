import type { AppProps } from 'next/app';
import { Nunito } from '@next/font/google';

export const nunito = Nunito({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${nunito.className}`}
    >
      <Component {...pageProps} />
    </div>
  );
}