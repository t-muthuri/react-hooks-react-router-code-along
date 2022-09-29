import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./Components/App"

// import React from "react";
// import ReactDOM from "react-dom";
// Step 1. Import react-router functions
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
//BrowserRouter component is the base for our application's routing
//Route component handles the conditional rendering
//Switch gives more predictable behaviour to our roots but in v6 ROutes replaces it

//add styling for nav links
// const linkStyles = {
//   display: "inline-block",
//   width: "50px",
//   padding: "12px",
//   margin: "0 6px 6px",
//   background: "blue",
//   textDecoration: "none",
//   color: "white",
// };

//define the navbar component
// function NavBar() {
//   return (
//     <div>
//       <NavLink
//         to="/"
//         /* set exact so it knows to only set activeStyle when route is deeply equal to link */
//         //exact
//         /* add styling to Navlink */
//         style={linkStyles}
//         //Add prop for activeStyle
//         activeStyle={{ background: "darkblue" }}
//       >
//         Home
//       </NavLink>
//       <NavLink
//       to = "/about"
//       style={linkStyles}
//       activeStyle={{background:"darkblue"}}>
//         About
//       </NavLink>
//       <NavLink
//       to = "/login"
//       style={linkStyles}
//       activeStyle={{background:"darkblue"}}>
//         Login
//       </NavLink>
//       <NavLink
//       to = "/signup"
//       style={linkStyles}
//       activeStyle={{background:"darkblue"}}>
//         Signup
//       </NavLink>
//       <NavLink
//       to = "/messages"
//       style={linkStyles}
//       activeStyle={{background:"darkblue"}}>
//         Messages
//       </NavLink>
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h1>This is my about component!</h1>
//     </div>
//   );
// }

// function Login() {
//   return (
//     <div>
//       <h1>Login</h1>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password" />
//         </div>
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// }

//more practice
// function Signup() {
//   return (
//     <div>
//       <h1>Signup</h1>
//       <form>
//         <div>
//           <input type="text" name="new username" placeholder="New username" />
//         </div>
//         <div>
//           <input type="text" name="email address" placeholder="Email address" />
//         </div>
//         <div>
//           <input type="password" name="new password" placeholder="New password" />
//         </div>
//         <div>
//           <input type="password" name="confirm password" placeholder="Confirm password" />
//         </div>
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// }

// function Messages(){
//   return(
//     <div>
//       <h1>Messages</h1>
//       <form>
//       <div>
//         <input type="text" name="send to" placeholder="Send to"/>
//         </div>
//         <div>
//         <input type="text" name="text" placeholder="Text"/>
//         </div>
//         <div>
//         <input type="submit" value="Send"/>
//         </div>
//       </form>
//     </div>
//   )
// }
//

// Step 2. Change so router is coordinating what is displayed
ReactDOM.render(
  <BrowserRouter>
  <App/>
  {/* <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/messages" element={<Messages />} />
    </Routes> */}
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
