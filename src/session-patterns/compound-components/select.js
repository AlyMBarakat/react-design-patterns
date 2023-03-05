const { useState } = require("react");

const optionStyle = {
  borderRadius: "5px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100px",
  height: "100px",
};

const Option = ({ children, onClick, active }) => {
  return (
    <div
      style={{
        ...optionStyle,
        backgroundColor: active ? "#61dafb" : undefined,
      }}
      onClick={onClick}
    >
      <p>{children}</p>
    </div>
  );
};

const Select = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return options.map(({ key, value }) => (
    <Option
      active={selectedOption === key}
      onClick={() => setSelectedOption(key)}
    >
      {value}
    </Option>
  ));
};

export const DemoCompoundSelect = () => {
  return (
    <Select
      options={[
        { key: "OLIVER", value: "Oliver" },
        { key: "EVE", value: "Eve" },
      ]}
    />
  );
};
