import { motion } from 'framer-motion';
import styled from 'styled-components';
import FaqHeading from './FaqHeading';

const StyledFaqSection = styled(motion.section)`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  max-width: 110rem;
  justify-items: center;
  align-items: center;
  padding-bottom: 18rem;
`;

const Faq = () => {
  return (
    <StyledFaqSection>
      <FaqHeading />
    </StyledFaqSection>
  );
};

export default Faq;
