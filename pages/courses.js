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

const Courses = (props) => {

    return (
        <div>
            <Layout>
            <Title>More Courses</Title>
            <Padding>
                Buy these other Courses to level up
            </Padding>
            </Layout>
        </div>
    )
  }
  
  export default Courses