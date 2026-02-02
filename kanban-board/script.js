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

    [todo, progress, done].forEach((colmuns) => {
      const tasksInColmuns = colmuns.querySelectorAll(".task").length;
      const countDiv = colmuns.querySelector(".right");
      countDiv.textContent = tasksInColmuns;
    });
  });
}
hover(todo);
hover(progress);
hover(done);

const taskBtn = document.querySelector("#toggle-modal");
const modal = document.querySelector(".modal.add-task");
const bg = document.querySelector(".modal.add-task .bg");

taskBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

bg.addEventListener("click", () => {
  modal.classList.remove("active");
});

const addTaskBtn = document.querySelector("#add-task");

addTaskBtn.addEventListener("click", (e) => {
  const taskInput = document.querySelector("#text-input");
  const taskDiscription = document.querySelector("#task-discription");

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  taskDiv.setAttribute("draggable", "true");

  taskDiv.innerHTML = `<h2 class="task-head">${taskInput.value}</h2>
            <p class="task-discription">
              ${taskDiscription.value}
            </p>
            <button class="delete-btn">Delete</button>
          `;
  todo.appendChild(taskDiv);
  const countr = [todo, progress, done];
  countr.forEach((colmuns) => {
    const tasksInColmuns = colmuns.querySelectorAll(".task").length;
    const countDiv = colmuns.querySelector(".right");
    countDiv.textContent = tasksInColmuns;
  });
  taskDiv.addEventListener("drag", (e) => {
    dargItem = taskDiv;
  });

  modal.classList.remove("active");

  const deleteBtn = taskDiv.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    taskDiv.remove();
    const countr = [todo, progress, done];
    countr.forEach((colmuns) => {
      const tasksInColmuns = colmuns.querySelectorAll(".task").length;
      const countDiv = colmuns.querySelector(".right");
      countDiv.textContent = tasksInColmuns;
    });
  });
});
