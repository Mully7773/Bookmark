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
  width: 100%;
  cursor: pointer;
  & a,
  a:visited,
  a:link {
    display: unset;
  }
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
      @media ${props => props.theme.bp.mobile} {
        font-size: 1.6rem;
      }
    }

    & a {
      transition: all 0.3s;
      &:hover {
        color: ${props => props.theme.secondary.linkHover};
      }
    }
    @media ${props => props.theme.bp.mobile} {
      display: none;
      ${props =>
        props.mobileNav &&
        css`
          background-color: #fff;
          height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 0;
          right: 0;
          z-index: 30;
          flex-direction: column;
        `}

      ${props =>
        props.footer &&
        css`
          display: flex;
          flex-direction: column;
          gap: 2rem;
          text-align: center;
        `}
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
