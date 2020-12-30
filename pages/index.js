// import useSWR from 'swr'
// import Link from 'next/link'
// import { useEffect } from 'react'

import Layout from "../components/Layout";

import ContentBlock from "../components/ContentBlock";
import MiddleBlock from "../components/MiddleBlock";
import Container from "../components/common/Container";
import ScrollToTop from "../components/common/ScrollToTop";

import Introduction from "../content/introduction.json";
import FirstBlock from "../content/firstBlock.json";
import SecondBlock from "../content/secondBlock.json";
import ThirdBlock from "../content/thirdBlock.json";
import FourthBlock from "../content/fourthBlock.json";

// const fetcher = (url, token) =>
//   fetch(url, {
//     method: 'GET',
//     headers: new Headers({ 'Content-Type': 'application/json', token }),
//     credentials: 'same-origin',
//   }).then((res) => res.json())

  // {error && <div>Failed to fetch food!</div>}
  // {data && !error ? (
  //   <div>Your email is {user.email} and favorite food is {data.food}. <span onClick={() => logout()}>logout</span></div>
  // ) : (
  //   <div>Waiting to sign in...</div>
  // )}

const Index = () => {
  // const { data, error } = useSWR(
  //   user ? ['/api/getFood', user.token] : null,
  //   fetcher
  // )
  return (
    <div>
      <Layout>
        <Container>
          <ScrollToTop />
          <h1 style={{textAlign: 'center'}}>MCC Course Portal</h1>
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
        </Container>
      </Layout>
    </div>
  )
}

export default Index