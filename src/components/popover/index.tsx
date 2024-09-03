/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useRef, useEffect, ReactNode } from "react";

type PopoverProps = {
  children: ReactNode;
  content: ReactNode;
  position: "bottom" | "top";
};

const Styles = {
  root: css({
    position: "relative",
    display: "inline-block",
  }),
  button: css({
    height: "25px",
    borderRadius: "3px",
    border: "none",
    backgroundColor: "#b0b0b0",
    cursor: "pointer",
    color: "white",
  }),
  popover: (position: string) => [
    css({
      border: "1px solid #d6d6d6",
      padding: "20px",
      position: "absolute",
      background: "white",
    }),
    position === "bottom" &&
      css({
        marginTop: "10px",
      }),
    position === "top" &&
      css({
        bottom: "0px",
        marginBottom: "35px",
      }),
    position === "left" && css({}),
    position === "right" && css({}),
  ],
};

const Popover = ({ content, children, position }: PopoverProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const popoverRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        !triggerRef.current?.contains(event.target as Node)
      ) {
        setIsVisible(false); // Close the popover if clicked outside
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (popoverRef.current && event.key === "Escape") {
        setIsVisible(false); // Close the popover if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <div css={Styles.root}>
      <button
        ref={triggerRef}
        aria-haspopup="true"
        aria-expanded={isVisible}
        aria-controls="popover-content"
        onClick={() => setIsVisible(!isVisible)}
        css={Styles.button}
      >
        {children}
      </button>
      {isVisible && (
        <div
          role="dialog"
          aria-modal="true"
          ref={popoverRef}
          css={Styles.popover(position)}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
