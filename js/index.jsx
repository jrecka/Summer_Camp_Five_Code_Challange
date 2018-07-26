
import React from 'react';
import ReactDOM from 'react-dom';
import FizzBuzz from '../js/singleExample/FizzBuzz.jsx';
import MyTry from '../js/singleExample/MyTry.jsx'

class App extends React.Component{
    render(){
        return(
            <div>
            <MyTry/>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );  
});

