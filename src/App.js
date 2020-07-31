import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import { rowData } from "./helper";

function App() {
  return (
    <div className="App__container">
      <Nav />
      <Banner />
      <div className="Row__wrapper">
        {Object.entries(rowData).map(([title, url]) => {
          return (
            <Row
             key={title}
              title={title}
              fetchUrl={requests[url]}
              // isVertical={true}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
