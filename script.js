// Função que cria as tarefas.
function createTheTasks() {
  const input = document.getElementById('texto-tarefa');
  let value = input.value;
  const list = document.getElementById('lista-tarefas');
  const list_items = document.createElement('li');
  const tasks_input = value;
  list_items.classList.add('tasks');
  list_items.innerHTML = tasks_input;
  list.appendChild(list_items);
  clearInput();
  colorTasks();
}

// Btn que adiciona as tarefas.
function btnAddTask() {
  const btn_add = document.querySelector('#criar-tarefa');
  btn_add.addEventListener('click', createTheTasks);
}

// Função que salva no localStorage.
function btnSaveTasks() {
  const btn_save = document.querySelector('#salvar-tarefas');
  btn_save.addEventListener('click', () => {
    const list = document.querySelectorAll('.tasks');
    const array_tasks = [];
    for (let i = 0; i < list.length; i++) {
      content = {
        tasks: list[i].innerHTML,
        class: list[i].classList.value,
      };
      array_tasks.push(content);
    }
    localStorage.setItem('tasks', JSON.stringify(array_tasks));
  });
}

// Função que pega as tarefas do localStorage.
function getTheTasks() {
  const getList = localStorage.getItem('tasks');
  const getListConvert = JSON.parse(getList);
  if (getListConvert !== null) {
    for (let i = 0; i < getListConvert.length; i++) {
      const list = document.getElementById('lista-tarefas');
      const list_items = document.createElement('li');
      list_items.innerHTML = getListConvert[i].tasks;
      list_items.className = getListConvert[i].class;
      list.appendChild(list_items);
    }
  }
}
// Função que colore as tarefas.
function colorTasks() {
  const list = document.querySelectorAll('.tasks');
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', () => {
      list.forEach((clas) => {
        clas.classList.remove('selected');
      });
      list[i].classList.add('selected');
    });
 }
}

// Função que marca as tarefas como concluidas.
function completedTasks() {
  document.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('tasks')) {
      if (event.target.className.includes('completed')) {
        event.target.classList.remove('completed');
      } else {
        event.target.classList.add('completed');
      }
    }
  }, false);
}

// Função que remove todas as tarefas.
function removeTasks() {
  const list = document.querySelectorAll('.tasks');
  for (let i = 0; i < list.length; i++) {
    list[i].remove();
  }
}

// btn que remove todas as tarefas.
function btnRemoveTasks() {
  const btn_remove = document.querySelector('#apaga-tudo');
  btn_remove.addEventListener('click', removeTasks);
}

// Função que remove as tarefas finalizadas.
function removeTasksCompleted() {
  const list = document.querySelectorAll('.tasks');
  for (let i = 0; i < list.length; i++) {
    if (list[i].classList.contains('completed')) {
      list[i].remove();
    }
  }
}

// btn que remove as tarefas finalizadas.
function btnRemoveTasksCompleted() {
  const btn_remove = document.querySelector('#remover-finalizados');
  btn_remove.addEventListener('click', removeTasksCompleted);
}

// Função que remove as tarefas selecionadas.
function removeTasksSelected() {
  const list = document.querySelectorAll('.tasks');
  for (let i = 0; i < list.length; i++) {
    if (list[i].classList.contains('selected')) {
      list[i].remove();
    }
  }
}

// btn que remove as tarefas selecionadas.
function btnRemoveTasksSelected() {
  const btn_remove = document.querySelector('#remover-selecionado');
  btn_remove.addEventListener('click', removeTasksSelected);
}

// Para resolver esse requesito consultei essas fontes:
// https:stackoverflow-com.translate.goog/questions/12595100/how-to-get-the-nextsibling-after-the-first-nextsibling?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt-BR&_x_tr_pto=nui,sc
// https://www.ti-enxame.com/pt/javascript/mover-um-elemento-um-lugar-para-cima-ou-para-baixo-na-arvore-do-dom-com-javascript/822635469/

// Função que move as tarefas para cima.
function moveTasksUp() {
  const list = document.querySelectorAll('.tasks');
  for (let i = 0; i < list.length; i++) {
    if (list[i].classList.contains('selected') && list[i].previousSibling) {
      list[i].parentNode.insertBefore(list[i], list[i].previousSibling);
    }
  }
}
// btn que move as tarefas para cima.
function btnMoveTasksUp() {
  const btn_move_up = document.querySelector('#mover-cima');
  btn_move_up.addEventListener('click', moveTasksUp);
}

// Função que move as tarefas para baixo.
function moveTasksDown() {
  const list = document.querySelectorAll('.tasks');
  for (let i = 0; i < list.length; i++) {
    if (list[i].classList.contains('selected') && list[i].nextSibling) {
      list[i].parentNode.insertBefore(list[i], list[i].nextSibling.nextSibling);
    }
  }
}

// btn que move as tarefas para baixo.
function btnMoveTasksDown() {
  const btn_move_down = document.querySelector('#mover-baixo');
  btn_move_down.addEventListener('click', moveTasksDown);
}

// Função que limpa o inpute
function clearInput() {
  const input = document.querySelector('#texto-tarefa');
  input.value = '';
}

window.onload = function () {
  getTheTasks();
  btnRemoveTasksCompleted();
  btnRemoveTasks();
  btnSaveTasks();
  btnAddTask();
  btnRemoveTasksSelected();
  btnMoveTasksUp();
  btnMoveTasksDown();
  colorTasks();
  completedTasks();
};
