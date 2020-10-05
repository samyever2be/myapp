import React, {Component} from 'react';
import './App.css';
import ClickCounterTwo from './ClickCounterTwo'
import HoverCounterTwo from './HoverCounterTwo';

class App extends Component{
    render(){
        return(
            <div className="App">
                <HoverCounterTwo/> 
                <ClickCounterTwo/>
            </div>
        )
    }
}

export default App;
