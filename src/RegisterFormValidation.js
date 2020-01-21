import React from 'react';
import {reduxForm,Field} from 'redux-form';
import ShowResults from './ShowResults';
import validatemail from 'sane-email-validation';
import {required,email} from 'redux-form-validators';

const email1 = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
const validate=values=>
{
  const errors={}
  //const validmail=values.EventTarget.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if(!values.firstName)
    {
      errors.firstName='Required FN';
    }
    if(!values.lastName)
    {
      errors.lastName='Required LN';
    }
    if(!values.email)
    {
      errors.email='Required EMAIL';
    }
   // else 
    //{
    //  errors.email=validmail? '' : 'is invalid';
   // }
  return errors;
}
const RenderInput=({input,meta,label})=>
<div>
{/* <pre>{JSON.stringify(meta,0,2)}</pre> */}
  <label>
    {label}
  </label>
  <input {... input} placeholder={label}/>
  {meta.error && meta.touched&&<span>{meta.error}</span> }
</div>
let RegisterFormValidation=({handleSubmit,submitting})=>
<form onSubmit={handleSubmit(ShowResults)}>
    <div>
     <Field name="firstName" label="First Name" component={RenderInput}></Field>
      <Field name="lastName" label="Last Name" component={RenderInput} validate={required()}></Field>
      <Field name="email" label="Email" component={RenderInput} validate={email1} ></Field>
      <button type="submit" disabled={submitting}>Submit</button>
    </div>
</form>
RegisterFormValidation=reduxForm({
    form:'demo',validate,
}
)(RegisterFormValidation)
export default RegisterFormValidation