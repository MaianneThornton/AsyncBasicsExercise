// ASYNC BASICS EXERCISE

// 1. Add a callback to the “luke” function so the value of `Mark Hamill` will display in the terminal/console for the name1 variable when the lukeName function is run.
let name1 = "Luke Skywalker";

function lukeName() {
  console.log(`Question 1`);
  console.log(name1);
}

function luke(n, callback) {
  setTimeout(() => {
    name1 = n;
    callback();
  }, 1000);
}
luke(`Mark Hamill`, lukeName);


// 2. Create a promise in the han function (Put the setTimeout inside the function with the resolve and reject parameters that is passed into the Promise). Also, consume the promise that is now returned from the han function in a way that the value of `Harrison Ford` will display in the terminal/console for the name2 variable when the hanName function is run.

let name2 = "Han Solo";

function hanName() {
  console.log(`Question 2`);
  console.log(name2);
}

function han(n2) {
  return new Promise ((resolve, reject) => {
  setTimeout(() => {
    name2 = n2;
    resolve ();
  }, 2000);
});
}
han(`Harrison Ford`).then (hanName);
;


// 3. Use a promise in the leia function (Put the setTimeout inside the function with the resolve and reject parameters that is passed into the Promise). Also, use Async/Await so the value of `Carrie Fisher` will display in the terminal/console for the name3 variable when the leiaName function is run.

let name3 = "Leia Organa";

function leiaName() {
  console.log(`Question 3`);
  console.log(name3);
}

function leia(n3){
  return new Promise ((resolve, reject) => {
  setTimeout(() => {
    name3 = n3;
    resolve();
  }, 3000);
});
}

async function princess(){
  await leia(`Carrie Fisher`);
  leiaName();
}
princess();

//BONUS...
// 4. Use Promise.all to display the values set for p1, p2, and p3 in a single array in the console/terminal.
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('First Promise')
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Second Promise')
  }, 3000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Third Promise')
  }, 4000);
});
Promise.all([p1, p2, p3]).then((values) =>{
  console.log(values);
})