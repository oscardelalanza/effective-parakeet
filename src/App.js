import { Formik, useFormik } from 'formik'

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
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: ''
    },
    validate,
    onSubmit: values => console.log(values)
  })

  return (
    <Formik
      initialValues={{ name: '', lastName: '', email: ''}}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      {formik =>
        <form onSubmit={formik.handleSubmit}>
          <label>Name</label>
          <input type="text" {...formik.getFieldProps('name')} />
          {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
          <br/>
          <label>Last Name</label>
          <input type="text" {...formik.getFieldProps('lastName')} />
          {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
          <br/>
          <label>Email</label>
          <input type="email" {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
          <button type="submit">Sent</button>
        </form>
      }
    </Formik>
  )
}

export default App
