import styled from 'styled-components';

export const Container = styled.div`
    width: ${(props) => props.width || '400px'};

    & > form {
        width: 100%;

        & > * {
            margin-bottom: 1rem;

            &:last-child {
                margin-top: 0.69rem;
            }
        }
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2.06rem;

    & > h1 {
        font-size: 1.5rem;
        font-weight: normal;
    }
`;
