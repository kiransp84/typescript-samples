//
  
import React , {useState} from "react";
  
import {SquareProps} from './types';

export default ({cell,onClick} : SquareProps  ) =>  {
      const [isDisabled,setIsDisabled]  = useState(false);
      return (
        <button data-cell={cell} className="square" onClick={ () => { setIsDisabled(true) ; onClick(cell) }} >
          {cell}
        </button>
      );
}