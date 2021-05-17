import {
  faBitbucket,
  faGithub,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import { faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CircleButton, TextInput } from 'components/common';
import COLORS from 'constants/colors';
import React from 'react';
import { AddBtAndFiltersContainer, SearchAndFilter } from './styles';

type SearchAndFiltersProps = {
  showGithub: boolean;
  setShowGithub: React.Dispatch<React.SetStateAction<boolean>>;
  showBitbucket: boolean;
  setShowBitbucket: React.Dispatch<React.SetStateAction<boolean>>;
  showGitlab: boolean;
  setShowGitlab: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchAndFilters: React.FC<SearchAndFiltersProps> = (props) => {
  return (
    <SearchAndFilter>
      <TextInput placeholder="Find a repository..." rounded></TextInput>
      <AddBtAndFiltersContainer>
        <CircleButton
          fontSize="0.875rem"
          backgroundColor={COLORS.BUTTONS.GREEN.MAIN}
          highlightColor={COLORS.BUTTONS.GREEN.HIGHLIGHT}
          color={COLORS.FOREGROUND.MAIN}
          to="new"
        >
          <FontAwesomeIcon icon={faPlus} />
        </CircleButton>
        <CircleButton
          checked={props.showGithub}
          onClick={() => props.setShowGithub((prev) => !prev)}
        >
          <FontAwesomeIcon icon={faGithub} />
        </CircleButton>
        <CircleButton
          checked={props.showBitbucket}
          onClick={() => props.setShowBitbucket((prev) => !prev)}
        >
          <FontAwesomeIcon icon={faBitbucket} />
        </CircleButton>
        <CircleButton
          checked={props.showGitlab}
          onClick={() => props.setShowGitlab((prev) => !prev)}
        >
          <FontAwesomeIcon icon={faGitlab} />
        </CircleButton>
        <CircleButton
          fontSize="0.875rem"
          backgroundColor={COLORS.BUTTONS.DARK.MAIN}
          highlightColor={COLORS.BUTTONS.DARK.HIGHLIGHT}
        >
          <FontAwesomeIcon icon={faFilter} />
        </CircleButton>
      </AddBtAndFiltersContainer>
    </SearchAndFilter>
  );
};

export default SearchAndFilters;
