import Head from "next/head";
import Styles from "../../styles/globalStyles";

import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ children, user, logout }) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" /> */}
        <meta name="theme-color" content="#fff" />
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
