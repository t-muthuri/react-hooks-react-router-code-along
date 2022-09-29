import React from "react";
import ReactDOM from "react-dom";
// Step 1. Import react-router functions
import { BrowserRouter, Routes, Route } from "react-router-dom";
//BrowserRouter component is the base for our application's routing
//Route component handles the conditional rendering

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

// Step 2. Change so router is coordinating what is displayed
ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// function Home() {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// }

// function App() {
//   return <Home />;
// }

// ReactDOM.render(<App />, document.getElementById("root"));
