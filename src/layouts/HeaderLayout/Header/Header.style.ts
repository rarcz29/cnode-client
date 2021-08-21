import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  height: ${props => props.theme.margins.margin64.str};
  margin-bottom: ${props => props.theme.margins.margin32.str};
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.background1};

  @media ${props => props.theme.mediaQueries.mobileMax} {
    margin-bottom: ${props => props.theme.margins.margin24.str};
  }
`;

export const RightPanel = styled.div`
  width: 324px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > svg {
    font-size: ${props => props.theme.fonts.h4.fontSize};
  }
`;
