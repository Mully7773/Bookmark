import styled, { css } from 'styled-components';

export const StyledCtaLink = styled.a`
  border-radius: 0.4rem;
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: all 0.5s;
  outline: solid 2px ${props => props.theme.secondary.ctaNavBtnBorder};

  &:hover {
    color: ${props => props.theme.secondary.ctaNavBtnHover};
    background-color: transparent;
  }

  ${props =>
    props.primary &&
    css`
      background: ${props => props.theme.primary.ctaBtnBg};
      color: #fff;
    `}
  ${props =>
    props.secondary &&
    css`
      background: ${props => props.theme.secondary.ctaNavBtn};
      color: #fff;
    `}
`;
