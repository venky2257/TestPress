import React, {Component} from "react"
import GetQuestions from "../Service/GetQuestions"
import {BrowserRouter as Router, useHistory} from 'react-router-dom'
import { Spinner } from 'react-bootstrap';
class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            testId : "test_01",
            loading : false
    
        }
       this.ButtonClicked = this.ButtonClicked.bind(this)

    }

    

    ButtonClicked=(e) => { 
        e.preventDefault();
        console.log(this.state)
        GetQuestions.getListofQuestions(this.state)
        .then(response => {
            this.setState({loading : true},() =>  console.log(response))
            {
            console.log(response) 
            
            this.props.history.push({

                pathname : `/test`,
               
                state : { questions: response.data }
            })
        }})  
    
    }

    render() {
        return(
            <div className = "welcome">
                <div>
                <button  type = "submit" onClick = {this.ButtonClicked} >Start</button>
            </div>

            {this.state.loading && <Spinner animation="border" role="status">
        </Spinner>}
        </div>
        )
    }
}
export default WelcomeComponent