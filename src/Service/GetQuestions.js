import axios from 'axios'
import cookie from 'react-cookies'

class GetQuestions {
    

    
    getListofQuestions(testDetails) {
        
        
        cookie.save('csrftoken', 'csrfToken');

        return axios.post('http://127.0.0.1:8000/fetchQuestions', testDetails, {mode:'cors'}, {                                                                                                                                                                                                                                        
        headers: {  
                    'X-CSRFToken' :   'csrfToken' ,
                       
    }
    }
       
        )
    }
}

export default new GetQuestions()