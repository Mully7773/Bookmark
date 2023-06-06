import { useState } from 'react';
import styled, { css } from 'styled-components';
import { StyledButton } from '../../styles/UI/StyledButton';
import { featuresData } from '../../featuresData';
import { Fragment } from 'react';
import { motion } from 'framer-motion';

const StyledTabsContainer = styled.div`
  padding: 5.2rem 0 6rem 0;
  grid-column: 1 / -1;
  width: 70%;
  max-width: 85rem;
  text-align: center;
`;

const StyledCarouselControls = styled.div`
  display: flex;
  border-bottom: 1.5px solid #eee;
`;

const StyledTabBar = styled(motion.div)`
  position: absolute;
  background: ${props => props.theme.secondary.featuresBtnHoverActive};
  height: 2px;
  bottom: 0;
  bottom: -1px;
  left: 0;
  right: 0;
  width: 100%;
`;

const StyledCarouselContent = styled.div`
  position: relative;
  height: 40rem;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 62rem 1fr;
  align-items: center;
  &::before {
    content: '';
    position: absolute;
    height: 85%;
    width: 100vw;
    right: 57%;
    top: 25%;
    background-color: ${props => props.theme.primary.heroBg};
    border-radius: 50rem;
    z-index: -1;
  }
`;

const StyledCarouselImgContainer = styled.div``;

const StyledCarouselTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 0 4rem 3rem;
  & h2 {
    text-transform: unset;
  }
`;

const FeaturesCarousel = () => {
  const [selectedTab, setSelectedTab] = useState(featuresData[0]);
  return (
    <>
      <StyledTabsContainer>
        <StyledCarouselControls>
          {featuresData.map(feature => (
            <Fragment key={feature.title}>
              <StyledButton
                features_active={selectedTab === feature}
                features
                type='button'
                onClick={() => setSelectedTab(feature)}
              >
                {feature.button}
                {feature === selectedTab ? (
                  <StyledTabBar layoutId='underline' />
                ) : null}
              </StyledButton>
            </Fragment>
          ))}
        </StyledCarouselControls>
      </StyledTabsContainer>
      <StyledCarouselContent>
        <StyledCarouselImgContainer>
          <img src={selectedTab ? selectedTab.image : null} />
        </StyledCarouselImgContainer>
        <StyledCarouselTextContainer>
          <h2> {selectedTab ? selectedTab.title : null}</h2>
          <p> {selectedTab ? selectedTab.text : null} </p>
        </StyledCarouselTextContainer>
      </StyledCarouselContent>
    </>
  );
};

export default FeaturesCarousel;
