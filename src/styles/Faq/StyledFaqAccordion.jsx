import styled from 'styled-components';
import { css } from 'styled-components';
import { motion } from 'framer-motion';

export const StyledAccordionItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.neutral.faqBorders};

  ${props =>
    props.first &&
    css`
      border-top: 1px solid ${props => props.theme.neutral.faqBorders};
    `}
`;

export const StyledChevronContainer = styled(motion.div)`
  & svg {
    stroke: ${props => props.theme.primary.faqChevronDefault};
    height: 2.8rem;
    width: auto;
    transition: all 0.3s;

    &:hover {
      stroke: ${props => props.theme.neutral.faqChevronHover};
    }
  }
  ${props =>
    props.isOpen &&
    css`
      & svg {
        stroke: ${props => props.theme.secondary.faqChevronOpen};
        transform: rotate(180deg);
      }
    `}
`;

export const StyledAccordionContentContainer = styled(motion.div)``;
