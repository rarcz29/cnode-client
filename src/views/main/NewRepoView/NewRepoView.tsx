import Button from 'components/common/Button';
import Checkbox from 'components/common/Checkbox';
import React from 'react';
import {
    CheckboxContainer,
    ChipsContainer,
    StyledPageHeader,
    StyledSection,
    StyledTextInput,
} from './styles';

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
                <ChipsContainer></ChipsContainer>
                <ChipsContainer></ChipsContainer>
            </StyledSection>
            <StyledSection>
                <h1>Platform</h1>
                <CheckboxContainer></CheckboxContainer>
            </StyledSection>
            <StyledSection>
                <h1>Account</h1>
            </StyledSection>
            <StyledSection>
                <h1>Access level</h1>
                <CheckboxContainer></CheckboxContainer>
            </StyledSection>
            <StyledSection>
                <h1>Initialization</h1>
                <CheckboxContainer>
                    <Checkbox label="Initialize this repository with a README file" />
                </CheckboxContainer>
            </StyledSection>
            <StyledSection>
                <h1>Share with the community</h1>
                <CheckboxContainer>
                    <Checkbox label="Show your repository on the community page" />
                </CheckboxContainer>
            </StyledSection>
            <Button size="big">Create repository</Button>
        </>
    );
};

export default NewRepoView;
