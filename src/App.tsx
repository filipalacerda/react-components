/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ToggleButton from "./components/toggleButton";
import Popover from "./components/popover";
import Tooltip from "./components/tooltip";

const Styles = {
  block: css({
    padding: "20px",
  }),
  innerBlock: css({
    display: "flex",
    gap: "10px",
  }),
};

function App() {
  return (
    <div className="App">
      <div css={Styles.block}>
        <h5>Toggle Button</h5>
        <ToggleButton />
      </div>
      <div css={Styles.block}>
        <h5>Popover</h5>
        <div css={Styles.innerBlock}>
          <Popover
            content="I'm a popover"
            children="Click me bottom!"
            position="bottom"
          />

          <Popover
            content="I'm a popover"
            children="Click me top!"
            position="top"
          />
        </div>
      </div>
      <div css={Styles.block}>
        <h5>Tooltip</h5>
        <div css={Styles.innerBlock}>
          <Tooltip
            direction="top"
            content="Top tooltip"
            tooltip="I'm a tooltip!"
          />

          <Tooltip
            direction="bottom"
            content="Bottom tooltip"
            tooltip="I'm a tooltip!"
          />

          <Tooltip
            direction="right"
            content="Right tooltip"
            tooltip="I'm a tooltip!"
          />

          <Tooltip
            direction="left"
            content="Left tooltip"
            tooltip="I'm a tooltip!"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
