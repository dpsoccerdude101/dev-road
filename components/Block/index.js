import React from "react";
import { Fade } from "react-reveal";

import * as S from "./styles";

const Block = ({ title, content }) => {
  return (
    <S.Container>
      <Fade left>
        <S.Title>{title}</S.Title>
        <S.TextWrapper style={{marginRight: 0}}>
          <S.Content >{content}</S.Content>
        </S.TextWrapper>
      </Fade>
    </S.Container>
  );
};

export default Block;
