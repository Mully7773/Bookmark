import { easeInOut } from 'framer-motion';
import { extensionsData } from '../../data/extensionsData';
import { StyledButton } from '../../styles/UI/StyledButton';
import { StyledExtensionCard } from '../../styles/Extensions/StyledExtensionsCard';

const ExtensionsCard = () => {
  return (
    <>
      {extensionsData.map(card => {
        return (
          <StyledExtensionCard
            key={card.title}
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
            <header>
              <img src={card.image} />
            </header>
            <div>
              <h3>Add to {card.title}</h3>
              <p>Minimum version {card.versionNumber}</p>
            </div>
            <footer>
              <StyledButton>{card.button}</StyledButton>
            </footer>
          </StyledExtensionCard>
        );
      })}
    </>
  );
};

export default ExtensionsCard;
