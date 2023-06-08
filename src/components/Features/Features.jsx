import styled from 'styled-components';
import FeaturesHeading from './FeaturesHeading';
import FeaturesCarousel from './FeaturesCarousel';
import { easeInOut, motion } from 'framer-motion';

const StyledFeaturesSection = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  max-width: 110rem;
  justify-items: center;
  align-items: center;
  padding-bottom: 18rem;
`;

const Features = () => {
  return (
    <StyledFeaturesSection
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 0.3,
          duration: 1,
          ease: easeInOut,
        },
      }}
      viewport={{ once: true }}
    >
      <FeaturesHeading />
      <FeaturesCarousel />
    </StyledFeaturesSection>
  );
};

export default Features;
