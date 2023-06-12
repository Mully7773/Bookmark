import { useState } from 'react';
import { faqData } from '../../data/faqData';
import FaqAccordion from './FaqAccordion';
import { StyledAccordionList } from '../../styles/Faq/StyledFaqContent';

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
