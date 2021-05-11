import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axiosConfig';
import { TextInput } from 'components/common';
import Button from 'components/common/Button';
import Checkbox from 'components/common/Checkbox';
import Chip from 'components/common/Chip';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {
    CheckboxContainer,
    ChipsContainer,
    StyledPageHeader,
    StyledSection,
} from './styles';

// TODO: errors

type FormInput = {
    name: string;
    description?: string;
    account: string;
    platform: any;
    public: string;
    private: string;
    initialize: string;
    expose: string;
};

const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string(),
    account: yup.string().required(),
    public: yup.string(),
    private: yup.string(),
    initialize: yup.string(),
    expose: yup.string(),
});

const NewRepoView = () => {
    const technologyInput = useRef<HTMLInputElement>(null);
    const [toAddTechnologies, setToAddTechnologies] = useState<string[]>([]);
    const [addedTechnologies, setAddedTechnologies] = useState<string[]>([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInput>({ resolver: yupResolver(schema) });

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const input = technologyInput?.current;

        function fetchData() {
            // TODO: url as const
            axios
                .get(`/technologies?Pattern=${input?.value}`)
                .then((response) =>
                    setToAddTechnologies(
                        response.data.map((item: { name: string }) => item.name)
                    )
                );
        }

        function eventHandler() {
            clearTimeout(timeout);

            input?.value
                ? (timeout = setTimeout(fetchData, 500))
                : setToAddTechnologies([]);
        }

        input?.addEventListener('keyup', eventHandler, false);

        return () => {
            input?.removeEventListener('keyup', eventHandler, false);
        };
    }, []);

    const chipAddClickHandler = (index: number, name: string) => {
        setToAddTechnologies((prev) => prev.filter((item, i) => i !== index));
        setAddedTechnologies((prev) => [...prev, name]);
    };

    const chipRemoveClickHandler = (index: number) => {
        setAddedTechnologies((prev) => prev.filter((item, i) => i !== index));
    };

    const onSubmit = async (data: FormInput) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <StyledPageHeader>
                <h1>Create a new repository</h1>
                <p>
                    A repository contains all project files and tracks all
                    changes made to them, building a history over time.
                </p>
            </StyledPageHeader>
            <StyledSection>
                <h1>Repository name</h1>
                <TextInput
                    type="text"
                    placeholder="name..."
                    {...register('name')}
                />
            </StyledSection>
            <StyledSection>
                <h1>
                    Repository description <span>(optional)</span>
                </h1>
                <TextInput
                    type="text"
                    placeholder="description..."
                    width="100%"
                    {...register('description')}
                />
            </StyledSection>
            <StyledSection>
                <h1>Technologies</h1>
                <p>
                    Make it easier for other users to find your repository.
                    Select technologies you will be using.
                </p>
                <TextInput innerRef={technologyInput} placeholder="search..." />
                {toAddTechnologies.length > 0 && (
                    <ChipsContainer>
                        {toAddTechnologies.map((item, index) => (
                            <Chip
                                key={index}
                                text={item}
                                onClick={() => chipAddClickHandler(index, item)}
                            />
                        ))}
                    </ChipsContainer>
                )}
                {addedTechnologies.length > 0 && (
                    <ChipsContainer>
                        {addedTechnologies.map((item, index) => (
                            <Chip
                                key={index}
                                text={item}
                                type="remove"
                                onClick={() => chipRemoveClickHandler(index)}
                            />
                        ))}
                    </ChipsContainer>
                )}
            </StyledSection>
            <StyledSection>
                <h1>Platform</h1>
                <CheckboxContainer>
                    <Checkbox
                        {...register('platform')}
                        value="github"
                        label="GitHub"
                    />
                    <Checkbox
                        {...register('platform')}
                        value="bitbucket"
                        label="Bitbucket"
                    />
                    <Checkbox
                        {...register('platform')}
                        value="gitlab"
                        label="GitLab"
                    />
                </CheckboxContainer>
            </StyledSection>
            <StyledSection>
                <h1>Account</h1>
                <TextInput
                    type="text"
                    {...register('account')}
                    placeholder="account..."
                />
            </StyledSection>
            <StyledSection>
                <h1>Access level</h1>
                <CheckboxContainer>
                    <Checkbox {...register('public')} label="Public" />
                    <Checkbox {...register('private')} label="Private" />
                </CheckboxContainer>
            </StyledSection>
            <StyledSection>
                <h1>Initialization</h1>
                <CheckboxContainer>
                    <Checkbox
                        {...register('initialize')}
                        label="Initialize this repository with a README file"
                    />
                </CheckboxContainer>
            </StyledSection>
            <StyledSection>
                <h1>Share with the community</h1>
                <CheckboxContainer>
                    <Checkbox
                        {...register('expose')}
                        label="Show your repository on the community page"
                    />
                </CheckboxContainer>
            </StyledSection>
            <Button size="big" type="submit">
                Create repository
            </Button>
        </form>
    );
};

export default NewRepoView;
