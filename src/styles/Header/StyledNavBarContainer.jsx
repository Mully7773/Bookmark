import styled, { css } from 'styled-components';

export const StyledNavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 110rem;
  margin: 0 auto;
`;

export const StyledLogoContainer = styled.div`
  height: 2.6rem;
  width: auto;
  cursor: pointer;
  & svg {
    height: 100%;
    width: 16rem;
  }
`;

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 4.8rem;

  & ul {
    display: flex;
    gap: 4.8rem;

    & li {
      text-transform: uppercase;
      font-size: 1.4rem;
      letter-spacing: 0.1rem;
    }

    & a {
      transition: all 0.3s;
      &:hover {
        color: ${props => props.theme.secondary.linkHover};
      }
    }
  }

  ${props =>
    props.footer &&
    css`
      & a {
        color: #fff;
      }
    `}
`;
