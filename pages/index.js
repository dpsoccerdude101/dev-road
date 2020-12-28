import useSWR from 'swr'
import Link from 'next/link'
import Styles from "../styles/globalStyles";
import { useUser } from '../utils/auth/useUser'

import Footer from "../components/Footer";
import Header from "../components/Header";

import ContactFrom from "../components/ContactForm";
import ContentBlock from "../components/ContentBlock";
import MiddleBlock from "../components/MiddleBlock";
import Container from "../components/common/Container";
import ScrollToTop from "../components/common/ScrollToTop";

import Introduction from "../content/introduction.json";
import FirstBlock from "../content/firstBlock.json";
import SecondBlock from "../content/secondBlock.json";
import ThirdBlock from "../content/thirdBlock.json";
import FourthBlock from "../content/fourthBlock.json";
import ContactBlock from "../content/contactBlock.json";

const fetcher = (url, token) =>
  fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
  }).then((res) => res.json())

const Index = () => {
  const { user, logout } = useUser()
  const { data, error } = useSWR(
    user ? ['/api/getFood', user.token] : null,
    fetcher
  )
  if (!user) {
    return (
      <>
        <p>Hi there!</p>
        <p>
          You are not signed in.{' '}
          <Link href={'/auth'}>
            <a>Sign in</a>
          </Link>
        </p>
      </>
    )
  }

  return (
    <div>
      <Header />

      <div>
        <p>You're signed in. Email: {user.email}</p>
        <p
          style={{
            display: 'inline-block',
            color: 'blue',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
          onClick={() => logout()}
        >
          Log out
        </p>
      </div>
      <div>
        <Link href={'/example'}>
          <a>Another example page</a>
        </Link>
      </div>
      {error && <div>Failed to fetch food!</div>}
      {data && !error ? (
        <div>Your favorite food is {data.food}.</div>
      ) : (
        <div>Loading...</div>
      )}
      <Styles />
      <Container>
        <ScrollToTop />
        <ContentBlock
          type="right"
          first="true"
          title={Introduction.title}
          content={Introduction.text}
          button={Introduction.button}
          icon="developer.svg"
        />
        <MiddleBlock
          title={FirstBlock.title}
          content={FirstBlock.text}
          button={FirstBlock.button}
        />
        <ContentBlock
          type="left"
          title={SecondBlock.title}
          content={SecondBlock.text}
          section={SecondBlock.section}
          icon="graphs.svg"
        />
        <ContentBlock
          type="right"
          title={ThirdBlock.title}
          content={ThirdBlock.text}
          icon="product-launch.svg"
        />

        <ContentBlock
          type="left"
          title={FourthBlock.title}
          content={FourthBlock.text}
          icon="waving.svg"
        />
        <ContactFrom title={ContactBlock.title} content={ContactBlock.text} />
      </Container>
      <Footer />
    </div>
  )
}

export default Index