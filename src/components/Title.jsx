import React, { useState } from "react";

export default function Title({ children, name: initialName }) {
  const [name, setName] = useState(initialName);
  const handleClick = (event) => {
    setName("This is the new Title");
  };

  return (
    <>
      <div className="title" onClick={handleClick}>
        <h1>{name}</h1>
      </div>
      <div className="title-message">{children}</div>
    </>
  );
}
