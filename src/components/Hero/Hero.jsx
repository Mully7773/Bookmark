import styled from 'styled-components';
import { StyledButton } from '../../styles/UI/StyledButton';

const StyledHeroLayout = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  /* Temp */
  height: calc(100vh - 15rem);
  max-width: 110rem;
  margin: 0 auto;
`;

const StyledLeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledHeroHeading = styled.h1`
  font-size: 4.6rem;
  text-transform: capitalize;
  line-height: 1.2;
  color: ${props => props.theme.neutral.h1Color};
  font-weight: 500;
`;

const StyledSupplementaryParagraph = styled.p`
  color: ${props => props.theme.neutral.pHeroColor};
  font-size: 1.8rem;
  max-width: 50rem;
`;

const StyledButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
`;

const Hero = () => {
  return (
    <StyledHeroLayout>
      <StyledLeftColumn>
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
    </StyledHeroLayout>
  );
};

export default Hero;
