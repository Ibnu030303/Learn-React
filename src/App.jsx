// import { useId } from "react";

import ExampleUseCallback from "./components/ExampleUseCallback";
// import ExampleUseMemo from "./components/ExampleUseMemo";

// function Input(props) {
//   const { id = "input", label } = props;
//   const inputId = useId();

//   return (
//     <>
//       <label htmlFor={`${inputId}-${id}`}>
//         <span>{label}</span>
//         <input type="text" id={`${inputId}-${id}`} />
//       </label>
//       <p aria-details={`${inputId}-${id}`}>
//         Name should contain at least first name and last name
//       </p>
//     </>
//   );
// }

function App() {
  return (
    <>
      {/* <div className="">
        <input type="text" id={inputId} />
        <Input id="FirstName" label="First Name" />
        <Input id="FirstName" label="First Name" />
        <Input id="LastName" label="Last Name" />
        <Input id="Email" label="Email" />
        <Input />
        <Input />
        <Input />
      </div> */}

      {/* <ExampleUseMemo /> */}
      <ExampleUseCallback />
    </>
  );
}

export default App;
