import styled from 'styled-components';

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
`;

const StyledHeroHeading = styled.h1`
  font-size: 4.6rem;
  text-transform: capitalize;
  line-height: 1.4;
  color: ${props => props.theme.neutral.h1Color};
  font-weight: 500;
`;

const Hero = () => {
  return (
    <StyledHeroLayout>
      <StyledLeftColumn>
        <StyledHeroHeading>a simple bookmark manager</StyledHeroHeading>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div>
          <button>Get it on Chrome</button>
          <button>Get it on Firefox</button>
        </div>
      </StyledLeftColumn>
    </StyledHeroLayout>
  );
};

export default Hero;
