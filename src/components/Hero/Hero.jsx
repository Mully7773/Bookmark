import styled from 'styled-components';
import { StyledButton } from '../../styles/UI/StyledButton';
import HeroIllustration from '/src/assets/illustration-hero.svg';
import { easeInOut, easeOut, motion } from 'framer-motion';

const StyledHeroLayout = styled.section`
  display: grid;
  grid-template-columns: 1fr 62rem;
  align-items: center;
  justify-items: center;
  /* Temp */
  height: calc(100vh - 15rem);
  max-width: 110rem;
  margin: 0 auto;
  padding-top: 8rem;
  padding-bottom: 55rem;

  @media ${props => props.theme.bp.desktopL} {
    padding-top: 2rem;
  }
`;

const StyledLeftColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledHeroHeading = styled.h1`
  font-size: 5rem;
  text-transform: capitalize;
  line-height: 1.2;
  color: ${props => props.theme.neutral.h1Color};
  font-weight: 500;
`;

const StyledSupplementaryParagraph = styled.p`
  max-width: 50rem;
`;

const StyledButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledRightColumn = styled(motion.div)`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    height: 75%;
    width: 100vw;
    left: 40%;
    top: 26%;
    background-color: ${props => props.theme.primary.heroBg};
    border-radius: 50rem;
  }

  & svg {
    transform: translateX(8rem);
    height: 100%;
    width: 100%;
  }
`;

const Hero = () => {
  return (
    <StyledHeroLayout>
      <StyledLeftColumn
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: '0', opacity: 1 }}
        transition={{ duration: 1, ease: easeOut }}
      >
        <StyledHeroHeading>a simple bookmark manager</StyledHeroHeading>
        <StyledSupplementaryParagraph>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </StyledSupplementaryParagraph>
        <StyledButtonGroup>
          <StyledButton>Get it on Chrome</StyledButton>
          <StyledButton secondary>Get it on Firefox</StyledButton>
        </StyledButtonGroup>
      </StyledLeftColumn>
      <StyledRightColumn
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: '0', opacity: 1 }}
        transition={{ duration: 1, ease: easeOut }}
      >
        <div>
          <HeroIllustration />
        </div>
      </StyledRightColumn>
    </StyledHeroLayout>
  );
};

export default Hero;
