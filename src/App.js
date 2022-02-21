import { Formik, Form, Field, ErrorMessage } from 'formik'
import TextInput from './components/TextInput'
import Checkbox from './components/Checkbox';

const validate = values => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length < 5) {
    errors.name = 'Name too short'
  }

  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (values.lastName.length < 5) {
    errors.name = 'lastName too short'
  }


  return errors
}

const App = () => {
  return (
    <Formik
      initialValues={{ name: '', lastName: '', email: ''}}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <TextInput name="name" label="name" />
        <br/>
        <label>Last Name</label>
        <Field type="text" name="lastName" />
        <ErrorMessage name="lastName" />
        <br/>
        <label>Email</label>
        <Field type="email" name="email"/>
        <ErrorMessage name="email" />
        <Checkbox name="accept">
          Aceptar terminos
        </Checkbox>
        <button type="submit">Sent</button>
      </Form>
    </Formik>
  )
}

export default App
