import { useState, useEffect } from "react";
import Card from "./Card";

const ToDoForm = ({ onAddTodo, itemToEdit }) => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  // const [btnName, setBtnName] = useState('Add')

  useEffect(() => {
    if (itemToEdit) {
      setText(itemToEdit.task);
      setBtnDisabled(false);
      // setBtnName('Edit');
    }
  }, [itemToEdit])

  const clickedButton = (event) => {
    event.preventDefault();
    if (itemToEdit) {
      onAddTodo((prev) => prev.map(el => {
        if (el.id === itemToEdit.id) {
          return {
            task: text,
            done: false,
            ...el,
          }
        }
        return el;
      }))
    } else {
      let todoObj = {
        id: Math.round(Math.random() * 1000),
        task: text,
        done: false,
      }
      onAddTodo((prev) => {
        return [...prev, todoObj];
      })
    }
    setText('');
    setBtnDisabled(true);
    // setBtnName('Add');
  }

  const handleTextChange = (event) => {
    if (event.target.value !== '') {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
    setText(event.target.value);
  };
  return (
    <Card>
      <form onSubmit={clickedButton}>
        <input onChange={handleTextChange} value={text} />
        <button type="submit" disabled={btnDisabled}>Add todo</button>
      </form>
    </Card>
  )
}

export default ToDoForm