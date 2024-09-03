/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, MouseEvent } from "react";

type ToggleButtonProps = {
  isDisabled?: boolean;
  onClick?: () => void;
};

const Styles = {
  root: css({
    borderRadius: "15px",
    width: "40px",
    height: "20px",
    cursor: "pointer",
    padding: "10px 20px",
    border: "none",
    position: "relative",
    backgroundColor: "#b0b0b0",
    "::after": {
      content: '""',
      position: "absolute",
      width: "18px",
      height: "18px",
      borderRadius: "50%",
      backgroundColor: "white",
      top: "1px",
      left: "1px",
      transition: "all 0.3s",
    },
  }),
  on: css({
    "::after": {
      backgroundColor: "#ff7993",
      left: "20px",
    },
  }),
};

const ToggleButton = ({ isDisabled, onClick }: ToggleButtonProps) => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const handleOnButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    setIsOn(!isOn);

    onClick && onClick();
  };

  return (
    <button
      css={[Styles.root, isOn && Styles.on]}
      onClick={handleOnButtonClick}
      disabled={isDisabled}
    ></button>
  );
};

export default ToggleButton;
