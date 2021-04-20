import React, {Component} from 'react'
import '../CSS/Test.css'
import GetQuestions from '../Service/GetQuestions'
import axios from 'axios';





class AnswersComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            testId : "test_01",
            
    
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
        
       
    }})  

}

render() {
    return(
        <div className = "welcome"> 
           
            <button  type = "submit" onClick = {this.ButtonClicked} >Start</button>
        </div>

        
    )
}

        
}

export default AnswersComponent