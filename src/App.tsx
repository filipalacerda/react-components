/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ToggleButton from "./components/toggleButton";

const Styles = {
  block: css({
    padding: "20px",
  }),
};

function App() {
  return (
    <div className="App">
      <div css={Styles.block}>
        <h5>Toggle Button</h5>
        <ToggleButton />
      </div>
    </div>
  );
}

export default App;
