import styled from 'styled-components';
import { extensionsData } from '../../data/extensionsData';
import { StyledButton } from '../../styles/UI/StyledButton';
const StyledExtensionCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem;
`;

const ExtensionsCard = () => {
  return (
    <>
      {extensionsData.map(card => {
        return (
          <StyledExtensionCard>
            <img src={card.image} />
            <h3>Add to {card.title}</h3>
            <span>Minimum version {card.versionNumber}</span>
            <StyledButton>{card.button}</StyledButton>
          </StyledExtensionCard>
        );
      })}
    </>
  );
};

export default ExtensionsCard;
