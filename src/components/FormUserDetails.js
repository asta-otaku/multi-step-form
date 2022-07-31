import React, { Component } from "react";
import '../App.css'

class FormUserDetails extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       formErrors: {},
       isSubmit: false
    }
  }

  componentDidMount() {
    console.log(this.state.formErrors)
    if (Object.keys(this.state.formErrors).length === 0 && this.state.isSubmit) {
      console.log(this.props.values)
    }
  }


  continue = (e) => {
    e.preventDefault();
    this.setState({isSubmit: true})
    this.setState({formErrors:this.validate(this.props.values)})
    if (Object.keys(this.state.formErrors).length === 0 && this.state.isSubmit) {
      this.props.nextStep()
    }
  };

  validate = (values) => {
    const errors = {}
    const regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!values.firstName) {
      errors.firstName = "First Name is required!"
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required!"
    }
    if (!values.email) {
      errors.email = "Email is required!"
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email!"
    }
    return errors
  }

  render() {
    const { values, handleChange } = this.props;
    
    return (
      <>
        <header><h1>Login Details</h1></header>
        <form>
          <input
            type="text"
            value={ values.firstName }
            onChange={ handleChange('firstName') }
            placeholder="First Name"
          />
          <p>{ this.state.formErrors.firstName }</p>
          <input
            type="text"
            value={ values.lastName }
            onChange={ handleChange('lastName') }
            placeholder="Last Name"
          />
          <p>{ this.state.formErrors.lastName }</p>
          <input
            type="email"
            value={ values.email }
            onChange={ handleChange('email') }
            placeholder="Email"
          />
          <p>{ this.state.formErrors.email }</p>
          <button onClick={ this.continue }>Continue</button>
        </form>
      </>
    );
  }
}

export default FormUserDetails;
