async function getTodos(id) {
  console.log('1st checkpoint');
  const todo = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log('2nd checkpoint');
  const noAwaitTodo = await fetch('https://jsonplaceholder.typicode.com/todos/2');
  console.log('3rd checkpoint');
  const response = await todo.json();
  console.log('4th checkpoint');

  const sum = 2+2;
  console.log(sum);

  console.log(noAwaitTodo);

  console.log(response);
}

getTodos(1);