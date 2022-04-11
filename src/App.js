import { useState, useEffect } from "react";
import Header from "./components/Header";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import Stats from "./components/Stats";

function App() {
  const [todoList, setTodoList] = useState(() => {
    const savedList = localStorage.getItem('todoList');
    const initialValue = JSON.parse(savedList);
    return initialValue || []
  });
  const [itemToEdit, setItemToEdit] = useState();

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList])

  const changeStatus = (task) => {
    setTodoList((prev) => prev.map(obj => {
      if (obj.id === task.id) {
        return {
          ...task,
          done: !task.done,
        }
      }
      return obj;
    }))
  }

  const deleteTask = (id) => {
    setTodoList((prev) => prev.filter(el => el.id !== id))
  }

  let pageHeaderTitle = 'Todo app';
  return (
    <div className="App">
      <Header title={pageHeaderTitle} />
      <ToDoForm onAddTodo={setTodoList} itemToEdit={itemToEdit} />
      <Stats list={todoList} />
      <ToDoList list={todoList} changeStatus={changeStatus} deleteTask={deleteTask} setItemToEdit={setItemToEdit} />
    </div>
  );
}


export default App;
