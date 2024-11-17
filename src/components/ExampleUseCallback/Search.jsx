import { memo } from "react";

/* eslint-disable react/prop-types */
const Search = (props) => {
  const { onChange } = props;
  console.log("Search rendreed");

  return (
    <input
      type="text"
      placeholder="Search users..."
      onChange={(e) => onChange(e.target.value)}
    ></input>
  );
};

export default memo(Search);
