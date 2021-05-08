import { loadGithub, removeGithub } from 'actions/githubActions';
import { Container } from 'components/common';
import { BREAKPOINTS } from 'constants/breakpoints';
import DIMENSIONS from 'constants/dimensions';
import { useMediaQuery } from 'hooks';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router';
import BottomNav from './components/BottomNav';
import LeftSidePanel from './components/LeftSidePanel';
import Navbar from './components/Navbar';
import RightSidePanel from './components/RightSidePanel';
import { LayoutContainer, LayoutContent, PageContent } from './styles';

const HomeLayout = () => {
    const dispatch = useDispatch();
    const isLaptopM = useMediaQuery(BREAKPOINTS.laptopM);
    const isLaptop = useMediaQuery(BREAKPOINTS.laptop);
    const isTablet = useMediaQuery(BREAKPOINTS.tablet);
    const isMobileL = useMediaQuery(BREAKPOINTS.mobileL);

    useEffect(() => {
        // TODO:
        // (async () => await dispatch(loadGithub()))();

        return () => {
            dispatch(removeGithub());
        };
    }, []);

    return (
        <LayoutContainer>
            {isMobileL && <LeftSidePanel laptop={isLaptop} />}
            <LayoutContent>
                {isTablet && <Navbar />}
                <PageContent>
                    <Container width={DIMENSIONS.HOME_PAGE_WIDTH + 'px'}>
                        <Outlet />
                    </Container>
                </PageContent>
            </LayoutContent>
            {isLaptopM && <RightSidePanel />}
            {!isMobileL && <BottomNav />}
        </LayoutContainer>
    );
};

export default HomeLayout;
