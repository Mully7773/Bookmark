import styled from 'styled-components';
import BookmarkLogo from '../../../public/logo-bookmark.svg';
import { StyledCtaLink } from '../../styles/UI/StyledCtaLink';

const StyledHeader = styled.header`
  padding: 4.8rem 3.2rem 3.2rem 3.2rem;
`;

const StyledNavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 110rem;
  margin: 0 auto;
`;

const StyledLogoContainer = styled.div`
  height: 2.4rem;
  width: auto;
`;

const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 4.8rem;
  & ul {
    display: flex;
    gap: 4.8rem;

    & li {
      text-transform: uppercase;
      font-size: 1.4rem;
      letter-spacing: 0.1rem;
    }
  }
`;

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
