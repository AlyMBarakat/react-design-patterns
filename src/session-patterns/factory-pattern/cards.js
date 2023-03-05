import { A, B, C, D } from "./components";

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
  return (
    <>
      {USER_DATA.items.map((card) => {
        switch (card.type) {
          case "A":
            return <A />;
          case "B":
            return <B />;
          case "C":
            return <C />;
          case "D":
            return <D />;
          default:
            return null;
        }
      })}
    </>
  );
};
