import React, { Component } from "react"
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AnswersComponent from "./AnswersComponent"
import Test from "./Test"
import WelcomeComponent from "./WelcomeComponent"

class Application extends Component {
    render() {
        
        return(
            <div className = "Application">
                <Router>
                    <> 
                        <Switch>
                                
                        <Route path = "/" exact component = {WelcomeComponent}></Route>
                        <Route path = "welcome" component = {WelcomeComponent}></Route>
                        <Route path = "/test" component = {Test}></Route>
                        <Route path = "/django" component = {AnswersComponent}></Route>
                       
                        </Switch>
                    </>
                </Router>
            </div>
        
        )}

 }

 export default Application