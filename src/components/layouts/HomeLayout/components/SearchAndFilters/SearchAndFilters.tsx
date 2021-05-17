import { Button, TextInput } from 'components/common';
import React from 'react';
import { useNavigate } from 'react-router';
import { AddButtons, ButtonContainer, SearchAndFilter } from './styles';

type SearchAndFiltersProps = {
  showNewAccountPanel: () => void;
};

const SearchAndFilters: React.FC<SearchAndFiltersProps> = (props) => {
  let navigate = useNavigate();

  const handleRepositoryClick = () => {
    navigate('/new');
  };

  const handleAccountClick = () => {
    props.showNewAccountPanel();
  };

  return (
    <SearchAndFilter>
      <TextInput placeholder="Find a repository..." rounded></TextInput>
      <AddButtons>
        <ButtonContainer>
          <Button size="max" color="secondary" onClick={handleRepositoryClick}>
            Repository
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button size="max" color="secondary" onClick={handleAccountClick}>
            Account
          </Button>
        </ButtonContainer>
      </AddButtons>
    </SearchAndFilter>
  );
};

export default SearchAndFilters;
