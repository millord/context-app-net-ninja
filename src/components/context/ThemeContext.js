import React, { createContext, Component } from "react";

export const ThemContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightThem: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
  };
  render() {
    return (
      <ThemContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemContext.Provider>
    );
  }
}

export default ThemeContextProvider;
