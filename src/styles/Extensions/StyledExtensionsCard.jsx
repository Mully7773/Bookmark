import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledExtensionCard = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2.5rem;
  padding: 3.4rem 3rem;
  box-shadow: 0px 1.5rem 1.1rem 1px rgba(0, 0, 0, 0.09);
  border-radius: ${props => props.theme.borderRadius.cards};
  /* border-radius: 0.5rem; */

  & img {
    width: 10rem;
    height: auto;
    margin-bottom: 1rem;
  }

  & p {
    font-size: 1.55rem;
    margin-bottom: 2rem;
  }

  & button {
    text-transform: capitalize;
    margin-top: 0.7rem;
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }

  &::before {
    position: absolute;
    content: '';
    bottom: 11rem;
    left: 0;
    background-image: url(src/assets/bg-dots.svg);
    background-size: 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 1rem;
  }

  &:nth-child(3) {
    transform: translateY(15%);
  }
  &:nth-child(4) {
    transform: translateY(30%);
  }
`;
