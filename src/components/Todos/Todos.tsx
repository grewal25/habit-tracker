import { useState } from "react";

interface TodoProps {
  todo: string;
  index: number;
  onRemove?: (index: number) => void;
}

function Todo({todo, index, onRemove}: TodoProps) {
  const handleRemove = () => {
    if(onRemove) onRemove(index);
  }
  return (
    <li key={index}>
      {todo}
      <button onClick={handleRemove}>Remove</button>
    </li>
  )
}


export default function Todos() {
  const [inputValue, setInputValue] = useState<string>('')
  const [todos, setTodos] = useState<string[]>([]);

  function createTodo(){
    setTodos(prevTodos => {
      return [...prevTodos, inputValue]
    })
    setInputValue('')
  }

  function addInput(event: React.ChangeEvent<HTMLInputElement>){
    setInputValue(event.target.value)
  }

  const handleRemove = (index: number) => {
    setTodos(prevTodos => prevTodos.filter((t, i) => i !== index));
  };
  

  return (
    <>
      <h3>Create todos</h3>
      {console.log(todos)}
      <input type="text" onChange={addInput} value={inputValue} />
      <button onClick={createTodo}>create</button>
      <button>done</button>
      {todos.map((t, index) => <Todo todo={t} index={index} onRemove={handleRemove} />)}
    </>
  );
}
