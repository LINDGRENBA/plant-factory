// const hydrate = (plant) => { //function literal. "plant" argument
//   return {
//     ...plant, // spread operator to return the new state of the plant
//     water: (plant.water || 0) + 1 //plant.water = NaN, needs to default to 0 if there is no water property.
//   }
// };

// const feed = (plant) => {
//   return {
//     ...plant,
//     soil: (plant.soil || 0) + 1
//   }
// };



// const changePlantState = (plant, property) => {
//   return {
//     ...plant,
//     [property]: (plant[property] || 0) + 1 //use bracket notation when we don't yet know the contents value.
//   }
// };

// const changeState = (state, prop) => {
//   return {
//     ...state,
//     [prop]: (state[prop] || 0) + 1
//   }
// };

// const changeState = (state, prop, value) => ({ //State is the object(?)
//   ...state,     //instatiation of the new object(?)
//   [prop] : (state[prop] || 0) + value
// });


// // const copyOfFunction = (prop) => {
// //   return (value) => {
// //     return (state) => ({
// //       ...state,
// //       [prop] : (state[prop] || 0) + value
// //     })
// //   }
// // };
// // const copyOfFunction = changeState(prop);
// // copyOfFunction(value)(state)

// // const feed = changeState("soil"); // feed = changeState(value 0)(prop)(state 0)
// // const hydrate = changeState("water");
// // const giveLight = changeState("light");

// // const blueFood = changeState("soil")(5) //bluefood = changeState(5)(plant)(soil)
// // const greenFood = changeState("soil")(10)
// // const yuckyFood = changeState("soil")(-5)


// // I have a ____(dog) whose ____ (happiness) increases by ____ (10) when we ____ (chase kitty cats)

// // I have a _____(car/state) whose _________ (motor/prop) decreases by _______ (10000/value) when I _______ (drive)

// const changeState = ("motor") => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       ["motor"] : (state["motor"] || 0) - value
//     })
//   }
// };

// const driveCar = changeState("motor")
// driveCar(10000)(car)
// const dyingCar = driveCar(10000)



// changeState(motor)(1000)(car)








// const changeDogMood = (prop) => {
//     return (value) => {
//       return (state) => ({
//         ...state,
//         [prop] : (state[prop] || 0) + value
//       })
//     }
//   };

//   const chaseKittyCats = ("happiness") => {
//     return (10) => {
//       return (dog) => ({
//         ...dog,
//         ["happiness"] : (state["happiness"] || 0) + 10
//       })
//     }
//   };

//   const chaseKittyCats = changeDogMood("happiness");
//   chaseKittyCats(10)(dog);