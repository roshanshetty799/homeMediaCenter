import React from 'react';
import CardList from './CardList';
import {robots} from './robot';
import SearchBox from './SearchBox';
import 'animate.css';


const App = () => {
    return (
        <div className='tc'>
            <h1 className='animated shake'> Roshan & Nancy's Media Center </h1>
            <SearchBox/>
            
            <CardList robots={robots}/>
        </div>
    );
}

export default App;
