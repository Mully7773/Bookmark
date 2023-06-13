import styled from 'styled-components';
import { StyledButton } from '../../styles/UI/StyledButton';

const StyledLoginForm = styled.form`
  & div {
    display: flex;
    gap: 2.5rem;

    & input {
      position: relative;
      border: none;
      padding: 1.2rem 0;
      border-radius: ${props => props.theme.borderRadius.input};
      padding-left: 2rem;
      font-size: 1.4rem;
      width: 100%;
      :focus {
        outline: 0.2rem dashed ${props => props.theme.secondary.inputFocus};
        outline-offset: 0.3rem;
      }

      :focus:not(:focus-visible) {
        outline: none;
        outline-offset: 0rem;
      }

      :focus-visible {
        outline: 0.2rem dashed ${props => props.theme.secondary.inputFocus};
        outline-offset: 0.3rem;
      }
    }
  }
`;

const CtaForm = () => {
  return (
    <StyledLoginForm>
      <div>
        <input
          placeholder='Enter your email address'
          required
          id='email'
          type='text'
        />
        <StyledButton ctaBtn>subscribe</StyledButton>
      </div>
    </StyledLoginForm>
  );
};

export default CtaForm;
