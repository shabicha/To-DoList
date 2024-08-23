//ToDoList.jsx
import TodoItem from "./ToDoItem";

const TodoList = ({ todos, deleteTodo }) => {
    return (
        <div>

            {todos.map(todo => (

                <TodoItem key={todo._id} todo={todo} deleteTodo={deleteTodo} />
            ))}        
            </div>
    );
};

export default TodoList;