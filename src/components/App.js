import React from 'react';
import styled from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import COLORS from 'theme/colors';

const TopBar = styled.header`
    height: 78px;
    width: 100%;
    background-color: ${COLORS.BACKGROUND.darker};
`;

const TopBarContent = styled.div`
    height: inherit;
    margin: 0 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const UnderLine = styled.hr`
    width: 100%;
    height: 1px;
    filter: blur(4px);
    border: 1px solid #173b50; // TODO: color
`;

const Something = styled.div`
    width: 100%;
    height: calc(100vh - 79px);
    background-color: red;
`;

function App() {
    return (
        <div>
            <GlobalStyle />
            <TopBar>
                <TopBarContent>
                    <h1>CNODE</h1>
                    <h1>CNODE</h1>
                </TopBarContent>
                <UnderLine />
            </TopBar>
            <Something></Something>
        </div>
    );
}

export default App;
