import styled from 'styled-components';
import { StyledButton } from '../../styles/UI/StyledButton';
import { useState } from 'react';

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

const INITIAL_FORM_STATE = {
  email: '',
};

const CtaForm = () => {
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [subscribed, setSubscribed] = useState(false);

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleFormSubmission = e => {
    e.preventDefault();
    const userEmail = {
      email: form.email,
    };
    console.log(userEmail);

    setForm(INITIAL_FORM_STATE);
    setSubscribed(prevState => !prevState.subscribed);
  };
  return (
    <>
      {!subscribed && (
        <StyledLoginForm onSubmit={handleFormSubmission}>
          <div>
            <input
              placeholder='Enter your email address'
              required
              id='email'
              type='text'
              value={form.email}
              onChange={handleChange}
            />
            <StyledButton ctaBtn>subscribe</StyledButton>
          </div>
        </StyledLoginForm>
      )}
      {subscribed && <p>Welcome! Thanks for subscribing!</p>}
    </>
  );
};

export default CtaForm;
