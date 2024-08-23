

//App.jsx
import { useEffect, useState } from "react";
import "./index.css";
import axios from 'axios';
import NewTodoForm from "./ToDoForm";
import TodoList from "./ToDoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    axios.get('http://localhost:5554/api/todos')
      .then(response => {
        console.log(response.data.data);
        setTodos(response.data.data);
      });
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    const data = { title: newItem };
    axios.post('http://localhost:5554/api/todos', data)
      .then(response => {
        setTodos([...todos, response.data]);
        setNewItem('');
      })
      .catch(error => {
        console.error("Error adding todo:", error);
      });
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5554/api/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="frame">
      <h1 className="text-wrapper">todo list</h1>

      <NewTodoForm newItem={newItem} setNewItem={setNewItem} addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
