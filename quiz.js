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

  switch (id) {
    case "optionOne":
      answersList[0] = input;
    case "optionTwo":
      answersList[0] = input;
    case "optionOne2":
      answersList[1] = input;
    case "optionTwo2":
      answersList[1] = input;
    case "optionOne3":
      answersList[2] = input;
    case "optionTwo3":
      answersList[2] = input;
    case "optionOne4":
      answersList[3] = input;
    case "optionTwo4":
      answersList[3] = input;
  }
}

// this is the array that contains each of the dogs objects: children friendly, social dog, aged dog, female. Each boolean will tell if the dog meets these criteria
// console.log(doggies[0].answerTag[2]); //false
// console.log(doggies[2]);

let yourDoggie;
let yourDoggiePic;
function getDoggie(arr) {
  let doggies = [
    {
      dog: "Delilah",
      answerTag: [true, true, false, true],
      imgSource: "src/Delilah.jpg",
    },
    {
      dog: "Alfie",
      answerTag: [true, false, true, false],
      imgSource: "src/Alfie.jpg",
    },
    {
      dog: "Lola",
      answerTag: [true, true, true, true],
      imgSource: "src/Lola.jpg",
    },
    {
      dog: "Sky",
      answerTag: [false, true, false, false],
      imgSource: "src/Sky.jpg",
    },
    {
      dog: "Hammy",
      answerTag: [true, false, true, true],
      imgSource: "src/Hammy.jpg",
    },
    {
      dog: "Flash",
      answerTag: [true, true, false, false],
      imgSource: "src/Flash.jpg",
    },
  ];

  for (let i = 0; i < doggies.length; i++) {
    if (_.isEqual(arr, doggies[i].answerTag)) {
      // console.log(doggies[i].dog, i);
      yourDoggie = doggies[i].dog;
      yourDoggiePic = doggies[i].imgSource;
      break;
    } else {
      yourDoggie = undefined;
    }
  }

  if (yourDoggie == undefined) {
    noDoggieFound();
  } else {
    showDoggie(yourDoggie, yourDoggiePic);
  }
}

function showDoggie(dog, pic) {
  let quizResult = document.querySelector(".match-result");
  const para = document.createElement("p");
  para.className = "fs-4";
  para.textContent =
    "Congrats! Your woof-match is " +
    dog +
    "," +
    " please contact us so you can meet each other!";
  quizResult.appendChild(para);

  let dogImg = document.createElement("img");
  dogImg.src = pic;
  dogImg.classList.add("img-fluid", "rounded", "me-3");
  quizResult.appendChild(dogImg);

  let = divReQuizBt = document.querySelector(".qbn");
  let reQuizBt = document.createElement("button");
  reQuizBt.classList.add("btn", "btn-secondary", "fs-4", "bt-color");
  reQuizBt.textContent = "Take the quiz one more time";
  reQuizBt.addEventListener("click", refreshPage);
  divReQuizBt.appendChild(reQuizBt);
}

function noDoggieFound() {
  let quizResult = document.querySelector(".match-result");
  const para = document.createElement("p");
  para.className = "fs-4";
  para.textContent =
    "Sorry, at the moment we don't have a woof-match for you, come by to say hi anyway!";
  quizResult.appendChild(para);

  let = divReQuizBt = document.querySelector(".qbn");
  let reQuizBt = document.createElement("button");
  reQuizBt.classList.add("btn", "fs-4", "bt-color", "btn-secondary");
  reQuizBt.textContent = "Take the quiz one more time";
  reQuizBt.addEventListener("click", refreshPage);
  divReQuizBt.appendChild(reQuizBt);
}

const refreshPage = () => {
  location.reload();
};
