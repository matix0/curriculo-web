import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './pages/Main';
import Sobre from './pages/sobre/Sobre';
import Formacao from './pages/formacao/Formacao';
import Experiencia from './pages/experiencia/Experiencia';
import Conhecimentos from './pages/conhecimentos/Conhecimentos';
import Contato from './pages/contato/Contato';


const Routes = () => { 
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Main} />
                <Route path='/Sobre' exact component={Sobre} />
                <Route path='/Formacao' exact component={Formacao} />
                <Route path='/Experiencia' exact component={Experiencia} />
                <Route path='/Conhecimentos' exact component={Conhecimentos} />
                <Route path='/Contato' exact component={Contato} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;