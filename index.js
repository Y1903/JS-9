// Task 1

// const btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//   alert("Привіт тобі, клацальщик!");
// });


// Task 2

const link = document.querySelector("#link");
const section = document.querySelector("#sec");

link.addEventListener("click", (event) => {
  event.preventDefault();

  const newButton = document.createElement("button");
  newButton.className = "newButton";
  section.appendChild(newButton);
});


// Task 3

const btn = document.querySelector("#btn");

const body = document.body;

btn.addEventListener("click", function () {
  const greyCircle = document.createElement("article");
  greyCircle.className = "grey-circle";

  greyCircle.addEventListener("click", function (event) {
    const cl = event.target.classList;
    cl.add("yellow-circle");
    // cl.toggle("yellow-circle");
    console.log(event.target.classList);
  });

  body.append(greyCircle);
});
