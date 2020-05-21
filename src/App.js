import React from 'react';
import { PoemIndex } from './PoemIndex/PoemIndex';
import { PoemShow } from './PoemShow/PoemShow';
import { PoemNew } from './PoemNew/PoemNew';
import { PoemEdit } from './PoemEdit/PoemEdit';
import { BrowserRouter, Route} from 'react-router-dom'


const App = function(){

  return(
    <BrowserRouter>
      <Route exact path='/index' component={PoemIndex}/>
      <Route exact path='/show/:id' component={PoemShow}/> 
      <Route exact path='/new' component={PoemNew}/>
      <Route exact path='/edit/:id' component={PoemEdit}/>
    </BrowserRouter>
  )

}

export default App;
