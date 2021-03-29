import { TOP_BAR_HEIGHT } from 'constants/sizes';
import styled from 'styled-components';
import LeftPanel from '../components/LeftPanel';

export const PageSeparator = styled.hr`
    width: ${(props) => (props.vertical ? '1px' : props.length)};
    height: ${(props) => (props.vertical ? props.length : '1px')};
    border: 1px solid #173b50;
    filter: blur(2px);
    opacity: 0.5;
`;

export const FixedContainer = styled.div`
    position: absolute;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;

export const HeaderContainer = styled.div`
    position: fixed;
    width: 100%;
`;

export const SidePanelContainer = styled.div`
    display: flex;
    position: fixed;
    top: calc(${TOP_BAR_HEIGHT}px + 2px);
    height: 100%;
`;

export const FixedRightPanel = styled(LeftPanel)`
    position: fixed;
    top: calc(${TOP_BAR_HEIGHT}px + 2px);
    right: 0;
    height: 100%;
`;

export const Main = styled.main`
    padding-top: calc(${TOP_BAR_HEIGHT}px + 0.5rem);
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 0 350px;
`;
