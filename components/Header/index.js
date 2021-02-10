import React, { useEffect, useState, Fragment, useContext } from "react";
import Link from 'next/link'
import { Row, Col, Drawer } from "antd";
import { CSSTransition } from "react-transition-group";

import SvgIcon from "../common/SvgIcon";
import Button from "../common/Button";

import * as S from "./styles";


const Header = ({user, logout}) => {
  const [isNavVisible] = useState(false);
  const [isSmallScreen] = useState(false);
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };
  
  // const handleClick = () => {
  //   console.log('logging out ' +  user.email)
  //   logout()
  // }

  const ProtectedRoutes = ({user, logout}) => {
    if(!user) {
      return (
        <S.CustomNavLinkSmall style={{ width: "180px" }} >
          <Link passHref href={'/auth'} passHref>
            <a className="button-link auth">Sign in</a>
          </Link>
        </S.CustomNavLinkSmall>
      )
    }
    return (
      <>
        <S.CustomNavLinkSmall>
          <Link href={'/timeline'} passHref><a>Timeline</a></Link>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall>
          <Link href={'/calendar'} passHref><a>Calendar</a></Link>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall>
          <Link href={'/slides'} passHref><a>Slides</a></Link>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall>
          <Link href={'/profile'} passHref>
            <a style={{textTransform: 'capitalize', display: 'flex', alignItems: 'center'}}>
              <SvgIcon src="profile.svg" className='profile-icon' />
              {user.email.split(/[\.|@]/)[0]}
            </a>
          </Link>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall style={{ width: "180px" }} >
          <Button style={{maxWidth: '125px'}} onClick={logout}>
            <p className="auth" >
              Log out 
            </p>
          </Button>
        </S.CustomNavLinkSmall>
      </>
    )
  }

  const MenuItem = () => {
    return (
      <Fragment>
        <S.CustomNavLinkSmall>
          <Link href={'/syllabus'} passHref><a>Syllabus</a></Link>
        </S.CustomNavLinkSmall>
        <ProtectedRoutes user={user} logout={logout}/>
      </Fragment>
    );
  };
  
  return (
    <S.Header>
      <S.Container>
        <Row type="flex" justify="space-between" gutter={20}>
          <Col>
            <Link href={'/'}>
              <S.LogoContainer >
                <SvgIcon src="logo.svg" />
              </S.LogoContainer>
            </Link>
          </Col>
          <S.NotHidden>
            <Col style={{ display: "flex", alignItems: "center" }}>
              <MenuItem />
            </Col>
          </S.NotHidden>
          <S.Burger onClick={showDrawer}>
            <S.Outline />
          </S.Burger>
        </Row>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <Drawer closable={false} visible={visible} onClose={onClose}>
            <Col style={{ marginBottom: "2.5rem" }}>
              <S.Label onClick={onClose}>
                <Col span={12}>
                  <S.Menu>Menu</S.Menu>
                </Col>
                <Col span={12}>
                  <S.Outline padding="true" />
                </Col>
              </S.Label>
            </Col>
            <MenuItem />
          </Drawer>
        </CSSTransition>
      </S.Container>
    </S.Header>
  );
};

export default Header;
