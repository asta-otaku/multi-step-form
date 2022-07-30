import React, { Component } from "react";

class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

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
