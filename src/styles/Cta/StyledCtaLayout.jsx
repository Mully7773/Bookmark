import styled from 'styled-components';

export const StyledCtaSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 100%;
  background-color: ${props => props.theme.primary.ctaBg};
  justify-items: center;
  align-items: center;
  padding: 6.7rem 0;
`;

export const StyledSubscriptionContainer = styled.div`
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
    @media ${props => props.theme.bp.mobile} {
      font-size: 1.4rem;
    }
  }

  & h2 {
    color: #fff;
    text-transform: unset;
    line-height: 1.2;
    @media ${props => props.theme.bp.mobile} {
      font-size: 2.2rem;
    }
  }

  @media ${props => props.theme.bp.mobile} {
    max-width: 30rem;
  }
`;
