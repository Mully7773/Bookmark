import styled from 'styled-components';
import FeaturesHeading from './FeaturesHeading';
import FeaturesCarousel from './FeaturesCarousel';

const StyledFeaturesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-rows: 1fr 1fr 50rem; */
  margin: 0 auto;
  max-width: 110rem;
  justify-items: center;
  align-items: center;
  padding-bottom: 12rem;
  /* column-gap: 4rem; */
`;

const Features = () => {
  return (
    <StyledFeaturesSection>
      <FeaturesHeading />
      <FeaturesCarousel />
    </StyledFeaturesSection>
  );
};

export default Features;
