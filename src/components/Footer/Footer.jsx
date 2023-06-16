import FacebookIcon from '/src/assets/facebook.svg';
import TwitterIcon from '/src/assets/twitter.svg';
import BookmarkLogo from '/src/assets/logo-bookmark-white.svg';
import {
  StyledLogoContainer,
  StyledNavigation,
} from '../../styles/Header/StyledNavBarContainer';
import Navigation from '../NavBar/Navigation';
import {
  StyledFooter,
  StyledContainer,
  StyledSocialLinksContainer,
} from '../../styles/Footer/StyledFooterLayout';

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
