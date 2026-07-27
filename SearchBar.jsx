import { useState } from "react";

function SearchBar({
  onSearch,
  category,
  setCategory,
  categories
}) {

  const [text, setText] = useState("");

  return (

    <div className="search-box">

      <input
        type="text"
        placeholder="Search Indian Vegetarian Recipe..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {

          if (e.key === "Enter") {

            onSearch(text);

          }

        }}
      />

      <select
        className="category-select"
        value={category}
        onChange={(e) => {

        setCategory(e.target.value);
        onSearch(text);
}}
      >

        <option value="">All Categories</option>

        {categories.map((item, index) => (

        <option
        key={index}
        value={item}
        >
        {item}
       </option>

))}

      </select>

      <button
        onClick={() => {

          console.log("Button Text:", text);

          onSearch(text);

          setText("");

        }}
      >

        Search

      </button>

    </div>

  );

}

export default SearchBar;