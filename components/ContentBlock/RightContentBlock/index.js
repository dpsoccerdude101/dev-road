import React from "react";
import { Row, Col } from "antd";
import { Slide } from "react-reveal";
import Link from 'next/link'

import SvgIcon from "../../common/SvgIcon";
import Button from "../../common/Button";

import * as S from "./styles";

const RightBlock = ({ last, first, title, content, button, icon }) => {

  return (
    <S.RightBlockContainer last={last} first={first}>
      <Row type="flex" justify="space-between" align="middle">
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide left>
            <S.ContentWrapper>
              <S.Title>{title}</S.Title>
              <S.Content>{content}</S.Content>
              <div style={{display: 'flex', justifyContent: 'space-around', maxWidth: '400px'}}>
                {button &&
                  typeof button === "object" &&
                  button.map((item, id) => {
                    return (
                      <S.CustomNavLinkSmall key={id} >
                        <Link passHref href={item.href} passHref >
                          <a className={`button-link auth cta-btn ${item.class}`}>{item.title}</a>
                        </Link>
                      </S.CustomNavLinkSmall>
                    );
                  })}
              </div>
            </S.ContentWrapper>
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide right>
            <SvgIcon src={icon} className="about-block-image" />
          </Slide>
        </Col>
      </Row>
    </S.RightBlockContainer>
  );
};

export default RightBlock;
