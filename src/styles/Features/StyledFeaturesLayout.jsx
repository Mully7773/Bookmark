import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledFeaturesSection = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  max-width: 110rem;
  justify-items: center;
  align-items: center;
  padding-bottom: 18rem;
  @media ${props => props.theme.bp.tabletL} {
    max-width: 70rem;
  }
`;
