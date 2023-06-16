import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 3.2rem;
  background-color: ${props => props.theme.neutral.footerBg};
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 110rem;
  margin: 0 auto;

  & div {
    display: flex;
    gap: 4.2rem;
  }
`;

export const StyledSocialLinksContainer = styled.div`
  width: 9.4rem;
  height: auto;
  & svg {
    width: 100%;
    height: 100%;
    stroke: #fff;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      stroke: ${props => props.theme.secondary.linkHover};
    }
  }
`;
