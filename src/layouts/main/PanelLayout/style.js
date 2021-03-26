import styled from 'styled-components';

export const PageSeparator = styled.hr`
    width: ${(props) => (props.vertical ? '1px' : props.length)};
    height: ${(props) => (props.vertical ? props.length : '1px')};
    border: 1px solid #173b50;
    filter: blur(4px);
`;
