import React, { useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";


function App() {

  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    const baseId = process.env.REACT_APP_AIRTABLE_BASE_ID;
    const apiKey = process.env.REACT_APP_AIRTABLE_API_KEY;
    fetch(`https://api.airtable.com/v0/${baseId}/Default`,
      {
        headers: {
          authorization: `Bearer ${apiKey}`

        }
      })
     

  }, [])

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]
  )



  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);

  }
  const removeTodo = (id) => {
    const updatedNewTodo = todoList.filter((item) => {
      return item.id !== id;
    })
    setTodoList(updatedNewTodo);
  }
  return (
    <>
      <h1> TodoList </h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? <p>Loading...</p> :
        <TodoList todoList={todoList}
          onRemoveTodo={removeTodo} />
      }

    </>
  );
}
export default App;
