// On récupère les éléments HTML (DOM) dont on aura besoin
const addTaskBtn = document.querySelector('#add-task-btn'); // Le bouton "Ajouter"
const taskInput = document.querySelector('#task-input');    // L'input du titre
const taskDate = document.querySelector('#task-date');      // L'input de la date
const taskTime = document.querySelector('#task-time');      // L'input de l'heure
const taskList = document.querySelector('#task-list');      // La liste UL où les tâches s'affichent

// Quand on clique sur le bouton "Ajouter"querySelector
addTaskBtn.addEventListener('click', function () {
    // On récupère la valeur du champ titre
    const title = taskInput.value.trim();
    const time = taskTime.value;
    const date = taskDate.value;

    // Si le champ est vide, on affiche une alerte et on arrête
    if (title === '') {
        alert('Veuillez entrer une tâche.');
        return;
    }

    // 4. Crée un nouvel élément <li>
    const li = document.createElement("li");

    // 5. Ajoute le texte de la tâche dans le <li>
    li.innerHTML = 
    `<div class="task-content">
    <h2>${title}</h2>
    <div class="task-meta">
      ${date ? `<span>📅 ${date}</span>` : ""}
      ${time ? `<span>🕒 ${time}</span>` : ""}
    </div>
    </div>
    <div class="task-actions">
        <button class="edit-btn">✏️ Modifier</button>
        <button class="delete-btn">🗑️ Supprimer</button>
    </div>`
    ;

    // 6. Ajoute ce <li> dans la liste <ul>
    taskList.appendChild(li);

    // 7. Vide l'input pour pouvoir ajouter une nouvelle tâche ensuite
    taskInput.value = "";
    taskTime.value = "";
    taskDate.value = "";

    // 8. Sélectionne le bouton "Supprimer" à l'intérieur de ce <li>
    const deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
    li.remove();
    });

    const editBtn = li.querySelector(".edit-btn");
    editBtn.addEventListener("click", () => {
        // On remet les valeurs dans les inputs
        taskInput.value = title;
        taskTime.value = time;
        taskDate.value = date;

        // On supprime l'ancienne tâche (on la remplacera en recliquant sur Ajouter)
        li.remove();
    });

});