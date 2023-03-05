import logo from "./logo.svg";
import "./App.css";
import TodoListWithHOC from "./design-patterns/hoc-render-props/hoc";
import HomePage from "./design-patterns/factory-pattern/home-page";
import Select from "./design-patterns/compound-components/select";
import { FeaturedMovies } from "./design-patterns/container-presentation-pattern/featured-movies";

export const LIGHT = "#475569";
export const DARK = "#282c34";

const containerStyle = {
  width: "80vw",
  height: "50vw",
  backgroundColor: LIGHT,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Uncomment Patterns in App.js to render their usage
        <div style={containerStyle}>
          {/***  HOC pattern ***/}
          <TodoListWithHOC />

          {/*** Factory pattern with caching ***/}
          {/*<HomePage />*/}

          {/* Compound and context pattern */}
          {/*<Select>*/}
          {/*  <Select.Option id="OLIVER">Oliver</Select.Option>*/}
          {/*  <Select.Option id="EVE">Eve</Select.Option>*/}
          {/*</Select>*/}

          {/*** Container and Presentational pattern ***/}
          {/*<FeaturedMovies />*/}
        </div>
      </header>
    </div>
  );
}

export default App;
