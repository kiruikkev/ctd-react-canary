import React from "react";
import InputWithLabel from "./InputWithLabel";

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = React.useState('');

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);

    }
    const handleAddTodo = (event) => {
        event.preventDefault();
        onAddTodo({ title: todoTitle, id: Date.now() });

        setTodoTitle('');

    };
    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel
                todoTitle={todoTitle}
                handleTitleChange={handleTitleChange}
            >
                Title
            </InputWithLabel>

            <button type="submit">Add</button>

        </form>

    );

}
export default AddTodoForm;