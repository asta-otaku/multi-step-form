// import React, { Component } from "react";
// import Confirm from "./Confirm";
// import FormPersonalDetails from "./FormPersonalDetails";
// import FormUserDetails from "./FormUserDetails";
// import Success from "./Success";

// class UserForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       step: 1,
//       firstName: "",
//       lastName: "",
//       age: "",
//       email: "",
//       occupation: "",
//       city: "",
//       bio: "",
//     };
//   }

//   nextStep = () => {
//     const { step } = this.state;
//     this.setState({
//       step: step + 1,
//     });
//   };

//   prevStep = () => {
//     const { step } = this.state;
//     this.setState({
//       step: step - 1,
//     });
//   };

//   handleChange = (input) => (e) => {
//     this.setState({ [input]: e.target.value });
//   };

//   render() {
//     const { step } = this.state;
//     const { firstName, lastName, age, email, occupation, city, bio } =
//       this.state;
//     const values = { firstName, lastName, age, email, occupation, city, bio };

//     switch (step) {
//       default:
//         return (
//           <FormUserDetails
//             nextStep={this.nextStep}
//             handleChange={this.handleChange}
//             values={values}
//           />
//         );
//       case 2:
//         return (
//           <FormPersonalDetails
//             nextStep={this.nextStep}
//             prevStep={this.prevStep}
//             handleChange={this.handleChange}
//             values={values}
//           />
//         );
//       case 3:
//         return (
//           <Confirm
//             nextStep={this.nextStep}
//             prevStep= {this.prevStep}
//             values={values}
//           />
//         );
//       case 4:
//         return <Success />
//     }
//   }
// }

// export default UserForm;

import React, { useState } from "react";
import Confirm from "./Confirm";
import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetails from "./FormUserDetails";
import Success from "./Success";

function UserForm() {
  const [step, setStep] = useState(1);
  const initialValues = {
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };
  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const backStep = () => setStep((prevStep) => prevStep - 1);

  const { firstName, lastName, age, email, occupation, city, bio } =
    initialValues;
  const values = { firstName, lastName, age, email, occupation, city, bio };

  switch (step) {
    default:
      return <FormUserDetails nextStep={nextStep} values={values} />;
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          backStep={backStep}
          values={values}
        />
      );
    case 3:
      return (
        <Confirm nextStep={nextStep} backStep={backStep} values={values} />
      );
    case 4:
      return <Success />;
  }
}

export default UserForm;
