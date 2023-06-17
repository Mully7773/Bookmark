import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledLeftColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyledHeroHeading = styled.h1`
  font-size: 5rem;
  text-transform: capitalize;
  line-height: 1.2;
  color: ${props => props.theme.neutral.h1Color};
  font-weight: 500;
  @media ${props => props.theme.bp.tabletL} {
    font-size: 3rem;
  }
`;

export const StyledSupplementaryParagraph = styled.p`
  max-width: 50rem;
  @media ${props => props.theme.bp.tabletL} {
    font-size: 1.6rem;
  }
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
`;
