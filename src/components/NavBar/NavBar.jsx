import BookmarkLogo from '/src/assets/logo-bookmark.svg';
import Menu from '/src/assets/menu.svg';
import XMenu from '/src/assets/x.svg';
import { StyledLoginLink } from '../../styles/UI/StyledLoginLink';
import { StyledHeader } from '../../styles/Header/StyledHeader';
import {
  StyledNavBarContainer,
  StyledLogoContainer,
  StyledNavigation,
} from '../../styles/Header/StyledNavBarContainer';
import Navigation from './Navigation';
import { useState } from 'react';
import { useEffect } from 'react';
import { easeInOut } from 'framer-motion';

import styled, { css } from 'styled-components';

const StyledMobileButton = styled.button`
  display: none;
  visibility: hidden;
  opacity: 0;
  background-color: transparent;
  width: 3rem;
  height: auto;

  @media ${props => props.theme.bp.mobile} {
    visibility: visible;
    display: block;
    opacity: 1;

    ${props =>
      props.mobileNav &&
      css`
        z-index: 50;
      `}
  }
`;

const NavBar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const showNavigation = () => {
    setMobileNav(!mobileNav);
  };

  const [isSticky, setIsSticky] = useState(false);

  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = 0; // Adjust this value to change when the user is considered at the top

    setIsAtTop(scrollPosition <= threshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 410;

      setIsSticky(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileNav]);

  return (
    <StyledHeader
      mobileNav={mobileNav}
      isSticky={isSticky}
      animate={{
        opacity: isAtTop ? 1 : isSticky ? 0.97 : 1,
        y: isAtTop ? 0 : isSticky ? 0 : -100,
        transition: {
          duration: isAtTop ? 0 : 0.7,
          ease: easeInOut,
        },
      }}
    >
      <StyledNavBarContainer mobileNav={mobileNav}>
        <StyledLogoContainer>
          <a href='#'>
            <BookmarkLogo />
          </a>
        </StyledLogoContainer>
        <StyledNavigation mobileNav={mobileNav}>
          <Navigation mobileNav={mobileNav} setMobileNav={setMobileNav} />
          <StyledLoginLink mobileNav={mobileNav} href='#' secondary>
            login
          </StyledLoginLink>
        </StyledNavigation>
        <StyledMobileButton mobileNav={mobileNav} onClick={showNavigation}>
          {!mobileNav ? <Menu /> : <XMenu />}
        </StyledMobileButton>
      </StyledNavBarContainer>
    </StyledHeader>
  );
};

export default NavBar;
