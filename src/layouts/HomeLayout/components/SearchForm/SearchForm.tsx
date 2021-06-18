import { TextInput } from 'components/common';
import { useFormik } from 'formik';
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

const SearchForm: React.FC<SearchFormProps> = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextInput
        name={inputs.name}
        placeholder={inputs.placeholder}
        type={inputs.type}
        value={formik.values.search}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        rounded
      />
    </form>
  );
};

export default SearchForm;
