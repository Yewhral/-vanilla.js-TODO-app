const vApp = {

    addTask: () => {
        const taskText = document.getElementById('newTask');
        const contentBox = document.getElementById('tasksholder');
        const taskCreator = document.createElement('div');
        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button');
        const downButton = document.createElement('button');
        const upButton = document.createElement('button');
        const checkBox = document.createElement('input');
        const label = document.createElement('label');

        if (taskText.value.length > 0) {        // protection against empty input
            taskCreator.className = 'task-box';
            taskCreator.innerHTML = taskText.value;
            contentBox.insertBefore(taskCreator, contentBox.childNodes[0]);
            taskText.value = '';        // clean input box

            deleteButton.style.backgroundImage = "url('img/delete.png')";
            deleteButton.addEventListener('click', function() {
                contentBox.removeChild(this.parentNode);
            });

            editButton.style.backgroundImage = "url('img/edit.png')";
            editButton.addEventListener('click', function() {
                vApp.editTask(this.parentNode);
            });

            downButton.style.backgroundImage = "url('img/down.png')";
            downButton.addEventListener('click', function() {
                    vApp.swapElements(this.parentNode, this.parentNode.nextSibling);
            });

            upButton.style.backgroundImage = "url('img/up.png')";
            upButton.addEventListener('click', function() {
                    vApp.swapElements(this.parentNode, this.parentNode.previousSibling);
            });


            checkBox.type = "checkbox";

            label.appendChild(checkBox);
            taskCreator.appendChild(label);
            taskCreator.appendChild(downButton);
            taskCreator.appendChild(upButton);
            taskCreator.appendChild(editButton);
            taskCreator.appendChild(deleteButton);
            taskText.placeholder = 'What else needs to be done?';

        } else {
            vApp.warn();
        }
    },


    editTask: (taskToEdit) => {

    },


    swapElements: (task1, task2) => {
        const task2Parent = task2.parentNode;      // save placement of second task
        let task2Sibling = task2.nextSibling;

        if (task2Sibling === task1) {
            task2Parent.insertBefore(task1, task2);
        } else {
            task1.parentNode.insertBefore(task2, task1);
            if (task2Sibling) {     // insert where task2 was
                task2Parent.insertBefore(task1, task2Sibling);
            } else {                // in case task2 was the last one
                task2Parent.appendChild(task1);
            }
        }
    },

    showAllTasks: () => {
        const container = document.getElementById('tasksholder');
        const checkBoxes = container.getElementsByTagName("input");
        for(let i = 0; checkBoxes.length > i; i++) {
            checkBoxes[i].parentNode.parentNode.style.display='block';
        }
    },

    scanThrough: () => {
        const searchBar = document.getElementById('searchBar');
        const container = document.getElementById('tasksholder');
        vApp.showAllTasks();
        for (let i = 0; container.childElementCount > i; i++) {
            if (container.childNodes[i].innerText.includes(searchBar.value)) {
            container.childNodes[i].style.display='block';
            } else {
                container.childNodes[i].style.display='none';
            }
        }
    },

    warn: () => {
        const taskText = document.getElementById('newTask');
        taskText.placeholder = 'You can\'t add an empty task!';
        return false;
    },

    filterTasks: (type) => {
        const container = document.getElementById('tasksholder');
        const checkBoxes = container.getElementsByTagName("input");
        vApp.showAllTasks();
        for (let i = 0; checkBoxes.length > i; i++) {
            if (checkBoxes[i].type === "checkbox" && checkBoxes[i].checked === type) {
                checkBoxes[i].parentNode.parentNode.style.display='none';
            }
        }
    },


};