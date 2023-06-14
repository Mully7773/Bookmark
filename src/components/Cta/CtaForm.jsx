import styled from 'styled-components';
import { StyledButton } from '../../styles/UI/StyledButton';
import { useState } from 'react';
import { easeInOut, motion } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';

const StyledCtaForm = styled.form`
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

const StyledWelcomeMessage = styled(motion.p)`
  font-size: 2.2rem;
  font-weight: 500;
  color: #fff;
  padding-bottom: 1rem;
`;

const INITIAL_FORM_STATE = {
  email: '',
};

const CtaForm = () => {
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [subscribed, setSubscribed] = useState(false);

  const emailValidation = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$"
  );

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleFormSubmission = e => {
    e.preventDefault();
    // Validate email address:
    const isValidEmail = emailValidation.test(form.email);
    if (!isValidEmail) {
      toast.error('Please enter a valid email address!');
      return;
    }
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
        <StyledCtaForm onSubmit={handleFormSubmission}>
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
        </StyledCtaForm>
      )}
      {subscribed && (
        <StyledWelcomeMessage
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: easeInOut }}
        >
          Welcome! Thanks for subscribing!
        </StyledWelcomeMessage>
      )}
      <Toaster position='bottom-right' reverseOrder={false} />
    </>
  );
};

export default CtaForm;
