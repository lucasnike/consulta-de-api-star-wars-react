import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Detail from './pages/Detail'

import './App.css'

const App = () => {
    return (
        <BrowserRouter>

            <ul className='menu'>
                <li> <Link to='/'>Home</Link> </li>
                <li> <Link to='/detail'>Detail</Link> </li>
            </ul>

            <Switch>
                {/* Caso eu coloque o path pra home sendo '/' e o do detail sendo '/detail' o react vai cair sempre no home pois os dois tem a '/' nos seus paths então existe duas soluções para esse problema que são colocar o Route da Home pra ultima posição ou passa o atributo exact na minha Route da Home */}
                <Route path='/' exact>
                    <Home/>
                </Route>
                
                <Route path='/detail/:id'>
                    <Detail/>
                </Route> 

            </Switch>
        </BrowserRouter>            
    )
}

export default App;