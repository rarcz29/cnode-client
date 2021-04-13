import COLORS from 'constants/colors';
import styled from 'styled-components';

export const Container = styled.div`
    width: ${(props) => props.width};
    border-radius: 0.5rem;
    background: linear-gradient(360deg, transparent, ${COLORS.DARK_GREY} 100%);
    padding: 1rem 2rem;
    color: ${COLORS.FOREGROUND.SECONDARY};
`;

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h1 {
        font-weight: normal;
        font-size: 1.5rem;
        position: relative;
        top: -1.5rem;
    }
`;

export const Icon = styled.div`
    font-size: 4.5rem;
    color: ${(props) => props.iconColor};
    opacity: 0.1;
`;

export const Stat = styled.p`
    display: flex;
    justify-content: space-between;
    width: 90%;

    & > span:first-child {
        margin-bottom: 1rem;
    }
`;
