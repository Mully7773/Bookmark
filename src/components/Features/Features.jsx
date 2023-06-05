import styled from 'styled-components';
import FeaturesHeading from './FeaturesHeading';
import FeaturesCarousel from './FeaturesCarousel';

const StyledFeaturesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  max-width: 110rem;
  justify-items: center;
  align-items: center;
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
