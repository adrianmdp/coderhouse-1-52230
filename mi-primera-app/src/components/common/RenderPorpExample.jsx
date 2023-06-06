import { useState } from "react";

const RenderPropExample = ({ children }) => {
  const [value, setValue] = useState("Este es el texto de value");

  const handleChangeTitle = (newText) => {
    setValue(newText);
  };

  return children(value, handleChangeTitle);
};

export { RenderPropExample };
