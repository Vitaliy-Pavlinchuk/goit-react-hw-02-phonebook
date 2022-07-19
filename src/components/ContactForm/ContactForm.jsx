// import PropTypes from "prop-types"
import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialValues = { name: '', number: '' };

const validationSchema = Yup.object({
  name: Yup.string().min(3).max(16).required('Required'),
  number: Yup.number().positive().required('Required'),
});

const Label = styled.label`
  margin-bottom: 10px;
  margin-right: 10px;
`;

export const ContaktForm = () => {
  const handleDubmit = (values, { resetForm }) => {
    console.log(values);

    resetForm();
  };

  // const handleDubmit = e => {
  //   e.preventDefault();
  //   const { name, number } = e.target.elements;
  //   console.log(name.value, number.value);
  // };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleDubmit}
      validationSchema={validationSchema}
    >
      <Form autoComplete="off">
        <Label htmlFor="name">
          Name
          <Field
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="p" />
        </Label>
        <Label htmlFor="number">
          Number
          <Field
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="name" component="p" />
        </Label>
        <button type="Submit"> Add contact</button>
      </Form>
    </Formik>
  );
};
