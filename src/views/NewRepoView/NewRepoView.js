import { faCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { TreeFontAwesomeIcon } from 'components/layouts/PanelLayout/styles';
import COLORS from 'constants/colors';
import React from 'react';
import {
    ChipsContainer,
    StyledChip,
    StyledPageHeader,
    StyledSection,
    StyledTextInput,
} from './styles';

const technologies = [
    'JavaScript',
    'TypeScript',
    'Python',
    'Javascript',
    'Javascript',
    'TypeScript',
    'Python',
    'Javascript',
    'TypeScript',
    'Python',
    'TypeScript',
    'Python',
    'Javascript',
    'TypeScript',
    'Python',
];

const NewRepoView = () => {
    return (
        <>
            <StyledPageHeader>
                <h1>Create a new repository</h1>
                <p>
                    A repository contains all project files and tracks all
                    changes made to them, building a history over time.
                </p>
            </StyledPageHeader>
            <StyledSection>
                <h1>Repository name</h1>
                <StyledTextInput placeholder="name..." />
            </StyledSection>
            <StyledSection>
                <h1>
                    Repository description <span>(optional)</span>
                </h1>
                <StyledTextInput placeholder="description..." width="100%" />
            </StyledSection>
            <StyledSection>
                <h1>Technologies</h1>
                <p>
                    Make it easier for other users to find your repository.
                    Select technologies you will be using.
                </p>
                <StyledTextInput placeholder="search..." />
                <ChipsContainer>
                    {technologies.map((technology, index) => (
                        <StyledChip
                            key={index}
                            icon={<TreeFontAwesomeIcon icon={faCheck} />}
                            label={technology}
                            backgroundColor={COLORS.GREEN}
                            color={COLORS.FOREGROUND.MAIN}
                            height="30px"
                            clickable
                        />
                    ))}
                </ChipsContainer>
                <ChipsContainer>
                    {technologies.map((technology, index) => (
                        <StyledChip
                            key={index}
                            icon={<TreeFontAwesomeIcon icon={faTimesCircle} />}
                            label={technology}
                            backgroundColor={COLORS.RED}
                            color={COLORS.FOREGROUND.MAIN}
                            height="30px"
                            clickable
                        />
                    ))}
                </ChipsContainer>
            </StyledSection>
            <StyledSection>
                <h1>Platform</h1>
            </StyledSection>
        </>
    );
};

export default NewRepoView;
