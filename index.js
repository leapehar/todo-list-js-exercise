
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false
  };
  return task;
}

function completeTask(task) {
  task.complete = true;
}

function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

logTaskState(task1);
completeTask(task1);
logTaskState(task1);

console.log(tasks);
