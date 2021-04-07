import {
    faBitbucket,
    faGithub,
    faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import {
    faCheck,
    faGlobe,
    faLock,
    faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import Button from 'components/common/Button';
import Checkbox from 'components/common/Checkbox';
import Radio from 'components/common/Radio';
import { TreeFontAwesomeIcon } from 'components/layouts/PanelLayout/styles';
import COLORS from 'constants/colors';
import React from 'react';
import { StyledPageHeader, StyledSection } from 'styles/commonStyles';
import {
    CheckboxContainer,
    ChipsContainer,
    StyledChip,
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
                <CheckboxContainer>
                    <Radio
                        label="GitHub"
                        name="platform"
                        width="130px"
                        icon={<TreeFontAwesomeIcon icon={faGithub} />}
                    />
                    <Radio
                        label="Bitbucket"
                        name="platform"
                        width="130px"
                        icon={<TreeFontAwesomeIcon icon={faBitbucket} />}
                    />
                    <Radio
                        label="GitLab"
                        name="platform"
                        width="130px"
                        icon={<TreeFontAwesomeIcon icon={faGitlab} />}
                    />
                </CheckboxContainer>
            </StyledSection>
            <StyledSection>
                <h1>Access level</h1>
                <CheckboxContainer>
                    <Radio
                        label="Private"
                        name="access"
                        width="130px"
                        icon={<TreeFontAwesomeIcon icon={faLock} />}
                    />
                    <Radio
                        label="Public"
                        name="access"
                        width="130px"
                        icon={<TreeFontAwesomeIcon icon={faGlobe} />}
                    />
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
            <Button
                backgroundColor={COLORS.BLUE}
                color={COLORS.FOREGROUND.MAIN}
                width="250px"
                height="35px"
                rounded
            >
                Create repository
            </Button>
        </>
    );
};

export default NewRepoView;
