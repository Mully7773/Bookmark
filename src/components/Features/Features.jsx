import FeaturesHeading from './FeaturesHeading';
import FeaturesCarousel from './FeaturesCarousel';
import { easeInOut } from 'framer-motion';
import { StyledFeaturesSection } from '../../styles/Features/StyledFeaturesLayout';

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
