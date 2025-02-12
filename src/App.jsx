import React from "react";
import Navbar from "./Componenets/Navbar";

function App() {
  const array = [
    {
      ID: 1,
      Name: "Ahmed",
    },
    {
      ID: 2,
      Name: "Tayyab",
    },

    {
      ID: 3,
      Name: "Ali",
    },
  ];
  return (
    <div>
      <Navbar Items={array} />
    </div>
  );
}

export default App;
