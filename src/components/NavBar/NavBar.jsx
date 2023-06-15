import BookmarkLogo from '/src/assets/logo-bookmark.svg';
import { StyledLoginLink } from '../../styles/UI/StyledLoginLink';
import { StyledHeader } from '../../styles/Header/StyledHeader';
import {
  StyledNavBarContainer,
  StyledLogoContainer,
  StyledNavigation,
} from '../../styles/Header/StyledNavBarContainer';
import Navigation from './Navigation';

const NavBar = () => {
  return (
    <StyledHeader>
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
