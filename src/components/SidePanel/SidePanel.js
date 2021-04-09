import React from 'react';
import { Content, StyledAside, StyledScrollbars } from './styles';

const SidePanel = ({ children, renderThumbVertical }) => {
    return (
        <StyledAside>
            <StyledScrollbars
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={250}
                renderThumbVertical={renderThumbVertical}
            >
                <Content>{children}</Content>
            </StyledScrollbars>
        </StyledAside>
    );
};

export default SidePanel;
