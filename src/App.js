import React, { useState } from 'react';
import './App.css';
import {Switch, Route,useHistory, NavLink} from "react-router-dom";
import Home from "./Pages/home/Home"
import Blogoverzicht from "./Pages/Blogoverzicht/Blogoverzicht"
import Blog from "./Pages/Blog/Blog.js"
import Inloggen from "./Pages/Inloggen/Inloggen.js"


function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated ] = useState(false);




  return (
      <>
      <div>
        <nav>
            <ul>
                <li>
                    <NavLink exact to ="/" activeClassName="active-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to ="/Blogpost" activeClassName="active-link">  Blogposts</NavLink>
                </li>
                <li>
                    <NavLink to ="/Inloggen" activeClassName="active-link"> Inloggen</NavLink>
                </li>
            </ul>
        </nav>

   <Switch>
       <Route exact path="/">
           <Home/>
       </Route>
       <Route exact path="/Blogoverzicht">
           <Blogoverzicht/>
       </Route>
       <Route exact path="/blog/:id">
           <Blog/>
       </Route>
       <Route exact path="/inloggen">
           <Inloggen/>
       </Route>
   </Switch>

      </div>

     </>
  );
}

export default App;
