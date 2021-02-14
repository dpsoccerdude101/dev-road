import React, { Fragment } from "react";
import Link from 'next/link'
import { Row, Col } from "antd";
import { Fade } from "react-reveal";

import Container from "../common/Container";
import SvgIcon from "../common/SvgIcon";

import * as S from "./styles";

const Footer = () => {
  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>Forum</S.Language>
                <Link href={"/forum"} passHref>
                  <a><S.Chat>Ask Your Peers</S.Chat></a>
                </Link>
                <S.Language>
                  Update project status:
                </S.Language>
                <Link href={"/project-status"} passHref>
                  <a><S.Chat>Project Status</S.Chat></a>
                </Link>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>Resources</S.Title>
                
                <Link href={'https://glitch.com'} passHref>
                  <S.Large left="true">
                    Glitch
                  </S.Large>
                </Link>
                <Link href={'https://code.visualstudio.com'} passHref>
                  <S.Large left="true">
                    VS Code
                  </S.Large>
                </Link>
                <Link href={'https://git-scm.com'} passHref>
                  <S.Large left="true">
                    Git SCM
                  </S.Large>
                </Link>
                <Link href={'/career'} passHref>
                  <S.Large left="true">
                    Career Links
                  </S.Large>
                </Link>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Empty />
                <Link href={'https://freecodecamp.org'} passHref>
                  <S.Large left="true">
                    <S.FooterContainer>
                      <SvgIcon src="freecodecamp.svg" />
                    </S.FooterContainer>
                    Free Code Camp
                  </S.Large>
                </Link>
                <Link href={'https://frontendacademy.slack.com'} passHref>
                  <S.Large left="true">
                    <S.FooterContainer>
                      <SvgIcon src="slack.svg" />
                    </S.FooterContainer>
                    Slack
                  </S.Large>
                </Link>
                <Link href={'https://github.com/JamieVaughn/curriculum'} passHref>
                  <S.Large left="true">
                    <S.FooterContainer>
                      <SvgIcon src="github.svg" />
                    </S.FooterContainer>
                    Github
                  </S.Large>
                </Link>
              </Col>
            </Row>
          </Container>
        </S.Footer>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ padding: "2rem 0" }}
            >
              <Link href={'/'}>
                <a>
                  <S.LogoContainer>
                    <SvgIcon src="logo.svg" />
                  </S.LogoContainer>
                </a>
              </Link>
              <S.FooterContainer>
                All Rights Reserved © {new Date().getFullYear()}
              </S.FooterContainer>
              <S.FooterContainer>
                <a
                  href="https://github.com/JamieVaughn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SvgIcon src="github.svg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/wjamievaughn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SvgIcon src="linkedin.svg" />
                </a>
              </S.FooterContainer>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default Footer;
