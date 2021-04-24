import TextInput from 'components/common/TextInput';
import COLORS from 'constants/colors';
import styled from 'styled-components';

export const StyledTextInput = styled(TextInput)`
    background-color: ${COLORS.BACKGROUND.DARK_3};
    color: ${COLORS.FOREGROUND.MAIN};
`;

export const ChipsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5rem;
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
