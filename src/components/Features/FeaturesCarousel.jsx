import { useState } from 'react';
import { StyledButton } from '../../styles/UI/StyledButton';
import { featuresData } from '../../data/featuresData';
import { Fragment } from 'react';
import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import {
  StyledTabsContainer,
  StyledCarouselControls,
  StyledTabBar,
  StyledCarouselContent,
  StyledCarouselImgContainer,
  StyledCarouselTextContainer,
} from '../../styles/Features/StyledFeaturesCarousel';

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
        <AnimatePresence mode='wait'>
          <StyledCarouselImgContainer
            key={selectedTab ? selectedTab.title : null}
            initial={{ x: -15, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -15, opacity: 0 }}
            transition={{ duration: 0.5, ease: easeInOut }}
          >
            <img src={selectedTab ? selectedTab.image : null} />
          </StyledCarouselImgContainer>
        </AnimatePresence>
        <AnimatePresence mode='wait'>
          <StyledCarouselTextContainer
            key={selectedTab ? selectedTab.title : null}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.5, ease: easeInOut }}
          >
            <h2> {selectedTab ? selectedTab.title : null}</h2>
            <p> {selectedTab ? selectedTab.text : null} </p>
            <StyledButton more>more info</StyledButton>
          </StyledCarouselTextContainer>
        </AnimatePresence>
      </StyledCarouselContent>
    </>
  );
};

export default FeaturesCarousel;
