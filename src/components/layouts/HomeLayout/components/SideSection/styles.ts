import styled from 'styled-components';

export const StyledSection = styled.section`
    width: 100%;
    margin: 1rem 0;
    margin-bottom: 1.5rem;
`;

export const Content = styled.div`
    margin-top: 0.875rem;

    & > * {
        margin-bottom: 0.5rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;
