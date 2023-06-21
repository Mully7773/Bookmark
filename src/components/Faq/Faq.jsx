import { easeInOut } from 'framer-motion';
import FaqHeading from './FaqHeading';
import FaqContent from './FaqContent';
import { StyledFaqSection } from '../../styles/Faq/StyledFaqLayout';
import { StyledButton } from '../../styles/UI/StyledButton';
import { toast } from 'react-hot-toast';

const Faq = () => {
  const notify = () =>
    toast(t => (
      <span
        style={{
          color: 'purple',
          textTransform: 'unset',
          letterSpacing: 'unset',
        }}
      >
        More information coming <b>soon!</b>
      </span>
    ));

  return (
    <StyledFaqSection
      id='faq'
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 0.3,
          duration: 1,
          ease: easeInOut,
        },
      }}
      viewport={{ once: true }}
    >
      <FaqHeading />
      <FaqContent />
      <StyledButton onClick={notify}>More Info</StyledButton>
    </StyledFaqSection>
  );
};

export default Faq;
