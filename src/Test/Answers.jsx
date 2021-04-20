import { waitFor } from '@testing-library/dom';
import React, {useState, useRef, useImperativeHandle, useEffect} from 'react';
import '../CSS/Test.css'



  



 const Answer=  (props, ref) => {
   
    const [button1, sebutton1] = useState(true);
    const [button2, sebutton2] = useState(true);
    const [button3, sebutton3] = useState(true);
    const [button4, sebutton4] = useState(true);
    const [answersCount, setanswersCount ] = useState(1);
    const [selectedAnswers, setSelectedAnswers ]= useState([]);
    const[ answersRelieved, setAnswersRelieved] = useState(false);
    const [questionResult, setQuestionResult] = useState( false);
    const [loadingMessage, setLoadingMessage] = useState( false);
    const [displayMessage, setDisplayMessage] = useState(false)
    let button1Class, button2Class, button3Class, button4Class;
    
    
    function clearState () {
       
        sebutton1(true)
        sebutton2(true)
        sebutton3(true)
        sebutton4(true)
        setanswersCount(1)
        setAnswersRelieved(false)
        setQuestionResult(false)
        setSelectedAnswers([])

      };
    



   function buttonClicksCountReached() {
        if(answersCount >= numOfCorrectAnswers  ) {
           
            checkingAnswersAreSame()
            
           

            
        }
    }

  


   function  checkingAnswersAreSame() {
       
   
   
    setQuestionResult(selectedAnswers.every((element, index) => props.correctAnswer[index] === element));
    setAnswersRelieved(true)
    setLoadingMessage(true)
    setTimeout(function() {
        clearState() 
        props.checkAnswer(selectedAnswers.every((element, index) => props.correctAnswer[index] === element));
        setLoadingMessage(false)
    }, 3000);
       
}

   
    function IncrementingCount() {
        setanswersCount(answersCount+1)
        
        buttonClicksCountReached()
    }


    function InsertingElementIntoArray(ans) {
        selectedAnswers.push(ans)
        
    }

   function button1ChangeColor (ans) {
    sebutton1(false)
  
    InsertingElementIntoArray(ans)
    IncrementingCount()
   

    }

    function button2ChangeColor(ans) {
        sebutton2(false)
        selectedAnswers.push(ans)
        IncrementingCount()
    }

    function button3ChangeColor(ans) {
        sebutton3(false)
        selectedAnswers.push(ans)
        IncrementingCount()
    }

    function button4ChangeColor(ans) {
        sebutton4(false)
        selectedAnswers.push(ans)
        IncrementingCount()
    }

   
    

    if(!answersRelieved) {
        button1Class = button1  ? "blueButton" : "greenButton" 
        button2Class = button2  ? "blueButton" : "greenButton" 
        button3Class = button3  ? "blueButton" : "greenButton" 
        button4Class = button4  ? "blueButton" : "greenButton" 

    }
    
    else{
          button1Class = props.correctAnswer.includes(props.answer[0]) ? "correct" : "incorrect"
          button2Class = props.correctAnswer.includes(props.answer[1]) ? "correct" : "incorrect"
          button3Class = props.correctAnswer.includes(props.answer[2]) ? "correct" : "incorrect"
          button4Class = props.correctAnswer.includes(props.answer[3]) ? "correct" : "incorrect"
    
    }
    
    let numOfCorrectAnswers = props.correctAnswer.length
    
  
  

    


    

    // let ans = props.answer.map(each => 
    //         <li class="btn btn-outline-danger mr-3 "   onClick={() => props.checkAnswer(each)} >
    //             {each}
    //         </li> 
    //     )

    return( 
   

        
       <ul  disabled={answersRelieved ? true : false} className = "Answer" > 

            <div className = "buttons">

                 <div class="action_btn"> 
                    
                         <button className = {button1Class}  onClick = {() => button1ChangeColor(props.answer[0])}  >{props.answer[0]}</button>
                         <button className = {button2Class} onClick = {() =>button2ChangeColor(props.answer[1])}>{props.answer[1]}</button>
                         <button className = {button3Class} onClick = {() =>button3ChangeColor(props.answer[2])}>{props.answer[2]}</button>
                         <button className = {button4Class} onClick = {() =>button4ChangeColor(props.answer[3])}>{props.answer[3]}</button>
                </div>
                        
                <div>
                    {answersRelieved && questionResult ? <h1>Correct Answer </h1>: ''} 
                    {answersRelieved && !questionResult ? <h1>Wrong answer</h1> : ''} 
                            
                </div>

               
            </div>
               
           
           
            <div> 
                {loadingMessage ? <div> <h4>Loading next QUestion...</h4> </div>: ''}
            </div>


          
                              
        </ul>
  
        
 

     ) 
    
    
    }


     export default Answer;
