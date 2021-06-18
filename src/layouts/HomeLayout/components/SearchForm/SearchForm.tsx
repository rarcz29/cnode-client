import { TextInput } from 'components/common';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';

type SearchFormProps = {};

type FormInput = {
  search: string;
};

type Inputs = {
  placeholder: string;
  name: string;
  type: 'text';
};

const inputs: Inputs = {
  placeholder: 'search',
  name: 'search',
  type: 'text',
};

const validationSchema = yup.object().shape({
  search: yup.string().required(),
});

const initialValues = {
  search: '',
};

const onSubmit = (values: FormInput) => {
  // TODO: search submit
  alert(values);
};

const SearchForm: React.FC<SearchFormProps> = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    <Form>
      <Field
        as={TextInput}
        id={inputs.name}
        name={inputs.name}
        type={inputs.type}
        placeholder={inputs.placeholder}
        rounded
      />
    </Form>
  </Formik>
);

export default SearchForm;
