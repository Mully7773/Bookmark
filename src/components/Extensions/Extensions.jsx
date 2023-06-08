import { motion, easeInOut } from 'framer-motion';
import styled from 'styled-components';
import { StyledSectionHeading } from '../../styles/UI/StyledSectionHeading';
import ExtensionsCard from './ExtensionsCard';

const StyledExtensionsSection = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  max-width: 110rem;
  justify-items: center;
  align-items: center;
  padding-bottom: 12rem;
`;

const Extensions = () => {
  return (
    <StyledExtensionsSection
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
