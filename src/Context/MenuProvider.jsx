import { useState, createContext } from "react";

export const menuContext = createContext();

const MenuProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <menuContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </menuContext.Provider>
  );
};
export default MenuProvider;
