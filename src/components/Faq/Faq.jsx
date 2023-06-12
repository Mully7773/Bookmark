import { motion, easeInOut } from 'framer-motion';
import styled from 'styled-components';
import FaqHeading from './FaqHeading';
import FaqContent from './FaqContent';
import { StyledFaqSection } from '../../styles/Faq/StyledFaqLayout';

const Faq = () => {
  return (
    <StyledFaqSection
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
      <FaqHeading />
      <FaqContent />
    </StyledFaqSection>
  );
};

export default Faq;
