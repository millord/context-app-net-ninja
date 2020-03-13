import React from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./components/context/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <Navbar />
        <BookList />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
