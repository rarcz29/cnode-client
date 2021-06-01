import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import COLORS from 'constants/colors';
import TRANSITIONS from 'constants/transitions';
import React from 'react';
import styled from 'styled-components';

interface StyleProps {
    type?: 'add' | 'remove';
}

interface ChipProps extends StyleProps {
    text: string;
    onClick?: () => void;
}

const setColor = (color?: string): string => {
    switch (color) {
        case 'remove':
            return COLORS.MAIN_COLOR;
        case 'add':
        default:
            return COLORS.BUTTONS.GREEN.MAIN;
    }
};

const setIcon = (color?: string) => {
    switch (color) {
        case 'remove':
            return faTimesCircle;
        case 'add':
        default:
            return faPlusCircle;
    }
};

const StyledSpan = styled.span<StyleProps>`
    padding: 0.4rem 0.6rem;
    border: 1px solid ${(props: StyleProps) => setColor(props.type)};
    border-radius: 3rem;
    font-size: 0.875rem;
    color: ${(props: StyleProps) => setColor(props.type)};
    display: flex;
    align-items: center;

    &:hover {
        cursor: pointer;

        & svg {
            transform: scale(1.2);
        }
    }

    & > svg {
        margin-left: 0.4rem;
        transition: transform ease-in-out ${TRANSITIONS.FAST}ms;
    }
`;

const Chip: React.FC<ChipProps> = ({ text, type, onClick }) => {
    return (
        <StyledSpan type={type} onClick={onClick}>
            {text}
            <FontAwesomeIcon icon={setIcon(type)} />
        </StyledSpan>
    );
};

export default Chip;
