const container = document.querySelector(".container");
const formCreateTask = document.getElementById("form-create-task");
const taskName = document.getElementById("task-name");
let tasks = document.querySelectorAll(".task");
const btnClear = document.getElementById("btn-clear");


/*----------создать новую задачу------------ */
formCreateTask.addEventListener("submit", function (event) {
    event.preventDefault(); //отменить поведение по умолчанию - в нашем случае, отменить перезагрузку страницы
    let value = taskName.value;

    /*--создаем div.task-- */
    let newTask = document.createElement("div");
    newTask.innerHTML = `<span>${value}</span>
    <i tabindex="0" class="bi bi-pencil btn-edit"></i>
    <i tabindex="0" class="bi bi-x-circle btn-remove"></i>`
    newTask.classList.add("task");
    container.append(newTask);

    tasks = document.querySelectorAll(".task");

})

/*--------удалить все задачи---------- */
btnClear.addEventListener("click", () => {
    container.innerHTML = "";
})


/*----удаление задач-------------- */
container.addEventListener("click", (event)=>{
    let btn = event.target; //элемент, на котором кликнул пользователь
    if(btn.classList.contains("btn-remove")){ //если это кнопка удаления, то...
        btn.closest(".task").remove(); //удаляем задачу
    }
})
