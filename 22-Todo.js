const todoList=[{
  name:'makedinner',
  dueDate:'2024-5-29'
},
{
  name:'watch movies',
  dueDate:'2024-5-29'
}];

renderTodoList();
function renderTodoList(){



let todoListHtml='';

for(let i=0; i < todoList.length ; i++){
   const todoObject= todoList[i];
   //const name=todoObject.name;
   //const dueDate=todoObject.dueDate;
   const {name,dueDate}=todoObject;
   const html=`
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
    todoList.splice(${1},1);
    renderTodoList();
    " class="delete">Delete</button>
   `;

   todoListHtml +=html;
}
console.log(todoListHtml);
document.querySelector('.js-todo-list').innerHTML=todoListHtml;
}

function addTodo(){
   const inputElement=document.querySelector('.input');

   const name=inputElement.value;
   const dueInputElement=document.querySelector('.js-due-date-input');
   const dueDate=dueInputElement.value

  
   todoList.push({
    //name:name,
    //dueDate:dueDate
    name,
    dueDate});
   console.log(todoList);

   inputElement.value='';

   renderTodoList();
}