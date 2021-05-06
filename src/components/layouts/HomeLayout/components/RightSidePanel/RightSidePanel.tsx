import Contact from 'components/Contact';
import SidePanelItem from 'components/SidePanelItem';
import COLORS from 'constants/colors';
import DIMENSIONS from 'constants/dimensions';
import React from 'react';
import styled from 'styled-components';
import SideSection from '../SideSection';

const RSidePanel = styled.aside`
    position: sticky;
    top: ${DIMENSIONS.HEADER_HEIGHT}px;
    width: ${DIMENSIONS.SIDE_PANEL_WIDTH}px;
    height: calc(100vh - ${DIMENSIONS.HEADER_HEIGHT}px);
    border-left: 1px solid ${COLORS.LAYOUT_SEPARATOR};

    & > div {
        margin: 1rem;
    }
`;

const contacts = [
    { name: 'Carter Aminoff' },
    { name: 'Kaiya Rhiel Madsen' },
    { name: 'Jaydon Geidt' },
    { name: 'Miracle George' },
];

const teams = [{ name: 'Remarkable Bears' }, { name: 'Remarkable Guppies' }];

const RightSidePanel = () => {
    return (
        <RSidePanel>
            <div>
                <SideSection
                    headerItem={
                        <SidePanelItem text="Contacts" fontSize="bigger" />
                    }
                >
                    {contacts.map((item, index) => (
                        <Contact key={index} name={item.name} />
                    ))}
                </SideSection>
                <SideSection
                    headerItem={
                        <SidePanelItem text="Teams" fontSize="bigger" />
                    }
                >
                    {teams.map((item, index) => (
                        <Contact key={index} name={item.name} />
                    ))}
                </SideSection>
            </div>
        </RSidePanel>
    );
};

export default RightSidePanel;
