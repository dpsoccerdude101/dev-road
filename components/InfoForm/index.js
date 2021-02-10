import React from "react";
import { Row, Col } from "antd";
import Zoom from "react-reveal/Zoom";

import Input from "../common/Input";
import TextArea from "../common/TextArea";
import Block from "../Block";
import Button from "../common/Button";
import useForm from "./useForm";
import validate from "./validationRules";

import * as S from "./styles";

const Info = ({id, title, content}) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  return (
    <S.ContactContainer id={id}>
      <S.Contact>
        <Row type="flex" justify="space-between" align="start">
          <Col lg={12} md={11} sm={24} xs={24}>
            <Block
              padding={true}
              title={title}
              content={content}
            />
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <S.FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col lg={24} md={24} sm={24} xs={24}>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={values.firstname || ""}
                  onChange={handleChange}
                />
                {errors.firstname ? (
                  <Zoom cascade>
                    <S.Span>First Name is required</S.Span>
                  </Zoom>
                ) : (
                  <S.Span />
                )}{" "}
              </Col>
              <Col lg={24} md={24} sm={24} xs={24}>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={values.lastname || ""}
                  onChange={handleChange}
                />
                {errors.lastname ? (
                  <Zoom cascade>
                    <S.Span>Last Name is required</S.Span>
                  </Zoom>
                ) : (
                  <S.Span />
                )}{" "}
              </Col>
              <Col lg={24} md={24} sm={24} xs={24}>
                <Input
                  type="text"
                  name="linkedin"
                  placeholder="LinkedIn Profile URL"
                  value={values.linkedin || ""}
                  onChange={handleChange}
                />
                {errors.linkedin ? (
                  <Zoom cascade>
                    <S.Span>LinkedIn Profile URL is required</S.Span>
                  </Zoom>
                ) : (
                  <S.Span />
                )}{" "}
              </Col>
              <Col lg={24} md={24} sm={24} xs={24}>
                <Input
                  type="text"
                  name="fcc"
                  placeholder="Freecodecamp Profile URL"
                  value={values.fcc || ""}
                  onChange={handleChange}
                />
                {errors.fcc ? (
                  <Zoom cascade>
                    <S.Span>Freecodecamp Profile URL is required</S.Span>
                  </Zoom>
                ) : (
                  <S.Span />
                )}{" "}
              </Col>
              <Col lg={24} md={24} sm={24} xs={24}>
                <TextArea
                  placeholder="Your Hobbies & Interests"
                  value={values.interests || ""}
                  name="interests"
                  onChange={handleChange}
                />
                {errors.interests ? (
                  <Zoom cascade>
                    <S.Span>Hobbies & Interests are required</S.Span>
                  </Zoom>
                ) : (
                  <S.Span />
                )}{" "}
              </Col>
              <S.ButtonContainer>
                <Button name="submit" type="submit">
                  Submit
                </Button>
              </S.ButtonContainer>
            </S.FormGroup>
          </Col>
        </Row>
      </S.Contact>
    </S.ContactContainer>
  );
};

export default Info;
