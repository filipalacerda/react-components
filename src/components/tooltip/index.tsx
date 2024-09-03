/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, ReactNode } from "react";

type TooltipProps = {
  tooltip: ReactNode;
  direction: string;
  content: ReactNode;
};

const Styles = {
  root: css({
    position: "relative",
    display: "inline-block",
    cursor: "pointer",
  }),
  tooltip: (direction: string) => [
    css({
      position: "absolute",
      borderRadius: "3px",
      left: "50%",
      transform: "translateX(-50%)",
      padding: "6px",
      backgroundColor: "black",
      color: "white",
      fontSize: "14px",
      fontFamily: "sans-serif",
      lineHeight: "1",
      zIndex: "100",
      whiteSpace: "nowrap",

      "::before": {
        content: '" "',
        left: "50%",
        border: "solid transparent",
        height: "0",
        width: "0",
        position: "absolute",
        pointerEvents: "none",
        borderWidth: "6px",
        marginLeft: "calc(6px * -1)",
      },
    }),
    direction === "top" &&
      css({
        top: "calc(30px * -1)",
        "::before": {
          top: "100%",
          borderLeft: "5px solid transparent",
          borderRight: "5px solid transparent",
          borderTop: "5px solid black",
        },
      }),
    direction === "bottom" &&
      css({
        bottom: "calc(30px * -1)",
        "::before": {
          bottom: "100%",
          borderLeft: "5px solid transparent",
          borderRight: "5px solid transparent",

          borderBottom: "5px solid black",
        },
      }),
    direction === "left" &&
      css({
        left: "auto",
        right: "calc(100% + 10px)",
        top: "50%",
        transform: "translateX(0) translateY(-50%)",
        "::before": {
          borderTop: "5px solid transparent",
          borderBottom: "5px solid transparent",
          borderLeft: "5px solid black",
          left: "auto",
          right: "calc(5px * -2)",
          top: "50%",
          transform: "translateX(0) translateY(-50%)",
        },
      }),
    direction === "right" &&
      css({
        left: "calc(100% + 10px)",
        top: "50%",
        transform: "translateX(0) translateY(-50%)",

        "::before": {
          borderTop: "5px solid transparent",
          borderBottom: "5px solid transparent",
          borderRight: "5px solid black",
          left: "calc(5px * -1)",
          top: "50%",
          transform: "translateX(0) translateY(-50%)",
        },
      }),
  ],
};

const Tooltip = ({ tooltip, direction, content }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div
      css={Styles.root}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {content}
      {isVisible && <div css={Styles.tooltip(direction)}>{tooltip}</div>}
    </div>
  );
};

export default Tooltip;
