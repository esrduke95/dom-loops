const colors = ['red', 'orange', 'white', 'blue', 'gold', 'yellow'];

//console.log(colors[0]);
//console.log(colors[1]);
//console.log(colors[2]);
//etc... but that sucks, so let's do loops!

//this is an explanation of a how a for loop can work. 
//index is abbreviated to 'i'
//starting point: index=0; what our loop starts with
//ending point: index < array.length; where our loop ends
//what do we want our loop to do: index++; add one onto index;
// for (let index = 0; index < Array.length; index++) {
//  const element = array[index];
// }


for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

const colorLoop = () => {
  let domString = '';
  for (let i = 0; i < colors.length; i++) {
    // console.log(colors[i]);
    domString += `<h2>${colors[i]}</h2>`;
  }
  // return domString;
  console.log(domString);
}


//init is short for initialize;
//this function tells all other functions on page to load; 
//so it 'initializes' the other functions. 


// Exercise 1:
// create an array of instructor objects, each with firstName and lastName properties (keys/values)
// loop over the instructors array
// console.log() full instructor names ie. 'luke lancaster' 'matt gill' etc etc
// call the function in init()

const instructors = [
  {
    firstName: 'luke',
    lastName: 'lancaster'
  },
  {
    firstName: 'matt',
    lastName: 'gill'
  },
  {
    firstname: 'michael',
    lastName: 'clark'
  },
  {
    firstName: 'ida',
    lastName: 'kno'
  }
];

const instructorLoop = () => {
  let domString = '';
  for (let i = 0; i < instructors.length; i++) {
    domString += `<h2>${instructors[i].firstName} ${instructors[i].lastName}</h2>`;
  }
console.log(domString);
}

const init = () => {
  instructorLoop();
}

init();
