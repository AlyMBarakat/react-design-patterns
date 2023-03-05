import logo from "./logo.svg";
import "./App.css";
import { Cards } from "./session-patterns/factory-pattern/cards";
import { FeaturedMovies } from "./session-patterns/container-presentation-pattern/featured-movies";
import { TodoListWithHOC } from "./session-patterns/hoc-render-props/hoc";
import { DemoCompoundSelect } from "./session-patterns/compound-components/select";

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
        <div style={containerStyle}>
          {/***  HOC pattern ***/}
          {/*<TodoListWithHOC />*/}

          {/*** Factory pattern ***/}
          {/*<Cards />*/}

          {/*** Container and Presentational pattern ***/}
          {/*<FeaturedMovies />*/}

          {/* Compound and context pattern */}
          <DemoCompoundSelect />
        </div>
      </header>
    </div>
  );
}

export default App;
