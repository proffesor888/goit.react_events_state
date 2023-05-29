import { Component, useEffect, useState } from "react";
import { generateChip, checkIfEven } from "./utils";
import { ClassComponent } from './components/classes';
//import { ClassComponent } from "./components/Events";
//import { ClassComponent } from "./components/State";
//import { ClassComponent } from "./components/Issue";
import "./App.css";


class App extends Component {
  render() {
    const chip = generateChip();
    const color = checkIfEven(chip) ? "red" : "black";
    return (
      <>
        <ClassComponent color={color} chip={chip}/>
      </>
    )
  }
}

export default App













//with state old way
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { chip: generateChip() }
//   }
//   render() {
//     //const chip = generateChip();
//     const color = checkIfEven(this.state.chip) ? "red" : "black";
//     return (
//       <>
//         {/* <ClassComponent chip={generateChip()}/> */}
//         <ClassComponent color={color} chip={this.state.chip}/>
//       </>
//     )
//   }
// }

// export default App








//with new Babel features
// class App extends Component {
//   state = {
//     name: "sam",
//     chip: generateChip(),
//   };
//   onGenerateChipEvent = () => {
//     const value = generateChip();
//     this.setState({ chip: value });
//     //this.state.chip = value;
//     //console.warn(this.state.chip)
//   }
//   render() {
//     console.warn(this.state);
//     const color = checkIfEven(this.state.chip) ? "red" : "black";
//     return (
//       <>
//         <ClassComponent
//           onGenerateChipEvent={this.onGenerateChipEvent}
//           chip={this.state.chip}
//           color={color}
//         />
//       </>
//     );
//   }
// }

// export default App;





//with prevState and update callback
// class App extends Component {
//   state = {
//     chip: generateChip(),
//   };
//   onGenerateChipEvent = () => {
//     const value = generateChip();
//     this.setState(
//       (prevState) => {
//         if (prevState.chip % 2 === 0) {
//           return { chip: prevState.chip + 1 };
//         } else {
//           return { chip: value };
//         }
//       },
//       () => {
//         console.warn(`State is updated with ${this.state.chip}`);
//       }
//     );
//     console.warn(`New state ${this.state.chip}`)
//   };
//   render() {
//     const color = checkIfEven(this.state.chip) ? "red" : "black";
//     return (
//       <>
//         <ClassComponent
//           onGenerateChipEvent={this.onGenerateChipEvent}
//           chip={this.state.chip}
//           color={color}
//         />
//       </>
//     );
//   }
// }

// export default App;



//new way
// const App = () => {
//   const [chip, updateChip] = useState(generateChip());
//   useEffect(() => {
//     console.warn(`State is updated with ${chip}`);
//   }, [chip]);
//   const onGenerateChipEvent = () => {
//     const value = generateChip();
//     if(value % 2 === 0) {
//       updateChip(chip + 1);
//     } else {
//       updateChip(value);
//     }
//   }
//   const color = checkIfEven(chip) ? "red" : "black";
//   return (
//     <ClassComponent
//       onGenerateChipEvent={onGenerateChipEvent}
//       chip={chip}
//       color={color}
//     />
//   );
// };

// export default App;
