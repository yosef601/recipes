import React, { useState } from "react";

function RecipeCreate({ addRec }) {
  // Initial form state
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [recData, setRecData] = useState(initialFormState);

  // Handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecData((prevRecData) => ({
      ...prevRecData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    addRec(recData);
    setRecData(initialFormState);
  };

  return (
    <form name="create" onSubmit={handleSubmit} style={{ width: "100%" }}>
      <table style={{ width: "100%" }}>
      <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name"></label>
              <br />
              <input
                id="name"
                name="name"
                type="text"
                value={recData.name}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <label htmlFor="cuisine"></label>
              <br />
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                value={recData.cuisine}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <label htmlFor="photo"></label>
              <br />
              <input
                id="photo"
                name="photo"
                type="url"
                value={recData.photo}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <label htmlFor="ingredients"></label>
              <br />
              <textarea
                id="ingredients"
                name="ingredients"
                value={recData.ingredients}
                onChange={handleChange}
                required
                style={{ width: "100%" }}
              />
            </td>
            <td>
              <label htmlFor="preparation"></label>
              <br />
              <textarea
                id="preparation"
                name="preparation"
                value={recData.preparation}
                onChange={handleChange}
                required
                style={{ width: "100%" }}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
