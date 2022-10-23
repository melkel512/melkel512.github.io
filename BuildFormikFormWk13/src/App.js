import React from 'react';
import './index.css';
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: ''
    },
    onSubmit: (values, actions) =>{
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2)); 
        actions.setSubmitting(false);
      }, 1000);
      console.log('form:', values, actions);
    },
    validate: values => {
      let errors = {};
      if (!values.emailField) {
        errors.emailField = 'Field required';
      } else 
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
        errors.emailField = 'Username should be an email';
      }
      if(!values.pswField) errors.pswField = 'Field required';
      return errors;
    },  
  })
  
  return (
    <div>
  
      <form onSubmit={formik.handleSubmit}>
        <div>Email/Username</div>
        <input name='emailField' type='text' id='emailField' onChange={formik.handleChange} value={formik.values.emailField}/>
        {formik.errors.emailField ? <div style={{color:'salmon'}}>{formik.errors.emailErrors}</div>: null}
        <div>Password</div>
        <input name='pswField' type='text' id='pswField' onChange={formik.handleChange} value={formik.values.pswField}/>
        {formik.errors.pswField ? <div style={{color:'salmon'}}>{formik.errors.pswError}</div>: null}
        <button type='submit' id='submitBtn' onClick='handle(event)'>Submit</button>
      </form>

    </div>
  );
}

export default App
