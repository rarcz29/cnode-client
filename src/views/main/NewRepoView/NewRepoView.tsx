import axios from 'axiosConfig';
import { TextInput } from 'components/common';
import Button from 'components/common/Button';
import Checkbox from 'components/common/Checkbox';
import React, { useEffect, useRef } from 'react';
import {
    CheckboxContainer,
    ChipsContainer,
    StyledPageHeader,
    StyledSection,
} from './styles';

const NewRepoView = () => {
    const technologyInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const input = technologyInput?.current;

        function fetchData() {
            // TODO: url as const
            axios
                .get(`/technologies?Pattern=${input?.value}`)
                .then((response) => console.log(response.data));
        }

        function eventHandler() {
            clearTimeout(timeout);

            if (input?.value) {
                timeout = setTimeout(fetchData, 500);
            }
        }

        input?.addEventListener('keyup', eventHandler, false);

        return () => {
            input?.removeEventListener('keyup', eventHandler, false);
        };
    }, []);

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
                <TextInput placeholder="name..." rounded />
            </StyledSection>
            <StyledSection>
                <h1>
                    Repository description <span>(optional)</span>
                </h1>
                <TextInput placeholder="description..." width="100%" rounded />
            </StyledSection>
            <StyledSection>
                <h1>Technologies</h1>
                <p>
                    Make it easier for other users to find your repository.
                    Select technologies you will be using.
                </p>
                <TextInput
                    innerRef={technologyInput}
                    placeholder="search..."
                    rounded
                />
                <ChipsContainer></ChipsContainer>
                <ChipsContainer></ChipsContainer>
            </StyledSection>
            <StyledSection>
                <h1>Platform</h1>
                <CheckboxContainer>
                    <Checkbox label="GitHub" />
                    <Checkbox label="Bitbucket" />
                    <Checkbox label="GitLab" />
                </CheckboxContainer>
            </StyledSection>
            <StyledSection>
                <h1>Account</h1>
                <TextInput placeholder="account..." rounded />
            </StyledSection>
            <StyledSection>
                <h1>Access level</h1>
                <CheckboxContainer>
                    <Checkbox label="Public" />
                    <Checkbox label="Private" />
                </CheckboxContainer>
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
