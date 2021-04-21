import Contact from 'components/Contact';
import COLORS from 'constants/colors';
import React from 'react';
import styled from 'styled-components';
import SidePanel from '../SidePanel';
import SideSection from '../SideSection';

const RSidePanel = styled(SidePanel)`
    border-left: 1px solid ${COLORS.LAYOUT_SEPARATOR};
`;

const CONTACTS = [
    { name: 'Carter Aminoff' },
    { name: 'Kaiya Rhiel Madsen' },
    { name: 'Jaydon Geidt' },
    { name: 'Miracle George' },
];

const TEAMS = [{ name: 'Remarkable Bears' }, { name: 'Remarkable Guppies' }];

const RightSidePanel = () => {
    return (
        <RSidePanel>
            <SideSection header="Contacts">
                {CONTACTS.map((item, index) => (
                    <Contact key={index} name={item.name} />
                ))}
            </SideSection>
            <SideSection header="Teams">
                {TEAMS.map((item, index) => (
                    <Contact key={index} name={item.name} />
                ))}
            </SideSection>
        </RSidePanel>
    );
};

export default RightSidePanel;
