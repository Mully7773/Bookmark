import styled from 'styled-components';

export const StyledHeroLayout = styled.section`
  display: grid;
  grid-template-columns: 1fr 62rem;
  align-items: center;
  justify-items: center;
  /* Temp */
  height: calc(100vh - 15rem);
  max-width: 110rem;
  margin: 0 auto;
  padding-top: 8rem;
  padding-bottom: 55rem;

  @media ${props => props.theme.bp.desktopL} {
    padding-top: 2rem;
  }
`;
