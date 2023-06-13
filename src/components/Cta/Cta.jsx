import styled from 'styled-components';
import CtaForm from './CtaForm';

const StyledCtaSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  /* margin: 0 auto; */
  max-width: 100%;
  background-color: ${props => props.theme.primary.ctaBg};
  justify-items: center;
  align-items: center;
  padding: 6.7rem 0;
`;

const StyledSubscriptionContainer = styled.div`
  width: 100%;
  max-width: 45rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: center;

  & span {
    color: #fff;
    text-transform: uppercase;
    font-size: 1.5rem;
    letter-spacing: 0.25em;
  }

  & h2 {
    color: #fff;
    text-transform: unset;
    line-height: 1.2;
  }
`;

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
