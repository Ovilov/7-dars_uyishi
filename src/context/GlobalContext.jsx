import { createContext, useState } from "react";

export const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [color, setColor] = useState("red");
  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <GlobalContext.Provider value={{ color, changeColor }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
