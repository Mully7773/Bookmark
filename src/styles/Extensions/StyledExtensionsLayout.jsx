import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledExtensionsSection = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  max-width: 100rem;
  justify-items: center;
  align-items: center;
  padding-bottom: 20rem;

  & p {
    margin-bottom: 4rem;
  }
  @media ${props => props.theme.bp.tabletL} {
    grid-template-columns: 1fr;
    padding-bottom: 28rem;
  }
`;
