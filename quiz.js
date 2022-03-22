// This function will save the user answers to the 4 questions into an array

// try separating this function into two less complex

let input;
let answersList = [];
function answerInput(id) {
  while (answersList.length < 4) {
    input = document.getElementById(id).value;
    if (input == "true") {
      input = true;
    } else if (input == "false") {
      input = false;
    }
    answersList.push(input);
  }
  getDoggie(answersList);
}

// example of answerList to try the if statement
// answersList = [true, true, false, true];

// this is the array that contains each of the dogs objects: children friendly, social dog, aged dog, female. Each boolean will tell if the dog meets these criteria
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
// console.log(doggies[0].answerTag[2]); //false
// console.log(doggies[2]);

function getDoggie(arr) {
  for (let i = 0; i < doggies.length; i++) {
    if (_.isEqual(arr, doggies[i].answerTag)) {
      console.log(doggies[i].dog, i);
    } else {
      console.log("not match found");
    }
  }
}
