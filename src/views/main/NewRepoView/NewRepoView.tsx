import {
  faBitbucket,
  faGithub,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faLock } from '@fortawesome/free-solid-svg-icons';
import { newRepoGithub } from 'actions/githubActions';
import axios from 'axiosConfig';
import { TextInput } from 'components/common';
import Button from 'components/common/Button';
import Checkbox from 'components/common/Checkbox';
import Chip from 'components/common/Chip';
import { useFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from 'store';
import * as yup from 'yup';
import RadioButton from './RadioButton';
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
  platform?: string;
  visibility?: string;
  initialize?: string;
  expose?: string;
};

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  account: yup.string().required(),
  platform: yup.string().required(),
  visibility: yup.string().required(),
  initialize: yup.boolean(),
  expose: yup.boolean(),
});

const initialValues = {
  name: '',
  description: '',
  account: '',
};

const NewRepoView = () => {
  const dispatch = useDispatch();
  const githubState = useSelector((state: RootStore) => state.github);
  const technologyInput = useRef<HTMLInputElement>(null);
  const [toAddTechnologies, setToAddTechnologies] = useState<string[]>([]);
  const [addedTechnologies, setAddedTechnologies] = useState<string[]>([]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: FormInput) => {
      dispatch(
        newRepoGithub(
          values.account,
          values.name,
          addedTechnologies,
          values.description
        )
      );
    },
  });

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

  return (
    <form onSubmit={formik.handleSubmit}>
      <StyledPageHeader>
        <h1>Create a new repository</h1>
        <p>
          A repository contains all project files and tracks all changes made to
          them, building a history over time.
        </p>
      </StyledPageHeader>
      <StyledSection>
        <h1>Repository name</h1>
        <TextInput
          name="name"
          type="text"
          placeholder="name..."
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && formik.errors.name !== undefined}
          width="short"
          rounded
        />
      </StyledSection>
      <StyledSection>
        <h1>
          Repository description <span>(optional)</span>
        </h1>
        <TextInput
          name="description"
          placeholder="description..."
          type="text"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.description &&
            formik.errors.description !== undefined
          }
          rounded
        />
      </StyledSection>
      <StyledSection>
        <h1>Technologies</h1>
        <p>
          Make it easier for other users to find your repository. Select
          technologies you will be using.
        </p>
        <TextInput
          forwardRef={technologyInput}
          placeholder="search..."
          width="short"
          rounded
        />
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
          <RadioButton
            icon={faGithub}
            label="GitHub"
            name="platform"
            value="github"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <RadioButton
            icon={faBitbucket}
            label="Bitbucket"
            name="platform"
            value="bitbucket"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <RadioButton
            icon={faGitlab}
            label="GitLab"
            name="platform"
            value="gitlab"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </CheckboxContainer>
      </StyledSection>
      <StyledSection>
        <h1>Account</h1>
        <TextInput
          name="account"
          placeholder="account..."
          type="text"
          value={formik.values.account}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.account && formik.errors.account !== undefined}
          width="short"
          rounded
        />
      </StyledSection>
      <StyledSection>
        <h1>Access level</h1>
        <CheckboxContainer>
          <RadioButton
            icon={faLock}
            label="Private"
            name="visibility"
            value="private"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <RadioButton
            icon={faGlobe}
            label="Public"
            name="visibility"
            value="public"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </CheckboxContainer>
      </StyledSection>
      <StyledSection>
        <h1>Initialization</h1>
        <CheckboxContainer>
          <Checkbox
            label="Initialize this repository with a README file"
            name="initialize"
            value={formik.values.initialize}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </CheckboxContainer>
      </StyledSection>
      <StyledSection>
        <h1>Share with the community</h1>
        <CheckboxContainer>
          <Checkbox
            label="Show your repository on the community page"
            name="expose"
            value={formik.values.expose}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </CheckboxContainer>
      </StyledSection>
      <Button size="big" type="submit">
        {/* TODO: bitbucket, gitlab */}
        {githubState.loading ? 'Loading...' : 'Create repository'}
      </Button>
    </form>
  );
};

export default NewRepoView;
