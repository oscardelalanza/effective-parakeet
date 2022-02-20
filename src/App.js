import { useFormik } from 'formik'

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
    <form onSubmit={formik.handleSubmit}>
      <label>Name</label>
      <input name="name" type="text" onChange={formik.handleChange} value={formik.values.name} />
      {formik.errors.name ? <div>{formik.errors.name}</div> : null}
      <br/>
      <label>Last Name</label>
      <input name="lastName" type="text" onChange={formik.handleChange} value={formik.values.lastName} />
      {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
      <br/>
      <label>Email</label>
      <input name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
      <button type="submit">Sent</button>
    </form>
  )
}

export default App;
