import '../../styles/globals.css'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth"

export default function App({ 
  Component, 
  pageProps: { session, ...pageProps },
 }: AppProps<{ session: any }>) {
  return (
    <SessionProvider session={ session }>
    <ul>
  <ThemeProvider attribute='class'>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
  </ul>
  </SessionProvider>
  )
}
