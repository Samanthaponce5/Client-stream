import React from 'react'

import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
    renderError = ({touched, error}) => {
        if(touched && error){
            return(
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            )
        }
    }
  renderInput = ({input, label, meta}) => {
    console.log('META', meta)
    return (
        <div className='field'>
            <label>{ label }</label>
            <input {...input}/>
            {this.renderError(meta)}
        </div>
     )
  }
  onSubmit(formValues){
    console.log(formValues);
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
        <Field name="title" component={this.renderInput} label="Enter Title"/>
        <Field name="description" component={this.renderInput} label="Enter description" />
        <button className='ui button primary'>Submit </button>
      </form>
    )
  }
}
const validate = (formValues) =>{
    console.log('formValues', formValues)
    const errors = {}
     if(!formValues.title){
        errors.title = 'You must enter a title'
     }
     if(!formValues.description){
        errors.description = 'You must enter a description'
     }

     return errors;
}

export default reduxForm({
  form: 'steamCreate',
  validate: validate
})(StreamCreate)
