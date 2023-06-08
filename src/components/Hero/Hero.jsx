import { StyledButton } from '../../styles/UI/StyledButton';
import HeroIllustration from '/src/assets/illustration-hero.svg';
import { easeOut } from 'framer-motion';
import { StyledHeroLayout } from '../../styles/Hero/StyledHeroLayout';
import {
  StyledLeftColumn,
  StyledHeroHeading,
  StyledSupplementaryParagraph,
  StyledButtonGroup,
} from '../../styles/Hero/StyledLeftColumn';
import { StyledRightColumn } from '../../styles/Hero/StyledRightColumn';

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
