import React from "react";
import {Switch ,Route} from "react-router-dom";
import About from "./about";

const Main = () => (
    <Switch>
        <Route path="/" component = {About} />
        {/* <Route path= "/about">About</Route>
        <Route path = "/service">Service</Route>
             */}


        </Route>
    </Switch>
)


export default Main;