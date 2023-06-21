import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledCtaForm = styled.form`
  & div {
    display: flex;
    gap: 2.5rem;

    & input {
      position: relative;
      border: none;
      padding: 1.2rem 0;
      border-radius: ${props => props.theme.borderRadius.input};
      padding-left: 2rem;
      font-size: 1.4rem;
      width: 100%;
      @media ${props => props.theme.bp.mobile} {
        font-size: 1.2rem;
      }
      :focus {
        outline: 0.2rem dashed ${props => props.theme.secondary.inputFocus};
        outline-offset: 0.3rem;
      }

      :focus:not(:focus-visible) {
        outline: none;
        outline-offset: 0rem;
      }

      :focus-visible {
        outline: 0.2rem dashed ${props => props.theme.secondary.inputFocus};
        outline-offset: 0.3rem;
      }
    }

    @media ${props => props.theme.bp.mobile} {
      flex-direction: column;
    }
  }
`;

export const StyledWelcomeMessage = styled(motion.p)`
  font-size: 2.2rem;
  font-weight: 500;
  color: #fff;
  padding-bottom: 1rem;
  @media ${props => props.theme.bp.mobile} {
    font-size: 1.8rem;
  }
`;
