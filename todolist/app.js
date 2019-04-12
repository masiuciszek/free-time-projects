// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fas fa-trash fa-2x"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';

  e.preventDefault();
}

function removeTask(e){
  if(e.target.parentElement.classList.contains
    ('delete-item')){
    // console.log(e.target) - we getting only the <i> we need to grab the <li>
    // wich is parent of a ... so parent parent 
    if(confirm('are you sure?'))
    e.target.parentElement.parentElement.remove();
  }
}

function clearTasks(e){
//  taskList.innerHTML = '';

  //faste way to remove the tasks
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild)
  }

}

function filterTasks(e){
  const text = e.target.value.toLowerCase()



  document.querySelectorAll('.collection-item')
  .forEach(task => {
    let item = task.firstChild.textContent;

    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}


// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);

  //remove task event
  taskList.addEventListener('click', removeTask);

  //clear task events
  clearBtn.addEventListener('click', clearTasks);

  //filter tasks

  filter.addEventListener('keyup', filterTasks);
}

// Load all event listeners
loadEventListeners();

// H1 EFFECT

const jump = document.querySelector('.jump');
jump.innerHTML = spanWrap(jump.textContent);

function spanWrap(word){
  return [...word].map(letter => `<span>${letter}</span>`).join('');
}