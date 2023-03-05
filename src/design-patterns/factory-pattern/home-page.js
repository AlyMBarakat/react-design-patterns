import { useState } from "react";
import Card from "./card-factory";
import { USER_DATA } from "./mocked-data";

const HomePage = () => {
  const [userData, setUserData] = useState(USER_DATA.items);

  return (
    <>
      {/* Header */}
      {/* Side Panel */}
      {/* Other HomePage Components */}
      {/* ... */}
      {/* CardsDashboard */}
      {userData.map((card) => (
        <Card card={card} />
      ))}
      <button
        onClick={() => {
          console.log("Button Clicked ----->");
          setUserData((userData) => {
            return [...userData, ...USER_DATA.items];
          });
        }}
      >
        Fetch new Users
      </button>
    </>
  );
};

export default HomePage;
