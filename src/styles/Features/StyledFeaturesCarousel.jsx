import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledTabsContainer = styled.div`
  padding: 5.2rem 0 6rem 0;
  grid-column: 1 / -1;
  width: 70%;
  max-width: 85rem;
  text-align: center;
  @media ${props => props.theme.bp.tabletL} {
    width: 90%;
  }
`;

export const StyledCarouselControls = styled.div`
  display: flex;
  border-bottom: 1.5px solid #eee;
  @media ${props => props.theme.bp.mobile} {
    flex-direction: column;
    border-bottom: unset;
  }

  & button {
    @media ${props => props.theme.bp.mobile} {
      font-size: 1.6rem;
      border-bottom: 1.5px solid #eee;
    }
  }
`;

export const StyledTabBar = styled(motion.div)`
  position: absolute;
  background: ${props => props.theme.secondary.featuresBtnHoverActive};
  height: 2px;
  bottom: 0;
  bottom: -1px;
  left: 0;
  right: 0;
  width: 100%;
`;

export const StyledCarouselContent = styled.div`
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

    @media ${props => props.theme.bp.tabletL} {
      height: 75%;
    }

    @media ${props => props.theme.bp.mobile} {
      top: 0%;
      height: 55%;
      right: 27%;
    }
  }

  @media ${props => props.theme.bp.tabletL} {
    grid-template-columns: 1fr 1fr;
    height: auto;
  }
  @media ${props => props.theme.bp.mobile} {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 9rem;
  }
`;

export const StyledCarouselImgContainer = styled(motion.div)`
  width: 55rem;
  height: auto;
  @media ${props => props.theme.bp.desktopL} {
    width: 50rem;
    height: auto;
  }
  @media ${props => props.theme.bp.tabletL} {
    width: 30rem;
    height: auto;
  }
  @media ${props => props.theme.bp.mobile} {
    width: 36rem;
    padding-top: 2rem;
  }
`;

export const StyledCarouselTextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 0 4rem 3rem;
  & h2 {
    text-transform: unset;
  }

  & p {
    margin-bottom: 2.5rem;
    @media ${props => props.theme.bp.tabletL} {
      margin-bottom: 1rem;
    }
  }
  @media ${props => props.theme.bp.tabletL} {
    padding: 0;
    padding-bottom: 4rem;
  }
  @media ${props => props.theme.bp.mobile} {
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 45rem;
  }
`;
