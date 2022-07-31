import React, { Component } from "react";

class FormPersonalDetails extends Component {
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

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
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

    if (!values.city) {
      errors.city = "City is required!"
    }
    if (!values.age) {
      errors.age = "Age is required!"
    }
    return errors
  }
  

  render() {
    const { values, handleChange } = this.props;

    return (
      <>
        <header>
          <h1>Personal Details</h1>
        </header>
        <form>
          <input
            type="text"
            value={values.city}
            onChange={handleChange("city")}
            placeholder="City"
          />
          <p>{ this.state.formErrors.city }</p>
          <input
            type="text"
            value={values.occupation}
            onChange={handleChange("occupation")}
            placeholder="Occupation "
          />
          <input
            type="text"
            value={values.age}
            onChange={handleChange("age")}
            placeholder="Age"
          />
          <p>{ this.state.formErrors.age }</p>
          <input
            type="text"
            value={values.bio}
            onChange={handleChange("bio")}
            placeholder="Bio"
          />
          <div className="buttons">
            <button onClick={this.back}>Back</button>
            <button onClick={this.continue}>Continue</button>
          </div>
        </form>
      </>
    );
  }
}

export default FormPersonalDetails;
