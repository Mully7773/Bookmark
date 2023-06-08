import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledRightColumn = styled(motion.div)`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    height: 75%;
    width: 100vw;
    left: 40%;
    top: 26%;
    background-color: ${props => props.theme.primary.heroBg};
    border-radius: 50rem;
  }

  & svg {
    transform: translateX(8rem);
    height: 100%;
    width: 100%;
  }
`;
