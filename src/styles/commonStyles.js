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
