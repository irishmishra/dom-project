const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
const addNewTaskBtn = document.querySelector("#add-new-task");

let dargItem = null;

const tasks = document.querySelectorAll(".task");

tasks.forEach((task) => {
  task.addEventListener("drag", (e) => {
    dargItem = task;
  });
});

function hover(colmuns) {
  colmuns.addEventListener("dragover", (e) => {
    e.preventDefault();
    colmuns.classList.add("hover-over");
  });
  colmuns.addEventListener("dragleave", (e) => {
    e.preventDefault();
    colmuns.classList.remove("hover-over");
  });
  colmuns.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  colmuns.addEventListener("drop", (e) => {
    e.preventDefault();
    colmuns.classList.remove("hover-over");
    colmuns.appendChild(dargItem);
  });
}
hover(todo);
hover(progress);
hover(done);
