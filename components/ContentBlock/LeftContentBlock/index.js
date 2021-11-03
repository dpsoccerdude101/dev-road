import React from "react";
import { Row, Col } from "antd";
import SvgIcon from "../../common/SvgIcon";
import { Slide } from "react-reveal";

import * as S from "./styles";

const LeftContentBlock = ({ icon, title, content, section, dense}) => {
  let media = icon ? {lg: 11, md: 11, sm: 12, xs: 24} : {xs: 24}
  return (
    <S.LeftContentBlock>
      <Row type="flex" justify="space-between" align="middle">
        {icon && <Col {...media}>
          <Slide left>
            <SvgIcon src={icon} className="about-block-image" />
          </Slide>
        </Col>}
        <Col {...media}>
          <Slide right>
            <S.ContentWrapper>
              <S.Title>{title}</S.Title>
              <S.Content>{content}</S.Content>
              <S.ServiceWrapper>
                <Row type="flex" justify="space-between">
                  {section &&
                    typeof section === "object" &&
                    section.map((item, id) => {
                      return (
                        <Col key={id} lg={12} md={12} sm={12} xs={12}>
                          {dense ? null : <SvgIcon src={item.icon} />}
                          <S.MinTitle style={{display: 'flex', alignItems: 'center'}}>{dense && <SvgIcon src={item.icon} style={{marginRight: '4px'}}/>} {item.title}</S.MinTitle>
                          {Array.isArray(item.content) ? 
                            item.content.map(i => <S.MinPara>{i}</S.MinPara>) :
                            <S.MinPara>{item.content}</S.MinPara>
                          }
                        </Col>
                      );
                    })}
                </Row>
              </S.ServiceWrapper>
            </S.ContentWrapper>
          </Slide>
        </Col>
      </Row>
    </S.LeftContentBlock>
  );
};

export default LeftContentBlock;
