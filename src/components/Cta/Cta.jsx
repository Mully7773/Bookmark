import CtaForm from './CtaForm';
import {
  StyledCtaSection,
  StyledSubscriptionContainer,
} from '../../styles/Cta/StyledCtaLayout';

const Cta = () => {
  return (
    <StyledCtaSection>
      <StyledSubscriptionContainer>
        <span>
          <strong>35,000+</strong> already joined
        </span>
        <h2>Stay up-to-date with what we're doing</h2>
        <CtaForm />
      </StyledSubscriptionContainer>
    </StyledCtaSection>
  );
};

export default Cta;
