import React, {Component} from 'react';
import { Children } from 'react';


export default class Button extends Component{
    
            render(
                Button,
                type,
                onClick,
                buttonStyle,
                buttonSize
                ){
            return (
              <Button onClick={onClick} type={type}>
                  {Children}
              </Button>  
            )
        }

}

