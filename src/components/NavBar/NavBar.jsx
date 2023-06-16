import BookmarkLogo from '/src/assets/logo-bookmark.svg';
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

const NavBar = () => {
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

  return (
    <StyledHeader
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
      <StyledNavBarContainer>
        <StyledLogoContainer>
          <a href='#'>
            <BookmarkLogo />
          </a>
        </StyledLogoContainer>
        <StyledNavigation>
          <Navigation />
          <StyledLoginLink href='#' secondary>
            login
          </StyledLoginLink>
        </StyledNavigation>
      </StyledNavBarContainer>
    </StyledHeader>
  );
};

export default NavBar;
