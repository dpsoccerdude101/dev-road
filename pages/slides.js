import Layout from '../components/Layout';
import styled from "styled-components";

const Padding = styled.div`
  max-width: 70vw;
  min-height: 30vh;
  padding: 1rem;
  margin: 0 auto;
  text-align: center;
`
const Title = styled.h1`
  text-align: center;
`

const Slides = (props) => {

    return (
        <div>
            <Layout>
            <Title>Slides</Title>
            <Padding>
                Slides
            </Padding>
            </Layout>
        </div>
    )
  }
  
  export default Slides