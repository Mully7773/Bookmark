import styled from 'styled-components';

const FeaturesHeadingContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  width: 50%;
`;

const FeaturesHeading = () => {
  return (
    <FeaturesHeadingContainer>
      <h2>features</h2>
      <p>
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
    </FeaturesHeadingContainer>
  );
};
export default FeaturesHeading;
