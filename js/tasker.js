// const staticNodeList = document.querySelectorAll(".task");

// const liveNodeList = document.querySelector(".container").childNodes;

// console.log( staticNodeList);
// console.log( liveNodeList);
// let newTask = document.createElement("div");
// newTask.innerHTML = "Ещё одна задача";
// newTask.classList.add("task");
// document.querySelector(".container").append(newTask);

// console.log( staticNodeList);
// console.log( liveNodeList);
// let container = document.querySelector(".container");
// const formCreateTask = document.getElementById("form-create-task");
// const taskName = document.getElementById("task-name");
// let tasks = document.querySelectorAll(".task");


// formCreateTask.addEventListener("submit",function(event){
//     event.preventDefault();//отменить поведение по умолчанию- в нашем случае отменить презагрузку страницы
//     let value = taskName.value
    

//     /*--создаем div.task */
//     let newTask = document.createElement("div");
//     newTask.textContent=value;
//     newTask.classList.add("task");
//     container.append(newTask);

//     tasks = document.querySelectorAll(".task")
//     console.log(tasks)

// })

document.addEventListener("DOMContentLoaded", function() {
    let container = document.querySelector(".container");
    const formCreateTask = document.getElementById("form-create-task");
    const taskName = document.getElementById("task-name");
    let tasks = document.querySelectorAll(".task");

    formCreateTask.addEventListener("submit", function(event) {
        event.preventDefault();
        let value = taskName.value;

        // Создаем div.task
        let newTask = document.createElement("div");
        /**-----создание новой задачи------ */
        newTask.innerHTML = `<span>${value}</span><i tabindex="0" class="bi bi-pencil btn-edit"><i tabindex="0" class="bi bi-backspace btn-remove"></i></i>`
        newTask.classList.add("task");
        container.append(newTask);

        tasks = document.querySelectorAll(".task");
        taskName.value = ""; // Очищаем поле ввода
    });

    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");
    const btn4 = document.getElementById("btn4");
    const filterTaskName = document.getElementById("filter-task-name");
    const btn5 = document.getElementById("btn5");
    const btnClear = document.getElementById("btn-clear");

    function compare(a, b) {
        if(a.innerHTML > b.innerHTML) return 1;
        if(a.innerHTML == b.innerHTML) return 0;
        if(a.innerHTML < b.innerHTML) return -1;
    }

    btn1.addEventListener("click", function() {
        let newTasks = [...tasks].sort(compare);
        container.innerHTML = "";
        newTasks.forEach(task => container.append(task));
    });

    function compareReverse(a, b) {
        if(b.innerHTML > a.innerHTML) return 1;
        if(b.innerHTML == a.innerHTML) return 0;
        if(b.innerHTML < a.innerHTML) return -1;
    }

    btn2.addEventListener("click", function() {
        let newTasks = [...tasks].sort(compareReverse);
        container.innerHTML = "";
        newTasks.forEach(task => container.append(task));
    });

    btn3.addEventListener("click", function() {
        let newTasks = [...tasks].filter(task => task.classList.contains("immediate"));
        container.innerHTML = "";
        newTasks.forEach(task => container.append(task));
    });

    btn4.addEventListener("click", function() {
        let value = filterTaskName.value.toLowerCase(); 
        let newTasks = [...document.querySelectorAll(".task")]; 
    
        newTasks = newTasks.filter(function(item) {
            return item.innerHTML.toLowerCase().indexOf(value) !== -1; 
        });
        
        container.innerHTML = ""; 
        newTasks.forEach(task => container.append(task)); 
    });

    const originalTasks = [...document.querySelectorAll(".task")];

    document.getElementById("btn5").addEventListener("click", function() {
        container.innerHTML = "";
        //восстанавливаем оригинальные задачи
        originalTasks.forEach(task => {
            container.appendChild(task.cloneNode(true)); // клонирую и добавляю каждую задачу обратно
        });
        document.getElementById("filter-task-name").value = "";
    });
    /*----------очистка доски----------- */
    btnClear.addEventListener("click",()=>{
        container.innerHTML = "";
    }); 
    /**-----удаление задач----- */
//     let i=0;
//     const elems = document.querySelectorAll('*');
//     for (let elem of elems){
//         elem.addEventListener("click", (e) => {
//         i++;
//         console.log("этап " + i);
//         console.log("целевой элемент:")
//         console.log(e.target);
//         console.log("элемент, на котором сработало событие:")
//         console.log(e.currentTarget);
//     });
// }
/*---делегирование событий-------------- */
container.addEventListener("click", (event)=>{
    let btn = event.target; //элемент, на котором кликнул пользователь
    /**-------удаление задачи--------- */
    if(btn.classList.contains("btn-remove")){ //если это кнопка удаления, то...
        btn.closest(".task").remove(); //удаляем задачу
    }
    /**---------------редактирование задачи----------- */
    if(btn.classList.contains("btn-edit")){
        btn.closest(".task").querySelector("span").setAttribute("contenteditable", "true")
        }
    })
})