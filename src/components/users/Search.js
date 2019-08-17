import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ clearUsers, showClear, searchUsers, setAlert }) => {
  // "useState" take the initial value of our variable and returns an array of the objects:
  // 1. the variable   containing the state
  // 2. the function used to Set the State, that takes the new value of our variable as a parameter
  // const [Value, setValue] = useState(initialState)
  const [text, setText] = useState("");

  // Typing in the search bar
  const onChange = e => setText(e.target.value);

  // Submiting the search
  const onSubmit = e => {
    e.preventDefault();
    if (text !== "") {
      searchUsers(text);
      setText("");
    } else {
      setAlert(" Please enter something.", "danger");
    }
  };

  // Rendering
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          className="form-control"
          placeholder="search for a user..."
          value={text}
          onChange={onChange}
        />
        <button type="submit" className="btn btn-block btn-dark my-3 ">
          Search
        </button>
      </form>
      {showClear && (
        <button className=" btn btn-block btn-info my-3 " onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

// Type validation
Search.propType = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired
};

export default Search;
