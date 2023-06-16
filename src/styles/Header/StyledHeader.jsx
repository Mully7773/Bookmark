import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const StyledHeader = styled(motion.header)`
  padding: 4.8rem 3.2rem 3.2rem 3.2rem;
  background: #fff;
  z-index: 100;

  ${props =>
    props.isSticky &&
    css`
      position: sticky;
      top: 0rem;
      box-shadow: ${props => props.theme.boxShadow.navBar};
      opacity: 0.97;
      padding-top: 3.2rem;
    `}
`;
