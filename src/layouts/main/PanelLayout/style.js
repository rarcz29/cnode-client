import { TOP_BAR_HEIGHT } from 'constants/sizes';
import styled from 'styled-components';

export const PageSeparator = styled.hr`
    width: ${(props) => (props.vertical ? '1px' : props.length)};
    height: ${(props) => (props.vertical ? props.length : '1px')};
    border: 1px solid #173b50;
    filter: blur(1px);
    opacity: 0.4;
`;

export const TopBarContainer = styled.div`
    position: fixed;
    width: 100%;
    z-index: 5;
`;

export const LeftPanelContainer = styled.div`
    height: 100%;
    position: fixed;
    top: ${TOP_BAR_HEIGHT}px;
    display: flex;
    z-index: 4;
`;
