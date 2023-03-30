import React, { useEffect, useState, useRef } from "react";
// const Pract = () => {

//   return <div>
//       <ChildComponent1 name="John" />
//       <ChildComponent2 age={25} />

//   </div>;
// };
// function ChildComponent1(props) {
//     return (
//       <h1>My name is {props.name}</h1>
//     );
//   }
//   function ChildComponent2(props) {
//     return (
//       <h1>I am {props.age} years old</h1>
//     );
//   }
// export default Pract;

function FormValidation(props) {
  // let inputValue = React.createRef();
  // let handleSubmit = e => {
  //   alert(`Input value: ${inputValue.current.value}`);
  //   e.preventDefault();
  // };

  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>)

  return (
    <div>
     <ul>
     {listItems}
     </ul>
    </div>
  );
}
export default FormValidation;
