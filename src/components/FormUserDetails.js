import React, { Component } from "react";

class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    

    return (
      <>
        <header>Enter User Details</header>
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
            value={ values.age }
            onChange={ handleChange('age') }
            placeholder="Age"
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
