import styled from 'styled-components';

export const StyledSectionHeading = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  width: 50%;
  @media ${props => props.theme.bp.tabletL} {
    width: 75%;
  }
`;
