import { useState } from 'react';
import { faqData } from '../../data/faqData';
import FaqAccordion from './FaqAccordion';
import styled from 'styled-components';

const StyledAccordionList = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 57rem;
  width: 100%;
  gap: 0.6rem;
`;

const FaqContent = () => {
  const [expanded, setExpanded] = useState(faqData[0]);

  return (
    <StyledAccordionList>
      {faqData.map((faq, i) => {
        return (
          <FaqAccordion
            key={faq.question}
            faq={faq}
            i={i}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        );
      })}
    </StyledAccordionList>
  );
};

export default FaqContent;
