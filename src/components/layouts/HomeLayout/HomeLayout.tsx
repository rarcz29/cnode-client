import {
  connectAccountGithub,
  loadGithub,
  removeGithub,
} from 'actions/githubActions';
import { Container } from 'components/common';
import { BREAKPOINTS } from 'constants/breakpoints';
import DIMENSIONS from 'constants/dimensions';
import LOCAL_STORAGE from 'constants/localStorage';
import { useMediaQuery, useQueryString } from 'hooks';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { RootStore } from 'store';
import BottomNav from './components/BottomNav';
import LeftSidePanel from './components/LeftSidePanel';
import Navbar from './components/Navbar';
import RightSidePanel from './components/RightSidePanel';
import { LayoutContainer, LayoutContent, PageContent } from './styles';

const HomeLayout = () => {
  const queryString = useQueryString();
  const dispatch = useDispatch();
  const authState = useSelector((state: RootStore) => state.auth);
  const isLaptopM = useMediaQuery(BREAKPOINTS.laptopM);
  const isLaptop = useMediaQuery(BREAKPOINTS.laptop);
  const isTablet = useMediaQuery(BREAKPOINTS.tablet);
  const isMobileL = useMediaQuery(BREAKPOINTS.mobileL);

  useEffect(() => {
    const code = queryString.get('code');

    (async () => await dispatch(loadGithub(authState.token)))();

    if (code) {
      const platform = localStorage.getItem(LOCAL_STORAGE.PLATFORM_NAME);

      switch (platform) {
        case LOCAL_STORAGE.GITHUB_VALUE:
          handleGithubConnection(code);
          break;
        case LOCAL_STORAGE.BITBUCKET_VALUE:
          handleBitbucketConnection(code);
          break;
        case LOCAL_STORAGE.GITLAB_VALUE:
          handleGitlabConnection(code);
          break;
      }
    }

    return () => {
      dispatch(removeGithub());
    };
  }, []);

  useEffect(() => {
    localStorage.removeItem(LOCAL_STORAGE.PLATFORM_NAME);
  }, []);

  function handleGithubConnection(code: string) {
    // TODO: error handling
    dispatch(connectAccountGithub(code));
  }

  function handleBitbucketConnection(code: string) {}

  function handleGitlabConnection(code: string) {}

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
