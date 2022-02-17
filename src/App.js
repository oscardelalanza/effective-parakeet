import { useFormik } from 'formik'

const App = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: ''
    },
    onSubmit: values => console.log(values)
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Name</label>
      <input name="name" type="text" onChange={formik.handleChange} value={formik.values.name} />
      <label>Last Name</label>
      <input name="lastName" type="text" onChange={formik.handleChange} value={formik.values.lastName} />
      <label>Email</label>
      <input name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
      <button type="submit">Sent</button>
    </form>
  )
}

export default App;
