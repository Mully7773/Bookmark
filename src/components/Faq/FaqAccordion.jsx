import styled, { css } from 'styled-components';
import Chevron from '/src/assets/chevron-down.svg';
import { StyledButton } from '../../styles/UI/StyledButton';
import { AnimatePresence } from 'framer-motion';

const StyledAccordionItem = styled.li`
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

const StyledChevronContainer = styled.div`
  & svg {
    stroke: ${props => props.theme.primary.faqChevronDefault};
    height: 2.8rem;
    width: auto;
  }
`;

const FaqAccordion = ({ faq, i, expanded, setExpanded }) => {
  const isOpen = i === expanded;
  return (
    <StyledAccordionItem first={i === 0}>
      <StyledButton faqBtn onClick={() => setExpanded(isOpen ? false : i)}>
        {faq.question}
        <StyledChevronContainer>
          <Chevron />
        </StyledChevronContainer>
      </StyledButton>
      <AnimatePresence>
        {isOpen && (
          <div>
            <p>{faq.answer}</p>
          </div>
        )}
      </AnimatePresence>
    </StyledAccordionItem>
  );
};

export default FaqAccordion;
