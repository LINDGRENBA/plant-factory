// we have a _____ (plant/state) whose ____ (soil/prop) increases by _____ (5/value) when we _____ (feed = name of the function)

const storeState = () => { //no arg, only job is to store the current state in storeState - this outer function is the room 
  let currentState = {}; // initialized as an empty object  - use let because this will mutate each time the inner function is called
  return (stateChangeFunction = state => state) => {  // anonymous inner function that takes arg stateChangeFunction / takes func as arg
    const newState = stateChangeFunction(currentState); // takes the function that's passed in, will call it on current state / newState holds the new state made from stateChangeFunction(currentState)
    currentState = {...newState}; //makes a copy of newState and assigns it to currentstate
    return newState;
  }
} 

const stateControl = storeState(); //creates a closure over the currentState variable

const changeState = (prop) => { // function factory, can create more specific functions that alter plant's soil, water and light
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
};

const feed = changeState("soil");
const blueFood = changeState("soil")(5);

const hydrate = changeState("water");
const superWater = changeState("water")(5);









// const giveLight = changeState("light");
// const greenFood = changeState("soil")(10)
// const yuckyFood = changeState("soil")(-5)

// const fedPlant = stateControl(blueFood); // { soil: 5 }
// const plantFedAgain = stateControl(greenFood); // { soil: 15 }
// console.log(fedPlant);
// ... X  = this is a copy of X

//come back to adding error handling