import BookmarkLogo from '/src/assets/logo-bookmark.svg';
import { StyledLoginLink } from '../../styles/UI/StyledLoginLink';
import { StyledHeader } from '../../styles/Header/StyledHeader';
import {
  StyledNavBarContainer,
  StyledLogoContainer,
  StyledNavigation,
} from '../../styles/Header/StyledNavBarContainer';

const NavBar = () => {
  return (
    <StyledHeader>
      <StyledNavBarContainer>
        <StyledLogoContainer>
          <BookmarkLogo />
        </StyledLogoContainer>
        <StyledNavigation>
          <ul>
            <li>
              <a href='#'>features</a>
            </li>
            <li>
              <a href='#'>pricing</a>
            </li>
            <li>
              <a href='#'>contact</a>
            </li>
          </ul>
          <StyledLoginLink secondary>login</StyledLoginLink>
        </StyledNavigation>
      </StyledNavBarContainer>
    </StyledHeader>
  );
};

export default NavBar;
