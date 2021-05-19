import styled from 'styled-components';
import {
  monitorSize,
  mobileSize,
  sidePaddingMob,
  sidePaddingMon,
  sidePaddingTab,
} from '../../styles/variables';

const SectionContainer = styled.div`
  width: 100%;

  @media only screen and (min-width: ${monitorSize}) {
    padding: 0 ${sidePaddingMon};
  }

  @media only screen and (max-width: ${monitorSize}) and (min-width: ${mobileSize}) {
    padding: 0 ${sidePaddingTab};
  }

  @media only screen and (max-width: ${mobileSize}) {
    padding: 0 ${sidePaddingMob};
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export default SectionContainer;
