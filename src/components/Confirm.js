import React, { Component } from "react";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, age, email, occupation, city, bio },
    } = this.props;

    return (
      <>
        <ul>
          <li>
            <strong>First Name</strong>
            <br />
            {firstName}
          </li>
          <li>
            <strong>Last Name</strong>
            <br />
            {lastName}
          </li>
          <li>
            <strong>Age</strong>
            <br />
            {age}
          </li>
          <li>
            <strong>Email</strong>
            <br />
            {email}
          </li>
          <li>
            <strong>Occupation</strong>
            <br />
            {occupation}
          </li>
          <li>
            <strong>City</strong>
            <br />
            {city}
          </li>
          <li>
            <strong>Bio</strong>
            <br />
            {bio}
          </li>
        </ul>
        <div className="buttons">
          <button onClick={this.back}>Back</button>
          <button onClick={this.continue}>Confirm & Continue</button>
        </div>
      </>
    );
  }
}

export default Confirm;
