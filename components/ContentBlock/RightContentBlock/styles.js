import styled from "styled-components";

export const RightBlockContainer = styled.section`
  position: relative;
  padding: ${(props) =>
    props.last ? "8rem 0 10rem" : props.first ? "10rem 0 8rem" : "8rem 0 8rem"};

  @media only screen and (max-width: 768px) {
    padding: ${(props) => (props.last ? "5rem 0 6rem" : "8rem 0 6rem")};
  }
`;

export const Title = styled.h6``;

export const Content = styled.p`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 540px;
  display: block;
  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`;
export const CustomNavLink = styled.div`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;
export const NavLink = styled.div`
  display: inline-block;
  text-align: center;
  `;
export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1rem;
  color: #000000;
  transition: color 0.2s ease-in;
  margin: 0.25rem 0.75rem;
  user-select: none;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 0.75rem;
  }
`;
