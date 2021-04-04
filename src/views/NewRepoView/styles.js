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

export const StyledPageHeader = styled.header`
    ${commonStyle}

    & > h1 {
        font-size: 1.5rem;
        ${commonH1Style}
    }

    & > p {
        font-size: 0.875rem;
        color: ${COLORS.FOREGROUND.SECONDARY};
    }
`;

export const StyledSection = styled.section`
    ${commonStyle}

    & > h1 {
        font-size: 1.125rem;
        ${commonH1Style}

        & > span {
            font-size: 0.78em;
        }
    }
`;

export const StyledTextInput = styled(TextInput)`
    height: 40px;
    background-color: ${COLORS.DARK_GREY};
    color: ${COLORS.FOREGROUND.MAIN};
`;
