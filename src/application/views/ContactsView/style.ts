import styled from 'styled-components';
import { List } from 'ui/components';

export const StyledList = styled(List)`
  & > li {
    margin-bottom: ${props => props.theme.margins.margin32.str};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
