const vApp = {

    addTask: () => {
        const taskText = document.getElementById('newTask');
        const contentBox = document.getElementById('tasksholder');
        const taskCreator = document.createElement('div');
        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button');

        if (taskText.value.length > 0) {        // protection against empty input
            taskCreator.className = 'task-box';
            taskCreator.innerHTML = taskText.value;
            contentBox.insertBefore(taskCreator, contentBox.childNodes[0]);
            taskText.value = '';

            deleteButton.style.backgroundImage = "url('img/delete.png')";
            deleteButton.addEventListener('click', function() {
                contentBox.removeChild(this.parentNode);
            });

            editButton.style.backgroundImage = "url('img/edit.png')";
            editButton.addEventListener('click', function() {
                //TODO add function to deal with text edition, maybe an input field and replace div with okay button
            });

            taskCreator.appendChild(editButton);
            taskCreator.appendChild(deleteButton);
            taskText.placeholder = 'What else needs to be done?';

        } else {
            vApp.warn();
        }
    },

    warn: () => {
        const taskText = document.getElementById('newTask');
        taskText.placeholder = 'You can\'t add an empty task!';
        return false;
    }





};