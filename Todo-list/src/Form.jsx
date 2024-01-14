import { useState, useEffect } from "react";

const Form = ({ setTodos, todos, id, setId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, description);
    if (id) {
      updateById(id);
      setId("");
    } else {
      const obj = {
        id: Math.random(),
        title: title,
        description: description,
      };
      setTodos([...todos, obj]);
    }
    setId("");
    setTitle("");
    setDescription("");
  };
  useEffect(() => {
    if (id) {
      const updateData = todos.filter((data) => data.id === id);
      // console.log(updateData[0]);
      setTitle(updateData[0].title);
      setDescription(updateData[0].description);
    }
  }, [id]);

  const updateById = (id) => {
    const obj = {
      title: title,
      description: description,
    };
    setTodos((prevData) =>
      prevData.map((todo) => (todo.id === id ? { ...todo, ...obj } : todo))
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <div
        className="container text-center my-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          value={title}
          className="mx-2"
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          value={description}
          className="mx-2"
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        {id && <button className="btn btn-warning">Edit</button>}
        {!id && <button className="btn btn-warning">Add</button>}
      </div>
    </form>
  );
};

export default Form;
