import React, {Component, useRef, useImperativeHandle} from 'react'
import '../CSS/Test.css'
import '../../src/bootstrap.css'
import Questions from './Questions'
import Answers from './Answers'
import QuestionsComponent from './QuestionsComponent'
import AnswersComponent from './AnswersComponent'

class Test extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            questions  : [],
            j  : 0,
            ans : [],
            ques : [],
            score : 0,
            correct : '', 
            score : 0,
            testEnded : false
          
           
        
         

        }
   

        this.iteratingQUestions = this.iteratingQUestions.bind(this)
        this.buttonClickedforward = this.buttonClickedforward.bind(this)
        this.buttonClickedprevious = this.buttonClickedprevious.bind(this)
        this.checkAnswer = this.checkAnswer.bind(this)
        

      
    }


    checkAnswer=answer => {
    
     
        
        if(answer) {
            this.setState(
                {score : this.state.score + 1},() => console.log(this.state.score)
            )
        }
        this.goToNextQuestion()
        

        
        

    }

   

    

    componentDidMount(){
       
        
            this.setState({
                  questions :this.props.location.state.questions
                
         },() => {
            this.iteratingQUestions()
         
       
         this.iteratingQUestions()
 
      
    })
}


    goToNextQuestion = () => {
        this.setState(
            { j : this.state.j+1 },() => {
           
            this.iteratingQUestions()
           
        }
       
        
        )}

    

   iteratingQUestions() {
       
      
       
        if(this.state.j < this.state.questions.length) {
           this.setState({
            ques : this.state.questions[this.state.j].question,
            ans  : this.state.questions[this.state.j].choices,
            correct : this.state.questions[this.state.j].answers   
           });
        }
        else { 
            this.setState({
                testEnded : true
            })
           console.log("all questions completed ")
            
        }   
            
        
        
   }


   buttonClickedforward() {
       this.goToNextQuestion()
       
    }

   buttonClickedprevious() {
    this.setState({
        j : this.state.j-1
    })
   
    this.iteratingQUestions()
}




    
    render() {
              let {ques, ans} = this.state;
        
    if(!this.state.testEnded) {
              
       return(
           
          
                <div className = "container">
                        Online Quiz
                       
                   <div className = "title_question_gap"> </div> 
                                    {this.state.questions.length>0 &&  (
                                    <div className = "test_question">
                                          <ul>  <Questions
                                                    question={this.state.ques}


                                            /></ul>
                                          </div>
                                    )} 

                                    
                                     {this.state.questions.length>0 &&  ( 
                                         <div className = "buttonsContainer">
                                            <Answers 
                                                answer = {this.state.ans}
                                                correctAnswer = {this.state.correct}
                                                checkAnswer={this.checkAnswer}

                                            />
                                        </div>
                                    )}
                     </div> 
                       
                          
                    
                
                            
       )
    }
    else {
        return(
        <div> <h1>Test Completed </h1>
                <h4> your score is {this.state.score}</h4></div>
        )
    }
    }
}
export default Test