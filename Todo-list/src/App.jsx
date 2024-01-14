import { useState } from "react";
import Form from "./Form";
import Todos from "./Todos";

const App = () => {
  const [id, setId] = useState("");
  console.log("id is edited", id);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "This is brand new title 1",
      description: "This is brand new description 1",
    },
    {
      id: 2,
      title: "This is brand new title 2",
      description: "This is brand new description 2",
    },
    {
      id: 3,
      title: "This is brand new title 3",
      description: "This is brand new description 3",
    },
  ]);

  const handleDelete = (id) => {
    setTodos(todos.filter((d) => d.id != id));
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">Todo-List Application</h1>
      <Form todos={todos} setTodos={setTodos} id={id} setId={setId} />
      <Todos handleDelete={handleDelete} todos={todos} setId={setId} />
    </div>
  );
};

export default App;
