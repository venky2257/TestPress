import React, {Component} from 'react';

class QuestionsComponent extends Component {
    constructor(props) {
        super(props)
        this.function1 = this.function1.bind(this)    
    }



    function1() {
        console.log("hi")
    }
    
    render() {
        return(
            <h1>{this.props.question}</h1>
            
        )
    }
}







export default QuestionsComponent;