import React from "react";

const Navbar = (props) => {
  console.log("Props", props);
  return (
    <>
      <h1>
        {props.Items.map((item, index) => (
          <div key={item.ID}>
            {item.ID}:{item.Name}
          </div>
        ))}
      </h1>
    </>
  );
};

export default Navbar;
