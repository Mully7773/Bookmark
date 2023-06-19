import { easeInOut } from 'framer-motion';
import { StyledSectionHeading } from '../../styles/UI/StyledSectionHeading';
import ExtensionsCard from './ExtensionsCard';
import { StyledExtensionsSection } from '../../styles/Extensions/StyledExtensionsLayout';

const Extensions = () => {
  return (
    <StyledExtensionsSection
      id='extensions'
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
      <StyledSectionHeading>
        <h2>Download the extension</h2>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </StyledSectionHeading>
      <ExtensionsCard />
    </StyledExtensionsSection>
  );
};

export default Extensions;
