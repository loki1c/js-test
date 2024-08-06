fetch('https://jsonplaceholder.typicode.com/todos/')
.then(response => response.json())
.then(json => {
    const falseTodos = json.filter(item => !item.completed);
    const trueTodos = json.filter(item => item.completed);

    const falseList = document.getElementById('todo-list__false');
    const trueList = document.getElementById('todo-list__true');
    
    falseTodos.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `ID: ${item.id}, Title: ${item.title}, userId:${item.userId},    не выполнено`;
        falseList.appendChild(listItem);
        listItem.style.color = 'red';
    });
    trueTodos.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `ID: ${item.id}, Title: ${item.title}, userId:${item.userId}, completed:${item.completed}`;
        trueList.appendChild(listItem);
    });
})
.catch(error => {
    console.error('Error fetching data:', error);
});