import styled from 'styled-components';
import FacebookIcon from '/src/assets/facebook.svg';
import TwitterIcon from '/src/assets/twitter.svg';
import BookmarkLogo from '/src/assets/logo-bookmark-white.svg';
import {
  StyledLogoContainer,
  StyledNavigation,
} from '../../styles/Header/StyledNavBarContainer';
import Navigation from '../NavBar/Navigation';

const StyledFooter = styled.footer`
  padding: 3.2rem;
  background-color: ${props => props.theme.neutral.footerBg};
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 110rem;
  margin: 0 auto;

  & div {
    display: flex;
    gap: 4.2rem;
  }
`;

const StyledSocialLinksContainer = styled.div`
  width: 9.4rem;
  height: auto;
  & svg {
    width: 100%;
    height: 100%;
    stroke: #fff;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      stroke: ${props => props.theme.secondary.linkHover};
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <div>
          <StyledLogoContainer>
            <a href='#'>
              <BookmarkLogo />
            </a>
          </StyledLogoContainer>
          <StyledNavigation footer>
            <Navigation />
          </StyledNavigation>
        </div>
        <StyledSocialLinksContainer>
          <a href='#'>
            <FacebookIcon />
          </a>
          <a href='#'>
            <TwitterIcon />
          </a>
        </StyledSocialLinksContainer>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
