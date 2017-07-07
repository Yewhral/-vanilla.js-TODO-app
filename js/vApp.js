const vApp = {

    addTask: () => {
        const taskText = document.getElementById('newTask');
        const contentBox = document.getElementById('tasks-holder');
        const taskCreator = document.createElement('div');
        // TODO rename
        taskCreator.className ='kurczak';
        taskCreator.innerHTML = taskText.value;
        contentBox.insertBefore(taskCreator,contentBox.childNodes[0]);
        taskText.value = '';
    }







};