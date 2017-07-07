const vApp = {

    addTask: () => {
        const taskText = document.getElementById('newTask');
        const contentBox = document.getElementById('tasks-holder');
        const taskCreator = document.createElement('div');
        const deleteButtonCreator = document.createElement('button');

        taskCreator.className ='task-box';
        taskCreator.innerHTML = taskText.value;
        contentBox.insertBefore(taskCreator,contentBox.childNodes[0]);
        taskText.value = '';

        deleteButtonCreator.innerHTML = 'x';
        deleteButtonCreator.addEventListener('click', () => {
            (contentBox.removeChild(this.parentNode));
        });
        deleteButtonCreator.setAttribute('class', "x-button");

        taskCreator.appendChild(deleteButtonCreator);
    }





};