import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  color: #fff;
  text-transform: unset;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 1.1rem 2.4rem;
  box-shadow: ${props => props.theme.boxShadow.button};
  border-radius: ${props => props.theme.borderRadius.button};
  background-color: ${props => props.theme.primary.btnPrimary};
  outline: solid 2px ${props => props.theme.primary.btnPrimary};
  transition: all 0.3s;

  &:hover {
    background-color: #fff;
    color: ${props => props.theme.primary.btnPrimary};
  }

  ${props =>
    props.secondary &&
    css`
      background-color: ${props.theme.neutral.secondaryBtn};
      color: ${props => props.theme.neutral.secondaryBtnColor};
      outline: solid 2px ${props.theme.neutral.secondaryBtn};

      &:hover {
        outline: solid 2px ${props.theme.neutral.secondaryBtnOutlineHover};
        color: #000;
      }
    `}
`;
