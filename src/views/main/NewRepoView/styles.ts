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
    color: ${COLORS.FOREGROUND.DARKER};
`;

export const ChipsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5rem;

    & > span {
        margin-top: 0.4rem;
        margin-right: 0.4rem;
    }
`;

export const CheckboxContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;

    & > * {
        margin-bottom: 0.5rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;

export const StyledPageHeader = styled.header`
    ${commonStyle}

    & > h1 {
        font-size: 1.5rem;
        color: ${COLORS.MAIN_COLOR};
        font-weight: bold;
        margin-bottom: 0.5rem;
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
            color: ${COLORS.FOREGROUND.DARKER};
        }
    }

    & > p {
        ${commonParagraphStyle}
        margin-bottom: 0.5rem;
    }
`;
