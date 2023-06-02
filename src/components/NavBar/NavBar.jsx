import BookmarkLogo from '../../../public/logo-bookmark.svg';
import { StyledCtaLink } from '../../styles/UI/StyledCtaLink';
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
          <StyledCtaLink secondary>login</StyledCtaLink>
        </StyledNavigation>
      </StyledNavBarContainer>
    </StyledHeader>
  );
};

export default NavBar;
