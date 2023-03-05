import { Factory } from "./components";
import { useState } from "react";

export const USER_DATA = {
  name: "jhon doe",
  items: [
    {
      name: "Adham",
      type: "A",
    },
    {
      name: "Nour",
      type: "B",
    },
    {
      name: "Bassam",
      type: "C",
    },
    {
      name: "Lotfy",
      type: "D",
    },
  ],
};

export const Cards = () => {
  const [, setCounter] = useState(0);
  const [items, setItems] = useState(USER_DATA.items);
  return (
    <>
      {items.map((card) => {
        return <Factory key={card.name} card={card} />;
      })}
      <button
        onClick={() => {
          console.log("Clicked ----->");
          // setCounter((counter) => counter + 1);
          setItems([...items, ...items]);
        }}
      >
        Rerender
      </button>
    </>
  );
};
