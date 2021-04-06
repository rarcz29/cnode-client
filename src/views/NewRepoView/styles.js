import { Chip } from '@material-ui/core';
import TextInput from 'components/common/TextInput';
import COLORS from 'constants/colors';
import styled, { css } from 'styled-components';

const commonStyle = css`
    width: 100%;
    margin-bottom: 2rem;
`;

const commonH1Style = css`
    color: ${COLORS.FOREGROUND.MAIN};
    margin-bottom: 0.5rem;
    font-weight: normal;
`;

const commonParagraphStyle = css`
    font-size: 0.875rem;
    color: ${COLORS.FOREGROUND.SECONDARY};
`;

export const StyledPageHeader = styled.header`
    ${commonStyle}

    & > h1 {
        font-size: 1.5rem;
        ${commonH1Style}
    }

    & > p {
        ${commonParagraphStyle}
    }
`;

export const StyledSection = styled.section`
    ${commonStyle}

    & > h1 {
        font-size: 1.125rem;
        ${commonH1Style}

        & > span {
            font-size: 0.78em;
            color: ${COLORS.FOREGROUND.SECONDARY};
        }
    }

    & > p {
        ${commonParagraphStyle}
        margin-bottom: 0.5rem;
    }
`;

export const StyledTextInput = styled(TextInput)`
    height: 40px;
    background-color: ${COLORS.DARK_GREY};
    color: ${COLORS.FOREGROUND.MAIN};
`;

export const ChipsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5rem;
`;

export const StyledChip = styled(Chip)`
    height: ${(props) => props.height};
    background-color: ${(props) => props.backgroundColor || 'black'};
    color: ${(props) => props.color || 'white'};
    margin-top: 0.5rem;
    margin-right: 0.8rem;

    &:hover {
        background-color: ${(props) => props.backgroundColor || 'black'};
    }

    &:active,
    :focus {
        background-color: ${(props) => props.backgroundColor || 'black'};
    }

    & svg {
        color: ${(props) => props.color || 'white'};
    }
`;

export const CheckboxContainer = styled.div`
    margin-top: 1rem;

    & > * {
        margin-bottom: 0.5rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;
