function criar(tarefa) {
    let checkbox = document.createElement('input');
    let li = document.createElement('li');
    let Lista = document.querySelector('#lista1');
    Lista.appendChild(li);
    li.appendChild(checkbox);
    checkbox.addEventListener("click", lineThrough);
    checkbox.type = 'checkbox';
    let texto = document.createElement('span');
    texto.innerHTML = tarefa;
    li.appendChild(texto);
    let delbutton = document.createElement('button');
    delbutton.innerHTML = '✘';
    delbutton.classList = 'botdel';
    delbutton.addEventListener('click',
        function (event) {
            let confirmar = confirm("Excluir essa tarefa?");
            if (confirmar == true); {
                li.remove();
                return;
            }
        })
    li.appendChild(delbutton);
    salvar();
}
document.querySelector('.addbotton').addEventListener('click', function () {
    criar(document.querySelector('#tarefa').value);
})

function lineThrough(event) {
    let check = event.target;
    let LineTh = event.target.parentElement.children[1];
    if (check.checked == true) {
        LineTh.classList.add('checked');
    } else {
        LineTh.classList.remove('checked');
    }
}

function salvar() {
    let tarefas = document.querySelectorAll('#lista1 li span');
    let listaTarefas = [];
    for (let tarefa of tarefas) {
        listaTarefas.push(tarefa.innerText);
    }
    localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas));
}

function carregar() {
    let listaTarefas = localStorage.listaTarefas;
    if (!listaTarefas) {
        alert('Nenhuma tarefa para exibir!');
    }

    listaTarefas = JSON.parse(listaTarefas)
    for (let tarefa of listaTarefas) {
        criar(tarefa)
    }
}
carregar()