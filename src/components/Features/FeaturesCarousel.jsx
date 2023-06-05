import { useState } from 'react';
import styled, { css } from 'styled-components';
import { StyledButton } from '../../styles/UI/StyledButton';
import { featuresData } from '../../featuresData';
import { Fragment } from 'react';
import { motion } from 'framer-motion';

const StyledCarouselContainer = styled.div`
  padding: 5.2rem 0;
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

const FeaturesCarousel = () => {
  const [selectedTab, setSelectedTab] = useState(featuresData[0]);
  return (
    <StyledCarouselContainer>
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
    </StyledCarouselContainer>
  );
};

export default FeaturesCarousel;
