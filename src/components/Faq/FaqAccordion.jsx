import Chevron from '/src/assets/chevron-down.svg';
import { StyledButton } from '../../styles/UI/StyledButton';
import { AnimatePresence, motion } from 'framer-motion';
import {
  StyledAccordionItem,
  StyledChevronContainer,
  StyledAccordionContentContainer,
} from '../../styles/Faq/StyledFaqAccordion';

const FaqAccordion = ({ faq, i, expanded, setExpanded }) => {
  const isOpen = i === expanded;
  return (
    <StyledAccordionItem first={i === 0}>
      <StyledButton faqBtn onClick={() => setExpanded(isOpen ? false : i)}>
        {faq.question}
        <StyledChevronContainer isOpen={isOpen}>
          <Chevron />
        </StyledChevronContainer>
      </StyledButton>
      <AnimatePresence>
        {isOpen && (
          <StyledAccordionContentContainer
            key={faq.answer}
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.p
              variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              transition={{ duration: 0.7 }}
            >
              {faq.answer}
            </motion.p>
          </StyledAccordionContentContainer>
        )}
      </AnimatePresence>
    </StyledAccordionItem>
  );
};

export default FaqAccordion;
