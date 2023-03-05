import { useState, createContext, useContext } from "react";

const optionStyle = {
  borderRadius: "5px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100px",
  height: "100px",
};

const SelectContext = createContext(undefined);

// Consumer Component
const Option = ({ id, children }) => {
  const { selectedOption, setSelectedOption } = useContext(SelectContext);

  // Ensure usage inside the Select Context only
  if (!selectedOption || !setSelectedOption) {
    throw new Error("Option should be used inside the scope of Select");
  }

  return (
    <div
      style={{
        ...optionStyle,
        backgroundColor: id === selectedOption ? "#61dafb" : undefined,
      }}
      onClick={() => setSelectedOption(id)}
    >
      <p>{children}</p>
    </div>
  );
};

// Provider Component
const Select = ({ children, defaultSelectedId = "N/A" }) => {
  const [selectedOption, setSelectedOption] = useState(defaultSelectedId);

  return (
    <SelectContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </SelectContext.Provider>
  );
};

// Bind Option to Select
Select.Option = Option;

export default Select;
