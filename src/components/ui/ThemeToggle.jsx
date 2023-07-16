import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../store/reducers/theme-slice";

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <button style={{ padding: "0 5px" }} onClick={handleToggle}>
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};
