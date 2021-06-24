import React from 'react';
import Header from './Header';
import Repositories from './Repositories';

type RepositoriesViewProps = {};

const RepositoriesView: React.FC<RepositoriesViewProps> = () => {
  return (
    <>
      <Header />
      <Repositories />
    </>
  );
};

export default RepositoriesView;
