/**  
 * Header
     -Logo 
     -Nav Item(RIght side)
     -Cart
     -Authentication (Signup/Login)
 * Body
     -Search bar
     -RestrauntList
      -RestraurantCard
         -Image
         -Name
         -Rating
         -Cusines
  * Footer
       -Links
       -Copyright             
 **/
import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./component/Header";
import Body from "./component/Body.jsx";
import Footer from "./component/Footer.jsx";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);



//why not use index as key
// why to use key
//why react is faster
//what is reconsillation
//what is virtual DOM- representation of actual DOM
//what is react fiber
//config driven UI
//map in js
//react fiber