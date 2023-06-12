import { motion, easeInOut } from 'framer-motion';
import styled from 'styled-components';
import FaqHeading from './FaqHeading';
import FaqContent from './FaqContent';

const StyledFaqSection = styled(motion.section)`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  max-width: 110rem;
  justify-items: center;
  align-items: center;
  padding-bottom: 18rem;

  & div {
    & p {
      margin-bottom: 4rem;
    }
  }
`;

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
