import { TOP_BAR_HEIGHT } from 'constants/sizes';
import styled from 'styled-components';

export const Container = styled.div`
    width: 350px;
    height: calc(100vh - ${TOP_BAR_HEIGHT + 2}px);
`;

export const ContentContainer = styled.div`
    margin: 0rem 0.2rem 0 1rem;
    height: 100%;
`;

export const ActualContentContainer = styled.div`
    margin-top: 1.5rem;
    margin-right: 0.8rem;
`;

export const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
        borderRadius: 6,
        backgroundColor: 'red',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
};
