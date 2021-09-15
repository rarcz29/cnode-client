import styled from 'styled-components';

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 57px;
`;

export const TextWrapper = styled.div`
  margin-left: ${props => props.theme.margins.margin24.str};

  & h1 {
    font-size: ${props => props.theme.fonts.h5.fontSize};
    font-family: ${props => props.theme.fonts.family.header};
    font-weight: ${props => props.theme.fonts.weight.normal};
  }

  & p {
    font-size: ${props => props.theme.fonts.p4.fontSize};
    color: ${props => props.theme.colors.foreground2};
  }
`;

export const StyledButton = styled.button`
  background-color: transparent;
  font-size: ${props => props.theme.fonts.p2.fontSize};
  color: ${props => props.theme.colors.foreground2};
  margin-left: auto;
  border-width: 0;
`;

export const StatusIndicator = styled.div`
  margin-left: ${props => props.theme.margins.margin24.str};
  height: 100%;
  width: 8px;
  background-color: ${props => props.theme.colors.success};
  border-radius: 4px;
`;
