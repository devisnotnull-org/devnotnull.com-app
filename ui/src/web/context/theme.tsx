import React, { useState, FC } from "react";

import { getAllCSSVariables } from '../theme'

import { isServerRender } from "../../utils";

export const GlobalContext = React.createContext<{currentTheme?: string | null, themeSwitchHandler: (themeType: string) => void }>({
  currentTheme: "blank",
  themeSwitchHandler: (themeType: string) => {},
});

export const GlobalContextProvider: FC = ({ children }) => {
  if(isServerRender) return (<>{children}</>)
  const [currentTheme, setCurrentTheme] = useState(
    window.localStorage.getItem("theme") == null
      ? "light"
      : window.localStorage.getItem("theme")
  );

  const themeSwitchHandler = (themeType: string) => {
    console.log("_______________________")
    console.log("_______________________")
    console.log("_______________________")
    console.log("_______________________")
    console.log(getAllCSSVariables())
    setCurrentTheme(themeType);
  };


  return (
    <GlobalContext.Provider
      value={{
        currentTheme: currentTheme,
        themeSwitchHandler: themeSwitchHandler,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};