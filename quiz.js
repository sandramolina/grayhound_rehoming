// This function will save the user answers to the 4 questions into an array

// try separating this function into two less complex

let input;
let answersList = [];
function answerInput(id) {
  input = document.getElementById(id).value;
  if (input == "true") {
    input = true;
  } else if (input == "false") {
    input = false;
  }
  answersList.push(input);
  return answersList;
}

// console.log("test");
//

// example of answerList to try the if statement
// answersList = [true, true, false, true];

// this is the array that contains each of the dogs objects: children friendly, social dog, aged dog, female. Each boolean will tell if the dog meets these criteria

// console.log(doggies[0].answerTag[2]); //false
// console.log(doggies[2]);

let yourDoggie;
function getDoggie(arr) {
  let doggies = [
    {
      dog: "Delilah",
      answerTag: [true, true, false, true],
    },
    {
      dog: "Alfie",
      answerTag: [true, false, true, false],
    },
    {
      dog: "Lola",
      answerTag: [true, true, false, true],
    },
    {
      dog: "Sky",
      answerTag: [false, true, false, false],
    },
    {
      dog: "Hammy",
      answerTag: [true, false, true, true],
    },
    {
      dog: "Flash",
      answerTag: [true, true, false, false],
    },
  ];

  for (let i = 0; i < doggies.length; i++) {
    if (_.isEqual(arr, doggies[i].answerTag)) {
      // console.log(doggies[i].dog, i);
      yourDoggie = doggies[i].dog;
      showDoggie();
    }
  }
}

function showDoggie() {
  console.log("Your doggie is " + yourDoggie);
}
