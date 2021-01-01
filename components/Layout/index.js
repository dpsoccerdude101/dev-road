import { useEffect } from 'react'
import Head from "next/head";
import Styles from "../../styles/globalStyles";
import { useUser } from '../../utils/auth/useUser'

import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ children }) {
  const {user, logout} = useUser()

  useEffect(() => {
    console.log('layout', user)
  }, [user])
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#fff" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Styles />
      <nav className='nav'>
        <Header user={user} logout={logout} />
      </nav>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
