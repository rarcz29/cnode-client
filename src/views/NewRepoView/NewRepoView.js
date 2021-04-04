import React from 'react';
import { StyledPageHeader, StyledSection, StyledTextInput } from './styles';

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
                <h1>Platform</h1>
            </StyledSection>
        </>
    );
};

export default NewRepoView;
