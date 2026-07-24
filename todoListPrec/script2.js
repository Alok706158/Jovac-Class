// Input field ko select kiya
const taskInput = document.getElementById("taskInput");

// Add button ko select kiya
const addBtn = document.getElementById("addBtn");

// Task list (ul) ko select kiya
const taskList = document.getElementById("taskList");

// Local Storage se tasks load kiye,
// agar koi task nahi hai to empty array banega
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Page refresh hone par saare tasks screen par dikhao
tasks.forEach(task => createTask(task));

// Add button par click hone par addTask() function chalega
addBtn.addEventListener("click", addTask);

function addTask() {

    // Input box se value lo aur extra spaces hata do
    const task = taskInput.value.trim();

    // Agar input empty hai to alert dikhao
    if (task === "") {
        alert("Please enter a task");
        return;
    }

    // Naya task object banao
    const newTask = {
        text: task,
        completed: false
    };

    // Array me task add karo
    tasks.push(newTask);

    // Updated array ko Local Storage me save karo
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Screen par task dikhao
    createTask(newTask);

    // Input box clear karo
    taskInput.value = "";

    // Cursor wapas input box me le aao
    taskInput.focus();
}

function createTask(task) {

    // <li> create karo
    const li = document.createElement("li");

    // Task text ke liye <span> banao
    const text = document.createElement("span");

    // Span me task ka naam dalo
    text.textContent = task.text;

    // Agar task pehle se completed hai
    // to completed class add kar do
    if (task.completed) {
        text.classList.add("completed");
    }

    // Buttons rakhne ke liye div banao
    const actions = document.createElement("div");
    actions.className = "actions";

    // Done button banao
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Done";
    completeBtn.className = "complete";

    // Done button click event
    completeBtn.addEventListener("click", function () {

        // CSS class add/remove karo
        text.classList.toggle("completed");

        // completed value true/false karo
        task.completed = !task.completed;

        // Updated data Local Storage me save karo
        localStorage.setItem("tasks", JSON.stringify(tasks));

    });

    // Delete button banao
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";

    // Delete button click event
    deleteBtn.addEventListener("click", function () {

        // Screen se task hatao
        li.remove();

        // Array se task delete karo
        tasks = tasks.filter(t => t.text !== task.text);

        // Updated array Local Storage me save karo
        localStorage.setItem("tasks", JSON.stringify(tasks));

    });

    // Buttons ko div me add karo
    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    // Span aur buttons ko li me add karo
    li.appendChild(text);
    li.appendChild(actions);

    // li ko ul me add karo
    taskList.appendChild(li);
}