import React,{Component} from 'react';
import Auxe from '../../hoc/Auxe'

class BurgerBuilder extends Component{
   render(){
       return (
          <Auxe>
              <div>Burger</div>
              <div>Build Controls</div>
          </Auxe>
       );
   }
}

export default BurgerBuilder;