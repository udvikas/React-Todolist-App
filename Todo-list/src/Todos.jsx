import React from "react";

const Todos = ({ todos, handleDelete, setId }) => {
  return (
    <div className="container text-center">
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        {todos.map((data) => {
          return (
            <tbody key={data.id}>
              <tr>
                <td>{data.title}</td>
                <td>{data.description}</td>
                <td>
                  <button
                    onClick={() => setId(data.id)}
                    className="btn btn-warning mx-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(data.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Todos;
