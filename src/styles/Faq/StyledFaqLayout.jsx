import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledFaqSection = styled(motion.section)`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  max-width: 110rem;
  justify-items: center;
  align-items: center;
  padding-bottom: 11rem;
  @media ${props => props.theme.bp.mobile} {
    max-width: 48rem;
  }

  & div {
    & p {
      margin-bottom: 4rem;
    }
  }
`;
