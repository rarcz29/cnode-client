import COLORS from 'constants/colors';
import TRANSITIONS from 'constants/transitions';
import styled from 'styled-components';
import { ContainerProps } from './props';

const handleHeaderSize = (headerSize?: string) => {
    switch (headerSize) {
        case 'first':
            return '1rem';
        case 'second':
        default:
            return '1.125rem';
    }
};

const handleHeaderColor = (headerSize?: string) => {
    switch (headerSize) {
        case 'second':
            return COLORS.MAIN_COLOR;
        case 'first':
        default:
            return COLORS.FOREGROUND.DARKER;
    }
};

export const StyledSection = styled.section<ContainerProps>`
    width: calc(100% - 2rem);
    margin: 1rem;
    margin-bottom: 1.5rem;

    & > header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.875rem;

        &:hover > div > * {
            opacity: 0.2;
        }

        & > h1 {
            font-size: ${(props: ContainerProps) =>
                handleHeaderSize(props.type)};
            font-weight: normal;
            color: ${(props: ContainerProps) => handleHeaderColor(props.type)};
        }

        & > div {
            display: flex;

            & > * {
                transition: opacity ease-in-out ${TRANSITIONS.FAST}ms;
                margin-right: 0.5rem;
                opacity: 0.1;
                font-size: 1rem;

                &:last-child {
                    margin-right: 0;
                }

                &:hover {
                    opacity: 1;
                    cursor: pointer;
                }
            }
        }
    }
`;

export const Content = styled.div`
    & > * {
        margin-bottom: 0.5rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;
