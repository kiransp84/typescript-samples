import React from "react";
import ReactDOM , {Root} from 'react-dom/client';
import './index.css';

import Game from "./Game";

const containerElem = document.getElementById("container") as HTMLElement;
const root : Root = ReactDOM.createRoot(  containerElem );
root.render(<Game></Game>);
  