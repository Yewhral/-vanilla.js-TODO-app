const vApp = {

    addTask: () => {
        const taskText = document.getElementById('newTask');
        const contentBox = document.getElementById('tasksholder');
        const taskCreator = document.createElement('div');
        const deleteButtonCreator = document.createElement('button');

        taskCreator.className = 'task-box';
        taskCreator.innerHTML = taskText.value;
        contentBox.insertBefore(taskCreator,contentBox.childNodes[0]);
        taskText.value = '';

        deleteButtonCreator.innerHTML = 'x';
        deleteButtonCreator.setAttribute('class', "x-button");
        deleteButtonCreator.addEventListener('click', function() {
            contentBox.removeChild(this.parentNode);
        });


        taskCreator.appendChild(deleteButtonCreator);
    }





};