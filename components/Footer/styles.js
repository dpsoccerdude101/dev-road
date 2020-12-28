import styled from "styled-components";
import Link from 'next/link'

export const Footer = styled.footer`
  background: rgb(249, 250, 252);
  padding: 2.5rem 0;
`;

export const Title = styled.h4`
  font-size: 16px;
  text-transform: uppercase;
  color: #000;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

// export const NavLink = styled(Link)`
export const NavLink = styled.a`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;
  &:hover,
  &:active,
  &:focus {
    color: #15418e;
  }

  &.active {
    color: rgb(255, 130, 92);
  }
`;

export const CSite = styled.p`
  padding-top: 2rem;
  padding-bottom: 1.5rem;
  display: flex;
  font-size: 14px;
  color: rgba(15, 33, 55, 0.6);
  text-align: inherit;
`;

export const Target = styled.a`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #15418e;
  }
`;

export const Extra = styled.section`
  background: rgb(249, 250, 252);
  position: relative;
  width: 100%;
  padding-right: 25px;
  padding-left: 25px;
  margin-right: auto;
  margin-left: auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  position: relative;
`;

export const Select = styled.div`
  line-height: 24px;

  @media only screen and (min-width: 1024px) {
    padding: 0 10%;
  }
`;

export const Para = styled.div`
  color: rgba(2, 7, 62, 0.8);
  max-width: 340px;
  font-size: 14px;
  width: 100%;
`;

// export const Large = styled(Link)`
export const Large = styled.a`
  font-size: 16px;
  color: rgba(2, 7, 62, 0.8);
  text-align: ${(props) => (props.left ? "left" : "")};
  padding: ${(props) => (props.left ? "0 10%" : "")};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: flex;
  margin: 4px 0;

  &:hover {
    color: rgb(255, 130, 92);
  }

  &.active {
    color: rgb(255, 130, 92);
  }
`;

export const Chat = styled.p`
  color: rgba(2, 7, 62, 0.8);
  display: inline-block;
  border-bottom: 1px solid rgba(2, 7, 62, 0.8);
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    border-bottom: 1px solid rgb(255, 130, 92);
    color: rgb(255, 130, 92);
  }
`;

export const Empty = styled.div`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled.div`
  max-width: 510px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 414px) {
    padding: 2rem 0;
    padding-right: 50%;
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: rgb(255, 130, 92);
    }
  }
`;

export const Hidden = styled.div`
  display: contents;
  width: 100%;

  @media screen and (max-width: 414px) {
    display: none;
  }
`;

export const Language = styled.h4`
  font-size: 16px;
  text-transform: uppercase;
  color: #000;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;
