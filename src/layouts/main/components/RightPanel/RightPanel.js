import { Badge } from '@material-ui/core';
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { PageSeparator } from '../../PanelLayout/style';
import {
    ActualContentContainer,
    Container,
    ContentContainer,
    renderThumb,
} from './style';

const RightPanel = ({ className }) => {
    return (
        <Container className={className}>
            <ContentContainer>
                <Scrollbars
                    renderThumbVertical={renderThumb}
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={250}
                >
                    <ActualContentContainer>
                        <Badge badgeContent={4} color="primary">
                            <h3>Notifications</h3>
                        </Badge>
                        <PageSeparator />
                    </ActualContentContainer>
                </Scrollbars>
            </ContentContainer>
        </Container>
    );
};

export default RightPanel;
