// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// importing react router:
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// we can call BrowserRouter as Router. We also imported Switch, Route and Link from react-router-dom which we installed.

// In react, there are two types of components: function based and classNameName based component. Right now, function based component is more popular.

// Whatever the code written in return function is called JSX. We can use the javascript inside the jsx in {} braces.
// JSX is 90% html
// Whatever we put in return statement, we saw that on our website.
// In react , you can return only one JSX.
// If we want to return more than one component , then we have to use jSX fragment <>..</>.

// function App() {
//   return (
//     <>
//     <h1>This is mE</h1>
//     <div classNameNameName="App">
//       <header classNameNameName="App-header">
//         <img src={logo} classNameNameName="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and learn it with me.
//         </p>
//         <a
//           classNameNameName="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React with sankalp
//         </a>
//       </header>
//     </div>
//     </>
//   );
// }

// See about  JSX in documentation.

// All the code written under return is compiled using babel.see in documentation.
function App() {
  return (
    <>
    
      {/* props works as a asn argument in function. we pass the props in the component. */}


      <Router>
        <Navbar title="TextUtils" abouttext="About us" TextForm="Enter the text"/>
      <Routes>
        {/* <Route
          path="/"
          element={<Navbar title="TextUtils" abouttext="About us" />}
        /> */}
        {/* Here we are passing the title to Navbar component. And similarly if we need this navbar component in any other website , we can write this component with som other titles also. 
      In this it not necesarry that you can pass only string , you can pass anything, it can be a link, object or anything else you want. */}

        {/* <Route path="/Navbar" element={<Navbar />}/> */}

        {/* In this default values of props get passed. */}
        {/* <Alert alert="This is a alert!" /> */}
        <Route path="/Alert" element={<Alert/>} />
        
        {/* <div className="container my-3"> */}
          <Route exact path="/about" element={<About/>} />
          {/* inside route, these are the component which we have to showing. */}
          {/* We can write 'exact' bcoz it may be possible that there can be path which may have similar path. For example, component1 have /user nad componnet2 have /user/about, So in this case if you do not use exact in component2, then ract will componnet1 in both cases. */}

          <Route path="/textform" element={<TextForm/>} />
        {/* </div> */}
        {/* container is bootstap class which have some properties. */}
        {/* <About /> */}
      </Routes>
      </Router>
    </>
  );
}
// when we give our react app to someone, we do not give the node modules folder, to whomever I given they should download the node modules folder ising command: npm i or npm install . It should be in the same folder in which the others are present.

export default App;
/* there are two concept of javascript that is named export and defualt export. this is in video 6.
See about it later on.*/

/*
  React Router: 
      Suppose, when you got to YouTube, you have differenet section on left side, and when you click on different sections, you will see content of the same type like when you click on music section, you will see musics and so on. One thing you can notice that you will not finf the page reloading on chainging the section and other thing is that is the above navbar and left side bar is not changing. only the content is changing. So every time instead of bringing entire page , we set our content only. 

*/
// Inside Route tag, we have given the path means we have to type that to see that componennt.
// If we do not want to do that, we can use link -to  instead of <a href=""> in those component.

/*
Now we want that if someone has click on about then he can see only about section, similarly for textform and alert also, for this purpose we use react Router.


*/
