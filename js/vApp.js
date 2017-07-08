const vApp = {

    addTask: () => {
        const taskText = document.getElementById('newTask');
        const contentBox = document.getElementById('tasksholder');
        const taskCreator = document.createElement('div');
        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button');
        const downButton = document.createElement('button');
        const upButton = document.createElement('button');

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
                //TODO add function to deal with text edition, maybe an input field and replace div with okay button
            });

            downButton.style.backgroundImage = "url('img/down.png')";
            downButton.addEventListener('click', function() {
                    vApp.swapElements(this.parentNode, this.parentNode.nextSibling);
            });

            upButton.style.backgroundImage = "url('img/up.png')";
            upButton.addEventListener('click', function() {
                    vApp.swapElements(this.parentNode, this.parentNode.previousSibling);
            });

            taskCreator.appendChild(downButton);
            taskCreator.appendChild(upButton);
            taskCreator.appendChild(editButton);
            taskCreator.appendChild(deleteButton);
            taskText.placeholder = 'What else needs to be done?';

        } else {
            vApp.warn();
        }
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

    scanThrough: () => {
        const searchBar = document.getElementById('searchBar');
        /*
        TODO finish
        on input run through every existing childnode of contentbox and check their innerHTML if contains searchbarValue, if not, set that child visibility to 0? else visibility=1;
         */
        if(searchBar.value.includes('')) {
            console.log('YES!!!');
        }
    },

    warn: () => {
        const taskText = document.getElementById('newTask');
        taskText.placeholder = 'You can\'t add an empty task!';
        return false;
    }





};