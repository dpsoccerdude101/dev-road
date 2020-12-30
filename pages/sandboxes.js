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

const Sandboxes = (props) => {

    return (
        <div>
            <Layout>
            <Title>Sandboxes</Title>
            <Padding>
                Sandboxes
            </Padding>
            </Layout>
        </div>
    )
  }
  
  export default Sandboxes