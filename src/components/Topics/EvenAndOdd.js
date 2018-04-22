import React, {Component} from 'react';

class EvenAndOdd extends Component{
    constructor(){
        super()
        this.state={
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    changeHandler(value){
        this.setState({userInput: value})
    }

    evenOddArrs(userInput){
        let arr = userInput.split(',');
        let evens = [];
        let odds = [];
        for(var i=0;i<userInput.length;i++){
            if(arr[i]%2===0){
                evens.push(arr[i]);
            }
            else{
                odds.push(arr[i]);
            }
        }
    }

    render(){
        return(
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input onChange={(event)=>this.state.userInput(event)} className='inputLine'/>
                <button className='confirmationButton'></button>
                <span className='resultsBox'></span>
                <span className='resultsBox'></span>
            </div>

        )
    }
}

export default EvenAndOdd;