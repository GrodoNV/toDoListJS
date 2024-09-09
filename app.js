// Obtiene referencias a los elementos de la página
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Función para agregar una nueva tarea
function addTask() {
  const taskText = taskInput.value.trim(); // Toma el valor del input y elimina espacios innecesarios

  if (taskText !== "") {
    // Solo agrega la tarea si el input no está vacío
    const listItem = document.createElement("li"); // Crea un nuevo elemento <li>
    listItem.textContent = taskText; // Establece el texto del <li> con la tarea

    // Botón para eliminar la tarea
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      taskList.removeChild(listItem); // Elimina el <li> de la lista
    };

    listItem.appendChild(deleteButton); // Agrega el botón de eliminar al <li>
    taskList.appendChild(listItem); // Agrega el <li> a la lista de tareas

    taskInput.value = ""; // Limpia el campo de input después de agregar la tarea
  }
}

// Evento para agregar tarea al hacer clic en el botón
addTaskButton.addEventListener("click", addTask);

// Permite agregar tarea al presionar la tecla Enter
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
