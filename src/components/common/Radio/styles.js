import COLORS from 'constants/colors';
import styled from 'styled-components';

export const Container = styled.label`
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    font-size: 0.875rem;
    user-select: none;
    width: ${(props) => props.width};
    color: ${COLORS.FOREGROUND.SECONDARY};
`;

export const Input = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:checked ~ span {
        background-color: ${COLORS.BLUE};
        border-color: ${COLORS.BLUE};

        & > div {
            display: block;
        }
    }
`;

export const Checkmark = styled.span`
    position: absolute;
    top: calc(50% - 0.5em);
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1rem;
    width: 1rem;
    background-color: transparent;
    border: 1px solid ${COLORS.FOREGROUND.SECONDARY};
    border-radius: 50%;
    transition: background-color ease-in-out 250ms,
        border-color ease-in-out 250ms;
`;

export const Circle = styled.div`
    display: none;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    background: ${COLORS.FOREGROUND.MAIN};
`;

export const Icon = styled.div`
    font-size: 1.2rem;
`;
