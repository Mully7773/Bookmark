import { StyledButton } from '../../styles/UI/StyledButton';
import { useState } from 'react';
import { easeInOut } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import {
  StyledCtaForm,
  StyledWelcomeMessage,
} from '../../styles/Cta/StyledCtaForm';

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
