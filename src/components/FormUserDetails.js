import React, { Component } from "react";
import '../App.css'

class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

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
          <input
            type="text"
            value={ values.lastName }
            onChange={ handleChange('lastName') }
            placeholder="Last Name"
          />
          <input
            type="text"
            value={ values.email }
            onChange={ handleChange('email') }
            placeholder="Email"
          />
          <button onClick={ this.continue }>Continue</button>
        </form>
      </>
    );
  }
}

export default FormUserDetails;
