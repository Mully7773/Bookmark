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

  ${props =>
    props.features &&
    css`
      background-color: transparent;
      color: ${props => props.theme.neutral.featuresBtn};
      outline: none;
      /* border-bottom: 0.1rem solid ${props =>
        props.theme.neutral.featuresBtn}; */
      border-radius: unset;
      box-shadow: unset;
      font-size: 1.6rem;
      font-weight: 300;
      letter-spacing: 0.05rem;
      padding: 1.7rem 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: all 0.3s;

      &:hover {
        color: ${props => props.theme.secondary.featuresBtnHoverActive};
      }
    `}
    ${props =>
    props.features_active &&
    css`
      color: ${props => props.theme.neutral.featureBtnActive};
      font-weight: 500;
      &:hover {
        color: unset;
      }
    `}
    ${props =>
    props.more &&
    css`
      text-transform: capitalize;
      width: fit-content;
      &:hover {
        color: unset;
      }
    `}
    ${props =>
    props.faqBtn &&
    css`
    font-size: 1.6rem;
    font-weight: 400;
      display: flex;
      background-color: unset;
      justify-content: space-between;
      align-items: center;
      outline: none;
      color: ${props => props.theme.neutral.faqBtn};
      box-shadow: unset;
      width: 100%;
    padding: 23px 24px 19px 0;
};
      &:hover {
        color: unset;
      }
    `}
`;
